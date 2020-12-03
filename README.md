# Equipe 
Carlos Henrique Kulaif Navajas / 
Naion Belas Juvenal 

# crud-lista-produtos
Aplicação para trabalho da faculdade.
O objetivo da aplicação é fazer fazer o CRUD de itens.
CRUD é o acrônimo da expressão do idioma Inglês, Create (Criar), Read (Ler), Update (Atualizar) e Delete (Deletar).

# Configuração
Necessário configurar o número de IP do computador, neste caso o "Endereço IPv4" do computador que estiver executando a aplicação nos seguintes arquivos:
Na pasta frontend, arquivo AppForm.js nas linhas 35 e 40.
Na pasta frontend, arquivo AppList.js na linha 12.

# Banco de dados
A string de conexão com o banco de dados está na pasta backend > src > database no arquivo config.js.

# Instalação
No backend 
$ npm start

No front 
$ expo start

# Como utilizar

- Ao clicar no botão "Adicionar" é possível adicionar um novo item de vestuário, limpeza ou alimento, 
depois de preencher todos os campos, clica no botão "Salvar" para que o item seja armazenado no banco de dados e listado na tela principal de "Produtos".
- Os itens listados em "Produtos" poderão ter seus campos alterados clicando no botão "Editar" ou excluído clicando no botão vermelho com um "X".
