# configurando-webpack-dio
Segunda aula do curso de reactjs onde o professor Bruno Carneiro ensina a configurar o webpack em nosso projeto

Para quem está com dificuldades em configurar:

primeiramente devemos estar no terminal na pasta do seu projeto

vamos rodar 


npm i init 
npm -D webpack webpack-cli webpack-dev-server
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom
npm i -D babel-preset-react
npm i -D html-webpack-plugin html-loader

no package.json mudar a entrada main para: 
"main": "./src/index.js",

e adicionar os seguintes scripts
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "start:dev": "webpack-dev-server",
    
  },



criar um arquivo na raiz do projeto chamado webpack.config.js com o seguinte conteudo:

const path = require('path');
const HtmlWebPackPlugins = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundler.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins:[
		new HtmlWebPackPlugins({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}


criar outro arquivo na raiz do projeto chamado .babelrc(sem pontuação do tipo do arquivo) com o seguinte conteudo: 

{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	]
}


criar uma pasta src na raiz do projeto

na pasta src devera conter seu projeto, no video da aula os seguintes arquivos foram criados:

index.js com o seguinte conteudo:

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));




outro arquivo chamado index.html com o seguinte conteudo:

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Configurando webpack</title>
</head>
<body>
	<div id="app"></div>
</body>
</html>




e um ultimo arquivo chamado App.js com o seguinte conteudo:

import React from "react";

const App=()=>{
  return(
    <div>
      <p>Configuração do webpack</p>
      <p>Vamos ver se vai dar certo!!!</p>
      <p>Consegui.</p>
      <p>Build criada, e servidor rodando.</p>
    </div>
  );
};

export default App;



depois no terminal você poderá rodar os comandos

npm run dev (deve compilar sem erros)

npm run build (deve rodar sem erros)

npm run start:dev (deve rodar sem erros)

quando rodar o start:dev irá aparecer o endereço onde você poderá acessar a página pronta do seu projeto
ela se atualiza automaticamente quando vc modificar e salvar um arquivo.

Atenciosamente Danilo Silva
