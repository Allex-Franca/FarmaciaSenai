
import { useEffect, useRef, useState } from "react";
import "./Acessibilidade.css";

function Acessibilidade({ pagina }) {
  const [aberto, setAberto] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(100);
  const [altoContraste, setAltoContraste] = useState(false);
  const [destacarLinks, setDestacarLinks] = useState(false);

  const tamanhosOriginais = useRef(new Map());

  useEffect(() => {
    const conteudo = document.querySelector(".conteudo-site");

    if (!conteudo) return;

    tamanhosOriginais.current.forEach((dados, elemento) => {
      elemento.style.fontSize = dados.inline;
    });
    tamanhosOriginais.current.clear();

    const elementos = [conteudo, ...conteudo.querySelectorAll("*")];

    elementos.forEach((elemento) => {
      const estilo = window.getComputedStyle(elemento);

      tamanhosOriginais.current.set(elemento, {
        inline: elemento.style.fontSize,
        original: parseFloat(estilo.fontSize),
      });

      const tamanhoOriginal = parseFloat(estilo.fontSize);

      if (Number.isFinite(tamanhoOriginal)) {
        elemento.style.fontSize = `${tamanhoOriginal * tamanhoFonte / 100}px`;
      }
    });

    conteudo.classList.toggle(
      "acessibilidade-contraste",
      altoContraste
    );

    conteudo.classList.toggle(
      "acessibilidade-links",
      destacarLinks
    );

    return () => {
      tamanhosOriginais.current.forEach((dados, elemento) => {
        elemento.style.fontSize = dados.inline;
      });

      tamanhosOriginais.current.clear();

      conteudo.classList.remove(
        "acessibilidade-contraste",
        "acessibilidade-links"
      );
    };
  }, [pagina, tamanhoFonte, altoContraste, destacarLinks]);

  function restaurarPadrao() {
    setTamanhoFonte(100);
    setAltoContraste(false);
    setDestacarLinks(false);
  }

  return (
    <div className="acessibilidade-container">
      {aberto && (
        <section
          className="acessibilidade-painel"
          aria-label="Opções de acessibilidade"
        >
          <div className="acessibilidade-cabecalho">
            <h2>Acessibilidade</h2>

            <button
              className="acessibilidade-fechar"
              onClick={() => setAberto(false)}
              aria-label="Fechar painel"
            >
              ×
            </button>
          </div>

          <p className="acessibilidade-descricao">
            Personalize a visualização do site.
          </p>

          <div className="acessibilidade-opcao">
            <span>Tamanho do texto</span>

            <div className="acessibilidade-controles">
              <button
                onClick={() =>
                  setTamanhoFonte((valor) => Math.max(80, valor - 10))
                }
                disabled={tamanhoFonte <= 80}
                aria-label="Diminuir fonte"
              >
                A−
              </button>

              <span>{tamanhoFonte}%</span>

              <button
                onClick={() =>
                  setTamanhoFonte((valor) => Math.min(150, valor + 10))
                }
                disabled={tamanhoFonte >= 150}
                aria-label="Aumentar fonte"
              >
                A+
              </button>
            </div>
          </div>

          <label className="acessibilidade-opcao">
            <span>Negrito no conteúdo</span>
            <input
              type="checkbox"
              checked={altoContraste}
              onChange={(e) => setAltoContraste(e.target.checked)}
            />
          </label>

          <label className="acessibilidade-opcao">
            <span>Destacar links</span>
            <input
              type="checkbox"
              checked={destacarLinks}
              onChange={(e) => setDestacarLinks(e.target.checked)}
            />
          </label>

          <button
            className="acessibilidade-restaurar"
            onClick={restaurarPadrao}
          >
            Restaurar padrão
          </button>
        </section>
      )}

      <button
        className="acessibilidade-botao"
        onClick={() => setAberto((valor) => !valor)}
        aria-label={aberto ? "Fechar acessibilidade" : "Abrir acessibilidade"}
        aria-expanded={aberto}
        title="Acessibilidade"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M4 8h16" />
          <path d="m12 8-3 7-4 5" />
          <path d="m12 8 3 7 4 5" />
          <path d="m9 15 3 1 3-1" />
        </svg>
      </button>
    </div>
  );
}

export default Acessibilidade;
