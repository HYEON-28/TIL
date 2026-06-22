package mydict

import (
	"errors"
)

// Dictionary type -> 기존 타입에 의미와 메서드를 부여할 때 사용함
// struct는 여러 데이터를 묶어서 하나의 객체처럼 다룰 때
type Dictionary map[string]string

var errNotFound = errors.New("Not Found")
var errWordExists = errors.New("That word alreay exists")
// type Dictionary struct{
// }
// 위는 map을 기반한 새로운 타입, 이것은 struct 타입.

// Search for a word
func (d Dictionary) Search(word string) (string, error){
	value, exist := d[word]
	if exist {
		return value, nil
	}
	return "", errNotFound
}


func (d Dictionary) Add(word string, def string) error {
	_, err := d.Search(word)

	switch err {
	case errNotFound:
		d[word] = def
	case nil:
		return errWordExists	
	}
	return nil;
}