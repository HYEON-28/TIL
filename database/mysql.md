```
CREATE TABLE users (
id BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID(), 1)),
github_id BIGINT UNSIGNED NOT NULL,
github_username VARCHAR(50) NOT NULL,
name VARCHAR(255),
email VARCHAR(255),
avatar_url VARCHAR(500),
github_profile_url VARCHAR(255),
access_token TEXT NOT NULL,
refresh_token TEXT,
last_login_at DATETIME,
created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at DATETIME,

PRIMARY KEY (id),

UNIQUE KEY uq_github_id (github_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### ENGINE=InnoDB

MySQL에서 사용할 엔진 지정.
InnoDB: 트랜잭션, 왜래키, 충돌 자동복구, 행 단위 잠금 지원.
MyISAM: 지원X

### DEFAULT CHARSET=utf8mb4

utf8: 최대 3바이트 저장, 이모지 저장 불가, 진짜UTF-8 아님
utf8mb4: 최대 4바이트 저장, 이모지 저장 가능, 진짜 UTF-8

사실 둘다 기본값이라 굳이 안적어도 됨.
