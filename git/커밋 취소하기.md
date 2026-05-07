# 커밋 취소하는 방법
1. commit만 취소 (파일은 유지): git reset --soft HEAD~1
2. commit 취소 + stagaing 해제: git reset --mixed HEAD~1
3. commit + 변경사항 완전 삭제: git reset --hard HEAD~1