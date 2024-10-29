user-management-api
Este é um projeto de uma API para gerenciar usuários, construída com Node.js, Express e MongoDB. A API permite criar, ler, atualizar e deletar dados de usuários (CRUD) e também fornece uma visualização em uma página com EJS.
Visualização de Usuários: Rota `/views/users` para visualizar a lista de usuários em uma página renderizada com EJS.
- Listagem de Usuários: Rota `/users` para obter todos os usuários em formato JSON.
- Detalhes de um Usuário: Rota `/users/:id` para obter um usuário específico.
- Criação de Usuários: Rota `/users` (POST) para adicionar novos usuários ao sistema.
- Atualização de Usuários: Rota `/users/:id` (PATCH) para atualizar informações de um usuário específico.
- Exclusão de Usuários: Rota `/users/:id` (DELETE) para remover um usuário do sistema.
