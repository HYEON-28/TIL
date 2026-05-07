# `@RestController`는 스프링 AOP 기반인가?
"스프링 AOP기반으로 동작한다" 라는 문장을 보고 AOP를 학습하면서,
스프링 AOP는 프록시 객체를 생성하여 동작한다는걸 배웠다.
대표적으로 @Transactional 어노테이션이 있다.

그렇다면 @RestController, @RequestMapping 도
Spring AOP기반으로 프록시 객체를 생성하는지 궁금해졌다.

결론은 "아니다" 이다.
`@RestController`, `@RequestMapping`은
Spring AOP 기반으로 동작하지 않으며, 프록시 객체를 생성하지도 않는다.

1. 어플리케이션 시작 시
2. @RestController, @RequestMapping 등 분석
3. URL <-> 메서드 매핑테이블 생성
까지 어노테이션의 효과로 자동으로 처리되고, 프록시 개입은 일어나지 않는다. 메서드 호출 시 메서드를 직접 호출한다.

## AOP 예시
`@Transactional`, `@Async`, `@Cacheable`
