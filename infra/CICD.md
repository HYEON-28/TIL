# GIT에서 AWS로 자동배포하기

- 대략적인 구조: GitHub + CI/CD도구 + AWS 배포 서비스

1) GitHub Actions + CodeDeploy (가장 일반적) 
2) GitHub Actions + Elastic Beanstalk (간단한 구조)
3) GitHub Actions + ECS (Docker 기반)
    - GitHub → Docker build → ECR push → ECS deploy
    - MSA 구조에 적합
    - 일부 서비스만 배포 가능, 컨테이너 단위로 확장 가능 