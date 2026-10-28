
import "./Footer.css";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer" id="sobre">
      <div className="footer-conteudo">
        <section className="footer-marca">
          <a className="footer-logo" href="#inicio">
            Farmácia <span>Santos Dumonte</span>
          </a>

          <p>
            Cuidando da sua saúde e do seu bem-estar todos os dias.
          </p>
        </section>

        <nav className="footer-links" aria-label="Links rápidos">
          <h3>Links rápidos</h3>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contato</a>
        </nav>

        <section className="footer-contato" id="contato">
          <h3>Fale conosco</h3>

          <p>
            <span>Email</span>
            <a href="mailto:FarmaciaSantosDumonte@gmail.com">
              FarmaciaSantosDumonte@gmail.com
            </a>
          </p>

          <p>
            <span>Telefone</span>
            <a href="tel:+5548954354924">
              (48) 95435-4924
            </a>
          </p>

          <p>
            <span>Atendimento</span>
            Seg. a sáb.
          </p>
        </section>
      </div>

      <div className="footer-final">
        <p>
          © {anoAtual} Farmácia Santos Dumonte. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
