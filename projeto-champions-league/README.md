
# Projeto Champions League ⚽

Este é um projeto de API desenvolvido em **Node.js** com **TypeScript** e **Express** para gerenciar jogadores e clubes de futebol. A arquitetura segue o padrão **MSC** (Model-Service-Controller), garantindo uma estrutura organizada e escalável.

## 📋 Funcionalidades

- Gerenciamento de **jogadores** (Players): criação, listagem, atualização e exclusão.
- Gerenciamento de **clubes** (Clubs): criação, listagem, atualização e exclusão.
- Relacionamento entre jogadores e clubes.
- Estrutura modular e escalável.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Express**: Framework para construção de APIs.
- **CORS**: Configuração de políticas de segurança para a API.
- **Tsup**: Empacotador de código TypeScript.
- **TSX**: Suporte a execução e watch para TypeScript.

---


## 🛠 Endpoints

**Players**
- GET /players: Lista todos os jogadores.
- POST /players: Cria um novo jogador.
- GET /players/:id: Retorna um jogador pelo ID.
- PUT /players/:id: Atualiza um jogador.
- DELETE /players/:id: Remove um jogador.


**Clubs**
- GET /clubs: Lista todos os clubes.


---

## 🗂 Estrutura de Pastas

```plaintext
src/
├── controllers/    # Controladores para lidar com as requisições
├── models/         # Modelos representando as entidades do banco de dados
├── services/       # Lógica de negócios
├── repositories/   # para validação e segurança do Database
├── utils/          # Funções utilitárias
└── server.ts       # Ponto de entrada da aplicação



