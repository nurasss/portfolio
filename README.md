# Портфолио и Резюме 2026 — Нурасыл Булатулы

> **Full-Stack Product Engineer / Backend & AI Systems**  
> Астана, Казахстан | +7 705 459 0601 | [bulatulynurasyl22@gmail.com](mailto:bulatulynurasyl22@gmail.com)  
> GitHub: [github.com/nurasss](https://github.com/nurasss) | Website: [nuras.space](https://nuras.space)

---

### 🔎 QA-сопровождение релизов / Release QA

**Пилот от $45 · ориентир $200/месяц за до 8 часов.** Проверка веб-приложений, API и AI-сценариев с воспроизводимыми баг-репортами. [Услуги, границы работ и контакты →](SERVICES.md)

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
