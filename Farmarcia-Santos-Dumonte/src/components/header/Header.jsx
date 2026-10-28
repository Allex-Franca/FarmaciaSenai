
import "./Header.css";
import User from "../../assets/img/user.png";
import Carrinho from "../../assets/img/carrinho.png";
import Logo from "../../assets/img/Logo.png";

function Header({
  onInicio,
  onUsuario,
  onCarrinho,
  totalItens = 0,
  pesquisa = "",
  onPesquisar,
  onEnviarPesquisa,
}) {
  return (
    <header className="header">
      <a
        href="#inicio"
        className="logo"
        onClick={(event) => {
          event.preventDefault();
          onInicio?.();
        }}
        aria-label="Farmácia Santos Dumonte - Início"
      >
        <span className="logo-icon">
          <img src={Logo} alt="" />
        </span>

        <span className="logo-nome">
          Farmácia Santos Dumonte
        </span>
      </a>

      <form
        className="pesquisa"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          onEnviarPesquisa?.();
        }}
      >
        <span className="lupa" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>
        </span>

        <input
          type="search"
          placeholder="Buscar medicamentos e produtos..."
          aria-label="Buscar medicamentos e produtos"
          value={pesquisa}
          onChange={(event) => onPesquisar?.(event.target.value)}
        />

        {pesquisa && (
          <button
            className="pesquisa-limpar"
            type="button"
            onClick={() => onPesquisar?.("")}
            aria-label="Limpar pesquisa"
          >
            ×
          </button>
        )}
      </form>

      <div className="header-acoes">
        <button
          className="usuario"
          type="button"
          aria-label="Minha conta"
          onClick={onUsuario}
        >
          <img src={User} alt="" />
        </button>

        <button
          className="carrinho"
          type="button"
          aria-label={`Carrinho de compras, ${totalItens} item(ns)`}
          onClick={onCarrinho}
        >
          <img src={Carrinho} alt="" />

          <span className="carrinho-contador">
            {totalItens}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
