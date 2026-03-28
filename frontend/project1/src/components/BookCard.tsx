// =====================================================
// [1단계] 함수형 컴포넌트 구조 & Props 타입 정의
// =====================================================

import { Book } from '../types/book'

// ✅ interface로 Props 타입 선언
interface BookCardProps {
  book: Book                        // Book 타입 객체
  onToggleRead: (id: number) => void  // 함수 타입: id를 받고 반환값 없음
  onDelete: (id: number) => void      // 함수 타입
  onSelect: (book: Book) => void      // 함수 타입: Book 객체를 받음
  isSelected: boolean               // boolean 타입
}

// ✅ 함수형 컴포넌트: Props 타입을 구조 분해 할당으로 받음
export default function BookCard({
  book,
  onToggleRead,
  onDelete,
  onSelect,
  isSelected,
}: BookCardProps) {

  // ✅ 이벤트 핸들링: onClick 타입은 React.MouseEvent
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleRead(book.id)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete(book.id)
  }

  // =====================================================
  // [1단계] 조건부 렌더링 — && 연산자, 삼항 연산자
  // =====================================================
  return (
    <div
      className={`book-card ${book.isRead ? 'read' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(book)}
    >
      {/* ✅ 조건부 렌더링: 삼항 연산자로 읽음/안읽음 배지 분기 */}
      <span className={`status-badge ${book.isRead ? 'badge-read' : 'badge-unread'}`}>
        {book.isRead ? '✓ 읽음' : '· 미독'}
      </span>

      <div className="card-body">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-pages">{book.totalPages}p</p>

        {/* ✅ 조건부 렌더링: && 연산자로 평점이 있을 때만 표시 */}
        {book.rating !== null && (
          <div className="rating">
            {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
          </div>
        )}

        {/* ✅ 조건부 렌더링: 메모가 있을 때만 표시 */}
        {book.memo && (
          <p className="memo">"{book.memo}"</p>
        )}
      </div>

      <div className="card-actions">
        {/* ✅ 이벤트 핸들링: onClick에 화살표 함수 연결 */}
        <button
          className={`btn-toggle ${book.isRead ? 'btn-unread' : 'btn-read'}`}
          onClick={handleToggle}
        >
          {book.isRead ? '읽기 취소' : '읽음 표시'}
        </button>
        <button className="btn-delete" onClick={handleDelete}>삭제</button>
      </div>
    </div>
  )
}
