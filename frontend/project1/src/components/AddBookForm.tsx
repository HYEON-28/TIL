// =====================================================
// [1단계] useState & 이벤트 핸들링
// =====================================================

import { useState } from 'react'
import { Book, GENRES, createBook } from '../types/book'

interface AddBookFormProps {
  onAdd: (book: Book) => void
  nextId: number   // number 타입
}

// ✅ type alias: 폼 상태의 형태 정의
type FormState = {
  title: string
  author: string
  genre: string
  totalPages: string  // input value는 항상 string
}

export default function AddBookForm({ onAdd, nextId }: AddBookFormProps) {

  // =====================================================
  // [1단계] useState<T> — 상태 타입 명시
  // =====================================================

  // ✅ useState<FormState>: 폼 상태의 타입을 제네릭으로 명시
  const [form, setForm] = useState<FormState>({
    title: '',
    author: '',
    genre: 'novel',
    totalPages: '',
  })

  // ✅ useState<boolean>: 폼 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // ✅ useState<string>: 에러 메시지 상태
  const [error, setError] = useState<string>('')

  // =====================================================
  // [1단계] 이벤트 핸들링 — 이벤트 타입 명시
  // =====================================================

  // ✅ React.ChangeEvent<HTMLInputElement>: input의 onChange 이벤트 타입
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  // ✅ React.ChangeEvent<HTMLSelectElement>: select의 onChange 이벤트 타입
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, genre: e.target.value }))
  }

  // ✅ React.FormEvent<HTMLFormElement>: form의 onSubmit 이벤트 타입
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 유효성 검사
    if (!form.title.trim()) {
      setError('책 제목을 입력해주세요.')
      return
    }
    if (!form.author.trim()) {
      setError('저자를 입력해주세요.')
      return
    }
    const pages = parseInt(form.totalPages)
    if (isNaN(pages) || pages <= 0) {
      setError('올바른 페이지 수를 입력해주세요.')
      return
    }

    // createBook 함수로 Book 객체 생성 (types/book.ts에서 정의)
    const newBook = createBook(nextId, form.title.trim(), form.author.trim(), form.genre, pages)
    onAdd(newBook)

    // 폼 초기화
    setForm({ title: '', author: '', genre: 'novel', totalPages: '' })
    setIsOpen(false)
    setError('')
  }

  // ✅ 조건부 렌더링: isOpen 상태에 따라 폼 표시/숨김
  return (
    <div className="add-form-wrapper">
      <button className="btn-add-toggle" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '✕ 닫기' : '+ 책 추가하기'}
      </button>

      {/* ✅ 조건부 렌더링: && 연산자 */}
      {isOpen && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>책 제목 *</label>
              <input
                name="title"
                type="text"
                placeholder="책 제목을 입력하세요"
                value={form.title}
                onChange={handleInputChange}  // ✅ onChange 이벤트 연결
              />
            </div>
            <div className="form-group">
              <label>저자 *</label>
              <input
                name="author"
                type="text"
                placeholder="저자명을 입력하세요"
                value={form.author}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>장르</label>
              <select value={form.genre} onChange={handleSelectChange}>
                {/* ✅ 리스트 렌더링: GENRES 배열 map() + key */}
                {GENRES.filter((g) => g.id !== 'all').map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.emoji} {genre.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>총 페이지 수 *</label>
              <input
                name="totalPages"
                type="number"
                placeholder="예: 320"
                value={form.totalPages}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* ✅ 조건부 렌더링: 에러가 있을 때만 표시 */}
          {error && <p className="form-error">⚠ {error}</p>}

          <button type="submit" className="btn-submit">📚 서재에 추가</button>
        </form>
      )}
    </div>
  )
}
