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
            <div id="searchContainer">
              <input
                type="text"
                id="searchInput"
                placeholder="Digite sua pesquisa"
                style={{ display: "none" }}
                onkeypress="searchText(event)"
              />
              <button className="menuBotao" onclick="showSearchInput()">
                <img className="lupa" src="/img/lupa.png" />
              </button>
            </div>
            <a className="menuBotao" href="info">
              <img className="user" src="/img/profile picture.png" />
            </a>
            <button className="menuBotao" onclick="hamburguer()">
              <img className="hamburguer" src="/img/hamburguer.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="aba">
        <div>
          <img className="bgAba" src="/img/bgAba2.png" />
          <p className="sumario">Sumário</p>
          <a href="tela3" id="top1" className="topicosAba">
            tela inicial
          </a>
          <a href="agendamento" id="top2" className="topicosAba">
            Agendamento de Consultas
          </a>
          <a href="podcast" id="top3" className="topicosAba">
            Recursos Educacionais
          </a>
          <a href="historico" id="top4" className="topicosAba">
            Histórico de Consultas
          </a>
          <a href="notificacao" id="top5" className="topicosAba">
            Notificações e Lembretes
          </a>
          <a href="solicitacao" id="top6" className="topicosAba">
            Solicitação de Prescrição
          </a>
        </div>
      </div>
      <div className="primeirosTopicos">
        <button onclick="artPub()" className="conteudo">
          recomendações de livros
        </button>
        <button onclick="podcast()" className="conteudo">
          Podcasts
        </button>
      </div>
      <img className="linePod" src="/img/linhaPodcast.png" />
      <div className="todosPodcasts">
        <p className="conteudo">Em alta</p>
        <div className="primeirosPodcasts">
          <a href="https://expresso.pt/podcasts/expresso-da-manha" target="_blank">
            <img src="/img/podcast1.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85MGIzYjljL3BvZGNhc3QvcnNz?sa=X&ved=0CBUQ27cFahgKEwiAv4-Kwa2FAxUAAAAAHQAAAAAQ5Qc&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast2.png" />
          </a>
          <a href="https://www.youtube.com/@reginagiannetti" target="_blank">
            <img src="/img/podcast3.png" />
          </a>
          <a
            href="https://podcasts.apple.com/br/podcast/q-tal-sa%C3%BAde-mental/id1559485037"
            target="_blank"
          >
            <img src="/img/podcast4.png" />
          </a>
          <a
            href="https://jornal.usp.br/series/minuto-saude-mental/"
            target="_blank"
          >
            <img src="/img/podcast5Repeat21.png" />
          </a>
          <a
            href="https://open.spotify.com/show/3muZVZASi6zvP3dhV4HV7q"
            target="_blank"
          >
            <img src="/img/podcast6.png" />
          </a>
        </div>
        <p className="conteudo">Principais podcasts sobre saúde mental</p>
        <div className="primeirosPodcasts">
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9qb3JuYWwudXNwLmJyL2ZlZWQvcG9kY2FzdC9taW51dG8tc2F1ZGUtbWVudGFs?sa=X&ved=0CBsQ27cFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQlQM&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast5Repeat21.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZmM2ZjY0Yy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAcQrrcFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQ0QM&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast6.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjdkNWZlYy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAcQrrcFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQ8AM&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast7.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvOGMwYTQxMDQtYTY4OC00ZTU3LTkxZmQtYWQ3YjAwZDVkZGRkL2Q4OTk5OGI1LWE3OGUtNGNjMy05ODcwLWFmZmUwMGJhOWNhZi8xMWExY2M2YS1lNWYyLTRlNzEtYmNmNy1hZmZlMDBiYjIyZmYvcG9kY2FzdC5yc3M?sa=X&ved=0CAcQrrcFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQwAQ&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast8.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvNjlmMmI5MTFhYjIzNDYwZmI5MDk0NWQzOTA4YjM5NTUueG1s?sa=X&ved=0CBwQ27cFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQtAU&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast9Repeat.png" />
          </a>
        </div>
        <p className="conteudo">Principais podcasts sobre Depressão e Ansiedade</p>
        <div className="primeirosPodcasts">
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZDhiYjA5OC9wb2RjYXN0L3Jzcw?sa=X&ved=0CAcQrrcFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQtAU&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast10.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvNjlmMmI5MTFhYjIzNDYwZmI5MDk0NWQzOTA4YjM5NTUueG1s?sa=X&ved=0CBwQ27cFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQtAU&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast9Repeat.png" />
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjg2Mzk5NzA3MC9zb3VuZHMucnNz?sa=X&ved=0CAcQrrcFahgKEwiAr7Pbw62FAxUAAAAAHQAAAAAQ4gU&hl=pt-br"
            target="_blank"
          >
            <img src="/img/podcast11.png" />
          </a>
        </div>
      </div>
      <div className="recomendLivros">
        <p className="recomend">recomendações da psicóloga</p>
        <p>1.Talvez você deva conversar com alguém</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro1.png" />
          </div>
          <div>
            <p>
              De modo geral, buscamos a ajuda de um terapeuta para melhor
              compreender as angústias, os medos, a culpa ou quaisquer outros
              sentimentos que nos causam desconforto e sofrimento. Mas quantos de
              nós já paramos para perguntar: o terapeuta está imune à gama de
              questões que ele auxilia seus pacientes a dirimir e superar, dia após
              dia? A autora best-seller e terapeuta Lori Gottlieb nos mostra que a
              resposta a essa pergunta traz revelações surpreendentes
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Talvez_você_deva_conversar_com_alguém/c0LWDwAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>2.Vença a Depressão Antes que Ela Vença Você</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro2.png" />
          </div>
          <div>
            <p>
              Você se sente perseguido por pensamentos negativos sobre si mesmo,
              sobrecarregado pela solidão, paralisado pelo medo de falhar? Se sua
              resposta é sim, você não está sozinho. A depressão afeta milhões de
              pessoas no mundo todo, mas a boa notícia é que, com tratamento
              efetivo, é possível superá-la. Neste livro, o mundialmente reconhecido
              terapeuta cognitivo e autor de&nbsp;best-sellers&nbsp;Robert L. Leahy
              descreve as causas, os sintomas e o tratamento para a depressão,
              incluindo histórias reais e instruções simples que irão ajudá-lo a
              entender sua doença e a encontrar a melhor maneira de tratá-la.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Vença_a_Depressão_Antes_que_Ela_Vença/xx2vCQAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>3.Sua Saúde Importa </p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro3.png" />
          </div>
          <div>
            <p>
              Seu corpo é habitação do Espírito Santo de Deus, há uma presença santa
              em sua vida e caberá a você cuidar deste templo. Não somos mais
              controlados pelos desejos da carne, o que inclui também a forma como
              nos alimentamos, dormimos, descansamos e tantas outras coisas. Não
              temos apenas o chamado a cuidarmos deste templo, temos a capacidade
              para isso. Tudo o que faremos, todos os dias, será para a glória Dele.
              Não deixe para começar na próxima segunda-feira, o melhor tempo é
              agora! Cuide muito bem do que seu Pai lhe confiou, pois sua saúde
              importa.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.topleituras.com/livros/saude-importa-5993"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>4.Livre de Ansiedade</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro4.png" />
          </div>
          <div>
            <p>
              Esta obra investiga as origens da ansiedade e ensina como levar uma
              vida menos estressante. Utilizando os métodos propostos pelo autor,
              baseados nos melhores tratamentos psicológicos disponíveis, podemos
              conquistar uma vida livre de apreensão, tensão e evitação relacionadas
              à ansiedade.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Livre_de_Ansiedade/yIg6AgAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>Leituras avançadas</p>
        <p>
          5.CT-R - Terapia Cognitiva Orientada para a Recuperação:&nbsp;de
          transtornos mentais desafiadores
        </p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro5.png" />
          </div>
          <div>
            <p>
              O livro descreve a terapia cognitiva orientada para a recuperação
              (CT-R), uma abordagem baseada em evidências destinada a ajudar pessoas
              com transtornos mentais graves, como esquizofrenia, a construírem uma
              vida melhor.O texto inclui exemplos de casos e diálogos para orientar
              os terapeutas sobre como ajudar clientes com diversos desafios, como
              sintomas negativos, delírios, alucinações, dificuldades de
              comunicação, comportamento agressivo ou autoagressão.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/CT_R_Terapia_Cognitiva_Orientada_para_a/fS9QEAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>
          6.Terapia Cognitivo-Comportamental Baseada em Processos:&nbsp;Ciência e
          Competências Clínica
        </p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro6.png" />
          </div>
          <div>
            <p>
              Esta obra, organizada por Steven C. Hayes e Stefan G. Hofmann,
              apresenta os conhecimentos e as recomendações mais atuais na área,
              constituindo-se em leitura fundamental para clínicos, pesquisadores,
              estudantes, instrutores e outros profissionais que trabalham com a
              terapia cognitivo-comportamental.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://books.google.com.br/books/about/Terapia_Cognitivo_Comportamental_Baseada?id=ElHUDwAAQBAJ&source=kp_book_description&redir_esc=y"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>7.Terapia Cognitiva dos Transtornos da Personalidade</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro7.png" />
          </div>
          <div>
            <p>
              Escrito por destacados autores internacionais, este livro é fonte
              profissional e ferramenta de treinamento amplamente utilizada
              &nbsp;para a compreensão e o tratamento de transtornos da
              personalidade sob a perspectiva da terapia cognitivo-comportamental.
              Além de trazer uma discussão dos critérios do DSM-5, esta nova edição
              inclui capítulos sobre mecanismos neurais, questões de diversidade
              cultural, transtorno da personalidade depressiva, transtornos
              comórbidos e manejo de desafios clínicos, entre outros novos
              conteúdos.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Terapia_Cognitiva_dos_Transtornos_da_Per/y9ScDgAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>
          8.O que Acontece em Mindfulness Despertar Interior e Cognição Incorporada
        </p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro8.png" />
          </div>
          <div>
            <p>
              O que passa em nossa mente quando estamos atentos? O que significa
              falar de mindfulness como um modo de ser? Cientificamente, como os
              elementos centrais das tradições contemplativas têm efeitos benéficos?
              Reconhecido por utilizar mindfulness no tratamento da depressão, o
              pesquisador John Teasdale busca responder a essas perguntas,
              explorando as mudanças mais amplas que as pessoas podem experimentar
              por meio de práticas contemplativas.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/O_que_Acontece_em_Mindfulness/hEnVEAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>9.Terapia Cognitiva Focada em Esquemas</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro9.png" />
          </div>
          <div>
            <p>
              Esta obra é resultado da experiência de destacados profissionais
              brasileiros especialistas em terapia cognitiva focada em esquemas.
              Dividida em três seções – fundamentos básicos da terapia do esquema,
              inovações técnicas e focos de intervenção –, é um recurso completo
              para estudantes e profissionais, apresentando a fundamentação teórica
              e o passo a passo da utilização das técnicas, além de exemplos
              clínicos de psicoterapia em terapia do esquema.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Terapia_Cognitiva_Focada_em_Esquemas/e4WPCgAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>10.Terapia cognitivo-comportamental - 3.ed. teoria e prática</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro10.png" />
          </div>
          <div>
            <p>
              O livro clássico Judith S. Beck sobre a terapia
              cognitivo-comportamental (TCC), recurso fundamental para terapeutas e
              estudantes da área da psicologia, chega a sua 3a edição amplamente
              atualizado. Além de apresentar os princípios da técnica, o livro
              aborda como desenvolver a relação terapêutica, fazer uma
              conceitualização de caso, planejar o tratamento, estruturar sessões e
              implementar técnicas cognitivo-comportamentais e experienciais.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Terapia_cognitivo_comportamental_3_ed/gX86EAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>11.Questionamento Socrático para Terapeutas</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro11.png" />
          </div>
          <div>
            <p>
              Questionamento socrático para terapeutas: aprenda a pensar e a
              intervir como um terapeuta cognitivo-comportamental fornece um
              panorama completo e muito bem embasado ao leitor que busca aprofundar
              os seus conhecimentos sobre um dos aspectos mais importantes da
              terapia cognitivo-comportamental (TCC): o questionamento socrático.
              Esse método, também conhecido como descoberta guiada, tem sido
              apontado como uma das técnicas mais difíceis de serem aplicadas no
              campo da TCC.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Questionamento_Socrático_para_Terapeuta/AOa1EAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>12.Sua História de Amor</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro12.png" />
          </div>
          <div>
            <p>
              Você já notou que suas escolhas amorosas o levam a se relacionar
              sempre com pessoas com o mesmo jeito/estilo? Ou que seus medos e
              inseguranças se repetem em muitas das suas relações? Com a leitura de
              Sua história de amor, você começará a ter mais consciência sobre os
              aspectos cognitivos e emocionais que levam à repetição de padrões que
              podem trazer algum tipo de sofrimento aos seus relacionamentos.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Sua_História_de_Amor/_NhsEAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>13.Lidando com a ansiedade</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro13.png" />
          </div>
          <div>
            <p>
              Se você sofre de ansiedade, saiba que não está sozinho. Felizmente,
              existem técnicas efetivas e rápidas que irão ajudá-lo a se livrar da
              preocupação e focar naquilo que é importante em sua vida. Escrito por
              Stefan G. Hofmann, psicólogo mundialmente reconhecido no uso da
              terapia cognitivo-comportamental para o tratamento da ansiedade, este
              livro (também disponível no formato e-book) é uma ferramenta poderosa,
              que reúne estratégias acessíveis para auxiliá-lo no processo de lidar
              com o medo e as preocupações a fim de superar a ansiedade.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Lidando_com_a_ansiedade/FAZgEAAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>14.Regulação Emocional em Psicoterapia</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro14.png" />
          </div>
          <div>
            <p>
              Prático e acessível, este livro enfoca um tema extremamente relevante
              e pouco abordado nas obras sobre técnicas psicoterápicas: o manejo das
              emoções. Com seu conhecimento consistente e enorme experiência
              clínica, Robert Leahy, ex-presidente da International Association of
              Cognitive Psychotherapy e diretor do American Institute for Cognitive
              Therapy, oferece ferramentas poderosas para os terapeutas ajudarem
              seus pacientes a lidar com experiências emocionais temidas ou
              evitadas, independentemente de seu diagnóstico.
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/Regulação_Emocional_em_Psicoterapia/vULkAwAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
        <p>15.A Prática Clínica da Terapia Cognitiva com Crianças e Adolescentes</p>
        <div className="ladoalado">
          <div>
            <img className="livro" src="/img/livro15.png" />
          </div>
          <div>
            <p>
              Com texto acessível e didático, esta 2a edição de A prática clínica da
              terapia cognitiva com crianças e adolescentes descreve como planejar e
              implementar a técnica de acordo com as necessidades específicas de
              cada criança ou adolescente, bem como aborda estratégias para conduzir
              sessões com toda a família e desenvolver, junto aos pais, habilidades
              parentais e de gestão de comportamento. Esta obra é uma parceria com a
              Federação Brasileira de Terapias Cognitivas (FBTC).
            </p>
            <div className="tamanhoDoBotao">
              <a
                href="https://www.google.com.br/books/edition/A_Prática_Clínica_da_Terapia_Cognitiva/LJaDDwAAQBAJ?hl=pt-BR&gbpv=0"
                target="_blank"
              >
                <img className="transicao" src="/img/botaoConferir.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
