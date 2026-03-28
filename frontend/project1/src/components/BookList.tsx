// =====================================================
// [1단계] 리스트 렌더링 & key prop
// =====================================================

import { Book, GENRES } from '../types/book'
import BookCard from './BookCard'

// ✅ Props 타입 정의
interface BookListProps {
  books: Book[]                        // ✅ 배열 타입: Book[]
  selectedGenre: string                // string 타입
  selectedBook: Book | null            // Book 또는 null
  onToggleRead: (id: number) => void
  onDelete: (id: number) => void
  onSelect: (book: Book) => void
  onGenreChange: (genre: string) => void
}

export default function BookList({
  books,
  selectedGenre,
  selectedBook,
  onToggleRead,
  onDelete,
  onSelect,
  onGenreChange,
}: BookListProps) {

  // =====================================================
  // [1단계] 타입 추론 — TypeScript가 자동으로 타입 추론
  // =====================================================
  // filtered의 타입은 Book[] 으로 자동 추론됨 (명시 안해도 됨)
  const filtered = selectedGenre === 'all'
    ? books
    : books.filter((b) => b.genre === selectedGenre)

  // readCount의 타입은 number로 자동 추론됨
  const readCount = books.filter((b) => b.isRead).length

  return (
    <div className="book-list-section">

      {/* 통계 */}
      <div className="stats-bar">
        <span>전체 <strong>{books.length}</strong>권</span>
        <span>읽음 <strong>{readCount}</strong>권</span>
        {/* ✅ 조건부 렌더링: books.length > 0일 때만 퍼센트 표시 */}
        {books.length > 0 && (
          <span>완독률 <strong>{Math.round((readCount / books.length) * 100)}%</strong></span>
        )}
      </div>

      {/* 장르 필터 */}
      <div className="genre-tabs">
        {/* ✅ 리스트 렌더링: GENRES 배열을 map()으로 렌더링, key 필수 */}
        {GENRES.map((genre) => (
          <button
            key={genre.id}   // ✅ key prop: 각 항목을 고유하게 식별
            className={`genre-tab ${selectedGenre === genre.id ? 'active' : ''}`}
            onClick={() => onGenreChange(genre.id)}
          >
            {genre.emoji} {genre.label}
          </button>
        ))}
      </div>

      {/* ✅ 조건부 렌더링: 책이 없을 때 빈 상태 표시 */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>📭 이 장르에 등록된 책이 없습니다.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {/* ✅ 리스트 렌더링: filtered 배열을 map()으로 BookCard 렌더링 */}
          {filtered.map((book) => (
            <BookCard
              key={book.id}   // ✅ key prop: 배열 렌더링 시 반드시 필요
              book={book}
              isSelected={selectedBook?.id === book.id}
              onToggleRead={onToggleRead}
              onDelete={onDelete}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}
