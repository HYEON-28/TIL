# QueryDSL

복잡한 동적 쿼리를 작성할 때 주로 사용함.

단순 CRUD -> JPA
복잡한 동적쿼리 -> QueryDSL

```java
// 이 정도면 이미 한계...
findByNameContainingAndAgeGreaterThanEqualAndIsActiveTrueOrderByCreatedAtDesc(
    String name, int age
);
```

```java
// QueryDSL로 전환
queryFactory
    .select(user)
    .from(user)
    .where(
        nameContains(name),
        ageGoe(age),
        isActiveEq(true)
    )
    .orderBy(user.createdAt.desc())
    .fetch();
```
