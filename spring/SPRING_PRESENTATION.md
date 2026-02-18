# 이 프레임워크의 구조에 대하여
> 역량강화교육 발표자료 | Spring을 처음 접하는 분들을 위한 안내

---

## 목차

1. [Spring 프레임워크 개요](#1-spring-프레임워크-개요)
2. [프로젝트 전체 구조](#2-프로젝트-전체-구조)
3. [MVC 패턴](#3-mvc-패턴)
4. [계층 구조 (Controller - Service - DAO)](#4-계층-구조-controller---service---dao)
5. [데이터 접근 계층 (MyBatis)](#5-데이터-접근-계층-mybatis)
6. [Spring 설정 파일](#6-spring-설정-파일)
7. [보안 처리 (Spring Security)](#7-보안-처리-spring-security)
8. [화면(View) 처리](#8-화면view-처리)

---

## 1. Spring 프레임워크 개요

### 1) Spring이란?

Spring은 Java 기반의 **웹 애플리케이션을 만들기 위한 틀(프레임워크)**이다.

- **프레임워크(Framework)** : 집을 지을 때 철골 구조를 먼저 세우듯, 개발자가 기능 구현에만 집중할 수 있도록 기본 뼈대를 제공하는 도구
- 반복적으로 작성해야 하는 코드(보안, DB 연결, 트랜잭션 등)를 프레임워크가 대신 처리해줌
- 현재 이 프로젝트는 **Spring 5.3.27** 버전 사용

> **비유** : Spring은 레스토랑의 주방 설비와 같다. 요리사(개발자)는 요리(비즈니스 로직)에만 집중하면 되고, 불 조절·위생 관리·식기 세척(공통 기능)은 주방 설비가 알아서 처리한다.

---

### 2) Spring을 쓰는 이유

| 이유 | 설명 |
|------|------|
| **생산성** | 반복 코드를 줄여 개발 속도를 높임 |
| **유지보수성** | 역할을 명확히 분리하여 수정이 쉬움 |
| **보안** | Spring Security로 로그인·권한 관리를 표준화 |
| **생태계** | 전 세계적으로 가장 많이 쓰이는 Java 프레임워크 |
| **표준화** | 한국 공공기관 표준(eGovFrame)의 기반 기술 |

---

### 3) Spring MVC란?

**MVC** 는 Model, View, Controller의 약자로 웹 요청을 처리하는 방식이다.

```
사용자 요청 → Controller → Service → DB
                  ↓
              View(화면) → 사용자에게 응답
```

- **Spring MVC** 는 이 MVC 패턴을 Spring이 구조화한 방식
- 요청 URL에 따라 어느 Controller를 실행할지 자동으로 연결해줌

---

### 4) 전자정부 표준 프레임워크(eGovFrame)란?

- 행정안전부가 Spring을 기반으로 만든 **공공기관 전용 개발 표준**
- 이 프로젝트는 **eGovFrame 4.2.0** 버전 적용

```
eGovFrame
    └── Spring (기반 기술)
          ├── Spring MVC (웹 처리)
          ├── Spring Security (보안)
          └── MyBatis (DB 접근)
```

eGovFrame이 제공하는 주요 기능:
- 공통 보안 설정 (`egov-security`)
- 공통 DAO 클래스 (`EgovAbstractServiceImpl`, `EgovComAbstractDAO`)
- 암호화, 사용자 인증 등 공공기관 표준 모듈

---

### 5) 이 프로젝트에서 eGovFrame을 사용하는 이유

- 공공기관 납품 기준에 적합한 **보안 표준** 충족
- 반복 구현 없이 로그인·권한·세션 관리를 표준 방식으로 처리
- 유지보수 담당자가 바뀌어도 **동일한 패턴**으로 코드를 읽고 수정 가능

---

## 2. 프로젝트 전체 구조

### 1) 디렉토리 구조 개요

```
type123/
├── pom.xml                         ← 프로젝트 설정 및 라이브러리 목록
└── src/
    └── main/
        ├── java/kstcenter/         ← Java 소스코드 (비즈니스 로직)
        │   ├── cmm/                 ← 공통 기능 (필터, 유틸, 공통 VO)
        │   ├── login/               ← 로그인 기능
        │   ├── main/                ← 메인 화면
        │   ├── repair/              ← 수리 업무 (접수/무상/유상)
        │   ├── sys/                 ← 시스템 관리 (사용자, 메뉴, 코드 등)
        │   └── api/                 ← 모바일 API
        ├── resources/              ← 설정 파일 모음
        │   ├── spring/              ← Spring 설정 XML들
        │   ├── mapper/              ← SQL 쿼리 파일 (MyBatis)
        │   └── messages/            ← 다국어 메시지
        └── webapp/
            ├── WEB-INF/
            │   ├── jsp/             ← 화면 파일 (JSP)
            │   ├── config/          ← MVC 설정
            │   └── tiles/           ← 레이아웃 정의
            └── static/              ← CSS, JS, 이미지
```

---

### 2) 빌드 도구(Maven)란?

**Maven** 은 프로젝트를 **빌드(컴파일·패키징)** 하고 외부 라이브러리를 **자동으로 다운로드**해주는 도구다.

> **비유** : Maven은 장보기 목록(pom.xml)을 보고 마트(Maven 저장소)에서 재료(라이브러리)를 자동으로 가져다주는 역할

---

### 3) pom.xml 역할

`pom.xml` 은 Maven의 핵심 설정 파일이다.

```xml
<!-- 이 프로젝트의 pom.xml 주요 내용 -->
<groupId>kr.co.kstcenter</groupId>
<artifactId>type123</artifactId>
<version>1.0.0</version>

<!-- 사용할 라이브러리 목록 -->
<dependencies>
    <dependency>Spring MVC</dependency>
    <dependency>MyBatis</dependency>
    <dependency>MS SQL Server 드라이버</dependency>
    ...
</dependencies>
```

- `groupId` : 회사/조직 식별자
- `artifactId` : 프로젝트 이름
- `dependencies` : 필요한 외부 라이브러리 목록 (Maven이 자동 다운로드)

---

### 4) 이 프로젝트의 주요 라이브러리

| 라이브러리 | 역할 |
|-----------|------|
| `Spring 5.3.27` | 웹 애플리케이션 핵심 프레임워크 |
| `eGovFrame 4.2.0` | 공공기관 표준 프레임워크 |
| `MyBatis 3.5.11` | DB 쿼리 처리 (SQL Mapper) |
| `MS SQL Server` | 데이터베이스 드라이버 |
| `Spring Security` | 로그인·권한 보안 처리 |
| `Apache Tiles 3` | 화면 레이아웃 관리 |
| `JWT (java-jwt)` | 모바일 API 인증 토큰 |
| `Lombok` | 반복 코드 자동 생성 (`@Slf4j`, `@Getter` 등) |
| `Log4j2` | 로그 기록 |
| `Jackson` | Java 객체 ↔ JSON 변환 |
| `JasperReports` | 보고서(PDF) 출력 |

---

## 3. MVC 패턴

### 1) MVC 패턴 의미

MVC는 **관심사를 세 가지 역할로 분리**하는 설계 방식이다.

| 역할 | 약자 | 담당 |
|------|------|------|
| **Model** | M | 데이터 처리 및 비즈니스 로직 |
| **View** | V | 사용자에게 보여주는 화면 |
| **Controller** | C | 사용자 요청을 받아 Model과 View를 연결 |

---

### 2) MVC 패턴 필요성

MVC 없이 개발하면 어떻게 될까?

```
❌ MVC 없을 때
하나의 파일에 DB 쿼리 + 비즈니스 로직 + 화면 HTML이 모두 섞임
→ 화면을 바꾸려면 DB 코드까지 건드려야 함
→ 유지보수가 매우 어려움

✅ MVC 있을 때
Controller : 요청 수신만 담당
Service    : 계산·처리만 담당
View(JSP)  : 화면 출력만 담당
→ 화면 수정은 JSP만, DB 수정은 Service·DAO만 건드리면 됨
```

---

### 3) 요청 처리 흐름

```
[사용자 브라우저]
       │  /repair/order/search.do 요청
       ▼
[dispatcher-servlet] ← Spring이 요청을 가로채 적절한 Controller로 연결
       │
       ▼
[Controller] KstcOrderController
  @RequestMapping("/repair/order/search.do")
       │  Service 호출
       ▼
[Service] KstcOrderServiceImpl
  - 비즈니스 로직 처리
       │  DAO 호출
       ▼
[DAO] KstcOrderDAO
  - "orderMapper.selectList" 실행
       │
       ▼
[Mapper XML] kstc_order_sql.xml
  - 실제 SQL 실행 → MS SQL Server
       │
       ▼ 결과 반환 (역방향으로 전달)
[View] ViewOrder.jsp 또는 JSON 응답
       │
       ▼
[사용자 브라우저] 화면 표시
```

---

## 4. 계층 구조 (Controller - Service - DAO)

### 1) 계층 구조란?

역할에 따라 코드를 **3개의 층(Layer)** 으로 나누는 방식이다.

```
┌─────────────────────────────────┐
│          Controller (web)        │  ← 요청/응답 담당
├─────────────────────────────────┤
│           Service (service)      │  ← 비즈니스 로직 담당
├─────────────────────────────────┤
│            DAO (impl)            │  ← DB 접근 담당
└─────────────────────────────────┘
              ↕
         MS SQL Server
```

---

### 2) 계층 구조 필요성

| 문제 상황 | 계층 구조가 없다면 | 계층 구조가 있다면 |
|-----------|-------------------|-------------------|
| DB가 바뀜 | 전체 코드 수정 | DAO만 수정 |
| 화면이 바뀜 | 비즈니스 로직까지 영향 | Controller·JSP만 수정 |
| 계산 로직 변경 | 어디 코드인지 찾기 어려움 | Service만 수정 |

---

### 3) Controller 역할

- 사용자의 HTTP 요청(URL)을 받아서 처리 결과를 돌려주는 **교통 정리자**
- `@Controller` 어노테이션으로 선언
- `@RequestMapping` 으로 어떤 URL에 반응할지 지정

```java
// 실제 프로젝트 코드: KstcOrderController.java
@Controller
public class KstcOrderController {

    @RequestMapping("/repair/order/view.do")
    public String showApp(ModelMap model) {
        return "repair/order/ViewOrder";   // → ViewOrder.jsp 화면 반환
    }

    @RequestMapping("/repair/order/search.do")
    @ResponseBody
    public SelectList<OrderVO> selectList(@RequestBody OrderVO vo) {
        return kstcOrderService.selectList(vo);   // → JSON 데이터 반환
    }
}
```

---

### 4) Service 역할

- 실제 **업무 처리 로직**이 담기는 곳
- `@Service` 어노테이션으로 선언
- Interface(인터페이스)와 Impl(구현체)로 분리하여 유연성 확보

```java
// 실제 프로젝트 코드: KstcOrderServiceImpl.java
@Service("kstcOrderService")
public class KstcOrderServiceImpl extends EgovAbstractServiceImpl
                                  implements KstcOrderService {
    @Override
    public MsgVO saveSr(OrderVO vo) throws Exception {
        vo.setInId(KF.getWhoAmI().getUserId());  // 현재 로그인 사용자 ID 세팅
        kstcOrderDAO.saveSr(vo);                  // DAO에 DB 저장 요청

        MsgVO msg = new MsgVO();
        msg.setCode("S");
        msg.setMsg("저장되었습니다.");
        return msg;
    }
}
```

---

### 5) DAO 역할

- **DB에 직접 접근**하는 코드가 담긴 곳 (Data Access Object)
- `@Repository` 어노테이션으로 선언
- Mapper XML의 SQL ID를 호출하여 쿼리를 실행

```java
// 실제 프로젝트 코드: KstcOrderDAO.java
@Repository("kstcOrderDAO")
public class KstcOrderDAO extends EgovComAbstractDAO {

    public List<OrderVO> selectList(OrderVO vo) throws Exception {
        return selectList("orderMapper.selectList", vo);  // XML의 SQL 호출
    }

    public void saveSr(OrderVO vo) throws Exception {
        insert("orderMapper.saveSr", vo);
    }
}
```

---

### 6) VO(Value Object) 역할

- 계층 간에 **데이터를 담아 전달**하는 객체 (일종의 데이터 바구니)
- Lombok의 `@Data` 또는 getter/setter로 값을 읽고 씀

```
사용자가 검색 조건을 입력
    → OrderVO에 담아서 Controller로 전달
    → Controller가 OrderVO를 Service에 전달
    → Service가 OrderVO를 DAO에 전달
    → DAO가 OrderVO를 SQL에 바인딩하여 실행
    → 결과를 다시 OrderVO에 담아 역방향으로 전달
```

---

### 7) 이 프로젝트의 실제 계층 구조 예시

`repair/order` (유지보수 접수) 기능을 예로 들면:

```
kstcenter/repair/order/
├── web/
│   └── KstcOrderController.java    ← Controller
├── service/
│   ├── KstcOrderService.java       ← Service 인터페이스
│   └── OrderVO.java                ← 데이터 전달 객체
└── service/impl/
    ├── KstcOrderServiceImpl.java   ← Service 구현체
    └── KstcOrderDAO.java           ← DAO

resources/mapper/kstc/repair/
└── kstc_order_sql.xml              ← SQL 쿼리 파일
```

모든 기능 모듈(`login`, `sys`, `repair`, `api`)이 이 동일한 구조를 반복한다.

---

## 5. 데이터 접근 계층 (MyBatis)

### 1) MyBatis란?

- Java 코드와 SQL을 **분리하여 관리**할 수 있게 해주는 DB 접근 도구
- SQL을 별도의 XML 파일에 작성 → Java 코드를 깔끔하게 유지

| 비교 | 순수 JDBC | MyBatis |
|------|-----------|---------|
| SQL 위치 | Java 코드 안에 문자열로 작성 | XML 파일에 따로 작성 |
| 결과 처리 | 수동으로 ResultSet 처리 | 자동으로 VO에 매핑 |
| 유지보수 | SQL 수정 시 Java 재컴파일 필요 | XML만 수정하면 됨 |

---

### 2) MyBatis 동작 방식

```
DAO.selectList("orderMapper.selectList", vo)
        │
        ▼
MyBatis가 kstc_order_sql.xml에서
namespace="orderMapper", id="selectList" 를 찾음
        │
        ▼
vo의 값(fromDate, toDate, prjCd...)을 SQL의 #{} 자리에 바인딩
        │
        ▼
SQL 실행 → 결과 행을 자동으로 OrderVO 리스트로 변환
        │
        ▼
DAO가 List<OrderVO>를 반환
```

---

### 3) Mapper XML 구조 예시

```xml
<!-- kstc_order_sql.xml -->
<mapper namespace="orderMapper">

    <!-- 조회: id로 Java에서 호출, resultType으로 자동 변환 -->
    <select id="selectList"
            parameterType="kstcenter.repair.order.service.OrderVO"
            resultType="kstcenter.repair.order.service.OrderVO">
        SELECT A.SR_NO, A.REQ_NM, B.CUST_NM
        FROM SR A
        LEFT JOIN PROJECT B ON A.PRJ_CD = B.PRJ_CD
        WHERE A.REQ_DD BETWEEN #{fromDate} AND #{toDate}
    </select>

    <!-- 저장 -->
    <insert id="saveSr" parameterType="...OrderVO">
        INSERT INTO SR (SR_NO, PRJ_CD, REQ_NM, ...)
        VALUES (#{srNo}, #{prjCd}, #{reqNm}, ...)
    </insert>

    <!-- 수정 -->
    <update id="updateSr" parameterType="...OrderVO">
        UPDATE SR SET REQ_NM=#{reqNm}, UP_DT=getdate()
        WHERE SR_NO=#{srNo}
    </update>

    <!-- 삭제 -->
    <delete id="deleteSr" parameterType="...OrderVO">
        DELETE FROM SR WHERE SR_NO=#{srNo}
    </delete>

</mapper>
```

---

### 4) 동적 SQL

MyBatis는 조건에 따라 SQL을 **동적으로 변경**할 수 있다.

```xml
<select id="selectList" ...>
    SELECT * FROM SR
    WHERE FIN_YN = 'N'
      AND REQ_DD BETWEEN #{fromDate} AND #{toDate}

    <!-- prjCd 값이 있을 때만 이 조건을 추가 -->
    <if test='prjCd != null and prjCd != ""'>
        AND PRJ_CD = #{prjCd}
    </if>

    <!-- ownId 값이 있을 때만 이 조건을 추가 -->
    <if test='ownId != null and ownId != ""'>
        AND OWN_ID = #{ownId}
    </if>
</select>
```

> 검색 필터가 있는 목록 화면에서 주로 사용. 입력한 조건만 WHERE절에 자동 추가됨.

---

## 6. Spring 설정 파일

### 1) 설정 파일 목록과 역할

```
src/main/resources/spring/
├── context-datasource.xml      ← DB 연결 정보
├── context-mapper.xml          ← MyBatis 연결 설정
├── context-transaction.xml     ← 트랜잭션(데이터 일관성) 설정
├── context-security.xml        ← 보안·로그인 설정
├── context-aspect.xml          ← AOP(공통 처리) 설정
├── context-common.xml          ← 공통 Bean 설정
└── context-idgen.xml           ← ID 자동 생성 설정

src/main/webapp/WEB-INF/config/
└── dispatcher-servlet.xml      ← MVC 핵심 설정 (요청 라우팅)
```

> **설정 파일** : 스프링이 시작될 때 읽는 설명서. 어떤 DB에 연결하고, 어떤 보안 규칙을 적용하는지 등을 정의.

---

### 2) context-datasource.xml (DB 연결)

```xml
<!-- 어떤 DB에 어떻게 접속할지 정의 -->
<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
    <property name="driverClassName" value="${Globals.mssql.driverClassName}"/>
    <property name="url"             value="${Globals.mssql.url}" />
    <property name="username"        value="${Globals.mssql.username}"/>
    <property name="password"        value="${Globals.mssql.password}"/>
</bean>
```

- 실제 접속 정보(`url`, `username`, `password`)는 `globals.properties` 파일에서 읽어옴
- **DBCP2** (DB Connection Pool): DB 연결을 미리 여러 개 만들어 놓고 재사용 → 성능 향상

---

### 3) dispatcher-servlet.xml (MVC 핵심 설정)

```xml
<!-- @Controller 어노테이션이 붙은 클래스를 자동 탐색 -->
<context:component-scan base-package="kstcenter">
    <context:include-filter type="annotation"
        expression="org.springframework.stereotype.Controller"/>
</context:component-scan>

<!-- 화면(View) 처리 순서 설정 -->
<!-- 1순위: Tiles 레이아웃 -->
<bean class="UrlBasedViewResolver">
    <property name="viewClass" value="TilesView" />
    <property name="order" value="1"/>
</bean>
<!-- 3순위: JSP 직접 연결 -->
<bean class="InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/jsp/" />
    <property name="suffix" value=".jsp" />
    <property name="order" value="3" />
</bean>
```

---

## 7. 보안 처리 (Spring Security)

### 1) Spring Security란?

- 로그인·로그아웃·권한 제어를 담당하는 Spring 보안 모듈
- 이 프로젝트는 **eGovFrame의 egov-security** 로 Spring Security를 설정

핵심 개념:
- **인증(Authentication)** : "당신이 누구인지" 확인 → 로그인
- **인가(Authorization)** : "당신이 이 기능을 쓸 수 있는지" 확인 → 권한 체크

---

### 2) 이 프로젝트의 로그인 처리 흐름

```
사용자가 아이디/비밀번호 입력
        │
        ▼
[Spring Security Filter]
jdbcUsersByUsernameQuery로 USERS 테이블에서 사용자 조회
        │
        ▼
jdbcAuthoritiesByUsernameQuery로
USER_GROUP_AUTHORITY 테이블에서 권한(ROLE) 조회
        │
        ▼
인증 성공 → /login/landingMain.do 로 이동
인증 실패 → /login/loginFail.do 로 이동
        │
        ▼
[세션에 로그인 정보 저장]
KstcSessionMapping 클래스가 사용자 정보를 세션에 기록
→ 이후 KF.getWhoAmI().getUserId() 로 어디서든 현재 사용자 조회 가능
```

---

### 3) URL 권한 제어

```
ROLES 테이블 + ROLE_AUTHORITY 테이블로 URL별 권한을 DB에서 관리

예:
/sys/** URL → ROLE_ADMIN 권한 필요
/repair/** URL → ROLE_USER 권한 필요
/static/** → 권한 없이 접근 가능 (CSS, JS)
```

- 권한이 없는 URL 접근 시 `/login/accessDenied.do` 로 이동
- 동시 접속 최대 10세션 제한 (`concurrentMaxSessions="10"`)

---

### 4) JWT 토큰 (모바일 API)

이 프로젝트에는 웹 화면 외에 **모바일 API** 도 있다. (`kstcenter/api/mobile`)

- 모바일 앱은 세션 방식 대신 **JWT(JSON Web Token)** 를 사용
- JWT는 로그인 성공 시 발급되는 **암호화된 열쇠(토큰)**

```
모바일 앱 로그인 요청
        │
        ▼
서버가 JWT 토큰 발급 (사용자 정보 + 만료시간 포함)
        │
        ▼
앱이 이후 모든 요청에 토큰을 헤더에 담아 전송
        │
        ▼
서버가 토큰 유효성 검증 → 통과 시 데이터 반환
```

---

## 8. 화면(View) 처리

### 1) JSP란?

**JSP (Java Server Pages)** 는 HTML에 Java 코드를 넣을 수 있는 화면 파일이다.

```
파일 위치: src/main/webapp/WEB-INF/jsp/
예시: WEB-INF/jsp/repair/order/ViewOrder.jsp
```

- Controller가 `return "repair/order/ViewOrder"` 를 반환하면
- Spring이 자동으로 `/WEB-INF/jsp/repair/order/ViewOrder.jsp` 파일을 찾아 렌더링

---

### 2) Apache Tiles란?

여러 JSP 파일을 **레고 블록처럼 조합**하여 공통 레이아웃을 적용하는 도구이다.

```
레이아웃 구성 (layoutKstBasic.jsp)
┌──────────────────────────────┐
│         header.jsp           │  ← 상단 공통 헤더
├──────────────────────────────┤
│                              │
│         body (각 JSP)        │  ← 화면마다 달라지는 본문
│                              │
├──────────────────────────────┤
│         footer.jsp           │  ← 하단 공통 푸터
└──────────────────────────────┘
```

> Tiles가 없다면: 모든 JSP 파일에 header/footer 코드를 복붙해야 함 → 헤더 수정 시 전체 파일 수정 필요

---

### 3) 이 프로젝트의 레이아웃 구성

`tiles-definitions.xml` 에서 레이아웃 규칙을 정의:

```xml
<!-- 기본 레이아웃: 헤더 + 본문 + 푸터 -->
<definition name="kstBasicLayout" template="layoutKstBasic.jsp">
    <put-attribute name="header" value="kstHeader.jsp" />
    <put-attribute name="footer" value="kstFooter.jsp" />
</definition>

<!-- repair/** URL은 기본 레이아웃을 사용 -->
<definition name="repair/**" extends="kstBasicLayout">
    <put-attribute name="body" value="/WEB-INF/jsp/repair/{1}.jsp" />
</definition>

<!-- login/** URL은 헤더/푸터 없는 빈 레이아웃 -->
<definition name="login/**" extends="kstEmptyLayout">
    <put-attribute name="body" value="/WEB-INF/jsp/login/{1}.jsp" />
</definition>
```

---

### 4) 정적 자원(CSS, JS) 관리

```
src/main/webapp/static/
├── css/
│   ├── main.css       ← 전체 공통 스타일
│   ├── modal.css      ← 팝업 스타일
│   └── custom.css     ← 커스텀 스타일
├── js/
│   └── sbux/          ← SBGrid (그리드 컴포넌트)
│       └── toast/     ← TUI Grid, DatePicker
└── fonts/
    └── MaterialSymbols (아이콘 폰트)
```

- `context-security.xml` 에서 `/static/**` 경로는 **보안 적용 제외**로 설정
- → 로그인 없이도 CSS, JS 파일에 접근 가능

---

## 전체 흐름 요약

```
[사용자]
   │ URL 요청 (예: /repair/order/search.do)
   ▼
[Spring Security Filter]
   │ 로그인 여부 & 권한 확인
   ▼
[dispatcher-servlet]
   │ URL에 맞는 Controller 탐색
   ▼
[Controller] KstcOrderController
   │ @RequestMapping으로 요청 수신, Service 호출
   ▼
[Service] KstcOrderServiceImpl
   │ 비즈니스 로직 처리, DAO 호출
   ▼
[DAO] KstcOrderDAO
   │ Mapper XML ID 호출
   ▼
[Mapper XML] kstc_order_sql.xml
   │ SQL 실행
   ▼
[MS SQL Server]
   │ 데이터 반환
   ▼ (역방향으로 결과 전달)
[View] ViewOrder.jsp + Tiles 레이아웃
   │
   ▼
[사용자] 화면 확인
```

---

## 기술 스택 한눈에 보기

| 구분 | 기술 | 버전 |
|------|------|------|
| 언어 | Java | 17 |
| 프레임워크 | Spring MVC | 5.3.27 |
| 공공 표준 | eGovFrame | 4.2.0 |
| 빌드 | Maven | - |
| DB | MS SQL Server | - |
| SQL Mapper | MyBatis | 3.5.11 |
| 보안 | Spring Security (eGovFrame) | - |
| 모바일 인증 | JWT | java-jwt 4.4.0 |
| 화면 | JSP + Apache Tiles | 3.0.8 |
| 로그 | Log4j2 | 2.24.0 |
| 보고서 | JasperReports | 6.21.0 |

---

*작성: 한국스마트기술센터 | 역량강화교육*
