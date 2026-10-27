import { useState } from "react";
import "./Main.css";

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";
import { produtos } from "../../data/produtos";

function Main({ onVerProduto }) {
  const banners = [Banner1, Banner2, Banner3];
  const [bannerAtual, setBannerAtual] = useState(0);

  function anterior() {
    setBannerAtual((atual) => atual === 0 ? banners.length - 1 : atual - 1);
  }

  function proximo() {
    setBannerAtual((atual) => atual === banners.length - 1 ? 0 : atual + 1);
  }

  return (
    <main className="main">
      <section className="banner">
        <button className="seta" onClick={anterior} aria-label="Banner anterior">←</button>
        <div className="banner-conteudo">
          <img src={banners[bannerAtual]} alt={`Banner ${bannerAtual + 1}`} />
        </div>
        <button className="seta" onClick={proximo} aria-label="Próximo banner">→</button>
      </section>

      <section className="produtos" id="produtos">
        <h2>Produtos</h2>
        <div className="produtos-lista">
          {produtos.map((produto) => (
            <article className="produto-card" key={produto.id}>
              <button
                className="produto-card-clique"
                onClick={() => onVerProduto(produto)}
                aria-label={`Ver detalhes de ${produto.nome}`}
              >
                <div className="produto-imagem">
                  <img src={produto.imagem} alt={produto.nome} />
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="produto-preco">{produto.preco}</p>
                  <span className="produto-botao">Ver produto</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
