# 개인 블로그 프로젝트

## 📌 프로젝트 소개

React + TypeScript + Vite로 만드는 개인 블로그

## 🎯 주요 기능

- [ ] 블로그 글 목록
- [ ] 글 상세 페이지
- [ ] 검색 기능
- [ ] 다크모드
- [ ] 반응형 디자인

## 🛠 기술 스택

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS

## 📂 프로젝트 구조

```
│
├── public/               # 정적 파일 (favicon, og:image 등)
│
├── src/                  # 실제 코드 (핵심)
│   ├── assets/           # 이미지, 폰트 등
│   ├── components/       # 재사용 컴포넌트
│   ├── data/             # 블로그 데이터
│   ├── layouts/          # 레이아웃 컴포넌트
│   ├── pages/            # 페이지 컴포넌트
│   ├── router/           # 라우터 관리
│   └── types/            # 타입
│
├── .gitignore
├── .dockerignore
├── Dockerfile            # 배포용 설정
├── fly.toml              # Fly.io 설정
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
│
├── README.md             # 프로젝트 소개
├── CHANGELOG.md          # 변경 내역
└── LICENSE.md            # 라이선스 (있으면 유지)
```

## 🚀 시작하기

```bash
npm install
npm run dev
```

## 📝 개발 로그

- 2025-10-24: 프로젝트 초기 세팅
