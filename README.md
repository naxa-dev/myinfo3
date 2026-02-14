# MyInfo3

**data.js** 파일을 수정하여 모든 콘텐츠를 쉽게 관리할 수 있도록 설계되었습니다.

## 참고 이미지

<img width="30%" alt="image" src="https://github.com/user-attachments/assets/f9b7d874-256c-432b-8d17-b4e3b5422cc7" />
<img width="30%" alt="image" src="https://github.com/user-attachments/assets/b7955193-4fd4-4d8a-bec8-f079d991403b" />
<img width="30%" alt="image" src="https://github.com/user-attachments/assets/e5449331-d17b-410c-b6f0-293cc063aebc" />
<img width="30%" alt="image" src="https://github.com/user-attachments/assets/000c9ec0-da9b-4640-842e-38c517fb82ba" />
<img width="30%" alt="image" src="https://github.com/user-attachments/assets/127df752-88ee-46dd-a16d-adf7edab091d" />
<img width="30%" alt="image" src="https://github.com/user-attachments/assets/9f6f4ff7-fc09-4537-bdc7-2e7615370c7a" />


## 📂 파일 구조

```
portfolio/
├── index.html         # 메인 HTML (직접 수정 불필요)
├── style.css          # 스타일시트 (직접 수정 불필요)
├── script.js          # 스크립트 (직접 수정 불필요)
├── data.js            #  포트폴리오 데이터 (여기만 수정)
└── assets/
    ├── img/           # 프로젝트 이미지
    └── data/          # 다운로드 파일 (PDF, DOCX 등)
```

---

## email 등록 

> https://formspree.io/ 로그인 및 도메인 등록해야 사용 가능

```javascript
contact: {
  email: "seunghwan94.dev@gmail.com",
  emailService: "https://formspree.io/f/xanygqdj"  // 이메일 전송 서비스 URL
}
```

### 아이콘 vs 이미지

- `image` 속성이 있으면 → 이미지 표시
- `image`가 `null`이면 → `icon` 속성의 Font Awesome 아이콘 표시

> **Font Awesome 아이콘 찾기**: https://fontawesome.com/icons
