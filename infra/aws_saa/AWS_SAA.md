공부중 링크: https://pacloud.tistory.com/45
# AWS Certified Solutions Architect - Associate 공부

## 클릭스트림 데이터
사용자가 웹이나 앱에서 "무엇을, 어떤 순서로, 언제" 행동했는지를 기록한 로그데이터.
사용자의 모든 클릭/행동을 시간 순서대로 남긴 데이터

## 
- Amazon Kinesis Data Streams: 실시간 스트리밍 데이터 수집 최적
- Amazon Kinesis Data Firehose: 운영부담없이 데이터를 자동으로 S3/Redshift/OpenSearch로 전달
- Amazon S3 데이터 레이크: 30TB/day 같은 많은 데이터 저장가능
- Amazon Redshift: 대규모 클릭스트림 데이터 고속분석(OLAP) 가능
	대규모 데이터에 대해 복잡한 SQL분석을 빠르게 수행함

- 쿼리 문자열 기반 라우팅
	- 쿼리 문자열(query string): url에서 ?뒤에 붙는 파라미터
	- 쿼리문자열 값에 따라 로드밸런서가 서로 다른 백엔드로 트래픽을 보냄
	- Application Load Balancer만 가능함

- Application Load Balancer (L7: Application)
	- path-based routing (https://api.example.com/user/login)
	- host-based routing (https://api.example.com, https://admin.example.com)
	- HTTP 헤더는 L7에서만 읽기 가능
	- URL, Path, Query, Header, Host가 나오면 -> ALB
- Network Load Balancer (L4: Transport)
	- IP, Port만 확인함
	- TCP, UDP, 고정IP, 초고성능 -> NLB
- Gateway Load Balancer (L3~L4)

- TLS/HTTPS 암호화 = 보안통신
	- TLS: Transport Layer Security, 네트워크에서 데이터를 암호화하여 안전하게 전송
	- HTTPS: HTTP + TLS, TLS를 사용하여 암호화된 웹 통신

- 트래픽 암호화: TLS/HTTPS 설정이 필요한 것.
	- "인증서"가 필요하고, 이 인증서를 ACM이 관리함.

- Outbound 접근을 URL기반으로 필터링

- AWS Network Firewall
	- L3~L7 트래픽 검사
	- 아웃바운드 트래픽 제어 기능
	- 도메인 기반 허용/차단

- AWS WAF(Web Applicaiton Firewall)
	- 인바운드 트래픽용
	- 악성트래픽으로부터 웹 어플리케이션 보호
	- HTTP/HTTPS 트래픽 검사, SQL 인젝션, 크로스 사이트 스크립팅(XSS)등 공격 방어

- 보안그룹
	- 인스턴스 단위, IP/Port 기반
	- URL(도메인) 지정 불가

- Network ACL (NACL)
	- 서브넷 단위, IP/Port

- 배스천 호스트(Bastion Host)
-프라이빗 서브넷에 있는 서버에 안전하게 접근하기 위한 “중간 관문용 서버”
-외부 네트워크와 내부 보호 영역 사이에 두는 “단일 진입 지점”

-AWS Systems Manager: 소프트웨어 패치 관련 서비스
	-AWS Systems Manager Automation: 패치작업 자동화 관리
	-AWS Systems Manager Patch Manager: 패치작업 자동화 관리
-AWS Systems Manager Run Command: 여러 인스턴스에 대해 원격으로 명령 실행. “긴급한”  패치작업을 즉시 수행가능

-AWS Snowball Edge
	-물리적인 데이터 이관. 매우큰 용량의 데이터를 마이그레이션할 때 유용함

- snowmobile
	-수백 TB~PB

-NFS(Network File System)
	-네트워크를 통해 파일 시스템을 공유하는 표준 프로토콜
	-다른 서버에 있는 디스크를 내 서버의 폴더처럼 쓰게 해주는 방식

-Amazon FSx for Windows File Server
	-완전한 Windows 네이티브 파일 시스템
	-SMB 프로토콜 지원
	-Active Directory 통합

-Amazon EFS
	-Linux/NFS 전용

-AWS 비용 분석
	-빠른 비용 분석 & 그래프 -> Cost Explorer
	-예산 초과 알림 -> AWS Budgets
	-아주 상세한 원시 데이터 분석 -> CUR + Athena / QuickSight

-예약 인스턴스(Reserved Instance)
-1,3년단위 예약가능

-온디맨드 용량 예약(On-demand Capacity Reservation)
-1주일 등 짧은기간 예약가능

-RPO(Recovery Point Objective): 복구지점 목표
-어느시점까지의 데이터 복구가 허용되는가
-최대 얼마나 많은 데이터의 손실을 허용할것인가

-RTO(Recovery Time Objective): 복구시간 목표
-얼마나 빨리 시스템을 복구해야 하는가?

-팬아웃 구조: 하나의 이벤트(메시지)를 여러 소비자에게 동시에 전달하는 구조

-Amazon RDS: 장기간 사용할 데이터베이스 인스턴스 예약 기능: RDS Reserved Service

-AWS Cloud Watch: Dashboard Share으로 AWS계정없는 사람도 접근가능


### Amazon Elastic Block Store (Amazon EBS) 

### AWS S3
데이터 저장용 서비스
- S3 Transfer Acceleration: From GLOBAL sites as quickly as possible in a SINGLE S3 bucket. Minimize operational complexity
- VPC외부에 있는 글로벌 퍼블릭 서비스
- EC2에서 S3에 접근 시 보통 인터넷 없이 접근. S3는 Gateway Endpoint 많이 사용함



### Amazon Athena
Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.

### IAM
- PrincipalOrgID: Organization을 위한 접근 정책

### VPC Endpoint
 <키워드>
- Private access to S3
- No internet access
- Access S3 from VPC
- Secure connection

### 그 외 지식
- multipart upload란?
Multipart Upload는 큰 파일을 여러 개의 작은 파트로 나누어 병렬로 업로드한 후 Amazon S3에서 하나의 객체로 합치는 업로드 방식이다. 대용량 데이터를 빠르고 안정적으로 업로드하기 위해 사용.