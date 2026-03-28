// =====================================================
// [1단계] 기본 타입 선언 & type alias
// =====================================================

// ✅ type alias: 객체의 형태를 type 키워드로 정의
export type Book = {
  id: number           // number 타입
  title: string        // string 타입
  author: string       // string 타입
  genre: string        // string 타입
  totalPages: number   // number 타입
  isRead: boolean      // boolean 타입
  rating: number | null  // null 타입 (아직 평가 안 한 경우)
  memo: string         // string 타입 (독서 메모)
}

// ✅ type alias: 장르 목록의 형태 정의
export type Genre = {
  id: string
  label: string
  emoji: string
}

// =====================================================
// [1단계] 함수 타입 선언
// =====================================================

// ✅ 함수의 매개변수와 반환 타입을 명시
export function createBook(
  id: number,
  title: string,
  author: string,
  genre: string,
  totalPages: number
): Book {
  return {
    id,
    title,
    author,
    genre,
    totalPages,
    isRead: false,
    rating: null,
    memo: '',
  }
}

// =====================================================
// [1단계] 배열 타입
// =====================================================

// ✅ Book[] : Book 타입의 배열
export const INITIAL_BOOKS: Book[] = [
  {
    id: 1,
    title: '클린 코드',
    author: '로버트 C. 마틴',
    genre: 'dev',
    totalPages: 464,
    isRead: true,
    rating: 5,
    memo: '모든 개발자가 읽어야 할 책. 변수명 하나하나가 달라진다.',
  },
  {
    id: 2,
    title: '사피엔스',
    author: '유발 하라리',
    genre: 'history',
    totalPages: 636,
    isRead: true,
    rating: 4,
    memo: '인류의 역사를 거시적으로 바라보는 시각이 인상적이었다.',
  },
  {
    id: 3,
    title: '채식주의자',
    author: '한강',
    genre: 'novel',
    totalPages: 247,
    isRead: false,
    rating: null,
    memo: '',
  },
  {
    id: 4,
    title: '미드나이트 라이브러리',
    author: '맷 헤이그',
    genre: 'novel',
    totalPages: 304,
    isRead: false,
    rating: null,
    memo: '',
  },
]

// ✅ Genre[] : Genre 타입의 배열
export const GENRES: Genre[] = [
  { id: 'all',     label: '전체',    emoji: '📚' },
  { id: 'novel',   label: '소설',    emoji: '📖' },
  { id: 'dev',     label: '개발',    emoji: '💻' },
  { id: 'history', label: '역사',    emoji: '🏛️' },
  { id: 'science', label: '과학',    emoji: '🔬' },
  { id: 'essay',   label: '에세이',  emoji: '✍️' },
]
