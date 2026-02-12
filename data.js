// data.js
// 데이터만 여기서 관리하세요.
window.PORTFOLIO_DATA = {
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
      progress: 75
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
      progress: 72
    },
    {
      icon: "fas fa-tools",
      name: "Collaboration & Tools",
      description: "Git/GitHub, GitLab, Swagger, JaCoCo, Prometheus/Grafana, Selenium",
      progress: 78
    }
  ],

  projects: [
    {
      title: "가구의집 (House of Furniture)",
      description:
        "인테리어 소품 판매 + 커뮤니티 + 시공업체 연결이 결합된 원스톱 인테리어 플랫폼",
      icon: "fas fa-couch",
      image: "../assets/img/project/hof/hof_main.png",
      techStack: ["Spring Boot", "React", "AWS", "Docker", "GitHub Actions", "MariaDB", "MongoDB"],
      details: {
        role: "팀장 / DevOps & Full Stack",
        duration: "1개월",
        team: "3명",
        status: "Completed"
      },
      stats: {
        deployment: "배포 90% 단축",
        quality: "배포 오류 75% 감소"
      },
      features: [
        "AWS(EC2/RDS/S3) + Cloudflare 도메인/DNS 연결",
        "Nginx Reverse Proxy 구성",
        "CI/CD 파이프라인(GitHub Actions) 구축 + Discord 알림",
        "Prometheus/Grafana 모니터링 구성",
        "Swagger API 문서화, JaCoCo 테스트 커버리지",
        "PORTONE(아임포트) 결제 연동",
        "Selenium 기반 웹 크롤링(쿠팡) 데이터 수집",
        "메인 화면 UI/UX 및 주요 기능 구현"
      ],
      links: {
        github: "https://github.com/seunghwan94/hof-front",
        demo: "https://hof.lshwan.com",
        download: null
      }
    },

    {
      title: "The-k (Team project)",
      description: "K-컬쳐 관광객을 위한 정보 공유 및 커뮤니티 플랫폼 (JSP/Servlet 기반)",
      icon: "fas fa-users",
      image: "../assets/img/project/thek/thek_main.png",
      techStack: ["Java", "JSP", "Servlet", "MariaDB", "MyBatis", "AWS", "Tomcat"],
      details: {
        role: "팀원 / 서버 환경 & 관리자 기능",
        duration: "1개월",
        team: "3명",
        status: "Completed"
      },
      stats: {
        admin: "통계/회원/메뉴 관리",
        deploy: "Tomcat 수동 배포"
      },
      features: [
        "AWS EC2 + Cloudflare 도메인/DNS 연결",
        "Maven + Tomcat 기반 서버 환경 구성",
        "게시글 CRUD + 페이징 처리",
        "관리자 페이지: Chart.js 통계 시각화",
        "관리자 페이지: 회원 CRUD",
        "드래그 앤 드롭으로 메인 header 메뉴 관리",
        "금지단어 CRUD 기능"
      ],
      links: {
        github: "https://github.com/seunghwan94/semi-theK",
        demo: null,
        download: "../assets/img/project/thek/the-k.pptx"
      }
    },

    {
      title: "GeminiCook (Gemini API 개발자 대회 제출)",
      description: "사용자 취향/재료 기반으로 레시피를 자동 추천하는 Gemini API 활용 앱",
      icon: "fas fa-utensils",
      image: "../assets/img/project/geminicook/main.png",
      techStack: ["Python", "Streamlit", "Gemini API", "Google Search API", "PyInstaller"],
      details: {
        role: "개인 프로젝트",
        duration: "11일",
        team: "Solo",
        status: "Submitted"
      },
      stats: {
        focus: "개인화 추천",
        delivery: "exe 배포"
      },
      features: [
        "Gemini API 기반 레시피 추천 로직 구현",
        "재료 입력 기반 레시피 추천",
        "Google API Key 입력 시 관련 이미지 표시",
        "상세 조리 단계/팁 제공",
        "PyInstaller로 독립 실행 파일(.exe) 패키징"
      ],
      links: {
        github: "https://github.com/seunghwan94/Gemini_cook.git",
        demo: "https://youtu.be/FLRkyRzsFpE",
        download: null
      }
    },

    {
      title: "m/place (r/place 모방 프로젝트)",
      description: "Socket.io 기반 실시간 픽셀 드로잉 협업 보드 (개인 서버 운영 경험 포함)",
      icon: "fas fa-paint-brush",
      image: "../assets/img/project/mplace/main.png",
      techStack: ["Node.js", "Vue.js", "Socket.io", "MariaDB", "Docker", "Nginx", "CentOS"],
      details: {
        role: "개인 프로젝트 / Full Stack & Infra",
        duration: "3주",
        team: "Solo",
        status: "Live"
      },
      stats: {
        realtime: "실시간 동기화",
        infra: "도메인 연결 운영"
      },
      features: [
        "Socket.io 실시간 픽셀 변경/동기화",
        "MariaDB 기반 픽셀 데이터 영구 저장",
        "Vue.js + Canvas UI 구현(팔레트/확대/좌표 등)",
        "Docker로 CentOS 7 환경 구성 및 필수 SW 설치",
        "Nginx 리버스 프록시 설정",
        "방화벽/접근제어 등 보안 설정",
        "가비아 도메인 구매 후 포트포워딩 + DNS 연결"
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
      image: "../assets/img/project/stock/main.png",
      techStack: ["Python", "TensorFlow/Keras", "강화학습(A2C)", "GCP", "Docker", "Selenium", "MariaDB"],
      details: {
        role: "팀장 / 데이터 수집 & 모델링 & 인프라",
        duration: "2개월",
        team: "5명",
        status: "Completed"
      },
      stats: {
        modeling: "LSTM/Transformer 실험",
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
        demo: "../assets/img/project/stock/ppt.pdf",
        download: "../assets/img/project/stock/ppt.pdf"
      }
    }
  ],

  timeline: [
    {
      date: "2025.01 ~ 2025.03",
      title: "팀 프로젝트 - 가구의집 (팀장)",
      description:
        "Spring Boot + React 기반 통합 인테리어 플랫폼 개발. AWS/CI-CD/모니터링/결제/크롤링까지 엔드투엔드 구성."
    },
    {
      date: "2024.08 ~ 2024.10",
      title: "팀 프로젝트 - Stock Alphago (팀장)",
      description:
        "강화학습 + 딥러닝 기반 자동 주식 매매 시스템. GCP 인프라, 데이터 수집, 모델링, API 연동까지 수행."
    },
    {
      date: "2024.07 ~ 2024.08",
      title: "개인 프로젝트 - m/place / GeminiCook",
      description:
        "Socket.io 실시간 협업 보드(m/place) 운영 경험 및 Gemini API 기반 레시피 추천 앱(GeminiCook) 개발/출품."
    },
    {
      date: "2023.03 ~ 2024.06",
      title: "(주)메이크봇 - 웹 개발자",
      description:
        "대한항공/환경부/풀무원 등 유지보수 및 신규 개발. 세션/통신 안정화, 쿼리 최적화, 이슈 대응으로 운영 효율 개선."
    },
    {
      date: "2021.12 ~ 2023.03",
      title: "(주)웨인테크놀로지 - 웹 개발자",
      description:
        "키움YES저축은행 등 금융 웹 서비스 유지보수/개발. 외부 API 연동 및 보안 인증 페이지 개발, 브라우저 전환 대응."
    },
    {
      date: "EDUCATION",
      title: "교육 이력",
      description:
        "빅데이터 플랫폼 개발자 과정(6개월) / AWS 풀스택 웹 앱 개발자 과정(6개월)"
    }
  ]
};
