
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ProdutoDetalhe from "./components/produto/ProdutoDetalhe";
import Carrinho from "./components/carrinho/Carrinho";
import Usuario from "./components/usuario/Usuario";
import Acessibilidade from "./components/acessibilidade/Acessibilidade";

const CHAVE_CARRINHO = "farmacia-santos-dumonte-carrinho";

function lerArmazenamento(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : padrao;
  } catch {
    return padrao;
  }
}

function App() {
  const [pagina, setPagina] = useState("inicio");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [carrinho, setCarrinho] = useState(() =>
    lerArmazenamento(CHAVE_CARRINHO, [])
  );

  useEffect(() => {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  }, [carrinho]);

  function navegar(destino) {
    setPagina(destino);
    setProdutoSelecionado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function atualizarPesquisa(valor) {
    setPesquisa(valor);

    if (pagina !== "inicio") {
      setPagina("inicio");
      setProdutoSelecionado(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function enviarPesquisa() {
    setPagina("inicio");
    setProdutoSelecionado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function abrirProduto(produto) {
    setProdutoSelecionado(produto);
    setPagina("produto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function adicionarAoCarrinho(produto, quantidade = 1) {
    setCarrinho((atual) => {
      const existente = atual.find((item) => item.id === produto.id);

      if (existente) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }

      return [...atual, { ...produto, quantidade }];
    });
  }

  function alterarQuantidade(id, variacao) {
    setCarrinho((atual) =>
      atual
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + variacao }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerDoCarrinho(id) {
    setCarrinho((atual) => atual.filter((item) => item.id !== id));
  }

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <div className="app">
      <div className="conteudo-site">
        <Header
          onInicio={() => navegar("inicio")}
          onUsuario={() => navegar("usuario")}
          onCarrinho={() => navegar("carrinho")}
          totalItens={totalItens}
          pesquisa={pesquisa}
          onPesquisar={atualizarPesquisa}
          onEnviarPesquisa={enviarPesquisa}
        />

        {pagina === "produto" && produtoSelecionado && (
          <ProdutoDetalhe
            produto={produtoSelecionado}
            onVoltar={() => navegar("inicio")}
            onAdicionar={adicionarAoCarrinho}
            onIrCarrinho={() => navegar("carrinho")}
          />
        )}

        {pagina === "inicio" && (
          <Main onVerProduto={abrirProduto} pesquisa={pesquisa} />
        )}

        {pagina === "carrinho" && (
          <Carrinho
            itens={carrinho}
            onVoltar={() => navegar("inicio")}
            onAlterarQuantidade={alterarQuantidade}
            onRemover={removerDoCarrinho}
            onContinuarComprando={() => navegar("inicio")}
          />
        )}

        {pagina === "usuario" && (
          <Usuario onVoltar={() => navegar("inicio")} />
        )}

        <Footer />
      </div>

      <Acessibilidade pagina={pagina} />
    </div>
  );
}

export default App;
