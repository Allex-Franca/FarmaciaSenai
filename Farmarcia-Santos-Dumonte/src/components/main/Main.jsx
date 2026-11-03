import { useState, useEffect } from "react";
import "./Main.css";
import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";
import TADALA from "../../assets/img/TADALA.png";

import { produtos } from "../../data/produtos";

const banners = [Banner1, Banner2, Banner3];
const produtosPorPagina = 10;

function normalizarTexto(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const produtoSecreto = {
  id: "tadala-secreto",
  nome: "Tadala",
  descricao:
    "Medicamento de uso adulto. Consulte a bula e as orientações de um profissional de saúde.",
  preco: "R$ 200,00",
  imagem: TADALA,
  fabricante: "Conforme embalagem",
  apresentacao: "Conforme embalagem",
};

function Main({ onVerProduto, pesquisa = "" }) {
  const [bannerAtual, setBannerAtual] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  function mudarBanner(direcao) {
    setBannerAtual(
      (atual) => (atual + direcao + banners.length) % banners.length
    );
  }

  const termoPesquisa = normalizarTexto(pesquisa);
  const mostrarOpcaoSecreta = termoPesquisa === "tadala";

  const produtosFiltrados = produtos.filter((produto) => {
    const informacoes = [
      produto.nome,
      produto.descricao,
      produto.fabricante,
      produto.apresentacao,
    ]
      .map(normalizarTexto)
      .join(" ");

    return (
      !mostrarOpcaoSecreta &&
      (termoPesquisa === "" || informacoes.includes(termoPesquisa))
    );
  });

  useEffect(() => {
    setPaginaAtual(1);
  }, [termoPesquisa]);
  const totalPaginas = Math.ceil(
    produtosFiltrados.length / produtosPorPagina
  );

  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;

  const produtosDaPagina = produtosFiltrados.slice(
    indiceInicial,
    indiceInicial + produtosPorPagina
  );

  function mudarPagina(numero) {
    setPaginaAtual(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            <span className="produtos-subtitulo">
              CUIDADOS PARA VOCÊ
            </span>

            <h2>
              {termoPesquisa
                ? "Resultados da pesquisa"
                : "Nossos produtos"}
            </h2>
          </div>

          <span className="produtos-total">
            {produtosFiltrados.length + (mostrarOpcaoSecreta ? 1 : 0)}{" "}
            {produtosFiltrados.length + (mostrarOpcaoSecreta ? 1 : 0) === 1
              ? "produto"
              : "produtos"}
          </span>
        </div>

        {produtosFiltrados.length > 0 || mostrarOpcaoSecreta ? (
          <>
            <div className="produtos-lista">
              {mostrarOpcaoSecreta && (
                <article className="produto-card opcao-secreta">
                  <button
                    className="produto-card-clique"
                    type="button"
                    onClick={() => onVerProduto?.(produtoSecreto)}
                    aria-label="Ver detalhes do Tadala"
                  >
                    <div className="produto-imagem">
                      <img src={TADALA} alt="Tadala" />
                    </div>

                    <div className="produto-info">
                      <h3>Tadala</h3>
                      <p className="produto-preco">R$ 200,00</p>

                      <span className="produto-botao">
                        Ver produto →
                      </span>
                    </div>
                  </button>
                </article>
              )}
              {produtosDaPagina.map((produto) => (
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
                        Ver produto →
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            {!termoPesquisa && totalPaginas > 1 && (
              <nav className="paginacao" aria-label="Navegação dos produtos">
                <button
                  type="button"
                  className="paginacao-seta"
                  onClick={() => mudarPagina(paginaAtual - 1)}
                  disabled={paginaAtual === 1}
                  aria-label="Página anterior"
                >
                  ←
                </button>

                {Array.from(
                  { length: totalPaginas },
                  (_, indice) => indice + 1
                ).map((numero) => (
                  <button
                    type="button"
                    key={numero}
                    className={`paginacao-numero ${
                      paginaAtual === numero ? "ativo" : ""
                    }`}
                    onClick={() => mudarPagina(numero)}
                    aria-current={
                      paginaAtual === numero ? "page" : undefined
                    }
                  >
                    {numero}
                  </button>
                ))}

                <button
                  type="button"
                  className="paginacao-seta"
                  onClick={() => mudarPagina(paginaAtual + 1)}
                  disabled={paginaAtual === totalPaginas}
                  aria-label="Próxima página"
                >
                  →
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="pesquisa-sem-resultados">
            <span
              className="pesquisa-sem-resultados-icone"
              aria-hidden="true"
            >
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
              Não encontramos produtos para "{pesquisa}". Tente
              outro nome ou confira se digitou corretamente.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;
