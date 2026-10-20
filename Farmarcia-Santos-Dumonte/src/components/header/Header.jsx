  import "./Header.css";
  import User from '../../assets/img/user.png'
  import Carrinho from '../../assets/img/carrinho.png'
  import Logo from '../../assets/img/Logo.png'



  function Header() {
    return (
      <header className="header">
        <a href="/" className="logo">
          <div className="logo-icon"><img src={Logo} alt="" /></div>
          <span>Farmácia Santos Dumonte</span>
        </a>

        <div className="pesquisa">
          <span className="lupa">⌕</span>
          <input
            type="text"
            placeholder="Buscar medicamentos e produtos..."
          />
        </div>

        <button className="usuario" aria-label="Minha conta">
          <span className="usuario-icon"><img src={User} alt="" /></span>
        </button>

        <button className="carrinho" aria-label="Carrinho de compras">
          <span><img src={Carrinho} alt="" /></span>
        </button>
      </header>
    );
  }

  export default Header;