import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, COMMERCIAL_EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto no-print">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Toolbar (Hidden when printing) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-slate-900 text-white border-b border-slate-800 no-print">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-cyan-400">Резюме 2026</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-300">Нурасыл Булатулы</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-sm"
              title="Распечатать или сохранить в PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Печать / Экспорт PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-8 sm:p-12 text-slate-900 font-sans leading-relaxed selection:bg-cyan-200 text-sm">
          
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-bold text-sky-700 uppercase tracking-wide mt-0.5">
                  FULL-STACK PRODUCT ENGINEER / BACKEND & AI SYSTEMS
                </p>
              </div>
              <div className="text-xs text-slate-600 sm:text-right font-mono space-y-0.5">
                <p>{PERSONAL_INFO.location} | <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="text-sky-700 font-bold">{PERSONAL_INFO.phone}</a></p>
                <p><a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-700 font-bold">{PERSONAL_INFO.email}</a></p>
                <p><a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sky-700">github.com/nurasss</a> | <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" className="text-sky-700">nuras.space</a></p>
              </div>
            </div>
          </header>

          {/* Профессиональный профиль */}
          <section className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              ПРОФЕССИОНАЛЬНЫЙ ПРОФИЛЬ
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-normal">
              Full-Stack разработчик с коммерческим опытом с 2025 года. Проектирую и реализую веб-продукты полного
              цикла: интерфейсы, REST API, базы данных, интеграции с 1С и POS, платёжные сценарии и прикладные
              AI-системы. Работаю с архитектурой, тестированием, безопасностью и развертыванием; уделяю особое
              внимание идемпотентности, изоляции данных клиентов и надежности интеграций.
            </p>
          </section>

          {/* Ключевые компетенции */}
          <section className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800">
              <p><strong className="font-bold text-slate-950">Frontend:</strong> TypeScript, JavaScript, React, Next.js, Tailwind CSS, Vite, PWA</p>
              <p><strong className="font-bold text-slate-950">Backend:</strong> Python, FastAPI, Node.js, Express / Fastify, REST API, WebSocket, SQLAlchemy, Alembic</p>
              <p><strong className="font-bold text-slate-950">AI / LLM:</strong> LLM APIs, LangGraph, RAG, MCP, ChromaDB / pgvector, AI evaluation</p>
              <p><strong className="font-bold text-slate-950">Данные / DevOps:</strong> PostgreSQL, Redis, SQLite, Prisma, Docker Compose, GitHub Actions, Nginx / Caddy</p>
              <p className="sm:col-span-2"><strong className="font-bold text-slate-950">Интеграции:</strong> 1С:Предприятие, CommerceML, V83.COMConnector, Bitrix24, Kaspi Pay, HMAC / webhooks</p>
            </div>
          </section>

          {/* Коммерческий опыт */}
          <section className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3 font-mono">
              КОММЕРЧЕСКИЙ ОПЫТ
            </h2>
            <div className="space-y-4">
              {COMMERCIAL_EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="print-break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-950 text-sm">
                      {exp.company} <span className="font-normal text-slate-600">| {exp.role}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-semibold">{exp.period}</span>
                  </div>
                  <ul className="mt-1 space-y-1 list-disc list-inside text-xs text-slate-800">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-snug">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Основные продукты */}
          <section className="mb-6 print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              ОСНОВНЫЕ ПРОДУКТЫ
            </h2>
            <div>
              <div className="font-bold text-slate-950 text-sm">
                POSCENTER APP <span className="text-xs font-normal text-slate-600">· Next.js / FastAPI / PHP / 1С</span>
              </div>
              <p className="text-xs text-slate-800 leading-snug mt-0.5">
                PWA-кабинет владельца магазина с выручкой, Z-отчётами и остатками; backend API и шлюз обмена CommerceML.
                В проекте предусмотрены роли, фоновые задачи и резервное копирование PostgreSQL.
              </p>
            </div>
          </section>

          {/* Избранные инженерные проекты */}
          <section className="mb-6">
            <div className="flex justify-between items-baseline border-b border-slate-300 pb-1 mb-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 font-mono">
                ИЗБРАННЫЕ ИНЖЕНЕРНЫЕ ПРОЕКТЫ
              </h2>
              <span className="text-[11px] text-slate-500 font-mono">AI / LLM · FinTech · B2B · системное и мобильное ПО</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="font-bold text-xs text-slate-950">TIMETRACK.KZ · <span className="font-normal text-slate-600">React / React Native / Node.js</span></p>
                <p className="text-xs text-slate-800">Мультитенантная система учёта рабочего времени: веб-кабинет, мобильное приложение на Expo, учёт смен, геолокация и биометрическая проверка сотрудников.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">NURAPAY · <span className="font-normal text-slate-600">Node.js / TypeScript / React / Kaspi Pay</span></p>
                <p className="text-xs text-slate-800">Прототип платёжного шлюза с адаптерами провайдеров, конечной машиной статусов операций, HMAC-SHA256-подписью webhooks, Idempotency-Key и фоновым механизмом сверки платежей.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">RELEASEGUARD · <span className="font-normal text-slate-600">Python / LLM / Security QA</span></p>
                <p className="text-xs text-slate-800">Предрелизный аудитор Git-репозиториев: анализ привязан к immutable commit SHA, сочетает детерминированные проверки и LLM-анализ, затем проверяет замечания отдельным verifier и выдает GO / REVIEW / NO-GO.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">AI OFFICE / AI COMPANY · <span className="font-normal text-slate-600">FastAPI / LangGraph / PostgreSQL / RAG</span></p>
                <p className="text-xs text-slate-800">Мультиагентные системы для управления задачами через Web UI и Telegram: 7 специализированных ролей, маршрутизация LLM, память / RAG, инструменты агентов и согласование действий человеком.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">CARWASH · <span className="font-normal text-slate-600">React / FastAPI / PostgreSQL / Computer Vision</span></p>
                <p className="text-xs text-slate-800">PWA автоматизации автомойки с распознаванием автомобилей по фотографии. Реализованы расчёт стоимости, управление заказами, защита от повторных операций и очистка EXIF-данных; проект находится на стадии пилотной готовности.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">MEGAPOS.KZ · <span className="font-normal text-slate-600">Next.js / Prisma / PostgreSQL / Redis</span></p>
                <p className="text-xs text-slate-800">B2B-платформа POS-оборудования со схемой из 20 моделей: каталог, резервы, заказы и платежи, мониторинг цен конкурентов, обнаружение аномалий и Integration Outbox.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">USAGE.AI · <span className="font-normal text-slate-600">Rust / Tauri / Svelte 5 / SQLite</span></p>
                <p className="text-xs text-slate-800">Локальная macOS-утилита мониторинга квот AI-провайдеров. Архитектура из 5 Rust-крейтов; сбор данных по API и локальным логам без дополнительных inference-запросов.</p>
              </div>

              <div>
                <p className="font-bold text-xs text-slate-950">ZANAI / LEXMIRROR · <span className="font-normal text-slate-600">Python / Scrapy / ChromaDB / RuBERT / LLM</span></p>
                <p className="text-xs text-slate-800">Исследовательская GovTech-система поиска потенциальных противоречий в законодательстве РК: корпус из 13 751 НПА, двухэтапная оценка NLI + LLM; F1 = 0,89 по заявленной внутренней выборке из 50 пар.</p>
              </div>
            </div>
          </section>

          {/* Дополнительный технический опыт */}
          <section className="mb-6 print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              ДОПОЛНИТЕЛЬНЫЙ ТЕХНИЧЕСКИЙ ОПЫТ
            </h2>
            <p className="text-xs text-slate-800 leading-snug">
              Кроссплатформенная разработка: Rust / Tauri, Go, Kotlin / Jetpack Compose, SwiftUI. Прототипы AI-поиска по
              клиническим протоколам; разработка e-commerce витрин, Telegram-ботов и систем обработки документов.
            </p>
          </section>

          {/* Образование и языки */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              ОБРАЗОВАНИЕ И ЯЗЫКИ
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs text-slate-800 gap-2">
              <div>
                <span className="font-bold text-slate-950">{PERSONAL_INFO.education.institution}</span> — «{PERSONAL_INFO.education.degree}», {PERSONAL_INFO.education.graduation}
              </div>
              <div className="font-mono text-slate-600">
                Языки: казахский — родной; русский — C1; английский — B1.
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
