## go 프로젝트 만들기

- go는 Node.js 나 Java처럼 아무곳에나 프로젝트를 만들 수 없다
  - mac: Go PATH 디렉토리에 만들어야 함 (/usr/local/go) -> 옛날정보!!
- go mod init myproject -> 어느 경로에서나 프로젝트 생성 가능

### 의존성 관리

- [ ]

## \*\*\*\*기초문법

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

1.3 강의

```
func multiply(a, b int) int {
	return a * b
}

func multiply(a int, b int) int {
	return a * b
}
func main() {
	fmt.Println(multiply(2, 2))
}
```

함수가 복수의 리턴값을 가질 수 있음

```
	func lenAndUpper(name string) (int, string) {
		return len(name), strings.ToUpper(name)
	}

	func main() {
		totalLength, upperName := lenAndUpper("nico")
		// totalLength, _ := lenAndUpper("nico") 리턴값을 무시하려면 _를 쓴다
		fmt.Println(totalLength, upperName)
	}
```

복수 arguments

```
func repeatMe(words ...string) { // words가 배열이 됨
	fmt.Println(words)
}

func main() {
	repeatMe("nico", "lynn", "dal", "marl", "flynn")
}
```

1.4 강의
