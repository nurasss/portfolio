# Nurassyl Bulatuly — Web / API / AI Release QA

**Remote, Kazakhstan · Full-stack engineer · Independent QA support for small SaaS teams, agencies and e-commerce.**

### Release QA without a full-time hire

**Indicative $45 scoped pilot** · **$200/month for up to 8 hours of agreed QA checks**

Get a risk-prioritized smoke/regression checklist, reproducible defect reports, and fix retests. Scope can cover critical web journeys, representative API cases, responsive interfaces and AI workflows in an **authorized staging environment**.

**[See service scope, pricing assumptions and sample deliverables →](SERVICES.md)**  
**[View sample QA report →](QA_REPORT_SAMPLE.md)** · **[View CRO/landing-page QA checklist →](CRO_LANDING_PAGE_QA_SAMPLE.md)**  
**Contact:** [bulatulynurasyl22@gmail.com](mailto:bulatulynurasyl22@gmail.com?subject=QA%20pilot%20%2F%20monthly%20release%20checks) — include product type, next release date and two key user flows.

*Prices are indicative, not binding. Work, access, schedule, payment and terms are separately agreed. Public QA samples are demonstrations of engineering practice, not claims of paid client audits.*

### По-русски

**Внешний QA для веб-приложений, API и AI-функций.** Небольшой пилот — ориентир **$45**; регулярные проверки релизов — **$200/месяц за до 8 часов**. Проверки только с разрешения владельца, с отчётом о дефектах и рисках. [Условия и примеры →](SERVICES.md). Связь: **bulatulynurasyl22@gmail.com**.

---

## Портфолио и резюме — Нурасыл Булатулы

> **Full-Stack Product Engineer / Backend & AI Systems**  
> Астана, Казахстан · [GitHub](https://github.com/nurasss) · [QA services](SERVICES.md)

---

## ⚡ О проекте

Современный, интерактивный веб-сайт портфолио и резюме, построенный на стеке **React 19**, **TypeScript**, **Tailwind CSS** и **Vite 8**. 

Сайт спроектирован с акцентом на демонстрацию инженерной зрелости, отказоустойчивости систем и глубокого опыта в прикладном AI и FinTech.

### Ключевые возможности:
1. **Каталог 9 продуктов и проектов**:
   - Фильтрация по категориям (`Все`, `AI / Multi-Agent`, `FinTech`, `B2B & 1С`, `Системное & Mobile`).
   - Полнотекстовый живой поиск по стеку (FastAPI, 1C, Kaspi, LangGraph, Prisma, Rust и т.д.).
   - Модальные окна с детальным разбором «Инженерный вызов → Архитектурное решение → Примененные паттерны».
2. **Интерактивные архитектурные кейс-стади**:
   - **NuraPay**: Идемпотентность, Idempotency-Key в Redis, конечная машина состояний (FSM), HMAC-SHA256 подпись webhooks Kaspi Pay.
   - **AI Office**: Оркестрация мультиагентной системы на LangGraph StateGraph (7 ролей), протокол Model Context Protocol (MCP), RAG векторная память.
   - **POSCenter**: Двусторонний шлюз обмена CommerceML 2.x, V83.COMConnector, потоковый SAX-парсинг XML.
3. **Интерактивный CLI-терминал**:
   - Полнофункциональная эмуляция консоли разработчика с поддержкой команд: `help`, `stack`, `projects`, `1c`, `ai`, `kaspi`, `contact`, `clear`.
4. **Печать и экспорт в PDF (1-Click)**:
   - Встроенный режим резюме, оптимизированный под `@media print` и требования ATS.
5. **Адаптивный дизайн**:
   - Идеально оптимизирован под мобильные экраны, планшеты и 4K-мониторы с поддержкой темного режима.

---

## 🚀 Запуск и разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки (Hot Module Replacement)
npm run dev

# Продакшн сборка
npm run build

# Локальный предпросмотр сборки
npm run preview
```

Локальный сервер доступен по адресу: `http://localhost:5173/`

---

## 📁 Структура проекта

```text
portfo/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Навигация со статусом занятости и быстрыми ссылками
│   │   ├── Hero.tsx                 # Главный экран, ценностное предложение и ключевые метрики
│   │   ├── ProjectShowcase.tsx       # Каталог проектов с поиском и фильтрами
│   │   ├── ProjectCard.tsx           # Карточка проекта с тегами и кнопкой разбора
│   │   ├── ProjectModal.tsx          # Детальный архитектурный разбор проекта
│   │   ├── ArchitectureDeepDive.tsx  # Системный дизайн: NuraPay, AI Office, CommerceML
│   │   ├── ExperienceTimeline.tsx    # Таймлайн коммерческого опыта (POSCenter, MS Tech, Stolab)
│   │   ├── SkillsGrid.tsx            # Матрица ключевых компетенций, образование и языки
│   │   ├── InteractiveTerminal.tsx   # Интерактивный CLI терминал разработчика
│   │   ├── ResumeModal.tsx           # Версия резюме для печати и экспорта в PDF
│   │   ├── Icons.tsx                 # Векторные иконки
│   │   └── Footer.tsx                # Подвал со всеми контактами
│   ├── data/
│   │   └── portfolioData.ts          # Единая типизированная база данных портфолио
│   ├── App.tsx                       # Корневой компонент
│   ├── index.css                     # Стили Tailwind v4 и правила @media print
│   └── main.tsx                      # Точка входа React 19
├── index.html                        # SEO-теги, шрифты Inter + JetBrains Mono
├── vite.config.ts                    # Конфигурация Vite с @tailwindcss/vite
└── package.json
```
