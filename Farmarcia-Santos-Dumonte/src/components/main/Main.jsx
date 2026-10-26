
import { useState } from "react";
import "./Main.css";

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";

import Remedio1 from "../../assets/img/remedio1.png";
import Remedio2 from "../../assets/img/remedio2.png";
import Remedio3 from "../../assets/img/remedio3.png";
import Remedio4 from "../../assets/img/remedio4.png";
import Remedio5 from "../../assets/img/remedio5.png";

function Main() {
  const banners = [Banner1, Banner2, Banner3];
  const [bannerAtual, setBannerAtual] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Dipirona",
      preco: "R$ 19,90",
      imagem: Remedio1,
    },
    {
      id: 2,
      nome: "Cimegripe",
      preco: "R$ 24,90",
      imagem: Remedio2,
    },
    {
      id: 3,
      nome: "Neosaldina",
      preco: "R$ 15,90",
      imagem: Remedio3,
    },
    {
      id: 4,
      nome: "Loratadina",
      preco: "R$ 29,90",
      imagem: Remedio4,
    },
    {
      id: 5,
      nome: "Vitamina C",
      preco: "R$ 34,90",
      imagem: Remedio5,
    },
  ];

  function anterior() {
    setBannerAtual((atual) =>
      atual === 0 ? banners.length - 1 : atual - 1
    );
  }

  function proximo() {
    setBannerAtual((atual) =>
      atual === banners.length - 1 ? 0 : atual + 1
    );
  }

  return (
    <main className="main">
      <section className="banner">
        <button
          className="seta"
          onClick={anterior}
          aria-label="Banner anterior"
        >
          ←
        </button>

        <div className="banner-conteudo">
          <img
            src={banners[bannerAtual]}
            alt={`Banner ${bannerAtual + 1}`}
          />
        </div>

        <button
          className="seta"
          onClick={proximo}
          aria-label="Próximo banner"
        >
          →
        </button>
      </section>

      <section className="produtos">
        <h2>Produtos</h2>

        <div className="produtos-lista">
          {produtos.map((produto) => (
            <article className="produto-card" key={produto.id}>
              <div className="produto-imagem">
                <img src={produto.imagem} alt={produto.nome} />
              </div>

              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p className="produto-preco">{produto.preco}</p>
                <button className="produto-botao">
                  Ver
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
