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

1. Bem-vindo ao mundo Node.js
	1. O problema das arquiteturas bloqueantes
	1. E assim nasceu o Node.js
	1. Single-thread
	1. Event-loop
	1. Instalação e configuração
	1. Gerenciando módulos com NPM
	1. Entendendo o package.json
	1. Escopos de variáveis globais
	1. CommonJS, como ele funciona
2. Desenvolvendo aplicações web
	2. Criando nossa primeira aplicação web
	2. Como funciona um servidor HTTP?
	2. Trabalhando com diversas rotas
	2. Separando o HTML do JavaScript
	2. Desafio: implementando um roteador de URL
3. Por que o assíncrono?
	3. Desenvolvendo de forma assíncrona
	3. Assincronismo versus sincronismo
	3. Entendendo o event-loop
	3. Evitando callbacks hell
4. Iniciando com o Express
	4. Por que utilizá-lo?
	4. Instalação e configuração
	4. Criando um projeto de verdade
	4. Gerando o scaffold do projeto
	4. Organizando os diretórios do projeto
5. Dominando o Express
	5. Estruturando views
	5. Controlando as sessões de usuários
	5. Criando rotas no padrão REST
	5. Aplicando filtros antes de acessar as rotas
	5. Indo além: criando páginas de erros amigáveis
6. Programando sistemas real-time
	6. Como funciona uma conexão bidirecional?
	6. Conhecendo o framework Socket.IO
	6. Implementando um chat real-time
	6. Organizando o carregamento de Sockets
	6. Compartilhando sessão entre Socket.IO e Express
	6. Gerenciando salas do chat
	6. Notificadores na agenda de contatos
	6. Principais eventos do Socket.IO
7. Integração com banco de dados
	7. Bancos de dados mais adaptados para Node.js
	7. Instalando o MongoDB
	7. MongoDB no Node.js utilizando Mongoose
	7. Modelando com Mongoose
	7. Implementando um CRUD na agenda de contatos
	7. Persistindo estruturas de dados usando Redis
	7. Mantendo um histórico de conversas do chat
	7. Persistindo lista de usuários online
8. Preparando um ambiente de testes
	8. Mocha, o framework de testes para Node.js
	8. Criando um ambiente para testes
	8. Instalando e configurando o Mocha
	8. Rodando o Mocha no ambiente de testes
	8. Testando as rotas
	8. Deixando seus testes mais limpos
9. Aplicação Node em produção – Parte 1
	9. Configurando clusters
	9. Redis controlando as sessões da aplicação
	9. Monitorando aplicação por meio de logs
	9. Otimizações no Express
10. Aplicação Node em produção – Parte 2
	10. Mantendo a aplicação protegida
	10. Mantendo o sistema no ar com Forever
	10. Externalizando variáveis de configurações
11. Node.js e Nginx
	11. Servindo arquivos estáticos do Node.js usando o Nginx
12. Continuando os estudos
13. Bibliografia

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
