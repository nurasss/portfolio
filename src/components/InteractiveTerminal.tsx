import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'intro',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">⚡ Nurasyl Bulatuly Terminal & AI Assistant [v2.6.0]</p>
          <p>Full-Stack Product Engineer / Backend & Multi-Agent AI Systems (Astana, KZ).</p>
          <p className="text-xs text-slate-400">Введите <span className="text-cyan-300 font-bold">help</span> или нажмите на одну из быстрых кнопок ниже.</p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="text-cyan-400 font-semibold">Доступные команды:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-emerald-400 font-mono">profile</span> - Профессиональный профиль</div>
              <div><span className="text-emerald-400 font-mono">stack</span> - Стек технологий</div>
              <div><span className="text-emerald-400 font-mono">projects</span> - Список 9 ключевых продуктов</div>
              <div><span className="text-emerald-400 font-mono">1c</span> - Опыт интеграции 1С и CommerceML</div>
              <div><span className="text-emerald-400 font-mono">ai</span> - Мультиагентные системы (LangGraph/MCP)</div>
              <div><span className="text-emerald-400 font-mono">kaspi</span> - Платежи, HMAC и идемпотентность</div>
              <div><span className="text-emerald-400 font-mono">contact</span> - Контакты и каналы связи</div>
              <div><span className="text-emerald-400 font-mono">clear</span> - Очистить консоль</div>
            </div>
          </div>
        );
        break;

      case 'profile':
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <p><span className="text-cyan-400 font-bold">Имя:</span> {PERSONAL_INFO.name} ({PERSONAL_INFO.nameEn})</p>
            <p><span className="text-cyan-400 font-bold">Позиция:</span> {PERSONAL_INFO.title}</p>
            <p><span className="text-cyan-400 font-bold">Локация:</span> {PERSONAL_INFO.location}</p>
            <p><span className="text-cyan-400 font-bold">Образование:</span> {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.degree})</p>
            <p className="text-slate-400 pt-1">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'stack':
        response = (
          <div className="text-xs text-slate-300 space-y-1.5">
            <p><span className="text-cyan-400 font-bold">Frontend:</span> TypeScript, React 19, Next.js, Tailwind CSS, Vite, PWA</p>
            <p><span className="text-blue-400 font-bold">Backend:</span> Python (FastAPI, SQLAlchemy, Alembic), Node.js (Express, Fastify), WebSocket</p>
            <p><span className="text-purple-400 font-bold">AI & LLM:</span> LangGraph (Multi-Agent), MCP, RAG, ChromaDB, pgvector, RuBERT NLI</p>
            <p><span className="text-emerald-400 font-bold">DB & DevOps:</span> PostgreSQL, Redis, Docker Compose, GitHub Actions, Nginx/Caddy</p>
            <p><span className="text-amber-400 font-bold">Enterprise & POS:</span> 1С:Предприятие, CommerceML 2.x, V83.COMConnector, Kaspi Pay, Bitrix24</p>
            <p><span className="text-pink-400 font-bold">Systems:</span> Rust / Tauri (macOS), React Native / Expo, Computer Vision</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-2">
            <p className="text-cyan-400 font-semibold">Список ключевых инженерных проектов:</p>
            <div className="space-y-1">
              {PROJECTS.map((p, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-slate-300">
                  <span className="text-cyan-400 font-mono font-bold">[{idx + 1}]</span>
                  <span className="font-bold text-white">{p.title}</span>
                  <span className="text-slate-500">—</span>
                  <span className="text-slate-400">{p.tagline}</span>
                  <span className="text-cyan-300/80 font-mono text-[10px]">({p.technologies.slice(0, 3).join(', ')})</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case '1c':
        response = (
          <div className="text-xs text-slate-300 space-y-1.5 p-2 rounded-lg bg-slate-950/80 border border-amber-500/30">
            <p className="text-amber-400 font-bold font-mono">1С:ПРЕДПРИЯТИЕ & COMMERCEML ШЛЮЗ:</p>
            <p>• Реализация двустороннего шлюза обмена стандартом CommerceML 2.x (import.xml, offers.xml).</p>
            <p>• Интеграция с локальными базами 1С через V83.COMConnector и HTTP-сервисы.</p>
            <p>• Потоковый SAX-парсинг тяжелых каталогов номенклатуры (десятки тысяч SKU) без перегрузки памяти.</p>
            <p>• Выгрузка фискальных Z-отчетов, кассовых смен и остатков в веб-кабинет POSCenter App.</p>
          </div>
        );
        break;

      case 'ai':
        response = (
          <div className="text-xs text-slate-300 space-y-1.5 p-2 rounded-lg bg-slate-950/80 border border-purple-500/30">
            <p className="text-purple-400 font-bold font-mono">МУЛЬТИАГЕНТНЫЕ СИСТЕМЫ & MCP (AI OFFICE):</p>
            <p>• Архитектура направленного графа состояний (StateGraph) в LangGraph с 7 специализированными ролями.</p>
            <p>• Протокол Model Context Protocol (MCP) для безопасного вызова локальных и удаленных тулов.</p>
            <p>• Долгосрочная векторная память RAG на pgvector и ChromaDB.</p>
            <p>• Human-in-the-loop: подтверждение критических транзакций и изменений перед исполнением.</p>
          </div>
        );
        break;

      case 'kaspi':
        response = (
          <div className="text-xs text-slate-300 space-y-1.5 p-2 rounded-lg bg-slate-950/80 border border-cyan-500/30">
            <p className="text-cyan-400 font-bold font-mono">ПЛАТЕЖИ, IDEMPOTENCY & KASPI PAY (NURAPAY):</p>
            <p>• Идемпотентность по заголовку Idempotency-Key с фиксацией в Redis (SETNX) для защиты от повторных списаний.</p>
            <p>• Конечная машина состояний платежей: PENDING → PROCESSING → PAID / FAILED / REFUNDED.</p>
            <p>• HMAC-SHA256 валидация входящих вебхуков от банка.</p>
            <p>• Фоновый Reconciliation Worker для автоматической сверки спорных транзакций.</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <p><span className="text-cyan-400 font-bold">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-cyan-400 font-bold">Телефон:</span> {PERSONAL_INFO.phone}</p>
            <p><span className="text-cyan-400 font-bold">Telegram:</span> @nurasss ({PERSONAL_INFO.telegram})</p>
            <p><span className="text-cyan-400 font-bold">GitHub:</span> {PERSONAL_INFO.githubHandle}</p>
            <p><span className="text-cyan-400 font-bold">Website:</span> {PERSONAL_INFO.websiteDisplay}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            Команда «{trimmed}» не распознана. Введите <span className="text-cyan-300 font-bold font-mono">help</span> для списка поддерживаемых команд.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl h-[600px] max-h-[85vh] rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs text-slate-400 font-mono ml-2 flex items-center space-x-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>nurasyl@nuras-space:~ (Interactive CLI)</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-500 mr-1 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Быстрые команды:</span>
          </span>
          {['help', 'stack', 'projects', '1c', 'ai', 'kaspi', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-slate-700/60 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center space-x-2 text-cyan-400">
                <span className="text-emerald-400">nurasyl@nuras-space</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-200 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-slate-800">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-xs text-cyan-400 pl-1 shrink-0">
            <span className="text-emerald-400 font-bold">›</span>
            <span>$</span>
          </div>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Введите команду (например: stack, 1c, ai, contact)..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-xs focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
