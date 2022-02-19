# livro-casadocodigo-web-real-time-nodejs
Repositório com projeto desenvolvido durante a leitura do livro 'Aplicações web real-time com Node.js' da editora Casa do Código 

## Conteúdo
> Node.js é uma poderosa plataforma. Ele permite escrever aplicações JavaScript no server-side, tirando proveito da sintaxe e familiaridade da linguagem para escrever aplicações web escaláveis.
>
> Como o Node.js usa um modelo orientado a eventos, focado em I/O não bloqueante, desenvolver nele pode ser diferente para quem está acostumado às aplicações web tradicionais. Neste livro, Caio Ribeiro Pereira quebra essa enorme barreira, mostrando claramente essa mudança de paradigma, além de focar em tópicos importantes, as APIs principais e frameworks como o Express e o Socket.IO.
>
> Edição atualizada em 09/2021:
>
> Este livro tem entregado valor para os iniciantes em Node.js desde o seu lançamento em 2013. A partir daí, diversas mudanças surgiram no ecossistema JavaScript e Node.js, e os conceitos apresentados neste livro continuam válidos até os dias de hoje.
>
> Nesta atualização, você vai aprender a trabalhar com Node.js versão 16 já usando todos os módulos com versões atuais. Muitos códigos para o uso do Express, do MongoDB e testes foram simplificados. Além disso, todo o projeto abordado no livro está usando códigos de JavaScript moderno desde o ES6 até o atual ES2021.

<details>
	<summary>Prefácio</summary>
	
### As mudanças do mundo web
Tudo na web trata-se de consumismo e produção de conteúdo. Ler ou escrever blogs, assistir ou enviar vídeos, ver ou publicar fotos, ouvir músicas, e assim por diante. Fazemos isso naturalmente todos os dias na internet. E cada vez mais, a necessidade dessa interação aumenta entre os usuários com os diversos serviços da web.
De fato, o mundo inteiro quer interagir mais e mais na internet, seja por meio de conversas com amigos em chats, jogando games on-line, atualizando constantemente suas redes sociais ou participando de sistemas colaborativos. Esses tipos de aplicações requerem um poder de processamento extremamente veloz para que a interação em tempo real entre cliente e servidor seja eficaz. E mais, isto precisa acontecer em uma escala massiva, suportando entre centenas a milhões de usuários.
Então, o que nós, desenvolvedores e desenvolvedoras, precisamos fazer? Precisamos criar uma comunicação em tempo real entre cliente e servidor – que seja rápida, atenda muitos usuários ao mesmo tempo e utilize recursos de I/O (dispositivos de entrada ou saída) de forma eficiente. Qualquer pessoa com experiência em desenvolvimento web sabe que o HTTP não foi projetado para suportar estes requisitos. E pior, infelizmente, existem sistemas que os adotam de forma ineficiente e incorreta, implementando soluções workaround ("gambiarras") que executam constantemente requisições assíncronas no servidor – mais conhecidas como long-polling.
Para os sistemas trabalharem em tempo real, os servidores precisam enviar e receber dados utilizando comunicação bidirecional em vez de usar intensamente requisição e resposta do modelo HTTP pelo Ajax. Também temos de manter esse tipo comunicação de forma leve e rápida para continuar escalável, reutilizável e com um desenvolvimento fácil de ser mantido a longo prazo.

### A quem se destina este livro?
Este livro é destinado aos desenvolvedores web que tenham, pelo menos, conhecimentos básicos de JavaScript e arquitetura cliente-servidor. Ter domínio desses conceitos, mesmo que seja um conhecimento básico, será essencial para que a leitura deste livro seja de fácil entendimento.

### Como devo estudar?
Ao decorrer da leitura, serão apresentados diversos conceitos e códigos, para que você aprenda na prática toda a parte teórica do livro. A partir do capítulo "Iniciando com o Express" até o capítulo final, vamos desenvolver na prática um projeto web, utilizando os principais frameworks e aplicando as boas práticas de desenvolvimento JavaScript para Node.js.
Vale lembrar que este livro tem como pré-requisito saber programar e, principalmente, ter noções básicas de JavaScript, HTML e CSS.
</details>

<details>
	<summary>Sumário</summary>

- Bem-vindo ao mundo Node.js
	- O problema das arquiteturas bloqueantes
	- E assim nasceu o Node.js
	- Single-thread
	- Event-loop
	- Instalação e configuração
	- Gerenciando módulos com NPM
	- Entendendo o package.json
	- Escopos de variáveis globais
	- CommonJS, como ele funciona
- Desenvolvendo aplicações web
	- Criando nossa primeira aplicação web
	- Como funciona um servidor HTTP?
	- Trabalhando com diversas rotas
	- Separando o HTML do JavaScript
	- Desafio: implementando um roteador de URL
- Por que o assíncrono?
	- Desenvolvendo de forma assíncrona
	- Assincronismo versus sincronismo
	- Entendendo o event-loop
	- Evitando callbacks hell
- Iniciando com o Express
	- Por que utilizá-lo?
	- Instalação e configuração
	- Criando um projeto de verdade
	- Gerando o scaffold do projeto
	- Organizando os diretórios do projeto
- Dominando o Express
	- Estruturando views
	- Controlando as sessões de usuários
	- Criando rotas no padrão REST
	- Aplicando filtros antes de acessar as rotas
	- Indo além: criando páginas de erros amigáveis
- Programando sistemas real-time
	- Como funciona uma conexão bidirecional?
	- Conhecendo o framework Socket.IO
	- Implementando um chat real-time
	- Organizando o carregamento de Sockets
	- Compartilhando sessão entre Socket.IO e Express
	- Gerenciando salas do chat
	- Notificadores na agenda de contatos
	- Principais eventos do Socket.IO
- Integração com banco de dados
	- Bancos de dados mais adaptados para Node.js
	- Instalando o MongoDB
	- MongoDB no Node.js utilizando Mongoose
	- Modelando com Mongoose
	- Implementando um CRUD na agenda de contatos
	- Persistindo estruturas de dados usando Redis
	- Mantendo um histórico de conversas do chat
	- Persistindo lista de usuários online
- Preparando um ambiente de testes
	- Mocha, o framework de testes para Node.js
	- Criando um ambiente para testes
	- Instalando e configurando o Mocha
	- Rodando o Mocha no ambiente de testes
	- Testando as rotas
	- Deixando seus testes mais limpos
- Aplicação Node em produção – Parte 1
	- Configurando clusters
	- Redis controlando as sessões da aplicação
	- Monitorando aplicação por meio de logs
	- Otimizações no Express
- Aplicação Node em produção – Parte 2
	- Mantendo a aplicação protegida
	- Mantendo o sistema no ar com Forever
	- Externalizando variáveis de configurações
- Node.js e Nginx
	- Servindo arquivos estáticos do Node.js usando o Nginx
- Continuando os estudos
- Bibliografia

</details>

## Autor
**Caio Ribeiro Pereira**
> [***Caio Ribeiro Pereira***](https://crpwebdev.github.io) é desenvolvedor desde 2008, já brincou muito com Java, PHP, Ruby e atualmente brinca muito com tudo que envolve JavaScript, React, React Native e Node.js! Bacharel em Sistemas de Informação pela Universidade Católica de Santos, nos tempos livres escreve alguns post no seu blog Underground WebDev (udgwebdev.com), de vez em quando contribui no open-source em projetos como Moment.js, Sequelize.js, VanillaMasker, DevFreeBooks e outros em seu GitHub (github.com/caio-ribeiro-pereira), também é admin do Facebook Groups JavaScript - Brazil e atualmente é founder da WatchCoins (watchcoins.net) uma plataforma para acompanhar o mercado de bitcoin e outras criptomoedas. Para saber mais sobre ele, acesse: crpwebdev.github.io

## Dados do produto
```
Número de páginas: 186
ISBN: 978-85-66250-14-5
Data publicação: 05/2013. Atualizado em 09/2021.
```
