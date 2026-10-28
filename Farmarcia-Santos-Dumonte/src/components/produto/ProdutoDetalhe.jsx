
import { useState } from "react";
import "./ProdutoDetalhe.css";

function ProdutoDetalhe({
  produto,
  onVoltar,
  onAdicionar,
  onIrCarrinho,
}) {
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  function alterarQuantidade(valor) {
    setQuantidade((atual) => Math.max(1, atual + valor));
    setAdicionado(false);
  }

  function adicionarAoCarrinho() {
    onAdicionar?.(produto, quantidade);
    setAdicionado(true);
  }

  return (
    <main className="detalhe-produto">
      <button
        className="detalhe-voltar"
        type="button"
        onClick={onVoltar}
      >
        <span aria-hidden="true">←</span>
        Voltar para produtos
      </button>

      <section className="detalhe-card">
        <div className="detalhe-visual">
          <span className="detalhe-selo">CUIDADOS PARA VOCÊ</span>

          <div className="detalhe-imagem">
            <img src={produto.imagem} alt={produto.nome} />
          </div>

          <div className="detalhe-visual-rodape">
            <span className="detalhe-ponto" />
            Qualidade e cuidado no seu dia a dia
          </div>
        </div>

        <div className="detalhe-info">
          <div className="detalhe-caminho">
            Farmácia Santos Dumonte
            <span>/</span>
            Produto
          </div>

          <span className="detalhe-categoria">
            SELECIONADO PARA VOCÊ
          </span>

          <h1>{produto.nome}</h1>

          <p className="detalhe-descricao">
            {produto.descricao}
          </p>

          <div className="detalhe-preco-area">
            <span className="detalhe-preco-legenda">
              Preço do produto
            </span>
            <p className="detalhe-preco">{produto.preco}</p>
          </div>

          <div className="detalhe-dados">
            <div className="detalhe-dado">
              <span className="detalhe-dado-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 3h10v18H7zM9 7h6M9 11h6M9 15h4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="detalhe-dado-titulo">
                  Apresentação
                </span>
                <p>{produto.apresentacao || "Não informada"}</p>
              </div>
            </div>

            <div className="detalhe-dado">
              <span className="detalhe-dado-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 20 7v5c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V7l8-4Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="detalhe-dado-titulo">
                  Fabricante
                </span>
                <p>{produto.fabricante || "Não informado"}</p>
              </div>
            </div>
          </div>

          <div className="detalhe-compra">
            <span className="detalhe-label">Quantidade</span>

            <div className="detalhe-quantidade">
              <button
                type="button"
                onClick={() => alterarQuantidade(-1)}
                disabled={quantidade <= 1}
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <span aria-live="polite">{quantidade}</span>

              <button
                type="button"
                onClick={() => alterarQuantidade(1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="detalhe-adicionar"
            type="button"
            onClick={adicionarAoCarrinho}
          >
            {adicionado
              ? "Adicionado ao carrinho ✓"
              : "Adicionar ao carrinho"}
            {!adicionado && (
              <span aria-hidden="true"> →</span>
            )}
          </button>

          {adicionado && (
            <div className="detalhe-confirmacao" role="status">
              <span>
                {quantidade} unidade(s) de {produto.nome} adicionada(s)
                ao carrinho.
              </span>

              <button
                type="button"
                onClick={onIrCarrinho}
              >
                Ver carrinho →
              </button>
            </div>
          )}

          <p className="detalhe-aviso">
            <span aria-hidden="true">ⓘ</span>
            Leia a bula e consulte um profissional de saúde em caso
            de dúvidas.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProdutoDetalhe;
