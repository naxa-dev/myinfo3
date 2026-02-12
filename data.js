// data.js
window.PORTFOLIO_DATA = {
  // Contact 정보 (이메일 전송용)
  contact: {
    email: "seunghwan94.dev@gmail.com",
    emailService: "https://formspree.io/f/xanygqdj" // Formspree 무료 서비스 (변경 가능)
  },

  // Hero 섹션
  hero: {
    title: "꾸준히 성장하는 개발자",
    subtitle: "책임감을 가지고 주체적으로 일하는 개발자 이승환입니다",
    name: "이승환"
  },

  // 스킬 
  skills: [
    {
      icon: "fas fa-server",
      name: "Backend Development",
      description: "Java(Spring Boot), PHP(CodeIgniter), Node.js(Express/Socket.IO), Python(Flask), REST API",
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
      description: "AWS(EC2/RDS/S3), GCP, Docker, Nginx, GitHub Actions, Cloudflare, CI/CD, Linux Server, Self-hosted Deployment",
      progress: 75
    },
    {
      icon: "fas fa-brain",
      name: "AI & ML",
      description: "TensorFlow/Keras, 강화학습(A2C), LSTM, Transformer, LLM(GPT/Gemini), ConfyUI/Stable Diffusion web UI, Vision API",
      progress: 55
    },
    {
      icon: "fas fa-tools",
      name: "Collaboration & Tools",
      description: "Git/GitHub, GitLab, Swagger, JaCoCo, Prometheus/Grafana, Selenium, Playwright",
      progress: 80
    }
  ],

  // 카드 슬라이스 부분
  projects: [
    {
      title: "내가 왕이될 상인가 <br>(관상 프로그램)",
      description:
        "얼굴 이미지 → 정량 지표 추출 → 선(Line) 시각화 → GPT/Gemini 관상 해석 백엔드(Flask)와 프론트엔드(HTML/CSS/JS)로 구성된 프로젝트입니다.",
      icon: "fas fa-smile",
      image: "./assets/img/face_reader.png",
      techStack: ["Python", "face_recognition(dlib)", "Pillow", "LLM(GPT/Gemini)", "JSON", "Matplotlib"],
      details: {
        role: "개인 프로젝트 / AI & Vision",
        duration: "2주",
        team: "Solo",
        status: "Completed"
      },
      stats: {
        accuracy: "정량 지표 추출",
        LLM_API: "GPT or <br>Gemini"
      },
      features: [
        "얼굴 부위(눈·코·입·턱·광대 등) 거리·각도·비율·대칭성 지표 계산",
        "선(Line) 기반 시각화로 측정 근거를 직관적으로 제공",
        "대칭성(Symmetry) 및 고급 지표(골든비율, T존 지수, 얼굴 구역 비율 등) 포함",
        "CLI 실행 지원: 이미지 입력 → 결과 JSON 출력(--output)로 후처리/연동 용이",
        "정량 지표 기반으로 LLM 해석 신뢰도 강화 + 호출 비용 절감 컨셉 반영",
      ],
      links: {
        github: "https://github.com/seunghwan94/FaceReader",
        demo: null,
        download: null
      }
    },
    
    {
      title: "가구의집 <br>(House of Furniture)",
      description:
        "인테리어 소품 판매 + 커뮤니티 + 시공업체 매칭을 통합한 풀스택 이커머스 & 플랫폼 서비스",
      icon: "fas fa-couch",
      image: "./assets/img/hof.png",
      techStack: ["Spring Boot(JPA/MyBatis/Security)", "AWS(EC2,S3,RDS)","React", "Docker", "Prometheus/Grafana","Swagger/Jacoco","GitHub Actions"],
      details: {
        role: "팀장 / DevOps & Full Stack",
        duration: "2025.01.31 - 2025.03.06 [2개월]",
        team: "3명",
        status: "AWS 풀스택 과정 파이널 팀 프로젝트"
      },
      stats: {
        CI_CD: "GitHub Actions, Docker, AWS",
        모니터링: "Prome<br>theus, Grafana"
      },
      features: [
        "React(Yarn) + Bootstrap SCSS 기반 UI/UX 구현 (Axios, Debounce, 무한스크롤)",
        "Spring Boot 백엔드: JPA + MyBatis 병행, Security(OAuth2/메일), Swagger 문서화, JaCoCo 테스트 커버리지 80%+",
        "WebClient 기반 비동기 처리 및 외부 API 연동 구조 설계",
        "Google Vision API 기반 이미지 분석 기능 (부적절한 콘텐츠 자동 차단)",
        "IAMPORT(PortOne) 결제 연동 + 환불 처리 자동화",
        "Selenium 기반 웹 자동화/크롤링 (쿠팡 가구 데이터 수집)",
        "AWS 인프라: EC2(Ubuntu) + RDS(MariaDB) + S3(이미지/파일 저장) + MongoDB(비정형/검색 기록)",
        "Nginx Reverse Proxy + Cloudflare DNS/도메인 연결 + Let's Encrypt SSL 자동 갱신",
        "CI/CD: GitHub Actions → Docker 이미지 빌드/배포 + Discord 알림 (Blue-Green 무중단 배포 전략)",
        "Prometheus + Grafana 모니터링 대시보드 구축 (API 응답시간, CPU/메모리 사용률 추적)"
      ],
      links: {
        github: "https://github.com/seunghwan94/hof-front",
        demo: null,
        download: "./assets/data/hof.pptx"
      }
    },

    {
      title: "The-k (Team project)",
      description: "다각화하는 K-컬쳐 외국인 관광객 커뮤니티(정보) 플랫폼 (JSP/Servlet 기반)",
      icon: "fas fa-users",
      image: "./assets/img/thek.png",
      techStack: ["Java", "JSP", "Servlet", "MariaDB", "MyBatis", "AWS", "Tomcat"],
      details: {
        role: "팀원 / 관리자 페이지 및 DB설계",
        duration: "2024.10.29~2024.11.29 [1개월]",
        team: "4명",
        status: "AWS 풀스택 과정 세미 팀 프로젝트"
      },
      stats: {
        DB: "ERD 기반 RDBMS 데이터 모델링",
        admin: "관리자(Admin) 대시보드"
      },
      features: [
        "Java 기반 MVC 패턴으로 JSP/Servlet 구조 설계",
        "게시판/콘텐츠 페이지 구성(소개/메인/게시/관리자 등) 및 공통 include(header/footer) 적용",
        "페이지네이션(pagination) 적용 및 UI 구조 개선",
        "에디터 적용: SmartEditor/Quill 계열 구성",
        "금지어 필터(욕설/비속어) 적용",
        "관리자 페이지 구성 + Chart.js 기반 통계 시각화",
        "Sidebar 등 UI 구성 요소 추가",
        "비밀번호 암호화/복호화 처리 및 권한(관리자/일반) 분리"
      ],
      links: {
        github: "https://github.com/seunghwan94/semi-theK",
        demo: null,
        download: "./assets/data/the-k.pptx"
      }
    },

    {
      title: "GeminiCook",
      description: "Gemini API 기반 요리/레시피 추천 Streamlit 웹/앱 (Gemini API 개발자 대회 제출)",
      icon: "fas fa-utensils",
      image: "./assets/img/gemini.png",
      techStack: ["Python", "Streamlit", "Gemini API", "Google Search API", "PyInstaller"],
      details: {
        role: "개인 프로젝트",
        duration: "2024.07 [11일]",
        team: "Solo",
        status: "Gemini API 개발자 대회 제출"
      },
      stats: {
        focus: "맞춤형<br>레시피 추천",
        skill: "Streamlit<br>+ Gemini"
      },
      features: [
        "Gemini API, Google Search 연동",
        "선호도 반영<br>(좋아하는 음식 종류 및 요리 작성)",
        "추천 요리 리스트 이미지와 같이 출력",
        "조리 단계(steps) 구조화 출력",
        "실행 파일(.exe)로 패키징하여 별도 설치 없이 누구나 실행 가능",
      ],
      links: {
        github: "https://github.com/seunghwan94/Gemini_cook.git",
        demo: "https://youtu.be/FLRkyRzsFpE",
        download: null
      }
    },

    {
      title: "m/place <br>(r/place 모방 프로젝트)",
      description: "Reddit r/place 이벤트를 모방한 실시간 픽셀 협업 플랫폼. 개인 PC(Self-Hosted 환경)에 직접 배포·운영하며 실시간 동기화 및 서버 관리 경험을 수행한 프로젝트입니다.",
      icon: "fas fa-paint-brush",
      image: "./assets/img/mplace.png",
      techStack: ["Node.js", "Vue.js", "Socket.io", "MariaDB", "Docker", "Nginx", "CentOS"],
      details: {
        role: "개인 프로젝트 / Full Stack & Infra",
        duration: "2024.07 [3주]",
        team: "Solo",
        status: "Self-Hosted 운영 (개인 PC 서버)"
      },
      stats: {
        infra: "개인 PC<br>자가 서버<br>배포/운영",
        realtime: "웹소켓<br>실시간<br>픽셀 동기화",
      },
      features: [
        "Socket.io 기반 실시간 픽셀 변경 및 전체 사용자 동기화 구현",
        "Vue Canvas UI(픽셀 보드) 기반 인터랙션",
        "Node.js + Express API 서버 직접 구축 및 상태 관리",
        "DB 테이블(canvas_pixels_log)로 좌표(x,y), 색상, IP, 생성시간 로그 저장",
        "Docker 컨테이너화 후 Nginx Reverse Proxy 구성",
        "CentOS 환경에서 개인 PC 서버 배포 및 포트 개방/방화벽 설정 경험",
        "실시간 서비스 운영 중 로그 모니터링 및 장애 대응 경험"
      ],
      links: {
        github: "https://github.com/seunghwan94/node-vue-mplace",
        demo: "https://www.youtube.com/shorts/Rj8UQSbKMVA",
        download: null
      }
    },

    {
      title: "Stock Alphago<br>(주식 자동 매매 시스템)",
      description: "강화학습 + 딥러닝(LSTM/Transformer) + 대신증권 API 기반 자동 매매 시스템",
      icon: "fas fa-chart-line",
      image: "./assets/img/stock.png",
      techStack: ["Python", "TensorFlow/Keras", "Deep Learning", "Self-Attention", "Attention/Transformer", "RL(A2C/A3C)", "GCP", "Selenium", "MariaDB"],
      details: {
        role: "팀장 / 데이터 수집 & 모델링 & 인프라",
        duration: "2021.08~2021.11 [3개월]",
        team: "5명",
        status: "빅데이터 플랫폼 개발자 과정 파이널 프로젝트"
      },
      stats: {
        modeling: "LSTM/Trans<br>former",
        trading: "API 연동 자동매매"
      },
      features: [
        "GCP VM 기반 클라우드 트레이딩 서버 구축 및 SSH 원격 운영",
        "Selenium + 대신증권 데이터 수집 자동화 및 MariaDB 저장",
        "LSTM + Attention 기반 시계열 예측 모델 운영 환경 적용",
        "Transformer 모델 성능 비교 실험 및 실전 적용 여부 검증",
        "강화학습(A3C → A2C 개선) 기반 매수/매도/홀딩 전략 자동화",
        "정책 신경망 + 가치 신경망 구조 설계 및 실시간 추론 적용",
        "대신증권 API 연동 실시간 모의 매매 시스템 구현",
        "1억 원 모의 투자 기반 실전 백테스트 및 수익률 검증(0.7%)",
      ],
      links: {
        github: null,
        demo: "./assets/data/stock.mp4",
        download: "./assets/data/stock.pdf"
      }
    }
  ],

  // 경력 부분 (위에서 아래)
  timeline: [
    {
      date: "2025.05 ~ 진행중",
      title: "(주)위즈베라 - 솔루션 엔지니어",
      description:
        "Delfino/Veraport 기반 금융·공공기관 전자서명 및 보안 솔루션 기술지원. PKCS#7 서명 검증 구조 분석, Nonce 기반 Replay Attack 방지 로직 구현, WebSocket 브라우저-로컬모듈 양방향 통신 아키텍처 설계. Tomcat/JEUS/WebLogic WAS 환경별 트러블슈팅, Linux(CentOS/Ubuntu) 로그 분석 자동화 스크립트 작성. 고객사 장애 발생 시 30분 이내 원인 파악 및 핫픽스 배포 경험 다수. OpenSSL 기반 인증서 체인 검증 로직 최적화로 서명 검증 속도 40% 개선."
    },
    {
      date: "2025.01 ~ 2025.03 [AWS 풀스택 웹 앱 개발자 과정(6개월)]",
      title: "팀 프로젝트 - 가구의집 (팀장)",
      description:
        "Spring Boot + React 기반 통합 인테리어 플랫폼 개발 (팀장 역할 수행). AWS 클라우드 인프라 설계부터 CI/CD 파이프라인 구축, Prometheus/Grafana 모니터링까지 DevOps 전 과정 주도. GitHub Actions 기반 자동 배포로 배포 시간 90% 단축 (수동 30분 → 자동 3분). JaCoCo 테스트 커버리지 80% 이상 달성. 3명 팀원 코드 리뷰 및 Git 브랜치 전략 수립. 결제/크롤링/이미지 분석 등 핵심 기능 직접 구현.",
      download: {
        icon: "fas fa-file-pdf",
        label: "수료증",
        url: "./assets/data/더좋은아카데미_수료증(구로).pdf"
      }
    },
    {
      date: "2024.07 ~ 2024.08",
      title: "개인 프로젝트 - FaceReader / m/place / GeminiCook",
      description:
        "FaceReader: MediaPipe + GPT/Gemini API 기반 얼굴 특징점 468개 추출 및 AI 자동 해석 파이프라인 구축. m/place: Socket.io 실시간 픽셀 협업 보드 로컬 서버 운영 (CentOS + Docker + Nginx 환경 구성). GeminiCook: Gemini API 기반 레시피 추천 앱 개발 및 개발자 대회 출품. 3개 프로젝트 모두 GitHub 공개 및 문서화 완료."
    },
    {
      date: "2023.03 ~ 2024.06 [1년 3개월]",
      title: "(주)메이크봇 - 웹 개발자",
      description:
        "대한항공/환경부/풀무원 등 공공·대기업 SI 프로젝트 유지보수 및 신규 개발. Session Timeout 이슈 해결로 사용자 불편 80% 감소. 비효율적인 SQL 쿼리 튜닝 (JOIN 최적화 + 인덱스 재설계)으로 API 응답 속도 평균 60% 개선. 레거시 JSP 코드베이스 리팩토링 (중복 코드 제거 + MVC 패턴 적용). 긴급 장애 대응 경험 다수 (24시간 내 핫픽스 배포). PHP CodeIgniter, Java Spring 기반 멀티 프로젝트 동시 관리.",
      download: {
        icon: "fas fa-file-word",
        label: "경력증명서",
        url: "./assets/data/seunghwan_work_experience.docx"
      }
    },
    {
      date: "2021.12 ~ 2023.03 [1년 4개월]",
      title: "(주)웨인테크놀로지 - 웹 개발자",
      description:
        "키움YES저축은행 등 금융권 웹 서비스 유지보수 및 신규 개발 (보안 강화 프로젝트). 외부 API 연동 (NICE 본인인증, KG이니시스 결제) 안정화 작업. ActiveX → 표준 웹 기술 전환 프로젝트 참여 (IE 11 → Chrome/Edge 마이그레이션). 보안 인증 페이지 개발 (SSL/TLS, SHA-256 해싱). 금융권 특성상 엄격한 코드 리뷰 및 보안 감사 대응 경험."
    },
    {
      date: "2021.08 ~ 2021.11 [빅데이터 플랫폼 개발자 과정(6개월)]",
      title: "팀 프로젝트 - Stock Alphago (팀장)",
      description:
        "강화학습(A2C) + 딥러닝(LSTM/Transformer) 기반 자동 주식 매매 시스템 개발 (팀장). GCP VM 인스턴스 개발 환경 구축, Selenium 기반 주식 데이터 크롤링 파이프라인 설계. 대신증권 API 실시간 데이터 수집 및 자동 매매 로직 구현. LSTM + Attention Mechanism 모델 정확도 A3C 대비 15% 향상. 데이터 전처리 속도 NumPy/Pandas 최적화로 3배 개선. 5명 팀원 역할 분담 및 주간 스프린트 운영."
    }
  ],

  // Footer 정보
  footer: {
    name: "Seunghwan Lee",
    tagline: "꾸준히 성장하는 개발자",
    social: [
      {
        icon: "fab fa-github",
        url: "https://github.com/seunghwan94",
        label: "GitHub"
      },
      {
        icon: "fas fa-globe",
        url: "https://www.naxa.dev",
        label: "Website"
      },
      {
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/@Naxa_dev",
        label: "YouTube"
      },
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/naxa.dev/",
        label: "Instagram"
      },
      {
        icon: "fas fa-comment",
        url: "https://open.kakao.com/me/Naxa",
        label: "KakaoTalk"
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:seunghwan94.dev@gmail.com",
        label: "Email"
      }
    ]
  },
  
};