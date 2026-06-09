package main

import (
	"bankProject/banking"
	"fmt"
)

func main() {
	account := banking.Account{Owner: "nicolas", Balance: 1000}
	fmt.Println(account)
}

