# PocketBase 실행용 Dockerfile
FROM alpine:latest

# bash, libc 등 필요한 패키지 설치
RUN apk add --no-cache bash libc6-compat

# 작업 디렉토리
WORKDIR /app

# PocketBase 실행파일 복사
COPY pocketbase .

# 실행 권한 부여
RUN chmod +x /app/pocketbase

# 데이터 폴더 (없으면 자동 생성됨)
VOLUME ["/app/pb_data"]

# 포트 오픈
EXPOSE 8090

# PocketBase 실행 (모든 네트워크에서 접근 가능)
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]