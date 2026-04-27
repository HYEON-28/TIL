# 트랜잭션이 깨지는 경우 
저번에 @Transaction을 사용해서 트랜잭션 처리를 할 수 있다는걸 공부했다.
오늘은 Transaction에 대해서 좀 더 깊게 알아볼 예정이다.


## 1. self-invocation
같은 클래스 내부에서 메서드 호출 시 트랜잭션이 안걸린다.
이유는 @Transaction이 Spring AOP = 프록시 기반이기 때문.
객체 내부에서 호출 시 Spring AOP가 개입할 수 없다.
아래 코드의 invoke() 자체가 실행되지 않는다.


## 궁금한 점
프록시가 요청을 가로채서 트랜잭션을 시작한다면, 메서드 실행이 끝난 후에 프록시 객체에 완료상태를 전달하는건가?
-> 아니다. 프록시가 메서드 실행 전체를 감싸고 있다.
아래와 같은 느낌으로 실제객체는 에러 시 예외를 던질 뿐이다.
`
public Object invoke(Method method, Object[] args) {
    TransactionStatus status = txManager.begin();

    try {
        Object result = method.invoke(target, args); // 실제 메서드 실행
        // target: 실제 메서드
        txManager.commit(status);                     // 정상 종료 → 커밋
        return result;
    } catch (Throwable e) {
        txManager.rollback(status);                   // 예외 → 롤백
        throw e;
    }
}
`

## 더 알아볼 것
- public 메서드만 적용되는 이유
- RuntileException만 기본 롤백
- 전파 옵션의 실무적 의미