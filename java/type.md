# 타입

## double과 Double의 차이
| 구분   | double          | Double                             |
| ---- | --------------- | ---------------------------------- |
| 타입   | primitive (기본형) | 객체 (Wrapper Class)                 |
| null | ❌ 불가능           | ✅ 가능                               |
| 성능   | 빠름 (메모리/연산 효율적) | 느림 (객체 생성/GC 영향)                   |
| 컬렉션  | ❌ 사용 불가         | ✅ 사용 가능 (`List<Double>`)           |
| 메서드  | ❌ 없음            | ✅ 있음 (`parseDouble`, `toString` 등) |
