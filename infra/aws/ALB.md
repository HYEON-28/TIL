# ALB란?

- 인터넷에서 들어오는 요청을 서비스들에 분배함
- Route53에서 도메인 주소요청이 들어오면 ALB주소를 알려줌.
- Fargate는 서비스 재시작 시 ip주소가 바뀌므로 하나의 태스크만 사용해도 ALB 사용 필요함
- Application 계층 -> Host 헤더를 읽을 수 있음
  - api.md-blog.org, admin.md-blog.org 등 라우팅 가능
  - 하지만 이 서비스에서는 필요가 없고, ACM인증서 부착 등이 편한 장점이 있음

## Target Group

- ALB가 요청을 받았을 때 "어디로 전달할지" 에 대한 목록
- 서비스가 스케일링 아웃 되어서 전달대상이 여러개인 경우가 많음. 이때 이 목록(Target Group) 중 ALB가 라운드 로빈 방식으로 요청을 전달함.
- ALB가 Target Group의 목록을 대상으로 주기적으로 헬스체크(/health)를 해서 실패 시 목록에서 자동 제외함
