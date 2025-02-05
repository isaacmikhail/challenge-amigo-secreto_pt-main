# Exercício de Sorteio de Amigo

## Descrição
Este exercício consiste em criar uma aplicação em JavaScript para sortear aleatoriamente um nome de um array de amigos. A aplicação também permite adicionar novos amigos à lista.

## Conceitos Utilizados

1. **Array**
   - Estrutura de dados usada para armazenar a lista de amigos.
   - Exemplo: `let amigos = [];`

2. **Funções**
   - Blocos de código reutilizáveis para realizar tarefas específicas.
   - Função `adicionarAmigo()`: Adiciona um novo amigo ao array.
   - Função `sortearAmigo()`: Seleciona aleatoriamente um amigo do array.

3. **Manipulação do DOM**
   - Interação com os elementos HTML usando JavaScript.
   - Exemplo: `document.getElementById('id_do_elemento')` para acessar elementos e `innerHTML` para atualizar o conteúdo.

4. **Eventos**
   - Ações que ocorrem em resposta a interações do usuário.
   - Exemplo: `onclick` em botões para chamar funções.

5. **Validação**
   - Verificação de condições antes de executar ações.
   - Exemplo: Verificar se o campo de entrada não está vazio antes de adicionar um amigo.

6. **Gerar Número Aleatório**
   - Uso de `Math.random()` e `Math.floor()` para gerar índices aleatórios.
   - Exemplo: `let indiceAleatorio = Math.floor(Math.random() * amigos.length);`

## Estrutura dos Arquivos

1. **index.html**
   - Contém a estrutura da página com elementos HTML.

2. **styles.css**
   - Contém os estilos aplicados aos elementos HTML.

3. **app.js**
   - Contém o código JavaScript responsável pela lógica do exercício.

## Instruções

1. Abra o arquivo `index.html` em um navegador.
2. Adicione nomes de amigos usando o campo de entrada e o botão de adicionar.
3. Clique no botão de sortear para selecionar um amigo aleatoriamente.

