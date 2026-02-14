// data.js
window.PORTFOLIO_DATA = {
  // Contact 정보 (이메일 전송용)
  contact: {
    email: "sounghan94@gmail.com",
    emailService: "https://formspree.io/f/mbdagkel" // Formspree 무료 서비스 (변경 가능)
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
      techStack: ["Spring Boot(JPA/MyBatis/Security)", "AWS(EC2,S3,RDS)", "React", "Docker", "Prometheus/Grafana", "Swagger/Jacoco", "GitHub Actions"],
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
        "Delfino/Veraport 금융·공공기관 전자서명 솔루션 기술지원. Docker 기반 고객사별 테스트 환경 자동화로 구성 시간 83% 단축 (30분 → 5분), 이슈 재현/검증 속도 80% 향상. Python 기반 솔루션 일괄 제거 프로그램 개발로 월 평균 10개 업체 정기점검 시간 60% 단축.",
      details: [
        {
          subtitle: "Docker 기반 솔루션 테스트 환경 자동화",
          items: [
            "Docker Compose 기반 고객사별 환경 컨테이너화 (Tomcat + Nginx + Jetty + CertRelay)",
            "PowerShell 자동 설치 스크립트 (start.bat) 개발로 구성 시간 83% 단축 (30분 → 5분)",
            "프로젝트별 설정 파일(project.properties) 기반 자동 .env 생성",
            "비개발자도 클릭 한 번으로 테스트 환경 구동 가능하도록 개선",
            "SSL/TLS 인증서 자동 구성 및 도메인 기반 HTTPS 테스트 환경 제공"
          ]
        },
        {
          subtitle: "Python 기반 통합설치 솔루션 제거 프로그램 개발",
          items: [
            "Tkinter GUI 기반 프로그램 목록 시각화 및 선택 삭제 기능",
            "dist 파일 파싱 (HTML/base64 디코딩) 및 플러그인 정보 추출",
            "레지스트리 기반 설치 프로그램 자동 매칭 및 QuietUninstallString 실행",
            "PyInstaller로 EXE 패키징하여 비개발자 정기점검 업무 자동화",
            "월 평균 10개 업체 정기점검 시간 60% 단축"
          ]
        }
      ]
    },

    {
      date: "2024.08 ~ 2025.03 [8개월]",
      title: "크몽 판매 프로그램 개발",
      description:
        "Streamlit기반 키워드 추출 (KeyWordFind) 및 블로그 자동화 프로그램 (AutoBlog) 개발. 실사용자 대상 상용 프로그램 개발 및 배포 경험.",
      details: [
        {
          subtitle: "KeyWordFind - 네이버 키워드 추출 프로그램",
          items: [
            "Streamlit 기반 웹 애플리케이션 구축",
            "notion 데이터 연동으로 공지사항 및 업데이트 관리",
            "Google Sheets API 연동으로 사용자 화이트 리스트",
            "PyInstaller로 실행 파일(.exe) 패키징 및 배포",
            "네이버 검색 키워드 검색량 분석 기능",
            "네이버 광고 키워드 분석 기능"
          ]
        },
        {
          subtitle: "AutoBlog - 블로그 자동 포스팅 프로그램",
          items: [
            "GPT API 기반 SEO 최적화 블로그 글 자동 생성 (2000단어 이상)",
            "Unsplash API 연동 이미지 자동 삽입 및 리사이징",
            "Selenium 기반 티스토리 자동 로그인 및 포스팅",
            "Google Sheets 기반 사용자 인증 시스템",
            "해시태그 자동 추출 및 태그 등록",
            "카테고리 자동 선택 및 공개/비공개 설정"
          ]
        }
      ]
    },

    {
      date: "2024.08 ~ 2025.03 [8개월]",
      title: "AWS 풀스택 웹 앱 개발자 과정",
      description:
        "Java/Spring Boot 백엔드부터 React 프론트엔드, AWS 클라우드 인프라 구축, Docker 컨테이너화, CI/CD 파이프라인까지 풀스택 개발 전 과정을 체계적으로 학습했습니다. 파이널 프로젝트(가구의집)에서 팀장으로 AWS 인프라 설계·배포·모니터링을 주도하며 실무 경험을 쌓았습니다.",
      download: {
        url: "assets/data/더좋은아카데미_수료증(구로).pdf",
        icon: "fas fa-file-image",
        label: "수료증"
      },
      details: [
        {
          subtitle: "세미 프로젝트 - The-k (팀원)",
          items: [
            "Java 기반 MVC 패턴으로 JSP/Servlet 구조 설계 및 ERD 기반 RDBMS 데이터 모델링",
            "관리자 페이지 구성 + Chart.js 기반 통계 시각화",
            "페이지네이션(pagination) 적용 및 UI 구조 개선",
            "에디터 적용: SmartEditor/Quill 계열 구성",
            "금지어 필터(욕설/비속어) 적용 및 비밀번호 암호화 처리"
          ]
        },
        {
          subtitle: "파이널 프로젝트 - 가구의집 (팀장)",
          items: [
            "React + Bootstrap SCSS, Axios, Debounce 기반 프론트엔드 개발",
            "Spring Boot: JPA + MyBatis 병행, Security(OAuth2/메일 인증), Swagger API 문서화",
            "JaCoCo 테스트 커버리지 80% 이상 달성 (단위/통합 테스트)",
            "Google Vision API 연동: 부적절한 이미지 자동 차단 시스템",
            "IAMPORT(PortOne) 결제 연동 및 환불 처리 자동화",
            "Selenium 기반 쿠팡 가구 데이터 크롤링 파이프라인 구축",
            "AWS 인프라: EC2 + RDS + S3 + MongoDB 하이브리드 구성",
            "Nginx Reverse Proxy + Cloudflare DNS + Let's Encrypt SSL 자동 갱신",
            "GitHub Actions CI/CD: Docker 빌드/배포 + Discord 알림 (Blue-Green 전략)",
            "Prometheus + Grafana 모니터링 대시보드 (API 응답시간, 리소스 추적)"
          ]
        }
      ]
    },
    {
      date: "2023.03 ~ 2024.06 [1년 3개월]",
      title: "(주)메이크봇 - 웹 개발자",
      description:
        "대한항공/환경부/풀무원 등 공공·대기업 SI 프로젝트 유지보수 및 신규 개발. 세션 관리 개선으로 안정성 30% 향상. 로그 조회 쿼리 최적화로 조회 시간 75% 단축 (4~5분 → 1분). 주문 오류율 90% 감소.",
      details: [
        {
          subtitle: "대한항공 (1년 1개월)",
          items: [
            "iOS 백그라운드 WebSocket 연결 유지 메커니즘 구현",
            "세션 관리 로직 개선 및 통신 재연결 로직으로 시스템 안정성 30% 향상",
            "로그 데이터 조회 쿼리 인덱스 최적화로 평균 조회 시간 75% 단축 (4~5분 → 1분)",
            "Slack API 연동 실시간 알림 시스템으로 장애 대응 시간 단축"
          ]
        },
        {
          subtitle: "환경부 [생활화학제품 중독 응급 대응 시스템 개발] (4개월)",
          items: [
            "프로젝트 초기 시스템 아키텍처 설계 및 개발 환경 구축",
            "관리자 대시보드 및 화학제품 정보 관리 인터페이스 개발",
            "RESTful API 설계 및 구현으로 외부 시스템과의 효율적인 데이터 교환 지원",
            "GitLab을 활용한 버전 관리 및 협업 프로세스 구축",
            "Python + Selenium 기반 웹 서버 상태 자동 모니터링 시스템 구축"
          ]
        },
        {
          subtitle: "풀무원 (2개월)",
          items: [
            "동시 주문 발생 시 주문번호 중복 생성 문제 해결을 위한 트랜잭션 처리 로직 개선",
            "주문 처리 프로세스 개선으로 주문 오류율 90% 감소 (고객 만족도 조사 결과 10% 상승)",
            "레거시 코드 리팩토링 및 성능 개선을 통한 사용자 경험 향상",
            "PostgreSQL 데이터베이스 최적화 및 인덱싱 전략 수립으로 시스템 응답 시간 개선"
          ]
        }
      ]
    },
    {
      date: "2021.12 ~ 2023.03 [1년 4개월]",
      title: "(주)웨인테크놀로지 - 웹 개발자",
      description:
        "키움YES저축은행 등 금융권 웹 서비스 유지보수 및 신규 개발. 외부 금융 API 연동 (신용정보/차량이력/세금 정보), API 캐싱+에러 핸들링으로 접속률 5% 향상. IE → Edge/Chrome 전환, 레거시 리팩토링으로 로딩 속도 40% 개선.",
      details: [
        {
          subtitle: "키움YES저축은행 (6개월)",
          items: [
            "외부 금융 API 연동 모듈 개발 및 안정화 (신용정보 조회, 차량이력 조회, 세금 정보 연동)",
            "API 응답 캐싱 및 에러 핸들링 개선으로 서비스 안정성 강화 및 사용자 접속률 5% 향상",
            "계좌 인증을 위한 1원 송금 인증 시스템 개발 (다우기술과 협업, 인증 모듈 담당)",
            "Tibero 데이터베이스 환경에서 효율적인 쿼리 튜닝으로 성능 최적화"
          ]
        },
        {
          subtitle: "진영자산관리대부L/삼호저축은행 (10개월)",
          items: [
            "브라우저 호환성 개선 (IE → Edge/Chrome)",
            "레거시 코드 리팩토링 및 모던 웹 표준 적용으로 페이지 로딩 속도 40% 개선",
            "REST API 기반 커뮤니케이션 시스템 연동으로 실시간 고객 문의 대응 체계 구축",
            "고객 응대 시간 단축으로 사용자 만족도 증가 (고객 불만 접수 건수 80% 감소)",
            "JavaScript 비동기 처리 패턴 적용으로 UI 반응성 향상"
          ]
        }
      ]
    },
    {
      date: "2021.05 ~ 2021.11 [6개월]",
      title: "빅데이터 플랫폼 개발자 과정",
      description:
        "데이터 수집(Selenium/API)부터 전처리, 딥러닝(Keras/Transformer/강화학습) 모델링, 그리고 GCP 클라우드 서버 구축까지 데이터 파이프라인 전 과정(End-to-End)을 주도적으로 수행하며 실무 역량을 길렀습니다.",
      download: {
        url: "assets/data/더조은아카데미 취업추천서(강남).jpg",
        icon: "fas fa-file-image",
        label: "수료증"
      },
      details: [
        "GCP VM 인스턴스 기반 개발 환경 구축 및 팀원 접근 권한 관리",
        "Selenium 기반 주식 데이터 크롤링 파이프라인 설계 (일별/실시간)",
        "대신증권 API 연동: 실시간 데이터 수집 및 자동 매매 로직 구현",
        "LSTM + Attention Mechanism 모델 구현: A3C 대비 정확도 15% 향상",
        "Transformer 기반 시계열 예측 모델 실험 및 하이퍼파라미터 튜닝",
        "강화학습 A2C 알고리즘으로 buy/sell/hold 의사결정 자동화",
        "NumPy/Pandas 벡터 연산 최적화로 데이터 전처리 속도 3배 개선",
        "5명 팀원 역할 분담 (데이터/모델링/API/인프라/테스트) 및 주간 스프린트 운영",
        "Git 브랜치 전략 수립 및 코드 리뷰 프로세스 정립"
      ]
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
        url: "mailto:sounghan94@gmail.com",
        label: "Email"
      }
    ]
  },

};