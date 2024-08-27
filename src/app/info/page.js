import "./style.css";


export default function Home() {
  return (
    <div id="tela-inicial">
      <div className="cabecalho2" />
      <div className="menuContainer">
        <div className="nomefuncao">
          <p className="nome">edlayne</p>
          <p className="funcao">psicóloga</p>
        </div>
        <div className="menu">
          <div className="menuTexto">
            <a href="tela3" className="menuitem">
              home
            </a>
            <a href="horarios" className="menuitem">
              horários
            </a>
            <a href="consulta" className="menuitem">
              consultas
            </a>
            <a href="contato" className="menuitem">
              contato
            </a>
          </div>
          <div className="logo">
            <a className="menuBotao" href="info">
              <img className="user" src="/img/profile picture.png" />
            </a>
          </div>
        </div>
      </div>
      <img className="cao" src="/img/tachorro.png" />
      <img className="blur" src="/img/blur-pfp.png" />
      <img className="caixa-infos" src="/img/caixa-infos.png" />
      <p className="nome-usuario">evilayne souza araújo</p>
      <p className="user-usuario">@Evilayne</p>
      <div id="nome">
        <div className="infos-user">
          <p className="pre-user">nome:</p>
          <p className="user-user">evilayne souza araújo</p>
        </div>
        <div className="infos-user">
          <p className="pre-user">username:</p>
          <p className="user-user">@Evilayne</p>
        </div>
        <div className="infos-user">
          <p className="pre-user">sexo:</p>
          <p className="user-user">Feminino</p>
        </div>
        <div className="infos-user">
          <p className="pre-user">data de nascimento:</p>
          <p className="user-user">14/06/2007</p>
        </div>
      </div>
      <div className="transparente" />
    </div>

  );
}
