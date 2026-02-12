// data.js
window.PORTFOLIO_DATA = {
  // 스킬 
  skills: [
    {
      icon: "fas fa-server",
      name: "Backend Development",
      description: "Java(Spring Boot), PHP(CodeIgniter), Node.js, Python",
      progress: 75
    },
    {
      icon: "fas fa-code",
      name: "Frontend Development",
      description: "JavaScript, jQuery, React, Vue.js, JSP/Servlet",
      progress: 50
    },
    {
      icon: "fas fa-database",
      name: "Database",
      description: "MariaDB, MySQL, MongoDB, PostgreSQL, Tibero",
      progress: 70
    },
    {
      icon: "fas fa-cloud",
      name: "DevOps & Cloud",
      description: "AWS(EC2/RDS/S3), GCP, Docker, Nginx, GitHub Actions, Cloudflare",
      progress: 75
    },
    {
      icon: "fas fa-brain",
      name: "AI & ML",
      description: "TensorFlow/Keras, 강화학습(A2C), LSTM, Transformer, Gemini API",
      progress: 55
    },
    {
      icon: "fas fa-tools",
      name: "Collaboration & Tools",
      description: "Git/GitHub, GitLab, Swagger, JaCoCo, Prometheus/Grafana, Selenium",
      progress: 80
    }
  ],

  // 카드 슬라이스 부분
  projects: [
    {
      title: "가구의집 (House of Furniture)",
      description:
        "인테리어 소품 판매 + 커뮤니티 + 시공업체 연결이 결합된 원스톱 인테리어 플랫폼",
      icon: "fas fa-couch",
      image: "./assets/img/project/hof/hof_main.png",
      techStack: ["Spring Boot", "React", "AWS", "Docker", "GitHub Actions", "MariaDB", "MongoDB"],
      details: {
        role: "팀장 / DevOps & Full Stack",
        duration: "2025.01.31 - 2025.03.06",
        team: "3명",
        status: "Completed"
      },
      stats: {
        deployment: "GitHub Actions 자동 배포",
        quality: "모니터링/알림까지 운영 구성"
      },
      features: [
        "React(Yarn) + Bootstrap SCSS, Axios, Debounce 기반 프론트 구현",
        "Spring Boot 백엔드: JPA + MyBatis 병행, Security(OAuth2/메일), Swagger 문서화, JaCoCo 커버리지",
        "비동기/실시간: WebClient, WebSocket 활용",
        "Vision API 기반 이미지 분석 기능 포함",
        "IAMPORT(PortOne) 결제 연동",
        "Selenium 기반 웹 자동화/크롤링 구성",
        "AWS 인프라: EC2(Ubuntu) + RDS(MariaDB) + S3(이미지/파일 저장) + MongoDB(비정형/검색 기록)",
        "Nginx Reverse Proxy + Cloudflare DNS/도메인 연결 + SSL 적용(Backend/Frontend/모니터링 포함)",
        "CI/CD: GitHub Actions → Docker 이미지 빌드/배포 + Discord 알림(Compose 미사용, merge commit 브랜치 전략)"
      ],
      links: {
        github: "https://github.com/seunghwan94/hof-front",
        demo: null,
        download: null
      }
    },

    {
      title: "The-k (Team project)",
      description: "다각화하는 K-컬쳐 외국인 관광객 커뮤니티(정보) 플랫폼 (JSP/Servlet 기반)",
      icon: "fas fa-users",
      image: "./assets/img/project/thek/thek_main.png",
      techStack: ["Java", "JSP", "Servlet", "MariaDB", "MyBatis", "AWS", "Tomcat"],
      details: {
        role: "팀원",
        duration: "2024.10.29 - 2024.11.29",
        team: "4명",
        status: "Completed"
      },
      stats: {
        admin: "관리자/일반 사용자 구분",
        ui: "게시/갤러리/공지 + 에디터 적용"
      },
      features: [
        "Java 기반 MVC 패턴으로 JSP/Servlet 구조 설계",
        "게시판/콘텐츠 페이지 구성(소개/메인/게시/관리자 등) 및 공통 include(header/footer) 적용",
        "페이지네이션(pagination) 적용 및 UI 구조 개선",
        "에디터 적용: SmartEditor/Quill 계열 참고 구성",
        "금지어 필터(욕설/비속어) 적용 참고",
        "관리자 페이지 구성 + Chart.js 기반 통계 시각화",
        "Sidebar 등 UI 구성 요소 추가",
        "비밀번호 암호화/복호화 처리 및 권한(관리자/일반) 분리"
      ],
      links: {
        github: "https://github.com/seunghwan94/semi-theK",
        demo: null,
        download: "./assets/img/project/thek/the-k.pptx"
      }
    },

    {
      title: "GeminiCook (Gemini API 개발자 대회 제출)",
      description: "Gemini API 기반 요리/레시피 추천 Streamlit 앱 (대회 제출용 템플릿)",
      icon: "fas fa-utensils",
      image: "./assets/img/project/geminicook/main.png",
      techStack: ["Python", "Streamlit", "Gemini API", "Google Search API", "PyInstaller"],
      details: {
        role: "개인 프로젝트",
        duration: "11일",
        team: "Solo",
        status: "Submitted"
      },
      stats: {
        focus: "개인화 레시피 추천",
        delivery: "Streamlit 실행 + 결과 저장"
      },
      features: [
        "재료 입력 → 추천 레시피 생성",
        "인원/알레르기/선호도 반영(매운맛, 채식, 저탄수 등)",
        "조리 단계(steps) 구조화 출력",
        "장보기 리스트 / 조리 시간표 생성",
        "결과를 Markdown/JSON 형태로 저장"
      ],
      links: {
        github: "https://github.com/seunghwan94/Gemini_cook.git",
        demo: "https://youtu.be/FLRkyRzsFpE",
        download: null
      }
    },

    {
      title: "m/place (r/place 모방 프로젝트)",
      description: "Socket.io 기반 실시간 픽셀 드로잉 협업 보드 (DB 로그 저장 포함)",
      icon: "fas fa-paint-brush",
      image: "./assets/img/project/mplace/main.png",
      techStack: ["Node.js", "Vue.js", "Socket.io", "MariaDB", "Docker", "Nginx", "CentOS"],
      details: {
        role: "개인 프로젝트 / Full Stack & Infra",
        duration: "3주",
        team: "Solo",
        status: "Live"
      },
      stats: {
        realtime: "실시간 동기화",
        storage: "픽셀 변경 로그 저장"
      },
      features: [
        "r/place 방식의 실시간 픽셀 변경/동기화(Socket.io)",
        "Vue Canvas UI(픽셀 보드) 기반 인터랙션",
        "api/config.json 기반으로 서버/포트/DB 접속 정보 분리",
        "DB 테이블(canvas_pixels_log)로 좌표(x,y), 색상, IP, 생성시간 로그 저장",
        "Front/Back 동시 실행 구조: (Front) npm run serve + (Back) node api/server.js",
        "Docker/Nginx 기반 배포/운영 구조 경험"
      ],
      links: {
        github: "https://github.com/seunghwan94/node-vue-mplace",
        demo: "https://www.youtube.com/shorts/Rj8UQSbKMVA",
        download: null
      }
    },

    {
      title: "Stock Alphago (주식 자동 매매 시스템)",
      description: "강화학습 + 딥러닝(LSTM/Transformer) + 대신증권 API 기반 자동 매매 시스템",
      icon: "fas fa-chart-line",
      image: "./assets/img/project/stock/main.png",
      techStack: ["Python", "TensorFlow/Keras", "강화학습(A2C)", "GCP", "Docker", "Selenium", "MariaDB"],
      details: {
        role: "팀장 / 데이터 수집 & 모델링 & 인프라",
        duration: "2개월",
        team: "5명",
        status: "Completed"
      },
      stats: {
        modeling: "LSTM/Trans former 실험",
        trading: "API 연동 자동매매"
      },
      features: [
        "GCP VM 인스턴스 개발 환경 구축",
        "Selenium 기반 주식 데이터 크롤링",
        "대신증권 API 연동(실시간 데이터 수집/매매)",
        "LSTM + Attention/BN 모델 구현 및 최적화",
        "Transformer 기반 시계열 예측 모델 구현",
        "강화학습으로 buy/sell/hold 의사결정 자동화(A3C→A2C 최적화)",
        "데이터 처리/학습 속도 최적화 및 전략 개선"
      ],
      links: {
        github: null,
        demo: "./assets/img/project/stock/stock.mp4",
        download: "./assets/img/project/stock/ppt.pdf"
      }
    }
  ],

  // 맨밑 경력 부분
  timeline: [
    {
      date: "2025.05 ~ 진행중",
      title: "(주)위즈베라 - 솔루션 엔지니어",
      description:
        "Delfino/Veraport 기반 금융·공공기관 전자서명 및 보안 솔루션 기술지원. PKCS#7 서명 검증 구조, Nonce 기반 Replay 방지 로직, 브라우저-로컬모듈 통신 흐름 분석. Tomcat/JEUS 등 WAS 환경 및 Linux 로그 분석을 통한 장애 원인 파악 및 고객사 기술 대응."
    },
    {
      date: "2025.01 ~ 2025.03 [AWS 풀스택 웹 앱 개발자 과정(6개월)]",
      title: "팀 프로젝트 - 가구의집 (팀장)",
      description:
        "Spring Boot + React 기반 통합 인테리어 플랫폼 개발. AWS/CI-CD/모니터링/결제/크롤링까지 엔드투엔드 구성."
    },
    {
      date: "2024.07 ~ 2024.08",
      title: "개인 프로젝트 - m/place / GeminiCook",
      description:
        "Socket.io 실시간 협업 보드(m/place) 로컬 배포 운영 경험 및 Gemini API 기반 레시피 추천 앱(GeminiCook) 개발/출품."
    },
    {
      date: "2023.03 ~ 2024.06 [1년 3개월]",
      title: "(주)메이크봇 - 웹 개발자",
      description:
        "대한항공/환경부/풀무원 등 유지보수 및 신규 개발. 세션/통신 안정화, 쿼리 최적화, 이슈 대응으로 운영 효율 개선."
    },
    {
      date: "2021.12 ~ 2023.03 [1년 4개월]",
      title: "(주)웨인테크놀로지 - 웹 개발자",
      description:
        "키움YES저축은행 등 금융 웹 서비스 유지보수/개발. 외부 API 연동 및 보안 인증 페이지 개발, 브라우저 전환 대응."
    },
    {
      date: "2021.08 ~ 2021.11 [빅데이터 플랫폼 개발자 과정(6개월)]",
      title: "팀 프로젝트 - Stock Alphago (팀장)",
      description:
        "강화학습 + 딥러닝 기반 자동 주식 매매 시스템. GCP 인프라, 데이터 수집, 모델링, API 연동까지 수행."
    },
  ]
};
