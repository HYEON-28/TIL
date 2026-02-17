# 기존 프로젝트 프레임워크 구조 정리

## 1. Spring 프레임워크 개요
  1. Spring이란?
  2. Spring을 쓰는 이유
  3. Spring MVC란?
  4. 전자정부 표준 프레임워크(eGovFrame)란?
  5. 이 프로젝트에서 eGovFrame을 사용하는 이유

## 2. 프로젝트 전체 구조
  1. 디렉토리 구조 개요
  2. 빌드 도구(Maven) 의미
  3. Maven 필요성
  4. pom.xml 역할
  5. 이 프로젝트의 주요 라이브러리

## 3. MVC 패턴
  1. MVC 패턴 의미
  2. MVC 패턴 필요성
  3. Model이란?
  4. View란?
  5. Controller란?
  6. 요청 처리 흐름 (사용자 → 서버 → DB → 사용자)
  7. dispatcher-servlet.xml 역할

## 4. 계층 구조 (Controller - Service - DAO)
  1. 계층 구조 의미
  2. 계층 구조 필요성
  3. Controller 역할
  4. Service 역할
  5. DAO 역할
  6. VO(Value Object) 역할
  7. 이 프로젝트의 계층 구조 실제 예시
  8. 계층 간 데이터 흐름도

## 5. 데이터 접근 계층 (MyBatis)
  1. MyBatis란?
  2. MyBatis 사용 이유
  3. MyBatis 동작 방식
  4. Mapper XML 구조
  5. DAO와 Mapper XML 연결 방식
  6. 이 프로젝트의 Mapper XML 예시

## 6. Spring 설정 파일
  1. 설정 파일이란?
  2. context-datasource.xml (DB 연결 설정)
  3. context-mapper.xml (MyBatis 연결 설정)
  4. context-transaction.xml (트랜잭션 설정)
  5. context-aspect.xml (AOP 설정)
  6. context-security.xml (보안 설정)

## 7. 보안 처리 (Spring Security)
  1. Spring Security란?
  2. 인증(Authentication)과 인가(Authorization) 차이
  3. 이 프로젝트의 로그인 처리 흐름
  4. 세션(Session) 관리 방식
  5. JWT 토큰이란?
  6. Filter란?
  7. 모바일 API 인증 방식

## 8. 화면(View) 처리
  1. JSP란?
  2. Apache Tiles란?
  3. Tiles 레이아웃 구조
  4. 이 프로젝트의 레이아웃 구성 예시
  5. 정적 자원(CSS, JS) 관리 방식
