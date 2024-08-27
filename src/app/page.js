import "./style.css";
import Image from "next/image";
import { handleLogin } from "./script.js";
import {showSearchInput} from './script.js';
import {hamburguer} from './script.js';
import {telaLogin} from './script.js';


export default function Home() {
  return (
    <>
      <div id="tela-inicial">
        <div className="cabecalho2"></div>
        <div className="menuContainer">
          <div className="nomefuncao">
            <p className="nome">edlayne</p>
            <p className="funcao">psicóloga</p>
          </div>
          <div className="menu">
            <div className="menuTexto">
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
              <div id="searchContainer">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Digite sua pesquisa"
                  style={{ display: "none" }}
                  onkeypress="searchText(event)"
                />
                <button className="menuBotao" onClick={showSearchInput }>
                  <Image
                    src="/img/lupa.png"
                    width={1000}
                    height={760}
                    className="lupa"
                  />
                </button>
              </div>

              <button className="menuBotao" onClick={ handleLogin }>
                <img className="user" src="/img/usuario.png" />
              </button>
              <button className="menuBotao" onClick={ hamburguer }>
                <img className="hamburguer" src="/img/hamburguer.png" />
              </button>
            </div>
          </div>
        </div>
        <div className="aba">
          <div>
            <img className="bgAba" src="/img/aba.png" />
            <p className="sumario">Sumário</p>
            <a href="#tela-inicial" id="top1" className="topicosAba">
              Tela inicial
            </a>
            <a href="#meus-objetivos" id="top2" className="topicosAba">
              MEUS OBJETIVOS
            </a>
            <a href="#sobre-mim" id="top3" className="topicosAba">
              Sobre mim
            </a>
            <a
              href="#como-funciona-a-terapia-online"
              id="top4"
              className="topicosAba"
            >
              Como Funciona a <br /> Terapia Online
            </a>
          </div>
        </div>

        <div className="imagensComDesc">
          <div>
            <img className="vaso" src="/img/vaso.png" />
            <img className="edlayne" src="/img/0 1.png" />
          </div>
          <div className="textoDireita">
            <p className="titulo">
              Psicologia com consultas <br />
              on-line
            </p>

            <p className="outro">Edlayne ribeiro da silva</p>
            <p className="desc">
              Psicologia é a área da ciência que estuda a mente e o
              comportamento humano e as suas interações com o ambiente físico e
              social. A palavra provém dos termos gregos psico (alma) e logía
              (estudo). O objetivo da psicologia é diagnosticar, compreender,
              explicar e orientar a mudança de comportamentos humanos.Psicologia
              é a área da ciência que estuda a mente e o comportamento humano e
              as suas interações com o ambiente físico e social. A palavra
              provém dos termos gregos psico (alma) e logía (estudo). O objetivo
              da psicologia é diagnosticar, compreender, explicar e orientar a
              mudança de comportamentos humanos.
            </p>

            <div className="butao">
              <button className="botao" type="button" onClick={ handleLogin }>
                {" "}
                consulte-se &nbsp;&nbsp; ▶{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="linha">
          <img src="/img/lines.png" />
        </div>

        <div className="cabecalho"></div>
        <div className="login-container">
          <div className="login-box" >
            <button className="detalhes1" type="button" onClick={ handleLogin } >
              {" "}
            </button>

            <div className="login-infos">
              <p className="bemVindo">Bem-vindo!</p>
              <p className="facaLogin">
                Faça o login da sua conta para continuar
              </p>
              <div className="form">
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite o e-mail"
                  />
                </div>
                <div className="form-element">
                  <input
                    type="password"
                    id="password"
                    placeholder="Digite a senha"
                  />
                </div>
                <div className="form-element">
                  <a className="esqueceuSenha" href="senha">
                    Esqueceu a senha?
                  </a>
                </div>
                <button
                  className="botao"
                  id="login"
                  type="submit"
                  onClick={ telaLogin }
                >
                  sing up
                </button>
              </div>
              <img className="bg-login" src="/img/bg-login.png" />
            </div>
          </div>
        </div>
      </div>
      <div id="meus-objetivos">
        <div className="container">
          <img className="bg-tela2" src="/img/bg-tela2.png" />
          <p className="texto-tela2">MEUS OBJETIVOS</p>
          <p className="texto-tela2-ed">Edlayne ribeiro da silva</p>
          <p className="texto-tela2-desc">
            Olá, sou Edlayne Ribeiro, psicóloga clínica, e meu <br />
            objetivo é ajudar você a cuidar da sua saúde
            <br />
            emocional e encontrar o bem-estar mental.
          </p>
          <p className="texto-tela2-desc2">
            Quero conhecer você de verdade, entender o<br /> que está
            acontecendo e te oferecer um espaço
            <br /> seguro e acolhedor para que possamos juntos
            <br /> encontrar soluções para seus problemas. Quero
            <br /> te ajudar a superar crises, lidar com suas
            <br /> emoções, promover seu crescimento pessoal e<br /> emocional,
            e encontrar o equilíbrio necessário
            <br /> para uma vida plena e feliz.
          </p>

          <img className="lineWText" src="/img/line.png" />
          <p className="topicos1">
            <img className="correto" src="/img/correto.png" />
            Serviços de aconselhamento on-line para pacientes
          </p>
          <p className="topicos">
            <img className="correto" src="/img/correto.png" />
            Realmente conhecer suas necessidades e expectativas
          </p>
          <p className="topicos">
            <img className="correto" src="/img/correto.png" />
            Estou aqui para ajudá-lo a superar momentos
            <br /> difíceis e encontrar soluções para seus desafios
          </p>

          <button
            className="botao"
            id="botao"
            type="button"
            onClick={ handleLogin }
          >
            {" "}
            consulte-se &nbsp;&nbsp; ▶{" "}
          </button>
        </div>
      </div>
      <div id="sobre-mim" className="tela 3">
        <img className="vaso2" src="/img/vaso.png" />
        <img className="edlayne2" src="/img/0 1.png" />
        <p className="sobremim">Sobre mim</p>

        <p className="nomeinfo">Edlayne ribeiro da silva</p>
        <p className="nomeinfo">CRP 13/9518</p>
        <div className="infos-container">
          <p className="informacoes">
            Olá, sou Edlayne Ribeiro, psicóloga apaixonada pela abordagem da
            Terapia Cognitivo-Comportamental (TCC). Desde que me formei, há
            alguns anos, tenho dedicado minha carreira a ajudar pessoas a
            superarem seus desafios emocionais e comportamentais.
          </p>
          <p className="informacoes">
            Meu objetivo é capacitar meus pacientes a se tornarem seus próprios
            terapeutas, fornecendo-lhes as ferramentas e habilidades necessárias
            para lidar com os desafios que enfrentam não apenas durante nossas
            sessões, mas ao longo de suas vidas.
          </p>
          <p className="informacoes">
            É um privilégio testemunhar a resiliência e o crescimento de cada
            indivíduo que passa pelo processo terapêutico, e estou profundamente
            grata por poder desempenhar esse papel em suas vidas.
          </p>
          <div className="apps">
            <a
              href="https://api.whatsapp.com/send?phone=5583981940972&text=Ol%C3%A1,%20Edlayne"
              target="_blank"
            >
              <img src="/img/zap.png" />
            </a>
            <a
              href="https://www.instagram.com/psicologaedlayne/"
              target="_blank"
            >
              <img src="/img/insta.png" />
            </a>
            <a href="mailto:Edlayneribeiro98@gmail.com" target="_blank">
              <img src="/img/gmail.png" />
            </a>
          </div>
          <img className="linha-tela3" src="/img/linha-unida.png" />
          <div id="como-funciona-a-terapia-online">
            <p className="funcionamento">Como Funciona a </p>
            <p className="terapia">Terapia Online</p>
            <div className="carrosel">
              <img className="carroça" src="/img/carrosel1.png" />
              <img className="carroça" src="/img/carrosel2.png" />
              <img className="carroça" src="/img/carrosel3.png" />
              <img className="carroça" src="/img/carrosel4.png" />
            </div>
            <div className="descs-terapia">
              <div className="negrito0">
                <p className="negrito">Whatsapp</p>
                <p className="italico">Entre em contato através do WhatsApp</p>
                <img className="l0" src="/img/linha desc.png" />
              </div>
              <div className="negrito1">
                <p className="negrito">Marque o Horário</p>
                <p className="italico">
                  Escolha um dos horários disponíveis que melhor te atenda
                  (SEGUNDA à SABÁDO)
                </p>
                <img className="l1" src="/img/linha desc.png" />
              </div>
              <div className="negrito2">
                <p className="negrito">Pagamento</p>
                <p className="italico">
                  Faça o pagamento da sessão (Cartão de Crédito, Transferência
                  ou Pix)
                </p>
                <img className="l2" src="/img/linha desc.png" />
              </div>
              <div className="negrito3">
                <p className="negrito">Consulta</p>
                <p className="italico">
                  Enviarei o link da reunião pelo WhatsApp de alguma das
                  seguintes plataformas: Google Meet
                </p>
                <img className="l3" src="/img/linha desc.png" />
              </div>
            </div>
            <img className="linhaD" src="/img/linha d.png" />
          </div>
        </div>
      </div>
      <div className="rodape"></div>
      <p className="nome2">edlayne</p>
      <p className="funcao2">psicóloga</p>
      <p className="vamonos">
        Vamos conversar?
        <br />
        Edlayne ribeiro da silva –  CRP 13/9518
      </p>
      <p className="vamonos">
        Telefone e e-mail <br />
        <a
          className="link"
          href="https://api.whatsapp.com/send?phone=5583981940972&text=Ol%C3%A1,%20Edlayne"
          target="_blank"
        >
          +55 (83) 98194-0972
        </a>
        <br />
        <a
          className="link"
          href="mailto:Edlayneribeiro98@gmail.com"
          target="_blank"
        >
          @PSICOLOGAEDLAYNE
        </a>
      </p>
      <div className="apps2">
        <a
          href="https://api.whatsapp.com/send?phone=5583981940972&text=Ol%C3%A1,%20Edlayne>"
          target="_blank"
        >
          <img src="/img/zap2.png" />
        </a>
        <a href="https://www.instagram.com/psicologaedlayne/" target="_blank">
          <img src="/img/insta2.png" />
        </a>
        <a href="mailto:Edlayneribeiro98@gmail.com" target="_blank">
          <img src="/img/gmail2.png" />
        </a>
      </div>
      <img className="linhaR" src="/img/linha-rodape.png" />
    </>
  );
}
