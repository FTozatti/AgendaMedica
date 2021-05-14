package main

import (
	"agendamedica/conexao"
	"strconv"
	"encoding/json"
    "fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	Id       int    `json:"id"`
	Nome     string `json:"nome"`
	Cidade   string `json:"cidade"`
	Datanasc string `json:"datanasc"`
	Email    string `json:"email"`
	Senha    string `json:"senha"`
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

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"data": "Hello world"})
	})

	r.GET("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

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
		registros, err := db.Query("SELECT nome, cidade, datanasc, email, senha FROM usuario")
		if err != nil {
			c.JSON(400, gin.H{"message": "Erro"})
			return
		}
		defer registros.Close()
		var usuario []User
		for registros.Next() {
			var u User
			err := registros.Scan(&u.Nome, &u.Cidade, &u.Datanasc, &u.Email, &u.Senha)
			if err != nil {
				c.JSON(http.StatusInternalServerError, err.Error())
				return
			}
			usuario = append(usuario, u)
		}

		c.JSON(200, gin.H{"data": usuario})
	})

	r.GET("/teste", func(c *gin.Context) {
		f := conexao.Connect()
		if f != nil {
			c.JSON(200, gin.H{"message": "Conectado com sucesso"})
			return
		} else {
			c.JSON(400, gin.H{"message": "Conectado com falha"})
			return
		}

	})

	r.Run(":3001")

}
