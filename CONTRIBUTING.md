# 개발 규율 (Development Guidelines)

## ⚠️ 필수 규칙

### 🔄 최신 main 브랜치 반영 (MANDATORY)
**새 작업을 시작하거나 PR을 만들기 전에 반드시 가장 최신의 main 브랜치 사항을 반영해야 합니다.**

```bash
# 새 브랜치 생성 전
git checkout main
git pull origin main
git checkout -b feature/new-feature

# PR 생성 전 (작업 중인 브랜치에서)
git checkout main
git pull origin main
git checkout feature/new-feature
git merge main  # 또는 git rebase main
```

이 규칙을 지키지 않으면:
- ❌ 머지 충돌 발생 가능
- ❌ 이미 수정된 코드를 다시 수정하는 중복 작업 발생
- ❌ PR 리뷰 지연

## 📋 Branch 명명 규칙

브랜치명은 `타입/설명` 형식을 따릅니다.

### 타입 (Type)
- `feature/` - 새로운 기능 추가
- `fix/` - 버그 수정
- `refactor/` - 코드 리팩토링 (기능 변경 없음)
- `style/` - 스타일 변경 (CSS, 포맷팅 등)
- `docs/` - 문서 수정
- `test/` - 테스트 코드 추가/수정
- `chore/` - 빌드, 설정 파일 수정

### 예시
```
feature/add-user-profile
fix/login-button-not-working
refactor/simplify-auth-logic
style/update-header-colors
docs/update-readme
```

## 📝 PR Title 규칙

PR 제목은 영문으로 작성하며, `타입: 설명` 형식을 따릅니다.

### 형식
```
Type: Brief description
```

### 타입 (Type)
- `Feature:` - 새로운 기능
- `Fix:` - 버그 수정
- `Refactor:` - 리팩토링
- `Style:` - 스타일 변경
- `Docs:` - 문서 수정
- `Test:` - 테스트 추가/수정
- `Chore:` - 기타 작업

### 예시
```
Feature: Add user authentication
Fix: Resolve login form validation issue
Refactor: Simplify API call logic
Style: Update navigation bar design
Docs: Update installation guide
```

## 🔄 작업 프로세스 (Workflow)

명령을 받았을 때 다음 단계를 따릅니다:

### 1단계: 수정 목표 파악
- 요구사항을 명확히 이해
- 수정이 필요한 파일 식별
- 변경 범위 확인

### 2단계: 브랜치 생성
```bash
# main 브랜치에서 최신 코드 가져오기
git checkout main
git pull origin main

# 새 브랜치 생성 (타입/설명 형식)
git checkout -b feature/description
```

### 3단계: 수정 진행
- 코드 수정
- 로컬에서 테스트 (가능한 경우)
- 변경사항 커밋
  ```bash
  git add .
  git commit -m "Type: Description"
  ```

### 4단계: Push 및 PR 생성
```bash
# 원격 저장소에 푸시
git push origin feature/description

# PR 생성 (GitHub CLI 사용)
gh pr create --title "Type: Description" --body "..." --base main
```

### 5단계: PR 리뷰 및 머지
- PR이 생성되면 리뷰 요청
- 수정 요청이 있으면 반영
- 승인 후 main 브랜치로 머지

## ⚠️ 주의사항

### PR 생성 전 확인사항
- [ ] main 브랜치의 최신 코드가 반영되어 있는가?
- [ ] 브랜치명이 규칙에 맞는가?
- [ ] 커밋 메시지가 명확한가?
- [ ] PR template의 모든 섹션을 작성했는가?

### 코드 작성 규칙
- 명확하고 읽기 쉬운 코드 작성
- 불필요한 주석 제거
- console.log 등 디버깅 코드 제거
- 일관된 들여쓰기 유지

## 🚀 배포 프로세스

1. PR이 main 브랜치로 머지됨
2. GitHub Actions가 자동으로 빌드 테스트 실행
3. 수동으로 배포 워크플로우 실행 (필요시)
   - GitHub Actions → "Deploy to GitHub Pages" → Run workflow

## 📚 추가 리소스

- [Git Branch 전략](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [PR 작성 가이드](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)
