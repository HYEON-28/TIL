// =====================================================
// [1단계] 함수형 컴포넌트 + useState 통합
// =====================================================

import { useState } from 'react'
import { Book, INITIAL_BOOKS } from './types/book'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import AddBookForm from './components/AddBookForm'

export default function App() {

  // =====================================================
  // [1단계] useState<T> — 다양한 타입의 상태 관리
  // =====================================================

  // ✅ useState<Book[]>: Book 배열 상태
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS)

  // ✅ useState<string>: 선택된 장르 필터
  const [selectedGenre, setSelectedGenre] = useState<string>('all')

  // ✅ useState<Book | null>: 선택된 책 (없으면 null)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  // =====================================================
  // 이벤트 핸들러 함수들 — 함수 타입 선언
  // =====================================================

  // ✅ 함수 타입: id(number)를 받고 반환값 없음(void)
  const handleToggleRead = (id: number): void => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    )
    // 선택된 책이 토글된 책이면 상태도 업데이트
    setSelectedBook((prev) =>
      prev?.id === id ? { ...prev, isRead: !prev.isRead } : prev
    )
  }

  const handleDelete = (id: number): void => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
    setSelectedBook((prev) => (prev?.id === id ? null : prev))
  }

  // ✅ 함수 타입: Book 객체를 받음
  const handleAdd = (newBook: Book): void => {
    setBooks((prev) => [...prev, newBook])
  }

  const handleSelect = (book: Book): void => {
    setSelectedBook((prev) => (prev?.id === book.id ? null : book))
  }

  // ✅ 함수 타입: id(number), rating(number) 두 개 인자
  const handleRating = (id: number, rating: number): void => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, rating } : book))
    )
    setSelectedBook((prev) => (prev?.id === id ? { ...prev, rating } : prev))
  }

  // ✅ 함수 타입: id(number), memo(string) 두 개 인자
  const handleMemo = (id: number, memo: string): void => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, memo } : book))
    )
    setSelectedBook((prev) => (prev?.id === id ? { ...prev, memo } : prev))
  }

  // =====================================================
  // [1단계] 타입 추론 — nextId 타입은 number로 자동 추론
  // =====================================================
  const nextId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">📚 나의 서재</h1>
          <p className="app-sub">React + TypeScript 1단계 예시 프로젝트</p>
        </div>
      </header>

      <main className="app-main">
        <div className="main-left">
          {/* 책 추가 폼 */}
          <AddBookForm onAdd={handleAdd} nextId={nextId} />

          {/* 책 목록 */}
          <BookList
            books={books}
            selectedGenre={selectedGenre}
            selectedBook={selectedBook}
            onToggleRead={handleToggleRead}
            onDelete={handleDelete}
            onSelect={handleSelect}
            onGenreChange={setSelectedGenre}
          />
        </div>

        {/* 책 상세 패널 */}
        <aside className="main-right">
          <BookDetail
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onRating={handleRating}
            onMemo={handleMemo}
          />
        </aside>
      </main>
    </div>
  )
}
