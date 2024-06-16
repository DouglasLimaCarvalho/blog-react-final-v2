# Blog react


# Sobre o Projeto

O projeto consiste em um desenvolvimento deu mum blog em react, sem integração com backend, utilizando react e vite

# Instalação e inicialização

Ferramentas utilizadas:

- node 20
- npm
- vite
 

### Passos para executar local:


1.) Vite:

- Criar um projeto com o vite:npm create vite@latest my-vue-app


2.) Contentful: 
Foi utilizado para esse blog o headless cms contentful:https://www.contentful.com/
Necessário gerar as estruturas de dados necessárias ao blog
Depois gerar as apikey necessárias para acesso das informações

4.)Variáveis de ambiente:
- Criar o arquivo "env.local" com as Variaveis : VITE_SPACE_ID e VITE_ACCESS_TOKEN
- Inserir os valores das variaves de acordo com a apikey gerada no **contentful**

5.) executar localmente: Executar o comando npm run dev para executar o projeto e utilizar a url informada para acessar o projeto

6.) Build: Para executar o build, utilizar o comando npm run build onde os arquivos são gerados na pasta dist
