package main

import (
	"agendamedica/conexao"
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

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"data": "Hello world"})
	})

	r.GET("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

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
