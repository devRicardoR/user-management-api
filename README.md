# user-management-api

Este é um projeto de uma API para gerenciar usuários, construída com **Node.js**, **Express** e **MongoDB**.  
A API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) sobre os dados dos usuários e também oferece uma visualização em página web usando **EJS**.

---

## Funcionalidades

- **Visualização de Usuários:**  
  Rota `/views/users` para visualizar a lista de usuários em uma página renderizada com EJS.

- **Listagem de Usuários:**  
  Rota `/users` para obter todos os usuários em formato JSON.

- **Detalhes de um Usuário:**  
  Rota `/users/:id` para obter informações de um usuário específico.

- **Criação de Usuários:**  
  Rota `/users` (POST) para adicionar novos usuários ao sistema.

- **Atualização de Usuários:**  
  Rota `/users/:id` (PATCH) para atualizar informações de um usuário específico.

- **Exclusão de Usuários:**  
  Rota `/users/:id` (DELETE) para remover um usuário do sistema.
