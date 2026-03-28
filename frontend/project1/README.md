# 📚 나의 서재 — React + TypeScript 1단계 예시 프로젝트

React + TypeScript **1단계 (입문)** 커리큘럼의 모든 개념을 담은 도서 관리 앱입니다.

---

## 🚀 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

---

## 📂 파일 구조

```
src/
├── types/
│   └── book.ts          # 기본 타입, type alias, 배열 타입, 함수 타입 선언
├── components/
│   ├── BookCard.tsx      # Props 타입 정의, 조건부 렌더링, 이벤트 핸들링
│   ├── BookList.tsx      # 리스트 렌더링, key prop, 타입 추론
│   ├── AddBookForm.tsx   # useState, onChange/onSubmit 이벤트 타입
│   └── BookDetail.tsx    # 조건부 렌더링 심화, 이벤트 타입
├── App.tsx               # useState 통합, 함수 타입 선언
├── index.css
└── main.tsx
```

---

## 🎯 1단계 학습 개념 → 코드 위치

| 개념 | 파일 | 설명 |
|------|------|------|
| **기본 타입 선언** | `types/book.ts` | `string`, `number`, `boolean`, `null` 타입 사용 |
| **배열 타입** | `types/book.ts` | `Book[]`, `Genre[]` 배열 타입 선언 |
| **type alias** | `types/book.ts`, `AddBookForm.tsx` | `type Book = { ... }`, `type FormState = { ... }` |
| **함수 타입 선언** | `types/book.ts`, `App.tsx` | 매개변수 타입, 반환 타입 `: void` 명시 |
| **타입 추론** | `BookList.tsx`, `App.tsx` | `filtered`, `readCount`, `nextId`의 타입이 자동 추론됨 |
| **함수형 컴포넌트** | 모든 컴포넌트 | `export default function XxxProps({ ... })` 구조 |
| **Props 타입 정의** | 모든 컴포넌트 | `interface XxxProps { ... }` 로 Props 타입 선언 |
| **useState** | `App.tsx`, `AddBookForm.tsx`, `BookDetail.tsx` | `useState<Book[]>`, `useState<string>`, `useState<boolean>` |
| **이벤트 핸들링** | `AddBookForm.tsx`, `BookCard.tsx`, `BookDetail.tsx` | `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent` 등 |
| **조건부 렌더링** | `BookCard.tsx`, `BookDetail.tsx`, `BookList.tsx` | `&&` 연산자, 삼항 연산자 `? :` |
| **리스트 렌더링 & key** | `BookList.tsx`, `AddBookForm.tsx`, `BookDetail.tsx` | `.map()` + `key={...}` prop |

---

## 🔑 핵심 코드 스니펫

### type alias로 객체 타입 정의
```ts
// types/book.ts
type Book = {
  id: number
  title: string
  isRead: boolean
  rating: number | null  // null 타입 포함
}
```

### Props 타입 정의
```tsx
// components/BookCard.tsx
interface BookCardProps {
  book: Book
  onToggleRead: (id: number) => void
  isSelected: boolean
}

export default function BookCard({ book, onToggleRead, isSelected }: BookCardProps) {
  // ...
}
```

### useState 타입 명시
```tsx
// App.tsx
const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS)
const [selectedBook, setSelectedBook] = useState<Book | null>(null)
const [isOpen, setIsOpen] = useState<boolean>(false)
```

### 이벤트 타입 명시
```tsx
// AddBookForm.tsx
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // ...
}
```

### 리스트 렌더링 + key prop
```tsx
// BookList.tsx
{books.map((book) => (
  <BookCard
    key={book.id}   // ← 반드시 필요!
    book={book}
    onToggleRead={handleToggleRead}
  />
))}
```

### 조건부 렌더링
```tsx
// && 연산자: 평점이 있을 때만 표시
{book.rating !== null && <div>{book.rating}점</div>}

// 삼항 연산자: 읽음 상태에 따라 분기
<span>{book.isRead ? '완독' : '읽는 중'}</span>
```
