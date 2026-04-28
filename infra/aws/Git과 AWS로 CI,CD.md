# GIT에서 AWS로 자동배포하기

- 대략적인 구조: **GitHub + CI/CD 도구 + AWS 배포 서비스**

## 주요 조합

1. **GitHub Actions + CodeDeploy** — 가장 일반적인 방식
2. **GitHub Actions + Elastic Beanstalk** — 간단한 구조에 적합
3. **GitHub Actions + ECS** — Docker 기반
   - GitHub → Docker build → ECR push → ECS deploy
   - MSA 구조에 적합
   - 일부 서비스만 배포하거나 컨테이너 단위로 확장 가능

## Git + ECR + ECS + Fargate 자동배포 흐름

```
Git main branch 머지 (코드 변경)
  → CI/CD (빌드 & 배포)
  → Docker Image 생성
  → ECR에 푸시
  → ECS Task Definition 업데이트
  → Fargate에서 컨테이너 재실행
```

### ECR — 이미지 저장소

- CI/CD가 빌드한 Docker 이미지를 저장
- 이미지 버전 관리를 담당하며, ECS가 이곳에서 이미지를 pull

### ECS — 배포 및 관리 컨트롤러

- 어떤 이미지를 실행할지 정의 (Task Definition)
- 몇 개의 컨테이너를 띄울지 결정
- 실제 실행을 위해서는 EC2 또는 Fargate가 필요

### AWS Fargate — 실제 실행 환경

- 별도의 서버 관리 없이 컨테이너를 실행할 수 있는 서버리스 환경
