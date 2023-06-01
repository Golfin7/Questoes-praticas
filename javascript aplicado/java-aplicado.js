    <!DOCTYPE html>
    <html>
    <head>
    <title>Exemplo de Página Web</title>
    <style>
        button {
        display: inline-block;
        margin-right: 10px;
        }
    </style>
    </head>
    <body>
    

    <br>
    <button id="botao-html"		
    onclick="document.getElementById('html').innerHTML = 'O HTML é a principal linguagem de programação encontrada na internet. Cada página HTML tem uma série de elementos que cria a estrutura dos conteúdos de uma página ou de um aplicativo. O HTML é uma linguagem amigável para iniciantes, que possui bastante suporte e é principalmente usada para páginas estáticas..'">HTML</button>

    <button id="botao javascript"
    onclick="document.getElementById('java').innerHTML = 'O JavaScript é uma linguagem com tipagem fraca, ou seja, não permite que o programador defina o tipo de variável. Uma variável pode armazenar qualquer tipo de dados no tempo de execução e as operações presumem o tipo de variável. O resultado também pode ser lançados para outro tipo de dados, p.'">Javascript</button>

    <button id="botao-css"
    onclick="document.getElementById('css').innerHTML = 'CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.'">CSS</button>

    <button id="boato-dom"
    onclick="document.getElementById('dom').innerHTML = 'O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.'">DOM</button>

    <p id="html"></p>
    <p id="java"></p>
    <p id="css"></p>
    <p id="dom"></p>

    </body>
    </html> 
