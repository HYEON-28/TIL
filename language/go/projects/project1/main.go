package main

import (
	"bankProject/mydict"
	"fmt"
)

func main() {
	dictionary := mydict.Dictionary{}
	dictionary["hello"] = "hello"
	fmt.Println(dictionary)
}

