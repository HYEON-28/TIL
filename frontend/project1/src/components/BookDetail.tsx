// =====================================================
// [1단계] Props 타입 정의 & 조건부 렌더링 심화
// =====================================================

import { useState } from 'react'
import { Book, GENRES } from '../types/book'

interface BookDetailProps {
  book: Book | null                         // null 타입 포함
  onClose: () => void                       // 함수 타입: 인자 없고 반환 없음
  onRating: (id: number, rating: number) => void
  onMemo: (id: number, memo: string) => void
}

export default function BookDetail({ book, onClose, onRating, onMemo }: BookDetailProps) {

  // ✅ useState<string>: 메모 편집 상태
  const [editMemo, setEditMemo] = useState<string>('')
  // ✅ useState<boolean>: 메모 편집 모드 여부
  const [isEditingMemo, setIsEditingMemo] = useState<boolean>(false)

  // ✅ 조건부 렌더링: book이 null이면 패널 숨김
  if (!book) {
    return (
      <div className="detail-panel empty-detail">
        <p>👆 책 카드를 클릭하면<br />상세 정보가 표시됩니다.</p>
      </div>
    )
  }

  // 장르 레이블 찾기 — 타입 추론: Genre | undefined
  const genreInfo = GENRES.find((g) => g.id === book.genre)

  const handleMemoEdit = () => {
    setEditMemo(book.memo)
    setIsEditingMemo(true)
  }

  const handleMemoSave = () => {
    onMemo(book.id, editMemo)
    setIsEditingMemo(false)
  }

  // ✅ 이벤트 타입: React.ChangeEvent<HTMLTextAreaElement>
  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditMemo(e.target.value)
  }

  return (
    <div className="detail-panel">
      <div className="detail-header">
        <div>
          {/* ✅ 타입 추론: genreInfo가 undefined일 수 있으므로 ?. 연산자 활용 */}
          <span className="detail-genre">{genreInfo?.emoji} {genreInfo?.label}</span>
          <h2 className="detail-title">{book.title}</h2>
          <p className="detail-author">{book.author}</p>
        </div>
        <button className="btn-close" onClick={onClose}>✕</button>
      </div>

      <div className="detail-meta">
        <div className="meta-item">
          <span className="meta-label">총 페이지</span>
          <span className="meta-value">{book.totalPages}p</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">독서 상태</span>
          {/* ✅ 조건부 렌더링: 삼항 연산자 */}
          <span className={`meta-value ${book.isRead ? 'text-read' : 'text-unread'}`}>
            {book.isRead ? '✓ 완독' : '· 읽는 중'}
          </span>
        </div>
      </div>

      {/* 평점 섹션 */}
      <div className="detail-section">
        <h4>평점</h4>
        <div className="star-rating">
          {/* ✅ 리스트 렌더링: [1,2,3,4,5] 배열 map() + key */}
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`star ${book.rating !== null && star <= book.rating ? 'active' : ''}`}
              onClick={() => onRating(book.id, star)}
            >
              ★
            </button>
          ))}
          {/* ✅ 조건부 렌더링: 평점이 있을 때만 숫자 표시 */}
          {book.rating !== null && (
            <span className="rating-text">{book.rating} / 5</span>
          )}
        </div>
      </div>

      {/* 메모 섹션 */}
      <div className="detail-section">
        <div className="section-row">
          <h4>독서 메모</h4>
          {/* ✅ 조건부 렌더링: 편집 모드가 아닐 때만 수정 버튼 표시 */}
          {!isEditingMemo && (
            <button className="btn-edit" onClick={handleMemoEdit}>
              {book.memo ? '수정' : '+ 작성'}
            </button>
          )}
        </div>

        {/* ✅ 조건부 렌더링: isEditingMemo 분기 */}
        {isEditingMemo ? (
          <div className="memo-edit">
            <textarea
              value={editMemo}
              onChange={handleMemoChange}
              placeholder="책에 대한 생각을 자유롭게 적어보세요..."
              rows={4}
            />
            <div className="memo-actions">
              <button className="btn-save" onClick={handleMemoSave}>저장</button>
              <button className="btn-cancel" onClick={() => setIsEditingMemo(false)}>취소</button>
            </div>
          </div>
        ) : (
          /* ✅ 조건부 렌더링: 메모 유무에 따라 분기 */
          book.memo ? (
            <p className="memo-text">"{book.memo}"</p>
          ) : (
            <p className="memo-empty">아직 메모가 없습니다.</p>
          )
        )}
      </div>
    </div>
  )
}
