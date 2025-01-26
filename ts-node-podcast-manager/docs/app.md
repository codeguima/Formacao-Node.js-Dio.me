# Podcast manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts
separados por categoria

### Dominio
Podcast feitos em video

### Features
- Listar os podcasts em sessões de categorias
    - [saúde, fitnes, mentalidade, humor]

- Filtar episódios por nome de podcast

## Como
Vou retornar em um api rest o nome do podcast, nome do episodio, imagem de capa, link

```js
[
    {
        podcastNmae: "flow",
        episode: "CBUM - flow #319",
        videoId:"pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "esporte" ,"bodybuilder"]
    },
    {
        podcastNmae: "flow",
        episode: "RUBENS BARRICHELO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"]


    }
]
```