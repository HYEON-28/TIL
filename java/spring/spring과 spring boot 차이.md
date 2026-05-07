# Spring과 Spring Boot 차이

회사프로젝트는 Spring을 쓰기때문에 요즘 대부분 쓴다는 Spring Boot와 어떤 차이가 있는지 공부해보았다.

스프링 부트는 스프링을 좀더 쉽게 사용할 수 있게 해준다.
기존 Spring은 XML 설정, 의존성 관리, 서버 설정 등 초기 세팅이 복잡하다.
반면 Spring Boot는 Spring Initializer를 통해 빠르게 프로젝트를 생성할 수 있다.

## Spring Boot가 편한 이유

- **내장 Tomcat**: 별도 서버 설치 없이 jar 파일 하나로 실행 가능
- **Auto Configuration**: `@SpringBootApplication` 하나로 대부분의 설정이 자동으로 잡힘
- **Starter 의존성**: `spring-boot-starter-web` 같은 패키지가 관련 라이브러리를 묶어서 제공해줌. 버전 충돌 걱정이 줄어든다.
