import { useState } from "react";
import "./Main.css";

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";
import { produtos } from "../../data/produtos";

const banners = [Banner1, Banner2, Banner3];

function normalizarTexto(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function Main({ onVerProduto, pesquisa = "" }) {
  const [bannerAtual, setBannerAtual] = useState(0);

  function mudarBanner(direcao) {
    setBannerAtual(
      (atual) => (atual + direcao + banners.length) % banners.length,
    );
  }

  const termoPesquisa = normalizarTexto(pesquisa);

  const produtosFiltrados = produtos.filter((produto) => {
    const informacoes = [
      produto.nome,
      produto.descricao,
      produto.fabricante,
      produto.apresentacao,
    ]
      .map(normalizarTexto)
      .join(" ");

    return informacoes.includes(termoPesquisa);
  });

  return (
    <main className="main" id="inicio">
      <section className="banner" aria-label="Ofertas em destaque">
        <button
          className="seta"
          type="button"
          onClick={() => mudarBanner(-1)}
          aria-label="Banner anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m15 18-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="banner-conteudo">
          <img
            src={banners[bannerAtual]}
            alt={`Banner de ofertas ${bannerAtual + 1}`}
          />
        </div>

        <button
          className="seta"
          type="button"
          onClick={() => mudarBanner(1)}
          aria-label="Próximo banner"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m9 18 6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>

      <section className="produtos" id="produtos">
        <div className="produtos-cabecalho">
          <div>
            <span className="produtos-subtitulo">CUIDADOS PARA VOCÊ</span>

            <h2>
              {termoPesquisa ? "Resultados da pesquisa" : "Nossos produtos"}
            </h2>
          </div>

          <span className="produtos-total">
            {produtosFiltrados.length}{" "}
            {produtosFiltrados.length === 1 ? "produto" : "produtos"}
          </span>
        </div>

        {produtosFiltrados.length > 0 ? (
          <div className="produtos-lista">
            {produtosFiltrados.map((produto) => (
              <article className="produto-card" key={produto.id}>
                <button
                  className="produto-card-clique"
                  type="button"
                  onClick={() => onVerProduto?.(produto)}
                  aria-label={`Ver detalhes de ${produto.nome}`}
                >
                  <div className="produto-imagem">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      loading="lazy"
                    />
                  </div>

                  <div className="produto-info">
                    <h3>{produto.nome}</h3>

                    <p className="produto-preco">{produto.preco}</p>

                    <span className="produto-botao">
                      Ver produto
                      <span aria-hidden="true"> →</span>
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="pesquisa-sem-resultados">
            <span className="pesquisa-sem-resultados-icone" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
            </span>

            <h3>Nenhum produto encontrado</h3>

            <p>
              Não encontramos produtos para "{pesquisa}". Tente outro nome ou
              confira se digitou corretamente.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;
