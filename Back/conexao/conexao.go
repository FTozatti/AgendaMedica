package conexao

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	driverConfig := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", "sistema", "Dfffgl#2021", "127.0.0.1", "3306", "AgendaMedica")
	connection, err := sql.Open("mysql", driverConfig)
	if err != nil {
		fmt.Printf("database.Connect ERROR: %s", err)
	}
	return connection
}

/*
import (
	"github.com/jinzhu/gorm"
	//"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	Id       uint   `json:"id" gorm:"primary_key"`
	Nome     string `json:"nome"`
	Cidade   string `json: cidade"`
	Datanasc string `json: datanasc"`
	Email    string `json: email"`
	Senha    string `json: senha"`
}

var DB *gorm.DB

func ConnectDataBase() {
	database, err := gorm.Open("mysql", "test.db")

	if err != nil {
		panic("Failed to connect to database!")
	}

	database.AutoMigrate(&User{})

	DB = database
}
*/
