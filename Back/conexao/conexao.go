package conexao

import (
	"database/sql"
	"fmt"

	/* importei com '_' pois é preciso inicializar a biblioteca, e evitar
	   efeitos colaterais (como o fato de não chamá-la diretamente no seu
	   código) */
	_ "github.com/go-sql-driver/mysql"
)

// a ideia dessa função aqui é retornar uma forma de conexão com o banco
func Connect() *sql.DB {
	//  aqui você substitui as variáveis pelas suas configs
	driverConfig := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", "sistema", "Dfffgl#2021", "127.0.0.1", "3306", "AgendaMedica")
	connection, err := sql.Open("mysql", driverConfig)
	if err != nil {
		fmt.Println("database.Connect ERROR: %s", err)
	}
	return connection
}
