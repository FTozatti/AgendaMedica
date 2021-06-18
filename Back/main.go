package main

import (
	"agendamedica/conexao"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"

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

type Medico struct {
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
	CRM      string `json:"crm"`
	Especial string `json:"especial"`
}

type Login struct {
	Email    string `json:"emailUser"`
	Password string `json:"senhaUser"`
}

func CORS(c *gin.Context) {

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "*")
	c.Header("Access-Control-Allow-Headers", "*")
	c.Header("Content-Type", "application/json")

	if c.Request.Method != "OPTIONS" {
		c.Next()
	} else {
		c.AbortWithStatus(http.StatusOK)
	}
}

func main() {
	r := gin.Default()
	r.Use(CORS)

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "*"
		},
		MaxAge: 12 * time.Hour,
	}))

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
	r.POST("/usuarios", func(c *gin.Context) {
		db := conexao.Connect()

		var u Usuario

		err := c.ShouldBind(&u)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		stmt, err := db.Prepare(`INSERT INTO usuario
					 (nome, datanasc, cpf, telefone, email, endereco, bairro, cidade, cep, senha)
					 Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}
		defer stmt.Close()

		usuarios = append(usuarios, u)

		_, err = stmt.Exec(u.Nome, u.Datanasc, u.Cpf, u.Telefone, u.Email, u.Endereco, u.Bairro, u.Cidade, u.Cep, u.Senha)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.POST("/consulta", func(d *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

		var cons Consulta

		d.ShouldBind(&cons)

		registros, err := db.Query("SELECT usercode, medcode, datacons FROM consulta where datacons = ? and medcode = ?", cons.Datacons, cons.Medcode)

		//println("SELECT idcons, usercode, medcode, datacons FROM consulta where datacons = ? and medcode = ?", cons.Datacons, cons.Medcode)

		fmt.Printf("%v", cons)
		if err != nil {
			d.JSON(500, gin.H{"message": err.Error()})

			return
		}
		defer registros.Close()

		var consul []Consulta
		err = d.ShouldBind(&consul)

		if registros == nil {
			d.JSON(400, gin.H{"message": "DATA Ocupada"})
			return
		}
		stmt, err := db.Prepare("INSERT INTO consulta (usercode, medcode, datacons) VALUES (?, ?, ?)")

		if err != nil {
			d.JSON(400, gin.H{"message": "Erro na preparação da execução: " + err.Error()})
			return
		}
		defer stmt.Close()

		_, err = stmt.Exec(cons.Usercode, cons.Medcode, cons.Datacons)

		if err != nil {
			d.JSON(400, gin.H{"message": "Erro na execução: " + err.Error()})
			return
		}

		d.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.POST("/login", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

		var login Login

		err := c.ShouldBind(&login)
		registros, _ := db.Query("SELECT email, senha FROM usuario WHERE email ='" + login.Email + "' and senha = '" + login.Password + "'")
		if err != nil {
			c.JSON(400, gin.H{"message": "Erro"})
			return
		}
		defer registros.Close()
		if !registros.Next() {
			c.JSON(403, gin.H{"message": "Forbidden"})
			return
		}
		c.JSON(200, gin.H{"message": "Ok"})
	})

	r.PUT("/alterar/usuario/:codigo", func(c *gin.Context) {
		db := conexao.Connect()

		var u Usuario

		err := c.ShouldBind(&u)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}
		stmt, err := db.Prepare(`Update usuario
					 Set nome=?, datanasc=?, cpf=?, telefone=?, email=?, endereco=?, bairro=?, cidade=?, cep=?, senha=?
					 Where codigo=?`)
		if err != nil {
			c.JSON(500, gin.H{"message": err.Error()})
			return
		}
		defer stmt.Close()
		usuarios = append(usuarios, u)

		_, err = stmt.Exec(u.Nome, u.Datanasc, u.Cpf, u.Telefone, u.Email, u.Endereco, u.Bairro, u.Cidade, u.Cep, u.Senha, c.Param("codigo"))

		if err != nil {
			c.JSON(500, gin.H{"message": err.Error()})
			return
		}
		c.JSON(200, gin.H{"message": "Alteração realizada com sucesso"})
	})

	r.DELETE("/excluir/consulta/:idCons", func(c *gin.Context) {
		db := conexao.Connect()
		defer db.Close()

		stmt, err := db.Prepare(`Delete From consulta
					 Where idCons = ?`)
		if err != nil {
			c.JSON(500, gin.H{"message": err.Error()})
			return
		}
		defer stmt.Close()
		_, err = stmt.Exec(c.Param("idCons"))
		if err != nil {
			c.JSON(500, gin.H{"message": err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Deletado com sucesso"})
	})

	var medico []Medico
	r.POST("/medico", func(c *gin.Context) {
		db := conexao.Connect()

		var m Medico

		err := c.ShouldBind(&m)
		if err != nil {
			c.JSON(400, gin.H{"message": "O Json(payload) veio com erro: " + err.Error()})
			return
		}

		stmt, err := db.Prepare(`CALL insere_medico (?,?,?,?,?,?,?,?,?,?,?,?,@id)`)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}
		defer stmt.Close()

		medico = append(medico, m)

		_, err = stmt.Exec(m.Nome, m.Datanasc, m.Cpf, m.Telefone, m.Email, m.Endereco, m.Bairro, m.Cidade, m.Cep, m.Senha, m.CRM, m.Especial)

		if err != nil {
			c.JSON(400, gin.H{"message": "O Json veio com erro: " + err.Error()})
			return
		}

		c.JSON(200, gin.H{"message": "Inserção realizada com sucesso"})
	})

	r.Run(":3001")
}
