# casa-de-cambio-exercicio
Exercício da aula 2.3 de front-end Trybe

Iniciar o projeto com NPM
[ ] Criar o diretório do projeto;
[ ] Criar o diretório src/ dentro do diretório do projeto;
[ ] Criar o arquivo main.js no diretório src/;
[ ] Criar o arquivo index.html na raiz do projeto;
[ ] Executar o comando npm init -y ou npm init para criar o package.json;
Configurar o projeto para utilizar a sintaxe ES Modules
[ ] Adicionar a linha <script type="module" src="./src/main.js"></script> no arquivo html;
[ ] Adicionar a chave "type": "module" ao arquivo package.json
Adicionar um bundler dev-server
[ ] Instalar o Vite com o comando npm i vite;
[ ] Adicionar a chave "dev": "vite --open" à chave "scripts" do arquivo package.json;
Versionar o código
[ ] Crie um arquivo .gitignore na raiz do projeto e, nele, adicione node_modules;
[ ] Digite o comando git init para adicionar o versionamento de código no projeto;
Instalar e configurar o ESLint
[ ] Execute o comando npm init @eslint/config e siga o passo a passo que aparecerá no terminal.

O projeto da casa de câmbio é uma aplicação que busca a conversão da taxa de uma moeda para diversas outras. O protótipo da aplicação está nesse link.

Requisitos
1. Ambiente do Projeto
 Criar um repositório do zero ou fazer um fork desse repositório (fique à vontade para fazer PRs quando terminar o desenvolvimento).
 Iniciar projeto com NPM.
 Estruturar o projeto para usar ESModules (usar type como module no package.json e nas tags script).
 Instalar Vite como Dev Tool e npm run dev.
2. Estrutura da Aplicação
 Estruturar o HTML de acordo com protótipo.
 Criar tags semânticas no HTML.
3. Interação com API
 O endpoint da API que deverá ser usada é https://api.exchangerate.host/latest?base=${moeda}.
 A moeda a ser pesquisada deverá ser passada como o parâmetro moeda do endpoint.
 Todas as moedas deverão ser listadas na tela.
Link da documentação da API caso necessário

4. Tratamento de Erro
 Você deve usar o Sweet Alert 2 para as mensagens de Erro.
 Um erro deverá aparecer quando nenhuma moeda é passada.
 Um erro deverá aparecer quando uma moeda inexistente é passada.
5. Estilização (Bônus)
 Implementação do protótipo de alta fidelidade
