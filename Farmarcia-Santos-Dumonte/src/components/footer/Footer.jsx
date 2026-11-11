import "./Footer.css";

function Footer() {
  const anoAtual = new Date().getFullYear();

  const integrantes = [
    {
      nome: "Desenvolvedor 1",
      linkedin: "LINK_LINKEDIN_1",
      github: "LINK_GITHUB_1",
    },
    {
      nome: "Desenvolvedor 2",
      linkedin: "LINK_LINKEDIN_2",
      github: "LINK_GITHUB_2",
    },
    {
      nome: "Desenvolvedor 3",
      linkedin: "LINK_LINKEDIN_3",
      github: "LINK_GITHUB_3",
    },
  ];

  return (
    <footer className="footer" id="sobre">
      <div className="footer-conteudo">
        <section className="footer-marca">
          <a className="footer-logo" href="#inicio">
            Farmácia <span>Santos Dumonte</span>
          </a>

          <p>Cuidando da sua saúde e do seu bem-estar todos os dias.</p>
        </section>

        <nav className="footer-links" aria-label="Links rápidos">
          <h3>Links rápidos</h3>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contato</a>
        </nav>

        <section className="footer-contato" id="contato">
          <h3>Nossa equipe</h3>

          {integrantes.map((pessoa, index) => (
            <div className="footer-integrante" key={index}>
              <strong>{pessoa.nome}</strong>

              <div>
                <a href={pessoa.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>

                <a href={pessoa.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
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
