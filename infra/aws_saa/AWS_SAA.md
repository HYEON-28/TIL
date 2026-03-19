공부중 링크: https://pacloud.tistory.com/45
# AWS Certified Solutions Architect - Associate 공부

## VPC
- 같은 VPC 내라면 서브넷이 달라도 Private IP로 통신 가능함
- 특정 리전에 속함

## VPC Endpoint
- Private access to S3
- No internet access
- Access S3 from VPC
- Secure connection
- 인터넷 게이트웨이/NAT Gateway 사용안하며 무료
- S3 + 같은 Region + 비용 절감 -> 무조건 VPC Endpoint
- DynamoDB도 동일함

## Region
- 물리적으로 떨어진 "지리적 영역"
- 큰 단위(국가/대륙)
- 사용목적: DR(재해복구), 글로벌 서비스

## Availability Zone(AZ)
- Region 내부의 "격리된 데이터센터 그룹"
- 작은 단위
- 사용목적: HA(고가용성)

## Security Group
- 기본적으로 Outbound All Allow

## Amazon AMI(Amazon Machine Image)
- AWS에서 EC2인스턴스를 생성할 때 사용하는 템플릿 이미지
- 서버의 운영체제(OS), 애플리케이션, 설정, 데이터 디스크(EBS)등을 포함한 완전한 스냅샷

## Amazon Kinesis Data Streams
- 실시간으로 발생하는 대량의 이벤트 데이터를 수집하고 여러 consumer가 동시에 처리할 수 있게 하는 서비스
- 순서보장

## AWS Glue
- 완전관리형 ETL(Extract, Transform, Load) 서비스
- Job Bookmark

## Amazon Redshift
- 대규모 클릭스트림 데이터 고속분석(OLAP) 가능 대규모 데이터에 대해 복잡한 SQL분석을 빠르게 수행함

## 
- Amazon Kinesis Data Streams: 실시간 스트리밍 데이터 수집 최적
- Amazon Kinesis Data Firehose: 운영부담없이 데이터를 자동으로 S3/Redshift/OpenSearch로 전달
- Amazon S3 데이터 레이크: 30TB/day 같은 많은 데이터 저장가능

- 쿼리 문자열 기반 라우팅
	- 쿼리 문자열(query string): url에서 ?뒤에 붙는 파라미터
	- 쿼리문자열 값에 따라 로드밸런서가 서로 다른 백엔드로 트래픽을 보냄
	- Application Load Balancer만 가능함

### Application Load Balancer (L7: Application) ALB
- path-based routing (https://api.example.com/user/login)
- host-based routing (https://api.example.com, https://admin.example.com)
- HTTP 헤더는 L7에서만 읽기 가능
- URL, Path, Query, Header, Host가 나오면 -> ALB
- ALB Listener Redirect: HTTP -> HTTPS 강제 전환 가능
- health check

### Network Load Balancer (L4: Transport)
- IP, Port만 확인함
- TCP, UDP, 고정IP, 초고성능 -> NLB

### Gateway Load Balancer (L3~L4)
- 방화벽/보안 장비 트래픽 검사

### AWS Global Accelerator
- 글로벌 latency routing을 제공
- Region 장애 시 자동 Failover


- TLS/HTTPS 암호화 = 보안통신
	- TLS: Transport Layer Security, 네트워크에서 데이터를 암호화하여 안전하게 전송
	- HTTPS: HTTP + TLS, TLS를 사용하여 암호화된 웹 통신

- 트래픽 암호화: TLS/HTTPS 설정이 필요한 것.
	- "인증서"가 필요하고, 이 인증서를 ACM이 관리함.
	
- Outbound 접근을 URL기반으로 필터링

### Gateway Load Balancer
- AWS에서 방화벽/보안 장비 트래픽 검사를 구현할 때 사용

### AWS Network Firewall
- L3~L7 트래픽 검사
- 아웃바운드 트래픽 제어 기능
- 도메인 기반 허용/차단
- VPC내부의 트래픽을 검사(Inspection)하고 필터링(filtering)

### AWS Firewall Manager
- 방화벽 정책 관리자
- AWS Network Firewall은 실제 방화벽

### AWS WAF(Web Applicaiton Firewall)
- 인바운드 트래픽용
- 악성트래픽으로부터 웹 어플리케이션 보호
- HTTP/HTTPS 트래픽 검사, "SQL 인젝션", 크로스 사이트 스크립팅(XSS)등 공격 방어

### Amazon GuardDuty
- AWS 계정과 리소스에서 발생하는 로그를 분석해 보안 "위협을 자동으로 탐지", 보안경고 생성
- Threat detection
- DDos용은 아님

## AWS Shield
- AWS Shield Standard: 기본 제공, 자동 보호
- AWS Shield Advanced: 고급 DDoS 보호

## Inspector
- Security vulnerability
- EC2 취약점 스캔 등

- 보안그룹
	- 인스턴스 단위, IP/Port 기반
	- URL(도메인) 지정 불가

- Network ACL (NACL)
	- 서브넷 단위, IP/Port

## Route53
- AWS의 DNS 서비스
- 도메인이름을 실제 서버(IP/리소스)로 연결하고 트래픽을 지능적으로 라우팅 하는 서비스


## AWS Certificate Manager(ACM)
- 웹 서비스에 HTTPS 보안 통신을 적용하기 위한 인증서를 발급/관리해주는 서비스
- HTTPS를 쓰려면 SSL/TLS 인증서 필요한데 ACM이 대신 발급&관리
- 외부 CA쓰려면 ACM IMPORT + 수동 Rotation
- 자동만료알림 제공X

## Amazon Macie
- PII(Personally identifiable information) 탐지

## Amazon AppFlow
- SaaS(Salesforce, SAP 등) <-> S3 완전 관리형 연동 서비스
- 코드 없이 데이터 수집 가능
- SaaS 데이터 수집 + 운영 최소화 문제 = EC2 제거하고 AppFlow 사용이 정답

## AWS Systems Manager
- 소프트웨어 패치 관련 서비스
	-AWS Systems Manager Automation: 패치작업 자동화 관리
	-AWS Systems Manager Patch Manager: 패치작업 자동화 관리

## AWS Systems Manager Run Command
- 여러 인스턴스에 대해 원격으로 명령 실행. “긴급한”  패치작업을 즉시 수행가능

-AWS Snowball Edge
	-물리적인 데이터 이관. 매우큰 용량의 데이터를 마이그레이션할 때 유용함

- snowmobile
	-수백 TB~PB

-AWS 비용 분석
	-빠른 비용 분석 & 그래프 -> Cost Explorer
	-예산 초과 알림 -> AWS Budgets
	-아주 상세한 원시 데이터 분석 -> CUR + Athena / QuickSight
	- raw billing data -> Cost and Usage Report

### Cost Explorer
- 비용 그래프 분석
- 서비스 / instance type / tag별 분석

### Amazon QuickSight
- 여러 데이터 소스의 데이터를 연결하여 대시보드와 데이터 시각화를 생성하고 조직 내 사용자에게 공유할 수 있는 분석 플랫폼
- IAM role 기반 공유X
- QuickSight user/group 기반 공유
- 연결가능 데이터소스: S3, RDS, Redshift, Athena, PostgreSQL, MySQL, EXCEL, CSV...


### 예약 인스턴스(Reserved Instance)
- 비용할인 목적
- 1,3년단위 예약가능

### 온디맨드 용량 예약(On-demand Capacity Reservation)
- 용량확보 목적
- 1주일 등 짧은기간 예약가능

-팬아웃 구조: 하나의 이벤트(메시지)를 여러 소비자에게 동시에 전달하는 구조

-Amazon RDS: 장기간 사용할 데이터베이스 인스턴스 예약 기능: RDS Reserved Service

### AWS Cloud Watch
- Dashboard Share으로 AWS계정없는 사람도 접근가능
- 모니터링 및 로그기록

### Cloud Watch EventBridge
- 스케줄링 가능
- 이벤트 기반 아키텍처 지원

## CloudTrail
- API audit log
- API 호출기록 (누가 무엇을 했는가)

## EC2서버
- 구매옵션
	- On-Demand: 필요할때만 사용, 시간단위 요금
	- Reserved Instance: 1~3년 약정, 24/7 사용기준 할인
	- Spot Instance: AWS 잉여용량 활용, 90%이상 할인가능, 중단가능
	- Spot Block: Spot+일정 시간 보장

### Amazon Elastic Container Service(Amazon ECS)
- Docker 컨테이너를 "배포 + 스케일링 + 운영"까지 자동으로 관리해주는 서비스
- 쿠버네티스와 같은 역할. 하지만 AWS에 특화된 더 단순한 대안

### AWS Fargate
- 컨테이너 실행만 하면 됨
- 서버(EC2) 관리 완전히 제거
- ECS + Fargate 조합으로 서버 프로비저닝, 오토스케일링 자동, 고가용성 자동 지원

### Amazon Elastic Block Store (Amazon EBS) 
- EBS = EC2 전용(EC2에서만 쓰는) 가상 하드디스크
- 단일 AZ
- 스냅샷 기능 -> S3에 저장가능
- 키워드
	- EC2 디스크
	- Low Latency storage
	- block storage
	- OS disk
- EBS fast snapshot restore

### Amazon Elastic File System (Amazon EFS)
- 여러 EC2 가 동시에 mount 가능
- 내구성 매우 높음
- 공유 파일 시스템
- 표준 파일 시스템
- Linux/NFS 전용


## Amazon FSx for Windows File Server
- 완전한 Windows 네이티브 파일 시스템
- SMB 프로토콜 지원
- Active Directory 통합
- FSx for Lustre
	- Lustre 네이티브 파일 시스템 제공

### AWS S3
데이터 저장용 서비스
- S3 Transfer Acceleration: From GLOBAL sites as quickly as possible in a SINGLE S3 bucket. Minimize operational complexity
- VPC외부에 있는 글로벌 퍼블릭 서비스
- EC2에서 S3에 접근 시 보통 인터넷 없이 접근. S3는 Gateway Endpoint 많이 사용함
	- 프라이빗 네트워크 연결
- Amazon S3 Intelligent-Tiering
	- 자동 계층 이동(Frequent <-> Infrequent)
	- 접근 패턴 자동 분석
	- AZ 장애 보호
	- 비용 최적화
- Amazon S3 Glacier Deep Archive
	- S3에서 가장 저렴한 storage
	- 장기 백업에 최적
- 정적 웹사이트(HTML, CSS, JS, 이미지)는 S3가 가장 저렴하고 운영이 필요없는 방식임
- S3 One Zone-Infrequent Access
	- 단일 가용 영역(AZ)에만 데이터 저장하는 저비용, 드물게 접근 객체 스토리지
- S3 Standard Infrequent Access
	- 드물게 접근
- Object Lock Compliance Mode(준수 모드)
	- 모든 사용자, root 포함 삭제 불가. 최대 10년
- Object Lock Governance Mode(관리 모드)
	- 권한을 가진 사용자는 삭제 가능
- Retention Period: 기간 고정, 기간이 지나야 수정가능
- Legal Hold: 기간 정하지않음, 언제든 해제가능
- Read-only ACL: 버킷 사용자는 객체 삭제/수정 가능
- Requester Pays: 데이터 요청자가 데이터 전송비용 부담
- Cross-account access: 다운로드 시 데이터 전송비용은 버킷 소유자 부담


### S3 File Gateway
- 온프레미스 파일 서버(SMB/NFS)를 Amazon S3와 연결하여 S3를 사실상 무제한 파일 스토리지처럼 사용하게 해주는 캐시 기반 게이트웨이
- 로컬처럼 보이지만 실제 저장은 S3에 함
- 자주쓰는 파일 -> 로컬 캐시

### NAT Gateway
- 하나의 AZ를 지정하여 설치함
- 프라이빗 서브넷의 리소스가 인터넷으로 나갈 수 있게 해주되, 외부에서는 직접 접근하지 못하게 만드는 서비스
- OS 업데이트, 외부 API 호출, 패키지 설치 등을 위함
- S3에만 접근이 필요할땐 VPC Endpoint 사용이 정답임
- Public Subnet에 배치해야하며 Private Subnet에서 NAT Gateway로 트래픽 라우팅

### Gateway VPC Endpoint
- 

### AWS KMS(Key Management Ssytem)
- Multi-Region customer managed key 기능 있음
- 여러 region에 replica key 생성
- 키 사용 로그 기록


### Clould Front
- 정적파일 글로벌 배포: S3 + Cloud Front
- 정적 콘텐츠: S3캐싱
- 동적 콘텐츠: ALB/EC2 전달
- 초고트래픽 대응의 핵심 기술 중 하나
	- 캐시된 파일 제공: 서버부하 없음
	- 전 세계 수백개 서버가 트래픽 분산처리
- 지역설정 따로 할 필요없이 자동으로 사용자 위치기준 가장 가까운 Edge Location으로 연결함

### Amazon Athena
- S3데이터 직접 query 가능
Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.

### IAM
- PrincipalOrgID: Organization을 위한 접근 정책
- EC2가 AWS 서비스에 접근할 때는 IAM Role 사용이 정석
	- AWS 서비스가 다른 AWS 서비스에 접근 → IAM Role
- IAM USER사용 시에는 Access Key를 서버에 저장해야 해서 보안 취약함
- EC2 -> S3 접근 : IAM Role
- Lambda -> Dynamo DB : IAM Role
- ECS -> S3 : IAM Role
- 사용자 로그인 : IAM User

### Lambda
- 대규모 + 변동트래픽 -> Serverless가 최적
- Execution Role: Lambda가 다른서비스 호출할 때
- Resource-based Policy: 누가 Lambda를 호출할 수 있는지

### AWS Elastic Beanstalk
- 코드만 올리면 AWS가 서버/배포/스케일링까지 자동으로 관리해주는 PaaS 서비스
- 내부적으로 여러 서비스를 자동으로 사용하도록 되어있음

### 데이터 업로드
- 10TB 이하 인터넷 업로드
- 10TB ~ 100TB : Snowball
- 100TB 이상: SnowMobile

### Amazon Simple Notification Service(SNS)
- 메시지를 여러 구독자에게 동시에 전달하는 AWS의 Pub/Sub(발행-구독) 메시징 서비스입니다.
- 하나의 이벤트 → 여러 시스템에 동시에 전달(Fan-out) 하는 구조를 쉽게 구현
- Amazon SNS → AWS Lambda 문제
	- 네트워크 이슈 시 이벤트 유실
	- Lambda 실패 -> 자동 재처리 없음

### Amazon Simple Queue Service (SQS)
- 플리케이션 간 메시지를 큐(Queue)에 저장하여 비동기적으로 처리하도록 하는 AWS의 완전관리형 메시지 큐 서비스
- 사용 이유: 서비스 분리(Decoupling), 서비스끼리 직접 호출하지 않음
- Standard Queue: 순서 보장X
- FIFO Queue: 순서 보장O
- ChangeMessageVisibility: 메시지를 다른 소비자가 못보게 하는 시간 변경 (메시지 중복처리 방지)

### AWS Secrets Manager
- automatic rotation
- DB 자격증명(username/password)을 안전하게 저장하고 자동으로 교체
- Automatic Rotation: 실제로 데이터베이스 비밀번호를 자동으로 변경하고, 새 비밀번호를 Secrets Manager에 업데이트까지 해줌
- Parameter Store: utomatic Rotation안됨
- Multi-Region secret replication: 여러 리전에 복제 가능

## Amazon Aurora
- AWS가 직접 만든 DB엔진
- Aurora Replicas: 읽기 확정
- Auto Scaling: read Replica 자동 추가, 삭제
- Multi-AZ: 고가용성
- RDS: Auto Scaling안됨
- MySQL/PostgreSQL만 지원
- Aurora Database Cloning: 기존 Aurora DB의 스냅샷을 기반으로 즉시
스테이징/개발 DB를 생성.

## DynamoDB
- point-in-time recovery
- On-demand capacity mode: 읽기/쓰기 트래픽이 불규칙적일때. 사용한 만큼 요금부과
- auto scaling: 반응 지연 가능

## RDS Proxy
- DB 연결 pooling(애플리케이션 -> RDS Proxy -> DB)
	- DB연결 수 급증 방지
- 최소 downtime
- DB 업그레이드중에는 연결불가 -> 일부요청 손실 가능

## AWS Config
- AWS 리소스 설정 변경 추적
- Configuration history 저장
- Compliance rule 검사
- rule: required-tags 같은것 추가가능




## Trusted Advisor
- Best practice recommendation

## AWS Direct Connect
- 온프레미스 <-> AWS 전용선 연결
- 인터넷을 완전히 우회. 인터넷 트래픽과 완전 분리

## AWS DataSync
- 온프레미스 스토리지와 AWS 클라우드 간, 혹은 AWS 서비스 간 데이터 전송을 안전하고 빠르게 자동화 하는 서비스

### Fan-out Architecture
- 하나의 이벤트(또는 메시지)를 여러 소비자(서비스)에게 동시에 전달하는 아키텍처 패턴
- 1개의 입력 → N개의 처리 시스템으로 확장 전달하는 구조
- 대표적인 구성: SNS -> SQS Fan-out

Producer
   │
   ▼
SNS Topic
   │
 ┌─┼─┬─┐
 ▼ ▼ ▼ ▼
SQS SQS SQS

- 예시: SNS 게시글 업로드
User Post
   │
   ▼
Event Bus
   │
 ┌─┼──────────┬───────────┐
 ▼ ▼          ▼           ▼
Feed Update  Notification  Search Index  Analytics

### Queue-based load leveling
          Jobs
           │
           ▼
        SQS Queue
           │
           ▼
     Auto Scaling Group
       EC2 Workers

### 데이터 분석 서비스
- Amazon Comprehend
	- 텍스트 분석 서비스
	- comprehend medical: 의료민감정보 식별
- Amazon Rekognition
	- 이미지/영상 분석 서비스
- Amazon SageMaker
	- ML모델 직접 구축 필요
	- 커스텀 ML
- Amazon Textract
	- PDF/JPEG에서 텍스트 추출

### 그 외 지식
- multipart upload란?
Multipart Upload는 큰 파일을 여러 개의 작은 파트로 나누어 병렬로 업로드한 후 Amazon S3에서 하나의 객체로 합치는 업로드 방식이다. 대용량 데이터를 빠르고 안정적으로 업로드하기 위해 사용.
- NFS(Network File System)란?
	- 네트워크를 통해 파일 시스템을 공유하는 표준 프로토콜
	- 다른 서버에 있는 디스크를 내 서버의 폴더처럼 마운트하여 쓰게 해주는 방식 
	- Linux/Unix에서 주로 사용
- SMB file server란?
	- Server Message Block
	- 네트워크 파일 공유 프로토콜
	- Windows에서 주로 사용
- Read Replica란?
	- 데이터베이스의 "읽기 전용 복제본"
	- 쓰기는 원본 DB, 읽기는 복제DB들이 처리함
	- 원본 DB가 변경된 경우 Replication Log로 데이터 변경함. 쿼리보다 훨씬 가벼움.
- data lake란?
	- 원본 형태(raw data) 그대로의 데이터를 대량으로 저장해두고 필요할 때 분석하는 데이터 저장 구조
	- 보통 S3을 data lake로 사용함
	- log.json, image.jpg, sensor.csv, video.mp4
- three-tier web application란?
	- 웹 애플리케이션을 3개의 계층(Layer)으로 분리한 아키텍처
	- Presentation Layer, Application Layer, Data Layer
	- Presentation Layer: 보통 Public Subnet에 위치
	- Application Layer: 보통 Private Subnet에 위치
	- Data Layer: 보통 Private Subnet에 위치
- applicance란?
	- 기기, 장치, 전용장비
	- 특정 기능을 수행하도록 미리 구성된 전용 장비 또는 소프트웨어
- CDN이란?
	- Content Delivery Network (콘텐츠 전달 네트워크)
	- "전 세계 여러 서버"에 콘텐츠를 "캐싱"하여 사용자에게 "가장 가까운" 서버에서 빠르게 전달하는 시스템
	- Amazon CloudFront, Cloudflare, Akamai Technologies, Fastly
- 배스천 호스트(Bastion Host)란?
	- 프라이빗 서브넷에 있는 서버에 안전하게 접근하기 위한 “중간 관문용 서버”
	- 외부 네트워크와 내부 보호 영역 사이에 두는 “단일 진입 지점”
- IOPS란?
	- Input/Output Operations Per Second
	- 초당 디스크가 처리할 수 있는 입출력 작업 수
	- 스토리지 성능(DB 속도)를 결정하는 핵심지표
	- Provisioned IOPS SSD: 원하는 IOPS 직접 설정하고 안정적인 고성능 확보 가능
- SFTP란?
	- SSH기반 파일전송 프로토콜
- call transcript files란?
	- transcript: 기록된 텍스트
	- 통화 내용을 텍스트로 기록한 파일(대화 녹취록)
- RPO(Recovery Point Objective)란?
	- 복구지점 목표
	- 어느시점까지의 데이터 복구가 허용되는가
	- 최대 얼마나 많은 데이터의 손실을 허용할것인가
- RTO(Recovery Time Objective)란?
	- 복구시간 목표
	- 얼마나 빨리 시스템을 복구해야 하는가?
- 클릭스트림 데이터란?
	- 사용자가 웹이나 앱에서 "무엇을, 어떤 순서로, 언제" 행동했는지를 기록한 로그데이터.
	- 사용자의 모든 클릭/행동을 시간 순서대로 남긴 데이터
- Source IP란?
	- 요청을 보내는 위치의 IP주소
- non-VPC 트래픽이란?
	- VPC내부의 IP주소 범위이면 VPC 트래픽
	- 그 외부로 나가는 트래픽이면 non-VPC 트래픽(인터넷으로 나감)
- at-rest 암호화란?
	- "rest" = 가만히 있는 상태 (데이터가 저장되어 있는 상태)
	- 디스크에 쓸 때 암호화, 읽을 때 복호화