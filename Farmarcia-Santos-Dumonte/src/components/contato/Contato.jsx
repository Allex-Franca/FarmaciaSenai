import "./Contato.css";
import LuanGato from "../../assets/img/luangato.png";

function Contato({ onVoltar }) {
  const professores = [
    {
      nome: "Luan Dias",
      imagem:  LuanGato,
      linkedin: "https://www.linkedin.com/in/luan-de-oliveira-dias/",
      github: "https://github.com/LuanODias",
    },
    {
      nome: "Rafael Lindemann",
      imagem:
        "https://lumiere-a.akamaihd.net/v1/images/b_toystory_characterbanner_rex_mobile_gradient_v2_71ada690.jpeg?region=0,0,640,480",
      linkedin: "https://www.linkedin.com/in/rafael-lindemann-duarte-59437867/",
      github: "https://github.com/rafaellindemann",
    },
  ];

  const integrantes = [
    {
      nome: "Alex França",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLQy7J6cWqrX7uIqcWr_NxLOHhabcrLl3UbPUn_ai9C6lKb_lyeUpxlk&s=10",
      linkedin: "https://www.linkedin.com/in/alex-fran%C3%A7a-0a5945404/",
      github: "https://github.com/Allex-Franca",
    },
    {
      nome: "Brendon Barbosa",
      imagem:
        "https://i.pinimg.com/736x/74/d0/5a/74d05a5fbad2a3164d3ce4f7809359fa.jpg",
      linkedin: "https://www.linkedin.com/in/brendon-barbosa-1a8a9144a/",
      github: "https://github.com/BrendonMarca",
    },
    {
      nome: "Miguel Fernandes",
      imagem:
        "https://i.pinimg.com/236x/e4/d8/1b/e4d81be2c47aaa652e1118c7d3718a8d.jpg",
      linkedin:
        "https://www.linkedin.com/in/miguel-fernandes-de-souza-7b1630437/",
      github: "https://github.com/Miguel-Fernandes-souza-br",
    },
  ];

  return (
    <main className="contato">
      <div className="contato-cabecalho">
        <h1>Nossa equipe</h1>
        <p>
          Conheça os professores e desenvolvedores da Farmácia Santos Dumonte.
        </p>
      </div>
      <h2 className="contato-subtitulo">Desenvolvedores</h2>

      <div className="contato-cards">
        {integrantes.map((pessoa, index) => (
          <div className="contato-card" key={index}>
            <img
              className="contato-avatar"
              src={pessoa.imagem}
              alt={pessoa.nome}
            />

            <h2>{pessoa.nome}</h2>

            <div className="contato-redes">
              <a href={pessoa.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={pessoa.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="contato-subtitulo">Professores</h2>

      <div className="contato-cards">
        {professores.map((pessoa, index) => (
          <div className="contato-card" key={index}>
            <img
              className="contato-avatar"
              src={pessoa.imagem}
              alt={pessoa.nome}
            />

            <h2>{pessoa.nome}</h2>

            <div className="contato-redes">
              <a href={pessoa.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={pessoa.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>



      <button className="contato-voltar" onClick={onVoltar}>
        Voltar para o início
      </button>
    </main>
  );
}

export default Contato;
