package main

import (
	"agendamedica/conexao"

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
	Codigo   int    `json:"codigo"`
	Nome     string `json:"nome"`
	Datanasc string `json:"datanasc"`
	Cpf      string `json:"cpf"`
	Telefone string `json:"telefone"`
	Email    string `json:"email"`
	Endereco string `json:"endereco"`
	Bairro   string `json:"bairro"`
	Cidade   string `json:"cidade"`
	Cep      string `json:"cep"`
	Senha    string `json:"senha"`
}

type Consulta struct {
	Usercode int    `json:"usercode"`
	Medcode  int    `json:"medcode"`
	Datacons string `json:"datacons"`
}

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"data": "Hello world"})
	})

	r.GET("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()
	})

	// r.GET("/movies/:id", func(c *gin.Context) {
	// 	db := conexao.Connect()
	// 	idStr := c.Param("id")
	// 	idInt, err := strconv.Atoi(idStr)
	// 	registros, err := db.Query("SELECT nome, cidade, datanasc, email, senha FROM usuario")
	// 	if err != nil {
	// 		c.JSON(400, gin.H{"message": "Erro"})
	// 		return
	// 	}
	// 	defer registros.Close()
	// 	var usuario []User
	// 	for registros.Next() {
	// 		var u User
	// 		err := registros.Scan(&u.Nome, &u.Cidade, &u.Datanasc, &u.Email, &u.Senha)
	// 		if err != nil {
	// 			c.JSON(http.StatusInternalServerError, err.Error())
	// 			return
	// 		}
	// 		usuario = append(usuario, u)
	// 	}

	// 	c.JSON(200, gin.H{"data": usuario})
	// })

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

	var usuarios []Usuario
	lastID := 1
	r.POST("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()

		var u Usuario

		err := c.ShouldBind(&u)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		stmt, err := db.Prepare(`INSERT INTO usuario
					 (codigo, nome, datanasc, cpf, telefone, email, endereco, bairro, cidade, cep, senha)
					 Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}
		defer stmt.Close()

		u.Codigo = lastID
		lastID++

		usuarios = append(usuarios, u)

		_, err = stmt.Exec(u.Codigo, u.Nome, u.Datanasc, u.Cpf, u.Telefone, u.Email, u.Endereco, u.Bairro, u.Cidade, u.Cep, u.Senha)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.POST("/consulta", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

		registros, err := db.Query("SELECT usercode, medcode, datacons FROM consulta where datacons = ? and medcode = ?", c.Param("datacons"), c.Param("medcode"))

		println("SELECT idcons, usercode, medcode, datacons FROM consulta where datacons = ? and medcode = ?", c.Param("datacons"), c.Param("medcode"))

		if err != nil {
			c.JSON(500, gin.H{"message": err.Error()})

			return
		}
		defer registros.Close()

		var consul []Consulta
		err = c.ShouldBind(&consul)

		if registros == nil {
			c.JSON(400, gin.H{"message": "DATA Ocupada"})
			return
		}
		stmt, err := db.Prepare(`INSERT INTO consulta
					 (usercode, medcode, datacons)
					 VALUES (?, ?, ?)`)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro1: " + err.Error()})
			return
		}
		defer stmt.Close()

		_, err = stmt.Exec(c.Param("usercode"), c.Param("medcode"), c.Param("datacons"))

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro2: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.Run(":3001")

}
