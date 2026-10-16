export interface Project {
  id: string;
  title: string;
  category: 'all' | 'ai' | 'fintech' | 'b2b' | 'systems';
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: 'production' | 'pilot' | 'research' | 'ready';
  statusBadge: string;
  architectureDetails: {
    problem: string;
    solution: string;
    keyPatterns: string[];
    diagramSnippet?: string;
  };
  metrics?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  techStack: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; tag?: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: 'Нурасыл Булатулы',
  nameEn: 'Nurasyl Bulatuly',
  title: 'Full-Stack Product Engineer / Backend & AI Systems',
  location: 'Астана, Казахстан',
  phone: '+7 705 459 0601',
  phoneRaw: '+77054590601',
  email: 'bulatulynurasyl22@gmail.com',
  github: 'https://github.com/nurasss',
  githubHandle: 'github.com/nurasss',
  website: 'https://nuras.space',
  websiteDisplay: 'nuras.space',
  telegram: 'https://t.me/nurasss',
  education: {
    institution: 'Miras University',
    degree: 'Бакалавриат — «Анализ больших данных» (Big Data Analysis)',
    graduation: 'Ожидаемый выпуск: 2029',
  },
  languages: [
    { name: 'Казахский', level: 'Родной (Native)' },
    { name: 'Русский', level: 'C1 (Свободное владение)' },
    { name: 'Английский', level: 'B1 (Технический, чтение и документация)' },
  ],
  bio: 'Full-Stack разработчик с коммерческим опытом с 2025 года. Проектирую и реализую веб-продукты полного цикла: от интерфейсов и распределенных REST API до реляционных баз данных, шлюзов интеграции с 1С/POS, безопасных платежных сценариев и прикладных AI-систем на LangGraph и MCP. Уделяю особое внимание идемпотентности операций, изоляции данных клиентов и отказоустойчивости.',
  stats: [
    { value: '9+', label: 'Инженерных проектов', detail: 'FinTech, GovTech, B2B POS & AI' },
    { value: '13.7k+', label: 'НПА в RAG-корпусе', detail: 'Исследование законодательства РК' },
    { value: '100%', label: 'Идемпотентность', detail: 'Защита от повторных списаний и дублей' },
    { value: '7 ролей', label: 'Мультиагентная система', detail: 'LangGraph, MCP & Human-in-the-loop' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & PWA',
    iconName: 'Layout',
    description: 'Интерактивные интерфейсы, PWA для ритейла и высокая отзывчивость',
    skills: [
      { name: 'TypeScript', highlight: true },
      { name: 'React 19', highlight: true },
      { name: 'Next.js (App Router)', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Vite' },
      { name: 'PWA (Service Workers, Cache)' },
      { name: 'JavaScript (ESNext)' },
    ],
  },
  {
    title: 'Backend & Архитектура API',
    iconName: 'Server',
    description: 'Отказоустойчивые REST & WebSocket сервисы с чистой изоляцией бизнес-логики',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'Express / Fastify' },
      { name: 'SQLAlchemy 2.0 / Alembic', highlight: true },
      { name: 'REST API & WebSockets' },
      { name: 'State Machines & Idempotency Keys' },
    ],
  },
  {
    title: 'AI / LLM & Multi-Agent',
    iconName: 'Cpu',
    description: 'Прикладные агентные пайплайны, RAG, MCP и автоматизация задач',
    skills: [
      { name: 'LangGraph (Multi-Agent)', highlight: true },
      { name: 'Model Context Protocol (MCP)', highlight: true },
      { name: 'RAG & Vector Embeddings', highlight: true },
      { name: 'ChromaDB / pgvector' },
      { name: 'LLM APIs (OpenAI, Anthropic, Gemini)' },
      { name: 'AI Evaluation & Verifier' },
      { name: 'RuBERT & NLI' },
    ],
  },
  {
    title: 'Данные & DevOps',
    iconName: 'Database',
    description: 'Схемы баз данных, кэширование, контейнеризация и непрерывный деплой',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis (Кэш & Очереди)', highlight: true },
      { name: 'SQLite' },
      { name: 'Prisma ORM' },
      { name: 'Docker & Docker Compose', highlight: true },
      { name: 'GitHub Actions (CI/CD)' },
      { name: 'Nginx / Caddy' },
    ],
  },
  {
    title: 'Интеграции & Платежи',
    iconName: 'Workflow',
    description: 'Связка с учетными системами предприятий и эквайрингом',
    skills: [
      { name: '1С:Предприятие', highlight: true },
      { name: 'CommerceML 2.x Gateway', highlight: true },
      { name: 'V83.COMConnector', highlight: true },
      { name: 'Kaspi Pay & Webhooks', highlight: true },
      { name: 'HMAC-SHA256 подписи' },
      { name: 'Bitrix24 CRM API' },
      { name: 'Integration Outbox Pattern' },
    ],
  },
  {
    title: 'Системное & Кроссплатформенное ПО',
    iconName: 'Terminal',
    description: 'Нативные утилиты, мобильные клиенты и компьютерное зрение',
    skills: [
      { name: 'Rust / Tauri (macOS/Desktop)', highlight: true },
      { name: 'React Native / Expo' },
      { name: 'Go (Golang)' },
      { name: 'Kotlin / Jetpack Compose' },
      { name: 'SwiftUI' },
      { name: 'Computer Vision (Распознавание)' },
      { name: 'GeoIP & Leaflet.js' },
    ],
  },
];

export const COMMERCIAL_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'POSCENTER.KZ',
    role: 'Fullstack-разработчик',
    period: '06.2026 — настоящее время',
    location: 'Астана, Казахстан',
    badge: 'FinTech & Retail POS',
    bullets: [
      'Разрабатываю аналитические кабинеты на Next.js / FastAPI: показатели продаж и выручки в реальном времени, REST API, гибкая модель данных и двусторонние интеграции с 1С.',
      'Разрабатываю и поддерживаю систему геомониторинга клиентского ПО: Windows-компонент сбора телеметрии, backend на FastAPI / PostgreSQL, GeoIP-резолвинг, интерактивная карта на Leaflet.js, деплой на VPS.',
      'Работаю с технологическими компонентами флагманского POSCENTER APP: оптимизация PWA, реализация гранулярной ролевой модели (RBAC) и надежный обмен данными через шлюз стандарта CommerceML.',
    ],
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', '1С:Предприятие', 'CommerceML', 'Leaflet.js', 'PWA', 'Docker'],
  },
  {
    company: 'MS TECHNOLOGY',
    role: 'Fullstack-разработчик',
    period: '11.2025 — настоящее время',
    location: 'Казахстан',
    badge: 'Web & Product Engineering',
    bullets: [
      'Создаю адаптивные веб-интерфейсы, сложные формы и интерактивные пользовательские сценарии; бесшовно интегрирую frontend с REST API и серверной бизнес-логикой.',
      'Оперативно диагностирую и устраняю проблемы пользовательских сценариев по результатам QA-тестирования и боевой эксплуатации, обеспечивая стабильную работу сервисов.',
      'Провожу рефакторинг компонентов, повышаю скорость рендеринга и поддерживаю существующие кодовые базы компании.',
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'REST API', 'QA / Bug Fixing'],
  },
  {
    company: 'STOLAB.KZ',
    role: 'IT-специалист / Веб-разработка и Bitrix24',
    period: '04.2026 — 06.2026',
    location: 'Казахстан',
    badge: 'CRM & Integrations',
    bullets: [
      'Дорабатывал корпоративный веб-ресурс и настроил надежную передачу заявок в Bitrix24 CRM через вебхуки и REST API.',
      'Проверял и валидировал всю сквозную цепочку «пользовательская форма → серверный обработчик → лид CRM» перед выкаткой в production.',
      'Исправлял адаптивную верстку, контентные блоки и технические ошибки валидации пользовательских форм.',
    ],
    techStack: ['Bitrix24 API', 'JavaScript', 'PHP', 'HTML5/CSS3', 'Webhooks QA'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'poscenter-app',
    title: 'POSCENTER APP',
    category: 'b2b',
    categoryLabel: 'B2B Retail & 1С',
    tagline: 'PWA-кабинет владельца магазина с выручкой, Z-отчетами и остатками',
    description: 'Полнофункциональный веб-кабинет для ритейлеров с актуальной аналитикой выручки, фискальными Z-отчётами и товарными остатками. Интегрирован со шлюзом обмена CommerceML и учетными базами 1С:Предприятие.',
    highlights: [
      'Отказоустойчивый шлюз синхронизации каталогов и документов через CommerceML 2.x',
      'PWA с кэшированием и мгновенным доступом к показателям торговой точки с мобильных устройств',
      'Ролевая модель доступа (RBAC), изоляция данных арендаторов и автоматическое резервное копирование PostgreSQL',
      'Асинхронные фоновые задачи для тяжелых отчетов',
    ],
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'PHP', '1С:Предприятие', 'CommerceML', 'PWA', 'Docker'],
    status: 'production',
    statusBadge: 'В эксплуатации',
    metrics: 'Синхронизация тысяч SKU с 1С',
    architectureDetails: {
      problem: 'Сложность синхронизации данных из локальных 1С-баз магазинов в облачный кабинет руководителя с задержкой не более пары секунд без блокировки касс.',
      solution: 'Разработан изолированный CommerceML-коннектор с очередью фоновых задач, валидацией структуры XML-пакетов и промежуточным кэшем в PostgreSQL.',
      keyPatterns: ['CommerceML Gateway', 'Background Job Workers', 'Granular RBAC', 'PWA Offline Cache'],
    },
  },
  {
    id: 'ai-office',
    title: 'AI OFFICE / AI COMPANY',
    category: 'ai',
    categoryLabel: 'Multi-Agent & LLM',
    tagline: 'Мультиагентная распределенная система управления задачами',
    description: 'Интеллектуальная система координации на базе LangGraph с поддержкой 7 специализированных ролей агентов. Управление задачами через современный Web UI и Telegram-интерфейс с сохранением контекста и памятью.',
    highlights: [
      '7 специализированных ролей AI-агентов (архитектор, разработчик, ревьюер, QA, менеджер и др.)',
      'Маршрутизация запросов и граф состояний на базе LangGraph',
      'Векторная долгосрочная память (RAG) на pgvector / ChromaDB',
      'Поддержка инструментов через Model Context Protocol (MCP) и Human-in-the-loop подтверждение критических действий',
    ],
    technologies: ['FastAPI', 'LangGraph', 'PostgreSQL', 'pgvector', 'RAG', 'MCP', 'Telegram Bot API', 'Docker'],
    status: 'production',
    statusBadge: 'Активная разработка',
    metrics: '7 ролей, MCP инструменты',
    architectureDetails: {
      problem: 'Одиночные LLM не справляются со сложными многоэтапными проектами без потери контекста и галлюцинаций при вызове внешних систем.',
      solution: 'Реализован циклический направленный граф (StateGraph) с разделением ответственности агентов, строгой типизацией переходов и шлюзом MCP для безопасного исполнения инструментов.',
      keyPatterns: ['StateGraph Orchestration', 'Model Context Protocol (MCP)', 'RAG Vector Memory', 'Human-in-the-Loop Gate'],
    },
  },
  {
    id: 'nurapay',
    title: 'NURAPAY',
    category: 'fintech',
    categoryLabel: 'FinTech & Payments',
    tagline: 'Платежный шлюз с Idempotency-Key и Kaspi Pay адаптером',
    description: 'Инженерный прототип платежного шлюза для надежного проведения транзакций с поддержкой Kaspi Pay, конечной машиной статусов, защитой от двойных списаний и криптографической верификацией.',
    highlights: [
      'Гарантированная идемпотентность через заголовок Idempotency-Key и Redis-мьютексы',
      'Конечная машина состояний (FSM): PENDING → PROCESSING → PAID / FAILED / REFUNDED',
      'HMAC-SHA256 подпись входящих и исходящих webhooks для защиты от подделки запросов',
      'Фоновый reconciliation worker (механизм сверки реестров) для выявления расхождений с банком',
    ],
    technologies: ['Node.js', 'TypeScript', 'React', 'Kaspi Pay API', 'Redis', 'PostgreSQL', 'HMAC-SHA256'],
    status: 'ready',
    statusBadge: 'Engineering Prototype',
    metrics: 'Zero Duplicate Charges',
    architectureDetails: {
      problem: 'Сетевые сбои и повторные клики пользователей могут приводить к двойным списаниям средств и неконсистентному балансу.',
      solution: 'Внедрен строгий паттерн Idempotency-Key с фиксацией состояния в Redis на 24 часа, атомарная машина перехода статусов и автоматическая сверка через крон.',
      keyPatterns: ['Idempotent Request Handling', 'Finite State Machine (FSM)', 'HMAC Signature Verification', 'Payment Reconciliation'],
    },
  },
  {
    id: 'releaseguard',
    title: 'RELEASEGUARD',
    category: 'ai',
    categoryLabel: 'AI / Security QA',
    tagline: 'Предрелизный аудитор Git-репозиториев с верификацией замечаний',
    description: 'Автоматизированный инструмент контроля качества релизов. Привязывает анализ к неизменяемому SHA коммита, комбинирует детерминированные линтеры с LLM-анализом и перепроверяет выводы отдельным независимым Verifier-агентом.',
    highlights: [
      'Привязка контекста аудита к immutable commit SHA для воспроизводимости',
      'Двухэтапный пайплайн: Статический анализ (AST/Semgrep) + LLM анализ уязвимостей',
      'Независимый арбитр-верификатор (LLM Verifier) для отсеивания ложноположительных срабатываний',
      'Итоговый вердикт: однозначные статусы GO / REVIEW / NO-GO в pull request',
    ],
    technologies: ['Python', 'LLM API', 'Git SHA', 'AST Analysis', 'GitHub API', 'FastAPI'],
    status: 'ready',
    statusBadge: 'Production Ready',
    metrics: 'Снижение False Positives до минимума',
    architectureDetails: {
      problem: 'Обычные LLM-ревьюеры генерируют массу ложных предупреждений, что раздражает разработчиков и замедляет релизы.',
      solution: 'Архитектура с верификацией: первый агент генерирует гипотезы дефектов, второй агент (Verifier) независимо проверяет воспроизводимость и отсекает шум.',
      keyPatterns: ['Deterministic + LLM Hybrid', 'Immutable Git Context', 'Dual-Agent Verification', 'GO / NO-GO Policy'],
    },
  },
  {
    id: 'timetrack-kz',
    title: 'TIMETRACK.KZ',
    category: 'b2b',
    categoryLabel: 'B2B & Mobile',
    tagline: 'Мультитенантная система учета рабочего времени и биометрии',
    description: 'Комплексное решение для предприятий: веб-кабинет администратора, мобильное приложение на Expo для сотрудников, учет смен, валидация геопозиции и биометрическая верификация при открытии/закрытии смены.',
    highlights: [
      'Мультитенантная архитектура базы данных с жесткой изоляцией данных организаций',
      'Мобильный клиент на React Native / Expo с поддержкой офлайн-режима',
      'Геофенсинг (проверка нахождения сотрудника на рабочем объекте по GPS)',
      'Биометрическая проверка лица сотрудника для исключения отметок третьими лицами',
    ],
    technologies: ['React', 'React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Biometrics API', 'Geolocation'],
    status: 'production',
    statusBadge: 'В эксплуатации',
    metrics: 'Мультитенантная изоляция',
    architectureDetails: {
      problem: 'Накрутка рабочих часов сотрудниками вне рабочего места и передача аккаунтов коллегам.',
      solution: 'Комбинация GPS-валидации по радиусу объекта (геозона) и локальной биометрической аутентификации перед отправкой подписанного события смены.',
      keyPatterns: ['Multi-Tenant Data Isolation', 'Mobile Offline First', 'Geofencing Validation', 'Biometric Auth'],
    },
  },
  {
    id: 'zanai-lexmirror',
    title: 'ZANAI / LEXMIRROR',
    category: 'ai',
    categoryLabel: 'GovTech & RAG',
    tagline: 'Система поиска коллизий и противоречий в законодательстве РК',
    description: 'Исследовательская GovTech-система для анализа правовых актов Республики Казахстан. Обрабатывает массив из 13 751 нормативно-правового акта, выявляя скрытые несоответствия и юридические коллизии.',
    highlights: [
      'Сбор и нормализация корпуса из 13 751 НПА РК через распределенный краулер Scrapy',
      'Векторное хранилище на ChromaDB с чанкованием по статьям и пунктам законов',
      'Двухэтапная гибридная оценка: Natural Language Inference (NLI на RuBERT) + LLM верификация',
      'Высокая точность: F1-score = 0.89 на валидационной выборке пар статей',
    ],
    technologies: ['Python', 'Scrapy', 'ChromaDB', 'RuBERT', 'NLI', 'LLM API', 'Streamlit / FastAPI'],
    status: 'research',
    statusBadge: 'R&D Research (F1 = 0.89)',
    metrics: '13 751 обработанный НПА',
    architectureDetails: {
      problem: 'Колоссальный объем законов и подзаконных актов делает ручной поиск противоречий почти невозможным.',
      solution: 'Двухступенчатая фильтрация: векторный поиск находит кандидатов, RuBERT NLI определяет противоречия (entailment/contradiction), а LLM формирует структурированное юридическое обоснование.',
      keyPatterns: ['Corpus Preprocessing', 'Hybrid NLI + LLM Pipeline', 'ChromaDB Embeddings', 'Precision Evaluation'],
    },
  },
  {
    id: 'megapos-kz',
    title: 'MEGAPOS.KZ',
    category: 'b2b',
    categoryLabel: 'E-commerce & POS B2B',
    tagline: 'B2B-платформа POS-оборудования с Integration Outbox',
    description: 'Масштабируемая торговая площадка для дистрибуции кассового и торгового оборудования. Схема базы данных из 20 реляционных моделей, управление резервами, интеграционный аутбокс и парсинг цен конкурентов.',
    highlights: [
      'Реляционная модель данных из 20 моделей в PostgreSQL с миграциями через Prisma',
      'Паттерн Integration Outbox для гарантированной доставки событий во внешние учетные системы',
      'Система резервирования товаров с защитой от race conditions при параллельных заказах',
      'Мониторинг цен конкурентов с алгоритмом выявления ценовых аномалий',
    ],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Redis', 'Docker Compose', 'Integration Outbox'],
    status: 'production',
    statusBadge: 'Production Architecture',
    metrics: '20 реляционных моделей',
    architectureDetails: {
      problem: 'Потеря транзакций при одновременной записи в БД и вызове внешних вебхуков партнеров при нестабильной сети.',
      solution: 'Реализован паттерн Transactional Outbox: события сохраняются в ту же транзакцию PostgreSQL, что и заказ, а фоновый worker отправляет их с экспоненциальным backoff.',
      keyPatterns: ['Transactional Outbox', 'Distributed Locks via Redis', 'Optimistic / Pessimistic Locking', 'Price Anomaly Engine'],
    },
  },
  {
    id: 'carwash',
    title: 'CARWASH PWA',
    category: 'systems',
    categoryLabel: 'Computer Vision & IoT',
    tagline: 'Автоматизация автомойки с распознаванием авто по фотографии',
    description: 'PWA-приложение для операторов автомойки. Включает автоматическое определение автомобиля и госномера по фото с камеры смартфона, расчет стоимости услуг, защиту от повторных чеков и очистку приватных EXIF-данных.',
    highlights: [
      'Интеграция Computer Vision для детекции машин и номерных знаков',
      'Клиентская и серверная очистка EXIF-метаданных для соблюдения приватности клиентов',
      'Защита от повторных транзакций и случайных двойных тапов операторов',
      'Оптимизировано для быстрой работы на бюджетных смартфонах персонала',
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Computer Vision', 'PWA', 'EXIF Sanitizer'],
    status: 'pilot',
    statusBadge: 'Пилотная готовность',
    metrics: 'CV Recognition Pipeline',
    architectureDetails: {
      problem: 'Человеческий фактор при вводе данных операторами мойки приводит к очередям, ошибкам тарификации и мошенничеству.',
      solution: 'Автоматизация фиксации заезда по камере, определение типа кузова, мгновенная калькуляция по прайс-листу и сохранение снимка без конфиденциальных метаданных.',
      keyPatterns: ['Client-Side EXIF Scrubbing', 'Fast Inference API', 'Idempotent Order Creation', 'Lightweight PWA'],
    },
  },
  {
    id: 'usage-ai',
    title: 'USAGE.AI',
    category: 'systems',
    categoryLabel: 'Rust / Desktop Native',
    tagline: 'Локальная macOS-утилита мониторинга квот AI-провайдеров',
    description: 'Высокопроизводительное десктопное приложение для мониторинга расхода токенов и лимитов API популярных LLM. Построено на модульной архитектуре из 5 Rust-крейтов без лишней нагрузки на сеть.',
    highlights: [
      'Модульная архитектура из 5 независимых Rust-крейтов для максимальной скорости и безопасности типов',
      'Сбор данных по официальным API провайдеров и парсинг локальных логов без отправки телеметрии',
      'Минимальное потребление памяти (< 35MB RAM) благодаря Tauri и Svelte 5',
      'Локальное зашифрованное хранилище токенов и конфигураций в SQLite',
    ],
    technologies: ['Rust', 'Tauri', 'Svelte 5', 'SQLite', 'macOS native'],
    status: 'ready',
    statusBadge: 'Open-Source Utility',
    metrics: '< 35MB RAM, 5 Rust Crates',
    architectureDetails: {
      problem: 'Электронные утилиты тратят сотни мегабайт оперативной памяти ради простого статус-бара мониторинга лимитов.',
      solution: 'Нативный бэкенд на Rust с GUI через системный WebKit (Tauri), разделенный на крейты: api-client, storage, core, watcher, ui.',
      keyPatterns: ['Multi-crate Rust Architecture', 'Zero-Inference Cost', 'Local SQLite Encryption', 'Tauri IPC'],
    },
  },
];

export const ARCHITECTURE_CASE_STUDIES = [
  {
    id: 'idempotency-fsm',
    title: 'Идемпотентность и Конечная машина статусов (NuraPay)',
    category: 'FinTech & Reliability',
    summary: 'Как предотвратить двойные списания средств и рассинхронизацию статусов при нестабильном интернете клиентов и повторных вебхуках банков.',
    workflow: [
      '1. Клиент инициирует оплату с сгенерированным Idempotency-Key (UUIDv4)',
      '2. Redis проверяет атомарным SETNX наличие ключа. Если ключ существует — возвращается кэшированный ответ либо 409 Conflict',
      '3. Запись транзакции в PostgreSQL со статусом PENDING в рамках строгой FSM (State Machine)',
      '4. Отправка запроса в платежный шлюз (Kaspi Pay) с HMAC-SHA256 подписью payload',
      '5. Асинхронный webhook от банка верифицируется по подписи, проверяется допустимость перехода (PENDING → PAID) и обновляется статус',
      '6. Reconciliation Worker каждые 15 минут сверяет зависшие транзакции через API банка',
    ],
    codePreview: `// Архитектурный паттерн Idempotent State Machine
async function processPayment(key: string, payload: PaymentRequest) {
  const lock = await redis.set(\`idem:\${key}\`, 'LOCKED', 'NX', 'EX', 120);
  if (!lock) {
    const existing = await db.payments.findUnique({ where: { idempotencyKey: key } });
    if (existing) return existing;
    throw new ConcurrentConflictException('Запрос уже обрабатывается');
  }
  
  try {
    const payment = await db.$transaction(async (tx) => {
      return await tx.payments.create({
        data: { ...payload, status: PaymentState.PENDING, idempotencyKey: key }
      });
    });
    return payment;
  } finally {
    await redis.expire(\`idem:\${key}\`, 86400); // 24h retention
  }
}`,
  },
  {
    id: 'langgraph-mcp',
    title: 'Мультиагентный оркестратор на LangGraph + MCP (AI Office)',
    category: 'AI Systems & Autonomous Agents',
    summary: 'Разделение монолитного промпта на граф специализированных ролей с протоколом MCP для безопасного вызова внешних инструментов.',
    workflow: [
      '1. Запрос пользователя поступает диспетчеру (Router Agent), определяющему категорию задачи',
      '2. Инициализация StateGraph с общим контекстом: messages, active_role, artifact_drafts, tool_outputs',
      '3. Передача задачи специализированному агенту (Архитектор / Разработчик / QA)',
      '4. Вызов внешних инструментов через Model Context Protocol (MCP) с JSON-Schema валидацией',
      '5. Human-in-the-loop: опасные действия (изменение БД, деплой) требуют подтверждения в Telegram/UI',
      '6. Агент-валидатор формирует итоговый ответ с сохранением фактов в pgvector RAG',
    ],
    codePreview: `# Паттерн оркестрации LangGraph StateGraph
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated, Sequence

class AgentState(TypedDict):
    messages: Sequence[BaseMessage]
    current_role: str
    approved_by_human: bool

workflow = StateGraph(AgentState)
workflow.add_node("router", router_node)
workflow.add_node("engineer", engineer_agent)
workflow.add_node("mcp_executor", mcp_tools_node)
workflow.add_node("human_gate", human_approval_node)

workflow.add_conditional_edges("router", route_decision)
workflow.add_conditional_edges("engineer", check_needs_human_approval)
app = workflow.compile()`,
  },
  {
    id: 'commerceml-1c',
    title: 'Шлюз обмена CommerceML 2.x & 1С:Предприятие (POSCenter)',
    category: 'Enterprise Integrations & Retail',
    summary: 'Двусторонний обмен номенклатурой, остатками, ценами и фискальными Z-отчетами между кассами, базами 1С и облачным веб-кабинетом.',
    workflow: [
      '1. 1С формирует стандартизированные CommerceML XML-файлы (import.xml, offers.xml)',
      '2. Авторизация шлюза по протоколу Basic Auth + Session Cookie с ограничением по IP',
      '3. Потоковый парсинг XML (SAX/iterparse) без загрузки гигабайтных файлов целиком в память',
      '4. Bulk Upsert номенклатуры и цен в PostgreSQL через временные staging-таблицы',
      '5. Обратная выгрузка Z-отчетов и заказов из облака в 1С через COMConnector/HTTP-сервис 1С',
      '6. Оповещение владельца через WebSocket в PWA об обновлении дневной выручки',
    ],
    codePreview: `# Потоковая обработка CommerceML пакетов
from lxml import etree

def stream_commerceml_catalog(xml_stream):
    context = etree.iterparse(xml_stream, events=('end',), tag='Товар')
    batch = []
    for event, elem in context:
        item = {
            'sku_1c': elem.findtext('Ид'),
            'name': elem.findtext('Наименование'),
            'barcode': elem.findtext('Штрихкод'),
        }
        batch.append(item)
        if len(batch) >= 500:
            bulk_upsert_products(batch)
            batch.clear()
        elem.clear() # Освобождение оперативной памяти
    if batch:
        bulk_upsert_products(batch)`,
  },
];
