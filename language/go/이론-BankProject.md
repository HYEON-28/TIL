## Export 하는법

```
package banking

// Account struct
type Account struct {
	Owner string
	Balance int
}
```

- export 시 comment가 필수는 아니며 이름을 대문자로 적으면 자동 export 됨
- go lint 등을 사용하는 경우 comment 필수
- struct의 필드도 각각 export여부를 가짐. 대문자로 시작하면 export 됨.

---

## Go에서 에러처리 하는법

- Go는 에러처리용 구문에 없음: try-catch, try-except 같은것

- `error`를 리턴하면 된다.

```
// error가 있는 경우
return errors.New("message")
// error가 없는 경우
return nil -> 역시 error타입임
```

- go는 에러를 매번 수동으로 체크해야 함

```
err := account.Withdraw(20)
if err != nil {
	log.Fatalln(err)
}
```
