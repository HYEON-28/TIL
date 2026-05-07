# MySql과 MS-SQL의 차이

## 문법상 차이

- IF문 -> IF, IIF 등
- NOW(), GETDATE() 등등

## 유료, 무료 여부

- MySql: 대부분 무료이나 프로그램을 판매할 경우 유료버전 사용해야함
- MS-SQL: 유료

## OS 친화도

- MySQL: 리눅스에서 사용하기 간편
- MS-SQL: 윈도우에서 사용하기 간편

## 저장 프로시저

- MS-SQL: 에러핸들링 쉬움, SSMS에서 중단점 디버깅 가능
- MySQL: 에러핸들링 어렵고 동적 SQL작성 시 다소 불편
- 복잡한 프로시저 작성이 필요한 MES등의 환경에서는 MS-SQL이 편함

## 한국 MES 업계에서 MS-SQL을 주로 쓰는 이유

- 대부분 국내 제조 공장은 Windows Server 기반 인프라 (PLC, SCADA, HMI 장비들이 Windows 친화적)
- 한국의 공장에서 주로 쓰는 ERP(더존, 영림원 등)이 MSSQL과 잘 맞음
  - MS-SQL이 윈도우 환경에서 설치/운영이 편함
- 고객사 입장 또는 IT 감리에서 "무료 오픈소스 DB"보다 "유료 상용 DB"가 심리적으로 신뢰감을 주기 때문
