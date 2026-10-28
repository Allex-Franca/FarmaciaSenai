import { useState } from "react";
import "./Usuario.css";

const CHAVE_PERFIL = "farmacia-santos-dumonte-perfil";

const perfilVazio = {
  nome: "",
  email: "",
  telefone: "",
  endereco: "",
};

function carregarPerfil() {
  try {
    const dados = localStorage.getItem(CHAVE_PERFIL);

    return dados ? { ...perfilVazio, ...JSON.parse(dados) } : perfilVazio;
  } catch {
    return perfilVazio;
  }
}

function Usuario({ onVoltar }) {
  const [perfil, setPerfil] = useState(carregarPerfil);
  const [salvo, setSalvo] = useState(false);

  function atualizar(campo, valor) {
    setPerfil((atual) => ({
      ...atual,
      [campo]: valor,
    }));

    setSalvo(false);
  }

  function salvar(event) {
    event.preventDefault();

    try {
      localStorage.setItem(CHAVE_PERFIL, JSON.stringify(perfil));
      setSalvo(true);
    } catch {
      setSalvo(false);
    }
  }

  const primeiraLetra = perfil.nome.trim()
    ? perfil.nome.trim().charAt(0).toUpperCase()
    : "U";

  return (
    <main className="pagina-usuario">
      <button className="usuario-voltar" type="button" onClick={onVoltar}>
        ← Voltar para a loja
      </button>

      <section className="usuario-cabecalho">
        <div className="usuario-avatar">{primeiraLetra}</div>

        <div>
          <span className="usuario-etiqueta">ÁREA DO CLIENTE</span>
          <h1>Minha conta</h1>
          <p>Gerencie seus dados para facilitar suas próximas compras.</p>
        </div>
      </section>

      <div className="usuario-layout">
        <aside className="usuario-menu">
          <div className="usuario-menu-item ativo">
            <span>♙</span>

            <div>
              <strong>Meus dados</strong>
              <small>Informações pessoais</small>
            </div>
          </div>

          <div className="usuario-menu-nota">
            <strong>Seus dados, com cuidado</strong>
            <p>
              As informações deste formulário ficam salvas apenas neste
              navegador neste protótipo.
            </p>
          </div>
        </aside>

        <form className="usuario-formulario" onSubmit={salvar}>
          <div className="usuario-form-titulo">
            <h2>Informações pessoais</h2>
            <p>Mantenha seus dados atualizados.</p>
          </div>

          <label>
            Nome completo
            <input
              type="text"
              autoComplete="name"
              value={perfil.nome}
              onChange={(event) => atualizar("nome", event.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              autoComplete="email"
              value={perfil.email}
              onChange={(event) => atualizar("email", event.target.value)}
              placeholder="voce@exemplo.com"
              required
            />
          </label>

          <label>
            Telefone
            <input
              type="tel"
              autoComplete="tel"
              value={perfil.telefone}
              onChange={(event) => atualizar("telefone", event.target.value)}
              placeholder="(00) 00000-0000"
            />
          </label>

          <label>
            Endereço de entrega
            <input
              type="text"
              autoComplete="street-address"
              value={perfil.endereco}
              onChange={(event) => atualizar("endereco", event.target.value)}
              placeholder="Rua, número, bairro e cidade"
            />
          </label>

          <div className="usuario-acoes">
            {salvo && (
              <span className="usuario-salvo" role="status">
                Dados salvos neste navegador ✓
              </span>
            )}

            <button type="submit" className="usuario-salvar">
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Usuario;
