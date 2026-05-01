// ─── 상수 ───────────────────────────────────────────────
export const CONCERNS = [
  "자녀 교육","주거지 확보","현지 언어 적응","배우자 커리어",
  "건강 및 의료","치안/안전","외로움/네트워킹",
];
export const POST_TAGS = ["일상","정보공유","질문","모임","현지팁","고민상담"];

// ─── 아바타 색상 ─────────────────────────────────────────
const GRADS = [
  "#f59e0b,#d97706","#38bdf8,#6366f1","#34d399,#0d9488",
  "#f472b6,#e11d48","#a78bfa,#7c3aed","#22d3ee,#3b82f6",
];
export const gradFor = (id = "") => GRADS[id.charCodeAt(0) % GRADS.length];

// ─── 시간 표시 ───────────────────────────────────────────
export const timeAgo = (iso) => {
  if (!iso) return "";
  const m = Math.floor((Date.now() - new Date(iso)) / 60000);
  if (m < 1)  return "방금 전";
  if (m < 60) return `${m}분 전`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}시간 전`;
  return `${Math.floor(h / 24)}일 전`;
};

// ─── 공통 스타일 ─────────────────────────────────────────
export const S = {
  screen:        { flex: 1, overflowY: "auto", paddingBottom: 80 },
  card:          { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 16 },
  cardLg:        { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: 24, position: "relative", overflow: "hidden" },
  inp:           { width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, color: "#f1f5f9", fontFamily: "Pretendard,sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box" },
  lbl:           { fontSize: 10, fontWeight: 700, color: "rgba(251,191,36,0.7)", letterSpacing: "0.08em", display: "block", marginBottom: 6, marginLeft: 2 },
  btnAmber:      { background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#020617", fontWeight: 700, border: "none", borderRadius: 14, padding: "11px 18px", cursor: "pointer", fontFamily: "Pretendard,sans-serif", fontSize: 13 },
  btnGhost:      { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", fontWeight: 700, borderRadius: 12, padding: "9px 14px", cursor: "pointer", fontFamily: "Pretendard,sans-serif", fontSize: 12 },
  amberBadge:    { background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.22)", color: "#f59e0b", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 10, display: "inline-block" },
  overlay:       { position: "absolute", inset: 0, background: "#020617", zIndex: 50, display: "flex", flexDirection: "column" },
  overlayHeader: { padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 },
  overlayBody:   { flex: 1, overflowY: "auto", padding: 20 },
  overlayFooter: { padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: 8, flexShrink: 0 },
};

export const stBadge = (s) => ({
  background: s === "대기중" ? "rgba(245,158,11,0.12)" : s === "수락함" ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
  color:      s === "대기중" ? "#f59e0b"                : s === "수락함" ? "#4ade80"              : "#f87171",
  fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 8,
});
