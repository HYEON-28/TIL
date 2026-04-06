# AWS 실무

## Git + ECR,ECS,Fargate 자동배포 환경
git에서 main branch로 머지(코드변경)
-> CI/CD (빌드&배포)
-> Docker Image생성
-> ECR에 푸시
-> ECS Task Definition 업데이트
-> Fargate에서 컨테이너 재실행

** ECR: 이미지 저장소
- CI/CD가 빌드한 Docker 이미지 저장
- 버전관리, ECS가 여기서 이미지를 pull

** ECS: 배포/관리 컨트롤러
- 어떤 이미지를 실행할지 정의(Task Definition)
- 몇개 띄울지
- 실제 실행하기 위해서는 EC2혹은 Fargate 필요

** AWS Fargate: 실제 실행 환경
- 서버 없이 컨테이너 실행
