# 가상 DOM

리액트 프레임워크의 기본 3요소

- 가상 DOM, JSX 구문, 컴포넌트

## react와 react-dom 패키지

- **react**: 컴포넌트, JSX, 리액트 훅 등 렌더러에 무관한 기능
- **react-dom/client**: CSR 방식 웹 앱 기능 제공
- **react-dom/server**: SSR 방식 웹 앱 기능 제공
- **react-native**: 모바일 앱에 특화된 렌더링 기능

중간에 가상 DOM이라는 메커니즘이 존재한다.

## CSR vs SSR

| 구분 | 설명 |
| ---- | ---- |
| CSR  | 브라우저에서 렌더링 |
| SSR  | 서버에서 렌더링 |

- 과거: SPA 붐 → CSR 위주 (React 단독)
- 현재: 성능 + SEO 요구 증가 → SSR 사용 증가
- SPA(CSR)는 SEO에 상대적으로 불리하고, 이를 보완하기 위해 SSR을 사용한다.

## DOM과 가상 DOM

- `document` 객체: `window.document` 혹은 `document` → HTML 요소
- `root.render(virtualDOM)`: 가상 DOM을 물리 DOM으로 전환해 줌

리액트는 `React.createElement` 함수로 다양한 HTML 요소를 가상 DOM 트리 구조로 구현한 뒤,
`render` 메서드가 호출되는 순간 가상 DOM 트리를 물리 DOM 트리로 변환한다.
