// Data de hoje pelo servidor (fuso de São Paulo). O app usa isto para liberar
// o conteúdo do dia, em vez de confiar no relógio do celular.
export default function handler(req, res) {
  const now = new Date();
  const sp = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ date: sp, ts: now.toISOString() });
}
