# Podcast API

Este é um servidor simples em Node.js que oferece uma API para listar e filtrar episódios de podcasts. Ele utiliza um arquivo JSON para armazenar os dados dos podcasts e permite realizar operações de leitura e filtragem através de endpoints HTTP.

## Tecnologias

- Node.js
- TypeScript
- http (nativo do Node.js)
- fs (nativo do Node.js)
- path (nativo do Node.js)

## Funcionalidades

### Endpoints

- **GET /api/list**: Retorna uma lista de todos os episódios de podcasts disponíveis.
- **GET /api/episode?p={podcastName}**: Filtra os episódios por nome do podcast. Substitua `{podcastName}` pelo nome do podcast desejado, como `flow`.

## Estrutura de Diretórios

- **/repositories**: Contém o arquivo `podcasts.json` que armazena os dados dos podcasts.
- **/controllers**: Contém as funções de controle para as rotas (arquivo `podcasts-controller.ts`).
- **/services**: Contém a lógica de negócios para listar e filtrar os episódios de podcast.
- **/models**: Contém a definição de tipos e interfaces, como a interface `PodcastModel`.
- **/utils**: Qualquer utilitário adicional pode ser adicionado aqui (por exemplo, manipulação de arquivos ou processamento de dados).

## Instalação

### Requisitos

- Node.js
- npm ou yarn

### Execultando scriprs automatizados

 - npm start:dev
 - npm start:watch -> para rodar automaticamente
 - npm start:dist


