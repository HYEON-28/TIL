package accounts

import (
	"errors"
	"fmt"
)

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

// ChangeOwner of the account
func (a *Account) ChangeOwner(newOwner string) {
	a.owner = newOwner
}

// Owner of account
// "이 함수는 Account를 변경하지 않는다"라는 의도를 코드에 표현함
func (a Account) Owner() string {
	return a.owner
}

// fmt.Println(account) 를 호출했을 때 자동으로 호출되는 메소드
// 기본: &{nico 10}
func (a Account) String() string {
	return fmt.Sprint(a.Owner(), "'s account.\nHas: ", a.Balance())
}

