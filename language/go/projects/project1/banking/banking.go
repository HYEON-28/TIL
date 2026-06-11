package accounts

import "errors"

// Account struct
type Account struct {
	owner string
	balance int
}

var errNoMoney = errors.New("Can't withdraw")

// NewAccount creates Account
func NewAccount(owner string) *Account {
	account := Account{owner: owner, balance: 0}
	return &account
}


// func (a Account) Deposit(amount int) { // -> 이렇게 적으면 account의 복사본을 사용하게 됨
// 	a.balance += amount
// }

// Deposit x amount on your account
func (a *Account) Deposit(amount int) { // -> pointer receiver
	a.balance += amount
}

// Balance of your Account
func (a Account) Balance() int {
	return a.balance
}

// Withdraw x amount from your account
func (a *Account) Withdraw(amount int) error {
	if a.balance < amount {
		return errNoMoney
	} 
	a.balance -= amount
	return nil
}