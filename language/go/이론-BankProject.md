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

2.0 4:45 부터 보기
