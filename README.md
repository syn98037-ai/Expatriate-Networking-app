# Global Connect — Firebase 배포 가이드

## 📁 파일 구조
```
global-connect/
├── public/
│   └── index.html
├── src/
│   ├── firebase.js      ← ⭐ Firebase 설정 (본인 값으로 교체 필수)
│   ├── constants.js     ← 공통 상수·스타일
│   ├── App.jsx          ← 메인 앱 코드
│   └── index.js         ← 진입점
├── firestore.rules      ← Firestore 보안 규칙
├── storage.rules        ← Storage 보안 규칙
├── package.json
└── README.md
```

---

## 🔥 STEP 1 — Firebase 프로젝트 만들기

1. https://console.firebase.google.com 접속
2. **"프로젝트 추가"** 클릭
3. 프로젝트 이름: `global-connect` (원하는 이름 OK)
4. Google Analytics: 사용 안 함 선택 → **프로젝트 만들기**

---

## 🔧 STEP 2 — Firebase 서비스 3개 활성화

### ① Authentication (로그인)
- 좌측 메뉴 → **Authentication** → 시작하기
- **이메일/비밀번호** → 사용 설정 ON → 저장

### ② Firestore Database (데이터)
- 좌측 메뉴 → **Firestore Database** → 데이터베이스 만들기
- **테스트 모드로 시작** 선택
- 위치: `asia-northeast3 (서울)` → 완료

### ③ Storage (사진)
- 좌측 메뉴 → **Storage** → 시작하기
- **테스트 모드로 시작** → 완료

---

## ⚙️ STEP 3 — Firebase 설정값 복사

1. Firebase 콘솔 → **프로젝트 설정** (톱니바퀴 아이콘)
2. **"내 앱"** 섹션 → **웹 앱 추가** (`</>` 버튼)
3. 앱 닉네임 입력 → **앱 등록**
4. 아래와 같은 `firebaseConfig` 객체가 나타남:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123...",
};
```

5. 이 값들을 **`src/firebase.js`** 파일의 해당 위치에 붙여넣기

---

## 🔒 STEP 4 — 보안 규칙 설정

### Firestore 규칙
1. Firebase 콘솔 → Firestore → **규칙** 탭
2. `firestore.rules` 파일 내용 전체 복사 → 붙여넣기 → **게시**

### Storage 규칙
1. Firebase 콘솔 → Storage → **규칙** 탭
2. `storage.rules` 파일 내용 전체 복사 → 붙여넣기 → **게시**

---

## 💻 STEP 5 — GitHub에 코드 올리기

```bash
# GitHub에서 새 저장소 만든 후
git init
git add .
git commit -m "Global Connect v1.0"
git branch -M main
git remote add origin https://github.com/[내_아이디]/global-connect.git
git push -u origin main
```

---

## 🚀 STEP 6 — Vercel로 배포 (무료)

1. https://vercel.com 접속 → GitHub 계정으로 로그인
2. **"New Project"** → GitHub 저장소 선택
3. Framework: **Create React App** 자동 감지
4. **"Deploy"** 클릭
5. 완료! 자동으로 `https://global-connect-xxx.vercel.app` 링크 생성

### ✅ 이후 코드 수정할 때
```bash
git add .
git commit -m "수정 내용"
git push
```
→ Vercel이 자동으로 같은 링크에서 최신 버전으로 업데이트

---

## 📋 관리자 정보

- 비밀번호: `06080910`
- 로그인 화면 하단 **"관리자 로그인"** 클릭

---

## ⚠️ 주의사항

- 6월 교육 종료 후 Firebase 무료 한도 초과 방지를 위해 프로젝트를 비활성화하거나 삭제하세요
- Firebase 무료(Spark) 플랜 기준: Firestore 1GB, Storage 5GB, Auth 무제한
- 30~40명 수준 사용량이면 무료 한도 내 충분히 운영 가능합니다
