# JSX 구문

다음과 같은 HTML 구조를

```html
<ul>
  <li>
    <a href="http..">
      <p>go to google</p>
    </a>
  </li>
</ul>
```

`React.createElement` 호출만으로 구현하면 매우 복잡해진다.

```ts
const CE = React.createElement;

const rootVirtualDOM = CE('ul', null, [
  CE('li', null, [
    CE('a', { href: 'http..' }, [
      CE('p', null, 'go to google')
    ])
  ])
]);
```

따라서 언어 확장 형태로 JSX 기능이 추가되었다.

```tsx
const rootVirtualDOM = (
  <ul>
    <li>
      <a href="http..">
        <p>go to google</p>
      </a>
    </li>
  </ul>
);
```

## 중괄호의 의미

JSX 안에서 JS 코드를 쓰려면 중괄호로 감싸야 한다.

```tsx
<p>{jsCode}</p>
```

> JSX 구문의 반환값은 가상 DOM 객체이므로 변수나 배열에 담을 수 있다.
