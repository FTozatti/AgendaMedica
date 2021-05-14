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
		fmt.Println("database.Connect ERROR: %s", err)
	}
	return connection
}
