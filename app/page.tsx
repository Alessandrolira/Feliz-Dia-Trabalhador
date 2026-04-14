export default function Home() {
  const pdfSrc =
    "/zNesse Dia do Trabalhador, queremos reconhecer quem faz tudo acontecer.pdf";

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        background: "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Desktop / browsers com suporte nativo a PDF */}
      <object
        data={pdfSrc}
        type="application/pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
      >
        {/* Fallback para mobile (Safari iOS não suporta <object> PDF) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "1rem",
            padding: "2rem",
            color: "#fff",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <p style={{ fontSize: "1rem", opacity: 0.8 }}>
            Seu navegador não exibe PDFs inline.
          </p>
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#fff",
              color: "#000",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Abrir PDF
          </a>
        </div>
      </object>
    </div>
  );
}
