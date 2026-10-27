import "./Carrinho.css";

function precoEmNumero(preco) {
  return (
    Number(
      String(preco)
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim(),
    ) || 0
  );
}

function moeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Carrinho({
  itens,
  onVoltar,
  onAlterarQuantidade,
  onRemover,
  onContinuarComprando,
}) {
  const subtotal = itens.reduce(
    (total, item) => total + precoEmNumero(item.preco) * item.quantidade,
    0,
  );

  return (
    <main className="pagina-carrinho">
      <button className="carrinho-voltar" onClick={onVoltar}>
        ← Continuar navegando
      </button>
      <div className="carrinho-titulo">
        <div>
          <span className="carrinho-etiqueta">SUA SACOLA</span>
          <h1>Carrinho de compras</h1>
        </div>
        <span className="carrinho-total-itens">
          {itens.reduce((n, item) => n + item.quantidade, 0)} item(ns)
        </span>
      </div>

      {itens.length === 0 ? (
        <section className="carrinho-vazio">
          <div className="carrinho-vazio-icone">🛒</div>
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione os produtos que você precisa e eles aparecerão aqui.</p>
          <button
            className="carrinho-botao-principal"
            onClick={onContinuarComprando}
          >
            Ver produtos
          </button>
        </section>
      ) : (
        <div className="carrinho-layout">
          <section className="carrinho-lista" aria-label="Produtos no carrinho">
            {itens.map((item) => (
              <article className="carrinho-item" key={item.id}>
                <div className="carrinho-item-imagem">
                  <img src={item.imagem} alt={item.nome} />
                </div>
                <div className="carrinho-item-info">
                  <h2>{item.nome}</h2>
                  <p className="carrinho-item-preco">
                    {item.preco} <span>por unidade</span>
                  </p>
                  <button
                    className="carrinho-remover"
                    onClick={() => onRemover(item.id)}
                  >
                    Remover
                  </button>
                </div>
                <div className="carrinho-item-controles">
                  <div className="carrinho-quantidade">
                    <button
                      onClick={() => onAlterarQuantidade(item.id, -1)}
                      aria-label={`Diminuir quantidade de ${item.nome}`}
                    >
                      −
                    </button>
                    <span>{item.quantidade}</span>
                    <button
                      onClick={() => onAlterarQuantidade(item.id, 1)}
                      aria-label={`Aumentar quantidade de ${item.nome}`}
                    >
                      +
                    </button>
                  </div>
                  <strong>
                    {moeda(precoEmNumero(item.preco) * item.quantidade)}
                  </strong>
                </div>
              </article>
            ))}
          </section>

          <aside className="carrinho-resumo">
            <h2>Resumo do pedido</h2>
            <div className="carrinho-resumo-linha">
              <span>Subtotal</span>
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
              onClick={() =>
                window.alert(
                  "O carrinho está pronto! A finalização do pedido precisa ser conectada a um sistema de entrega e pagamento.",
                )
              }
            >
              Continuar para finalizar
            </button>
            <p>
              O valor da entrega será informado antes da conclusão do pedido.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Carrinho;
