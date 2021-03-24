package main

import (
	"strconv"
	"Back/conexao"
	"github.com/gin-gonic/gin"
)

type Movie struct {
	ID           int    `json:"id"`
	Title        string `json:"title"`
	Genre        string `json:"genre"`
	ReleasedDate int    `json:"year"`
}

func main() {
	r := gin.Default()

	var movies []Movie
	lastID := 1

	r.GET("/movies", func(c *gin.Context) {
		c.JSON(200, movies)
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

	f=:Connect()
	fmt.Println("%s",f)
}
