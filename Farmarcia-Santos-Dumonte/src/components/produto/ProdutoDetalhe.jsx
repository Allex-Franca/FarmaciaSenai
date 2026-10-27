import { useState } from "react";
import "./ProdutoDetalhe.css";

function ProdutoDetalhe({ produto, onVoltar, onAdicionar, onIrCarrinho }) {
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  function alterarQuantidade(valor) {
    setQuantidade((atual) => Math.max(1, atual + valor));
    setAdicionado(false);
  }

  return (
    <main className="detalhe-produto">
      <button className="detalhe-voltar" onClick={onVoltar}>
        ← Voltar para produtos
      </button>

      <section className="detalhe-card">
        <div className="detalhe-imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="detalhe-info">
          <span className="detalhe-categoria">Farmácia Santos Dumonte</span>
          <h1>{produto.nome}</h1>
          <p className="detalhe-preco">{produto.preco}</p>
          <p className="detalhe-descricao">{produto.descricao}</p>

          <div className="detalhe-dados">
            <p>
              <strong>Apresentação:</strong> {produto.apresentacao}
            </p>
            <p>
              <strong>Fabricante:</strong> {produto.fabricante}
            </p>
          </div>

          <div className="detalhe-compra">
            <span className="detalhe-label">Quantidade</span>
            <div className="detalhe-quantidade">
              <button
                onClick={() => alterarQuantidade(-1)}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span>{quantidade}</span>
              <button
                onClick={() => alterarQuantidade(1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="detalhe-adicionar"
            onClick={() => {
              onAdicionar?.(produto, quantidade);
              setAdicionado(true);
            }}
          >
            {adicionado ? "Adicionado à sacola ✓" : "Adicionar ao carrinho"}
          </button>
          {adicionado && (
            <div className="detalhe-confirmacao" role="status">
              <span>
                {quantidade} unidade(s) de {produto.nome} adicionada(s) ao
                carrinho.
              </span>
              <button type="button" onClick={onIrCarrinho}>
                Ver carrinho
              </button>
            </div>
          )}
          <p className="detalhe-aviso">
            Leia a bula e consulte um profissional de saúde em caso de dúvidas.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProdutoDetalhe;
