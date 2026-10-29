* {
  box-sizing: border-box;
}

:root {
  --bg: #0c1220;
  --panel: #111a2f;
  --panel-soft: #182542;
  --text: #edf4ff;
  --muted: #a8b7d2;
  --accent: #34d399;
  --accent-strong: #22c55e;
  --border: rgba(52, 211, 153, 0.2);
  --warning: #fbbf24;
  --danger: #f87171;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #0d1b2a 0%, var(--bg) 42%);
  color: var(--text);
  font-family: Inter, 'Segoe UI', sans-serif;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 60px;
}

.topbar { margin-bottom: 20px; }

.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

h1 {
  margin: 8px 0 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
}

.layout {
  display: grid;
  grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
  gap: 24px;
}

.panel {
  background: rgba(17, 26, 47, 0.9);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.18);
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.95rem;
}

input, textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(24, 37, 66, 0.95);
  color: var(--text);
  padding: 12px 14px;
  font: inherit;
}

textarea { resize: vertical; }

button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #03150d;
  font-weight: 700;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.18s ease;
}

button:hover { transform: translateY(-1px); }

.status {
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 18px;
}

.output { line-height: 1.6; }
.output.empty { color: var(--muted); }

.output h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

.card {
  background: rgba(24, 37, 66, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
  margin-bottom: 18px;
}

ul {
  padding-left: 18px;
  margin: 8px 0 0;
}

li + li { margin-top: 8px; }

@media (max-width: 760px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
