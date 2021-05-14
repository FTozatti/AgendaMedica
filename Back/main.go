package main

import (
	"agendamedica/conexao"
	"strconv"
	"encoding/json"
    "fmt"
	"github.com/gin-gonic/gin"
)

type Movie struct {
	ID           int    `json:"id"`
	Title        string `json:"title"`
	Genre        string `json:"genre"`
	ReleasedDate int    `json:"year"`
}

type Usuario struct {
    Codigo      int    `json:"codigo"`
	Nome        string `json:"nome"`
	Datanasc    string `json:"datanasc"`
	Cpf 		string `json:"cpf"`
	Telefone    string `json:"telefone"`
	Email       string `json:"email"`
	Endereco    string `json:"endereco"`
	Bairro 		string `json:"bairro"`
	Cidade      string `json:"cidade"`
	Cep         string `json:"cep"`
	Senha       string `json:"senha"`
}

func main() {
	r := gin.Default()

	var movies []Movie
	lastID := 1

	r.GET("/movies", func(c *gin.Context) {
		c.JSON(200, movies)
	})

	r.GET("/teste", func(c *gin.Context) {
		f := conexao.Connect()
		if f != nil {
			c.JSON(400, gin.H{"message": "Conectado com sucesso"})
			return
		} else {
			c.JSON(400, gin.H{"message": "Conectado com falha"})
			return
		}

	})

	r.POST("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()
		var usuario Usuario
		stmt, err := db.Prepare(`INSERT INTO usuario
					 (codigo, nome, datanasc, cpf, telefone, email, endereco, bairro, cidade, cep, senha)
					 Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}
		defer stmt.Close()

		jsonData := []byte(`
		{
			"codigo" : 999, 
			"nome" : "joao", 
			"datanasc" : "1999/02/01", 
			"cpf" : "111.222.555-22", 
			"telefone" : "1396969696", 
			"email" : "j@j.com", 
			"endereco": "Rua dos Alfeneiros", 
			"bairro": "Centro", 
			"cidade": "Londres", 
			"cep": "12502-302", 
			"senha": "********"
		}`)
		
		u := json.Unmarshal(jsonData, &usuario)

		if u != nil {
			fmt.Println(u)
		}

		_, err = stmt.Exec(usuario.Codigo, usuario.Nome, usuario.Datanasc , usuario.Cpf , usuario.Telefone, usuario.Email, usuario.Endereco, usuario.Bairro, usuario.Cidade, usuario.Cep, usuario.Senha)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.GET("/movies/:id", func(c *gin.Context) {
		idStr := c.Param("id")
		idInt, err := strconv.Atoi(idStr)
		if err != nil {
			c.JSON(400, gin.H{"message": "O id enviado é inválido: " + idStr})
			return
		}

		for _, movie := range movies {
			if movie.ID == idInt {
				c.JSON(200, movie)
				return
			}
		}

		c.JSON(204, nil)
	})

	r.POST("/movies", func(c *gin.Context) {
		var m Movie

		err := c.ShouldBind(&m)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		m.ID = lastID
		lastID++
		movies = append(movies, m)

		c.JSON(201, gin.H{"message": "Filme criado com sucesso"})
	})

	r.PUT("/movies/:id", func(c *gin.Context) {
		var m Movie
		err := c.ShouldBind(&m)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		idStr := c.Param("id")
		idInt, err := strconv.Atoi(idStr)
		if err != nil {
			c.JSON(400, gin.H{"message": "O id enviado é inválido: " + idStr})
			return
		}

		m.ID = idInt
		for i := range movies {
			if movies[i].ID == idInt {
				movies[i] = m
				c.JSON(200, gin.H{"message": "Alteração realizada com sucesso"})
				return
			}
		}

		c.JSON(200, gin.H{"message": "Não encontrei o filme para alterar com id: " + idStr})
	})

	r.DELETE("/movies/:id", func(c *gin.Context) {
		idStr := c.Param("id")
		idInt, err := strconv.Atoi(idStr)
		if err != nil {
			c.JSON(400, gin.H{"message": "O id enviado é inválido: " + idStr})
			return
		}

		for i := range movies {
			if movies[i].ID == idInt {
				movies = append(movies[:i], movies[i+1:]...)
				c.JSON(200, gin.H{"message": "Remoção realizada com sucesso"})
				return
			}
		}

		c.JSON(200, gin.H{"message": "Não encontrei o filme para remover com id: " + idStr})
	})

	r.Run(":3001")

}
