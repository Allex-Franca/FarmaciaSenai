import "./Carrinho.css";

function precoEmNumero(preco) {
  const valor = String(preco ?? "")
    .replace(/\s/g, "")
    .replace(/R\$/gi, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  return Number(valor) || 0;
}

function moeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function Carrinho({
  itens = [],
  onVoltar,
  onAlterarQuantidade,
  onRemover,
  onContinuarComprando,
}) {
  const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);

  const subtotal = itens.reduce(
    (total, item) => total + precoEmNumero(item.preco) * item.quantidade,
    0,
  );

  return (
    <main className="pagina-carrinho">
      <button className="carrinho-voltar" type="button" onClick={onVoltar}>
        <span aria-hidden="true">←</span>
        Continuar navegando
      </button>

      <header className="carrinho-titulo">
        <div>
          <span className="carrinho-etiqueta">SUA SACOLA</span>
          <h1>Carrinho de compras</h1>
          <p>Confira seus produtos antes de continuar.</p>
        </div>

        <span className="carrinho-total-itens">
          <span aria-hidden="true">🛒</span>
          {totalItens} {totalItens === 1 ? "item" : "itens"}
        </span>
      </header>

      {itens.length === 0 ? (
        <section className="carrinho-vazio">
          <div className="carrinho-vazio-icone" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M7 10h5l4.5 21h19L41 16H14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="19" cy="38" r="2.5" fill="currentColor" />
              <circle cx="34" cy="38" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <span className="carrinho-vazio-etiqueta">SUA SACOLA ESTÁ LIVRE</span>

          <h2>Seu carrinho está vazio</h2>

          <p>Explore nossos produtos e encontre o que você precisa.</p>

          <button
            className="carrinho-botao-principal"
            type="button"
            onClick={onContinuarComprando}
          >
            Explorar produtos <span aria-hidden="true">→</span>
          </button>
        </section>
      ) : (
        <div className="carrinho-layout">
          <section className="carrinho-lista" aria-label="Produtos no carrinho">
            <div className="carrinho-lista-cabecalho">
              <h2>Seus produtos</h2>
              <span>
                {itens.length} {itens.length === 1 ? "produto" : "produtos"}
              </span>
            </div>

            {itens.map((item) => (
              <article className="carrinho-item" key={item.id}>
                <div className="carrinho-item-imagem">
                  <img src={item.imagem} alt={item.nome} />
                </div>

                <div className="carrinho-item-info">
                  <h3>{item.nome}</h3>

                  <p className="carrinho-item-preco">
                    {moeda(precoEmNumero(item.preco))}
                    <span>por unidade</span>
                  </p>

                  <button
                    className="carrinho-remover"
                    type="button"
                    onClick={() => onRemover?.(item.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Remover
                  </button>
                </div>

                <div className="carrinho-item-controles">
                  <strong className="carrinho-item-subtotal">
                    {moeda(precoEmNumero(item.preco) * item.quantidade)}
                  </strong>

                  <div className="carrinho-quantidade">
                    <button
                      type="button"
                      onClick={() => onAlterarQuantidade?.(item.id, -1)}
                      disabled={item.quantidade <= 1}
                      aria-label={`Diminuir quantidade de ${item.nome}`}
                    >
                      −
                    </button>

                    <span aria-live="polite">{item.quantidade}</span>

                    <button
                      type="button"
                      onClick={() => onAlterarQuantidade?.(item.id, 1)}
                      aria-label={`Aumentar quantidade de ${item.nome}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <button
              className="carrinho-continuar"
              type="button"
              onClick={onContinuarComprando}
            >
              <span aria-hidden="true">←</span>
              Adicionar mais produtos
            </button>
          </section>

          <aside className="carrinho-resumo">
            <span className="carrinho-resumo-etiqueta">RESUMO</span>

            <h2>Resumo do pedido</h2>

            <div className="carrinho-resumo-linha">
              <span>Produtos ({totalItens})</span>
              <strong>{moeda(subtotal)}</strong>
            </div>

            <div className="carrinho-resumo-linha">
              <span>Entrega</span>
              <span className="carrinho-a-calcular">A calcular</span>
            </div>

            <div className="carrinho-resumo-total">
              <span>Total parcial</span>
              <strong>{moeda(subtotal)}</strong>
            </div>

            <button
              className="carrinho-botao-principal"
              type="button"
              onClick={() =>
                window.alert(
                  "Seu carrinho está pronto! A finalização precisa ser conectada a um sistema de entrega e pagamento.",
                )
              }
            >
              Continuar para finalizar
              <span aria-hidden="true">→</span>
            </button>

            <p className="carrinho-resumo-aviso">
              O valor da entrega será informado antes da conclusão do pedido.
            </p>

            <div className="carrinho-seguranca">
              <span aria-hidden="true">✓</span>
              Confira seu pedido antes de finalizar.
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Carrinho;
