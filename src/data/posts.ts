import { type Post } from "../types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "React와 TypeScript로 블로그 만들기",
    summary:
      "Vite, React Router, Tailwind를 사용해서 개인 블로그를 만드는 과정을 공유합니다.",
    content: `
# React와 TypeScript로 블로그 만들기

Vite를 사용하면 정말 빠르게 프로젝트를 시작할 수 있어요.

## 주요 기술 스택
- React 19
- TypeScript
- Tailwind CSS v4
- React Router

개발하면서 배운 점들을 정리해봤습니다.
    `,
    date: "2025-01-24",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    id: 2,
    title: "Tailwind CSS v4 사용 후기",
    summary:
      "최신 버전인 Tailwind v4의 새로운 기능들과 마이그레이션 경험을 공유합니다.",
    content: `
# Tailwind CSS v4 사용 후기

v4는 정말 빠르고 간단해졌어요!

## 주요 변경사항
- 설정 파일 불필요
- 빌드 속도 10배 향상
- 새로운 유틸리티 클래스

자세한 내용은 본문에서 확인하세요.
    `,
    date: "2025-01-23",
    tags: ["CSS", "Tailwind", "Frontend"],
  },
  {
    id: 3,
    title: "TypeScript 제네릭 완벽 정리",
    summary:
      "TypeScript의 제네릭을 처음 배우는 분들을 위한 쉬운 설명과 예제를 준비했습니다.",
    content: `
# TypeScript 제네릭 완벽 정리

제네릭은 처음엔 어렵지만, 이해하면 정말 유용해요.

## 기본 개념
제네릭은 타입을 변수처럼 사용하는 거예요.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

실전 예제도 함께 살펴봅시다!
    `,
    date: "2025-01-22",
    tags: ["TypeScript", "Programming"],
  },
  {
    id: 4,
    title: "React 19 새로운 기능 살펴보기",
    summary: "React 19에서 추가된 새로운 기능들과 변경사항을 정리했습니다.",
    content: `
# React 19 새로운 기능

React 19가 드디어 정식 출시됐어요!

## 주요 변화
- Actions
- use hook
- ref as prop

하나씩 자세히 알아봅시다.
    `,
    date: "2025-01-21",
    tags: ["React", "JavaScript"],
  },
  {
    id: 5,
    title: "Git 브랜치 전략 정리",
    summary: "효과적인 Git 브랜치 전략과 커밋 컨벤션에 대해 알아봅니다.",
    content: `
# Git 브랜치 전략

팀 프로젝트에서 사용하기 좋은 브랜치 전략을 소개합니다.

## Git Flow
- main: 배포용
- develop: 개발 메인
- feature: 기능 개발

실제 사용 예시도 함께 봅시다!
    `,
    date: "2025-01-20",
    tags: ["Git", "DevOps"],
  },
];
