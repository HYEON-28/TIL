# 데이터 타입

## Binary

```
  id BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID(), 1))
```

테이블의 id값을 BINARY(16)으로 지정하는 경우를 보고 좀 더 조사해 보았다.

### BINARY(16)이란?

- 고정길이 16바이트의 이진(binary) 데이터를 저장하는 타입.
- 문자열이 아닌 raw바이트를 저장

### 기존의 UUID 값

> 550e8400-e29b-41d4-a716-446655440000

- 문자열 VARCHAR(36)으로 저장 시 36바이트가 필요
- 하이픈 제거하고 16바이트 이진값으로 변환 시 절반 이하 크기로 줄어듦.

### UUID_TO_BIN(UUID(), 1)

- UUID()로 문자열 UUID 생성
- UUID_TO_BIN: UUID를 BINARY로 변환

### 주의사항

- 저장된 값을 읽을 때는 다시 변환을 해야함
- BIN_TO_UUID(id, 1) -> 두 번째 인자는 변환시와 동일하게 맞춰야함
