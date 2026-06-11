package main

import (
	accounts "bankProject/banking"
	"fmt"
)

func main() {
	account := accounts.NewAccount("nico")
	account.Deposit(10)
	fmt.Println(account.Balance())
}

