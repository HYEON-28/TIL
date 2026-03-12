# 클로드코드 사용법
1. node.js 설치
2. sudo npm i -g @anthropic-ai/claude-code
3. claude로 클로드코드 실행

## 토큰절약법
1. 영어로 프롬프트를 작성한다. -> 한글은 영어보다 2~3배 많은 토큰을 소비함
2. 하이브리드 프롬프트 작성
한글과 영어를 적절히 섞어쓰는 방법
- 사용예시
`
Create user login feature
email, password 사용
JWT token auth
로그인 실패 시 error message 표시
`
- 기술영어는 영어 그대로!
- 파일명, 함수명은 절대 번역 금지

3. CLAUDE.md 최적화
- claude.md란? 프로젝트 루트에 만들어두면 claude가 자동으로 참조하는 설정파일.
- 여기에 프로젝트 정보를 영어로 정리해두자.
-----예시-------------------
# Project: E-commerce Platform

## Tech Stack
- Frontend: React 18 + TypeScript
- Backend: Node.js + Express
- DB: PostgreSQL
- State: Redux Toolkit
- Test: Jest + RTL

## Code Style
- Functional components
- Airbnb ESLint
- JSDoc for public functions
- 한글 주석은 영어로 변환

## Commands
- dev: `npm run dev`
- build: `npm run build`
- test: `npm test`
- lint: `npm run lint`

## Important Notes
- API calls는 /api 폴더에서만
- form validation은 Yup 사용
- 에러 처리는 ErrorBoundary 활용
--------------------------


4. 프롬프트는 압축하여
----예시------
> Create login form
- email + password inputs
- validation: email format, password min 8 chars
- error messages in red
-------------


5. 세션관리 최적화
- /clear 명령 활용
- 대화가 길어질수록 토큰이 쌓이니 clear를 잘 하자
- /compact로 기억 압축
- /stats로 사용량 모니터링

6. 작업 단위 최적화
- 한번에 큰 작업을 요청하기 보다 작은 단위로 쪼개서 요청

7. 커스텀 명령어 활용
- 슬래시 명령어 만들기: .claude/commands/fix.md
- /fix 로 사용
예시
--------------
Analyze the error and fix the bug
- identify root cause
- implement solution
- add error handling
- 수정 내용 한글로 설명
---------------

-------참고링크------
https://twofootdog.tistory.com/422#toc1