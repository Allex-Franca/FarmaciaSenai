import "./Contato.css";

import LinkedIn from "../../assets/img/linkedin.png";
import GitHub from "../../assets/img/github.png";

function Contato() {
  const desenvolvedores = [
    {
      nome: "Desenvolvedor 1",
      foto: "",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
    {
      nome: "Desenvolvedor 2",
      foto: "",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
    {
      nome: "Desenvolvedor 3",
      foto: "",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  ];

  return (
    <main className="contato">
      <div className="contato-cabecalho">
        <h1>Nossa equipe</h1>
        <p>Conheça os desenvolvedores responsáveis pelo projeto.</p>
      </div>

      <div className="contato-cards">
        {desenvolvedores.map((pessoa, index) => (
          <div className="contato-card" key={index}>
            <div className="contato-foto">
              {pessoa.foto ? (
                <img src={pessoa.foto} alt={pessoa.nome} />
              ) : (
                <span>{pessoa.nome.charAt(0)}</span>
              )}
            </div>

            <h2>{pessoa.nome}</h2>

            <div className="contato-redes">
              <a href={pessoa.linkedin} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
                LinkedIn
              </a>

              <a href={pessoa.github} target="_blank" rel="noreferrer">
                <img src={GitHub} alt="GitHub" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Contato;
