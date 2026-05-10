## go 프로젝트 만들기

- go는 Node.js 나 Java처럼 아무곳에나 프로젝트를 만들 수 없다
  - mac: Go PATH 디렉토리에 만들어야 함 (/usr/local/go) -> 옛날정보!!
- go mod init myproject -> 어느 경로에서나 프로젝트 생성 가능

### 의존성 관리

/usr/local/go/src경로에 github.com, golang.org등의 폴더가 있음.
Node.js는 (npmjs.com), Python은 (pypi.org) 의 단일 소스에서 받지만 Go는 여러 소스에서 받을 수 있다.

## 기초문법

### 변수와 상수

```
func main() {
	var name1 string = "nico" // 변수 생성
	name2 := "nico" // Go가 타입을 추론함. string
	score := 100 //
	const name3 string = "nico" // 상수
	fmt.Println(name1)
}
```

### 함수
