# JPA란

Java에서 관계형 DB를 객체지향적으로 다루기 위한 ORM 표준 인터페이스

```java
public interface UserRepositoryJpaRepository extends JpaRepository<UserRepositoryEntity, UUID> {
    boolean existsByUserIdAndIsActiveTrue(UUID userId);
}
```

`JpaRepository`를 상속하면, Spring이 메서드 이름을 파싱해서 자동으로 SQL을 생성한다.  
`existsByUserIdAndIsActiveTrue` → `WHERE user_id = ? AND is_active = true` 이런 식으로.

JPA는 인터페이스이고, Hibernate, OpenJPA등이 구현체이다.

- Spring Boot는 Hibernate를 기본 구현체로 포함시킨다.(default)
- DB 테이블과 매핑되는 클래스에는 `@Entity`를 붙여야 한다
