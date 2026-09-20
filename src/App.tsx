import { useState, useRef, useEffect, useCallback } from "react";
import {
  generateListeningPreview,
  generateReadingPreview,
  generateLogMessages,
  type ListeningPreview,
  type ReadingPreview,
} from "./mockData";

type StepStatus = "waiting" | "loading" | "review" | "approved" | "error";

interface StepState {
  status: StepStatus;
  disabled: boolean;
}

function App() {
  // Step states
  const [step0, setStep0] = useState<StepState>({ status: "waiting", disabled: false });
  const [step1, setStep1] = useState<StepState>({ status: "waiting", disabled: true });
  const [step2, setStep2] = useState<StepState>({ status: "waiting", disabled: true });
  const [step3, setStep3] = useState<StepState>({ status: "waiting", disabled: true });

  // Data
  const [listeningPreview, setListeningPreview] = useState<ListeningPreview | null>(null);
  const [readingPreview, setReadingPreview] = useState<ReadingPreview | null>(null);
  const [buildResult, setBuildResult] = useState<{ variant: number; dir: string } | null>(null);

  // Log
  const [logLines, setLogLines] = useState<string[]>([]);
  const logRef = useRef<HTMLPreElement>(null);

  // Expanded sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logLines]);

  const addLog = useCallback((lines: string[]) => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setLogLines((prev) => [...prev, line]);
      }, i * 200);
    });
  }, []);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Step 0: Open browser
  const handleOpenBrowser = async () => {
    setStep0({ status: "loading", disabled: true });
    addLog(generateLogMessages("browser"));
    await delay(1500);
    setStep0({ status: "approved", disabled: true });
    setStep1({ status: "waiting", disabled: false });
  };

  // Step 1: Collect listening
  const handleCollectListening = async () => {
    setStep1({ status: "loading", disabled: true });
    addLog(generateLogMessages("listening"));
    await delay(2500);
    const preview = generateListeningPreview();
    setListeningPreview(preview);
    setStep1({ status: "review", disabled: false });
  };

  const handleRerollListening = async () => {
    setStep1({ status: "loading", disabled: true });
    addLog(["[аудирование] Перевыбор кандидатов..."]);
    await delay(1200);
    const preview = generateListeningPreview();
    setListeningPreview(preview);
    setStep1({ status: "review", disabled: false });
    addLog(["[аудирование] ✓ Новые кандидаты загружены"]);
  };

  const handleApproveListening = () => {
    setStep1({ status: "approved", disabled: true });
    setStep2({ status: "waiting", disabled: false });
    addLog(["[аудирование] ✓ Раздел утверждён"]);
  };

  // Step 2: Collect reading
  const handleCollectReading = async () => {
    setStep2({ status: "loading", disabled: true });
    addLog(generateLogMessages("reading"));
    await delay(2500);
    const preview = generateReadingPreview();
    setReadingPreview(preview);
    setStep2({ status: "review", disabled: false });
  };

  const handleRerollReading = async () => {
    setStep2({ status: "loading", disabled: true });
    addLog(["[чтение] Перевыбор кандидатов..."]);
    await delay(1200);
    const preview = generateReadingPreview();
    setReadingPreview(preview);
    setStep2({ status: "review", disabled: false });
    addLog(["[чтение] ✓ Новые кандидаты загружены"]);
  };

  const handleApproveReading = () => {
    setStep2({ status: "approved", disabled: true });
    setStep3({ status: "waiting", disabled: false });
    addLog(["[чтение] ✓ Раздел утверждён"]);
  };

  // Step 3: Build
  const handleBuild = async () => {
    setStep3({ status: "loading", disabled: true });
    addLog(generateLogMessages("build"));
    await delay(3000);
    setBuildResult({ variant: 4, dir: "~/Downloads/Variant_4/" });
    setStep3({ status: "approved", disabled: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
            <span className="text-3xl">📝</span>
            КИМ-Генератор ЕГЭ
          </h1>
          <p className="text-sm text-slate-500 mt-1 ml-12">
            Английский язык • Сбор из банка ФИПИ • v6.6
          </p>
          <p className="text-xs text-slate-400 mt-1 ml-12">
            Пошаговый сервис: сбор карточек → ручная проверка → сборка варианта (docx + аудио)
          </p>
        </header>

        {/* Step 0 */}
        <StepCard
          number={0}
          title="Браузер ФИПИ"
          status={step0.status}
        >
          <p className="text-sm text-slate-600 mb-3">
            Откроется окно Chromium. При необходимости войдите в банк / пройдите капчу, затем переходите к шагу 1.
          </p>
          <button
            onClick={handleOpenBrowser}
            disabled={step0.disabled}
            className="btn-primary"
          >
            <span className="mr-2">🌐</span>
            Открыть браузер ФИПИ
          </button>
        </StepCard>

        {/* Step 1 */}
        <StepCard
          number={1}
          title='Раздел 1 «Аудирование»'
          status={step1.status}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={handleCollectListening}
              disabled={step1.disabled}
              className="btn-primary"
            >
              <span className="mr-2">🎧</span>
              Собрать аудирование (1.2, 2×НАЙТИ)
            </button>
            {step1.status === "review" && (
              <>
                <button
                  onClick={handleRerollListening}
                  disabled={step1.status !== "review"}
                  className="btn-secondary"
                >
                  🔄 Перевыбрать
                </button>
                <button
                  onClick={handleApproveListening}
                  disabled={step1.status !== "review"}
                  className="btn-success"
                >
                  ✓ Утвердить
                </button>
              </>
            )}
          </div>

          {listeningPreview && step1.status !== "waiting" && (
            <div className="mt-4 space-y-3">
              {/* Task 1 */}
              <CollapsibleSection
                title={`Задание 1 (${listeningPreview.task1.id})`}
                isOpen={expandedSections["l-task1"]}
                onToggle={() => toggleSection("l-task1")}
              >
                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {listeningPreview.task1.text}
                </p>
                <AudioPlayer src={listeningPreview.audio.task1} label="Аудио задания 1" />
              </CollapsibleSection>

              {/* Task 2 */}
              <CollapsibleSection
                title={`Задание 2 (${listeningPreview.task2.id})`}
                isOpen={expandedSections["l-task2"]}
                onToggle={() => toggleSection("l-task2")}
              >
                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {listeningPreview.task2.text}
                </p>
                <AudioPlayer src={listeningPreview.audio.task2} label="Аудио задания 2" />
              </CollapsibleSection>

              {/* Tasks 3-9 */}
              <CollapsibleSection
                title="Задания 3–9 (группа)"
                isOpen={expandedSections["l-tasks39"]}
                onToggle={() => toggleSection("l-tasks39")}
              >
                {listeningPreview.tasks39.map((task, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-sm text-slate-700 mb-2">{task.q}</p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      {task.opts.map((opt, j) => (
                        <li key={j}>{opt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <AudioPlayer src={listeningPreview.audio.tasks39} label="Аудио интервью" />
              </CollapsibleSection>
            </div>
          )}
        </StepCard>

        {/* Step 2 */}
        <StepCard
          number={2}
          title='Раздел 2 «Чтение»'
          status={step2.status}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={handleCollectReading}
              disabled={step2.disabled}
              className="btn-primary"
            >
              <span className="mr-2">📖</span>
              Собрать чтение (1.3, 2×НАЙТИ)
            </button>
            {step2.status === "review" && (
              <>
                <button
                  onClick={handleRerollReading}
                  disabled={step2.status !== "review"}
                  className="btn-secondary"
                >
                  🔄 Перевыбрать
                </button>
                <button
                  onClick={handleApproveReading}
                  disabled={step2.status !== "review"}
                  className="btn-success"
                >
                  ✓ Утвердить
                </button>
              </>
            )}
          </div>

          {readingPreview && step2.status !== "waiting" && (
            <div className="mt-4 space-y-3">
              {/* Task 10 */}
              <CollapsibleSection
                title={`Задание 10 (${readingPreview.task10.id}): заголовки и тексты`}
                isOpen={expandedSections["r-task10"]}
                onToggle={() => toggleSection("r-task10")}
              >
                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Заголовки:</p>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal ml-4">
                    {readingPreview.task10.headings.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Тексты A–G:</p>
                  {readingPreview.task10.texts.map((t, i) => (
                    <p key={i} className="text-sm text-slate-700 mb-2 leading-relaxed">{t}</p>
                  ))}
                </div>
              </CollapsibleSection>

              {/* Task 11 */}
              <CollapsibleSection
                title={`Задание 11 (${readingPreview.task11.id}): заполнение пропусков`}
                isOpen={expandedSections["r-task11"]}
                onToggle={() => toggleSection("r-task11")}
              >
                <div className="mb-3">
                  {readingPreview.task11.body.map((line, i) => (
                    <p key={i} className="text-sm text-slate-700 leading-relaxed">
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Части предложений:</p>
                  <ol className="text-sm text-slate-600 space-y-1 list-decimal ml-4">
                    {readingPreview.task11.parts.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ol>
                </div>
              </CollapsibleSection>

              {/* Tasks 12-18 */}
              <CollapsibleSection
                title="Задания 12–18 (группа)"
                isOpen={expandedSections["r-tasks1218"]}
                onToggle={() => toggleSection("r-tasks1218")}
              >
                {readingPreview.tasks1218.map((task, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-sm text-slate-700 font-medium mb-1">{task.q}</p>
                    {task.opts.length > 0 && (
                      <ul className="text-sm text-slate-600 space-y-1 ml-4">
                        {task.opts.map((opt, j) => (
                          <li key={j}>{opt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </CollapsibleSection>
            </div>
          )}
        </StepCard>

        {/* Step 3 */}
        <StepCard
          number={3}
          title="Сборка варианта"
          status={step3.status}
        >
          <p className="text-sm text-slate-600 mb-3">
            Скачивание аудио в <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">~/Downloads/Variant_N/</code> и сборка{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">KIMVariant_N.docx</code> из шаблона.
          </p>
          <button
            onClick={handleBuild}
            disabled={step3.disabled}
            className="btn-primary"
          >
            <span className="mr-2">📦</span>
            Собрать вариант (docx + аудио)
          </button>

          {buildResult && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-800 mb-1">
                ✅ Вариант №{buildResult.variant} готов!
              </p>
              <p className="text-sm text-green-700 mb-2">
                Папка: <code className="bg-green-100 px-1.5 py-0.5 rounded text-xs">{buildResult.dir}</code>
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="download-link" onClick={(e) => e.preventDefault()}>
                  ⬇️ Скачать KIMVariant_{buildResult.variant}.docx
                </a>
                <a href="#" className="download-link" onClick={(e) => e.preventDefault()}>
                  🎵 audio_task1.mp3
                </a>
                <a href="#" className="download-link" onClick={(e) => e.preventDefault()}>
                  🎵 audio_task2.mp3
                </a>
                <a href="#" className="download-link" onClick={(e) => e.preventDefault()}>
                  🎵 audio_tasks3-9.mp3
                </a>
              </div>
            </div>
          )}
        </StepCard>

        {/* Log */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 mt-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <span>📋</span> Журнал
          </h3>
          <pre
            ref={logRef}
            className="bg-slate-900 text-slate-200 rounded-lg p-4 text-xs font-mono h-48 overflow-auto whitespace-pre-wrap leading-relaxed"
          >
            {logLines.length === 0
              ? "Ожидание действий..."
              : logLines.join("\n")}
          </pre>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-slate-400">
          <p>КИМ-Генератор ЕГЭ v6.6 • FastAPI + Playwright + python-docx</p>
          <p className="mt-1">Локальный сервис • Данные не покидают ваш компьютер</p>
        </footer>
      </div>
    </div>
  );
}

// --- Sub-components ---

function StepCard({
  number,
  title,
  status,
  children,
}: {
  number: number;
  title: string;
  status: StepStatus;
  children: React.ReactNode;
}) {
  const statusBadge = () => {
    switch (status) {
      case "loading":
        return <span className="badge badge-wait">⏳ загрузка…</span>;
      case "review":
        return <span className="badge badge-wait">👁 проверка</span>;
      case "approved":
        return <span className="badge badge-ok">✓ готово</span>;
      case "error":
        return <span className="badge badge-error">✗ ошибка</span>;
      default:
        return <span className="badge badge-idle">ожидание</span>;
    }
  };

  return (
    <div className="step-card mb-4">
      <h2 className="flex items-center gap-2 mb-3">
        <span className="step-number">{number}</span>
        <span className="text-base font-semibold text-slate-800">{title}</span>
        {statusBadge()}
      </h2>
      {children}
    </div>
  );
}

function CollapsibleSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <details open={isOpen} className="collapsible">
      <summary onClick={(e) => { e.preventDefault(); onToggle(); }}>
        {title}
      </summary>
      {isOpen && <div className="mt-3">{children}</div>}
    </details>
  );
}

function AudioPlayer({ src, label }: { src: string; label: string }) {
  return (
    <div className="mt-3">
      <p className="text-xs text-slate-500 mb-1">🔊 {label}</p>
      <audio controls className="w-full h-8" preload="none">
        <source src={src} type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>
    </div>
  );
}

// --- Utility ---

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default App;
