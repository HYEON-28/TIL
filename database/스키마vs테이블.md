# 스키마(Schema)와 테이블(Table)

MySQL Workbench에서 "Schemas" 탭에 데이터베이스가 보여서 헷갈렸다.

## 스키마

데이터베이스 객체(테이블, 뷰, 인덱스 등)를 묶는 논리적 컨테이너. 데이터 구조의 설계도.

## 테이블

행과 열로 데이터를 저장하는 객체. 스키마 안에 속함.

## DBMS마다 의미가 다름

MySQL에서는 `DATABASE` = `SCHEMA`. 그래서 아래 두 줄이 같은 동작을 한다.

```sql
CREATE DATABASE mydb;
CREATE SCHEMA mydb;
```

PostgreSQL은 다르다. 하나의 Database 안에 여러 Schema가 존재한다.

```
PostgreSQL: Database > Schema > Table
MySQL:      Database(=Schema) > Table
```

## 정리

- 테이블은 데이터를 담는 그릇
- 스키마는 그 그릇을 묶는 단위
- MySQL에선 둘을 동의어로 써도 되지만 다른 DBMS로 가면 의미가 달라진다
