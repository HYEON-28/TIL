# AWS SAA 공부로 배운 것

AWS의 개별 서비스 기능뿐 아니라, 대용량 트래픽과 데이터를 다루기 위해 아키텍처를 어떻게 설계해야 하는지를 배울 수 있었다.

## 아키텍처 설계 관점

- **비동기 처리와 디커플링**: 두 시스템을 직접 연결하면 한쪽 장애가 다른 쪽으로 번진다. 중간에 SQS 같은 Queue를 두면 처리 속도가 다른 시스템들을 안전하게 이어줄 수 있다.
- **고가용성(HA)과 재해복구(DR)는 다르다**: HA는 같은 Region 안에서 Multi-AZ로, DR은 Region 자체가 죽었을 때를 대비한 것. 요구사항이 단순 HA인데 Multi-Region을 쓰면 과한 설계가 된다.
- **상태 비저장 설계의 가치**: EC2 Auto Scaling이 자유롭게 동작하려면 세션을 ElastiCache(Redis)나 DynamoDB로 빼야 한다. 인스턴스에 상태를 두면 스케일 아웃이 무의미해진다.
- **읽기 부하는 캐시·리플리카로**: RDS Read Replica, CloudFront, ElastiCache 등 읽기 부하를 분산할 수단이 계층별로 존재한다.

## 비용을 의식하는 습관

같은 결과를 내더라도 어떤 서비스를 고르느냐에 따라 비용이 크게 차이 난다.

- 같은 Region의 S3/DynamoDB 접근은 **Gateway VPC Endpoint** (무료)
- 인터넷을 거치지 않는 사내 통신은 **PrivateLink / VPC Peering**
- 자주 안 쓰는 데이터는 **S3 Intelligent-Tiering / Glacier**
- 짧고 가벼운 워크로드는 EC2가 아니라 **Lambda**

## 보안 기본기

- Security Group은 **인스턴스 단위, stateful**
- NACL은 **서브넷 단위, stateless** (응답 포트도 직접 허용)
- IAM은 **최소 권한 원칙**, 자격증명은 코드에 박지 말고 IAM Role로 위임

## 후기

덤프를 풀면서 배운 것보다, 왜 그 서비스를 골라야 하는지 따라가며 익힌 게 훨씬 컸다. "이 요구사항이면 어떤 조합이 가장 적절한가?"를 떠올리는 사고방식이 생긴 게 가장 큰 수확이다.
