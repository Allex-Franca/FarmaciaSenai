import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div className="footer-marca">
          <h2>
            Farmácia<span> Santos Dumonte</span>
          </h2>
          <p>Cuidando da sua saúde e do seu bem-estar todos os dias.</p>
        </div>

        <div className="footer-links">
          <h3>Links rápidos</h3>
          <a href="/">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-contato" id="contato">
          <h3>Fale conosco</h3>
          <p>Email: contato@farmaciamais.com.br</p>
          <p>Telefone: (00) 00000-0000</p>
          <p>Atendimento: Seg. a Sex.</p>
        </div>
      </div>

      <div className="footer-final">
        <p>
          © {new Date().getFullYear()} Farmácia+. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
