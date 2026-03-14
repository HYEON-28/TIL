# Docker
도커란: 애플리케이션과 실행 환경(라이브러리, 설정 등)을 하나의 "컨테이너"로 묶어 어디서든 동일하게 실행할 수 있게 함
AWS같은 클라우드 환경이 아닌 온프레미스에서도 충분히 사용가능

## 궁금한 점
1. 도커를 사용하면 기존 OS 위에 가상 OS를 사용하는 것이니 성능이 떨어지지 않을까?
-> 가상OS가 아니라 OS를 공유하는 방식을 사용함. 성능손실은 1~3% 정도로 체감상 거의 없는 정도임

## 특징
- 마이크로서비스 구조에 적합함
- VM보다 속도가 빠르고 용량이 작음

## 흐름
1. Dockerfile 작성
2. docker build
3. Image 생성
4. docker run
5. Container 실행

## 용어정리 
### 이미지
- 컨테이너를 만들기 위한 설계도

### Dockerfile
- 이미지를 만들기 위한 설정 파일

## 실무 적용
### Mac 에 개발환경 세팅하기
1. Docker Desktop 설치
2. 설치 확인 (명령어: docker --version)
3. docker-compose.yml 작성
    - version: '3' -> compose 문법의 버전이며, 3이 가장 안정되고 많이 쓰임.
        반드시 필요한것은 아님


** docker-compose 작성중
인텔리제이에서 war로 export 해야함