# vwapp-react-components

Componentes customizados usando o bootstrap4 de forma mais legivel em react.

Os componentes de formulário foram passados para a lib: [vwapp-react-form](https://github.com/VictorDeon/vwapp-react-form)

[![NPM](https://img.shields.io/npm/v/vwapp-react-components.svg)](https://www.npmjs.com/package/vwapp-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação.

```bash
npm install --save vwapp-react-components
```

## Uso

```jsx
import React, { Fragment } from 'react';
import { FlexContainer, FlexItem as Box, Line, BreakLine } from 'vwapp-react-components';
import styled from 'styled-components';

const FlexItem = styled(Box)`
  background-color: green;
  text-align: center;
  margin: 10px;
  padding: 5px;
`

export default () => (
  <Fragment>
    <FlexContainer reverse direction="row" justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem>
      <FlexItem>02</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer wrap direction="col" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem><FlexItem>02</FlexItem><FlexItem>03</FlexItem><FlexItem>04</FlexItem><FlexItem>05</FlexItem>
      <FlexItem>06</FlexItem><FlexItem>07</FlexItem><FlexItem>08</FlexItem><FlexItem>09</FlexItem><FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem><FlexItem>12</FlexItem><FlexItem>13</FlexItem><FlexItem>14</FlexItem><FlexItem>15</FlexItem>
      <FlexItem>16</FlexItem><FlexItem>17</FlexItem><FlexItem>18</FlexItem><FlexItem>19</FlexItem><FlexItem>20</FlexItem>
      <FlexItem>21</FlexItem><FlexItem>22</FlexItem><FlexItem>23</FlexItem><FlexItem>24</FlexItem><FlexItem>25</FlexItem>
      <FlexItem>26</FlexItem><FlexItem>27</FlexItem><FlexItem>28</FlexItem><FlexItem>29</FlexItem><FlexItem>30</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer direction="row" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem order="3" length="100px">01</FlexItem>
      <FlexItem grow order="2" align="center">02</FlexItem>
      <FlexItem grow order="0">03</FlexItem>
      <FlexItem shrink order="1">04</FlexItem>
      <FlexItem grow order="4">05</FlexItem>
    </FlexContainer>
    <BreakLine />
  </Fragment>
);
```

## Documentação

Além das propriedades especificas de cada componente, também pode ser inserido outras propriedades como: id, className, ...

### 1. Flexbox

Componentes para facilitar o uso do flexbox.

![1](https://user-images.githubusercontent.com/14116020/79192401-fd1e2d80-7dfe-11ea-8182-9389c5b0f288.png)

![2](https://user-images.githubusercontent.com/14116020/79192403-fe4f5a80-7dfe-11ea-9991-5e8d4f109eda.png)

![3](https://user-images.githubusercontent.com/14116020/79192406-fee7f100-7dfe-11ea-9fa3-f632410ca5cc.png)

#### Componentes

* FlexContainer
* FlexItem

#### Propriedades (FlexContainer)

As imagens estão organizados em direction **row**, **col**, e **wrap** respectivamente. Exceção do atributo **wrap** que ta organizado em false e true.

* **direction**: Empilha os itens horizontalmente ou verticalmente, ou seja, da esquerda para a direita ou de cima para baixo. (String - padrão: "row" - css: flex-direction).

  - **row**: Empilha os itens horizontalmente, ou seja, da esquerda para a direita.

    ![direction row](https://user-images.githubusercontent.com/14116020/79188973-ec69b980-7df6-11ea-9e4c-a8a035b74528.png)

  - **col**: Empilha os itens verticalmente, ou seja, de cima para baixo.

    ![direction col](https://user-images.githubusercontent.com/14116020/79189041-191dd100-7df7-11ea-9276-93536d052ce2.png)

* **wrap**: Faz com que os itens ao chegar no limite passe para a próxima linha ou coluna. (Booleano - padrão: false - css: flex-wrap)

  ![nowrap](https://user-images.githubusercontent.com/14116020/79189115-508c7d80-7df7-11ea-821e-8e3ac2ee675a.png)

  ![wrap](https://user-images.githubusercontent.com/14116020/79189173-73b72d00-7df7-11ea-8d81-263ab5075404.png)

* **reverse**: Inverte a ordem dos itens definidas no atributo "direction" ou "wrap". Ele também inverte o alinhamento do atributo "justify" (Booleano - padrão: false - css: flex-direction e flex-wrap).

  ![reverse row](https://user-images.githubusercontent.com/14116020/79189242-9fd2ae00-7df7-11ea-969a-d41d264a6322.png)

  ![reverse col](https://user-images.githubusercontent.com/14116020/79189323-d3add380-7df7-11ea-9079-5a1795ee83f3.png)

  ![reverse wrap](https://user-images.githubusercontent.com/14116020/79189419-11126100-7df8-11ea-9394-6bd8e8887aa3.png)

* **justify**: Alinha todos os itens do container verticalmente (col) ou horizontalmente (row). (String - padrão: "initial" - css: justify-content).

  - **start**: Alinha os itens no começo.

    ![start row](https://user-images.githubusercontent.com/14116020/79189741-eecd1300-7df8-11ea-9d03-c4b40363ee3b.png)

    ![start col](https://user-images.githubusercontent.com/14116020/79189779-099f8780-7df9-11ea-9850-6a1d3b297866.png)

  - **end**: Alinha os itens no final.

    ![end row](https://user-images.githubusercontent.com/14116020/79189832-2a67dd00-7df9-11ea-81ef-ff7a36418c6b.png)

    ![end col](https://user-images.githubusercontent.com/14116020/79189894-4d928c80-7df9-11ea-864a-803e4eb27fae.png)

  - **center**: Alinha os itens no centro.

    ![center row](https://user-images.githubusercontent.com/14116020/79190002-90ecfb00-7df9-11ea-8d8e-7ca8e64398ec.png)

    ![center col](https://user-images.githubusercontent.com/14116020/79190059-b37f1400-7df9-11ea-867d-67cc092ef69a.png)

  - **space-around**: Alinha os itens com espaçamentos ao redor deles.

    ![space-around row](https://user-images.githubusercontent.com/14116020/79190272-4029d200-7dfa-11ea-9328-ab6ef4230979.png)

    ![space-around col](https://user-images.githubusercontent.com/14116020/79190314-60f22780-7dfa-11ea-95fc-25cb519d4d56.png)

  - **space-between**: Alinha os itens com espaçamentos entre eles.

    ![space-between row](https://user-images.githubusercontent.com/14116020/79190154-f0e3a180-7df9-11ea-9317-ac266120c4c9.png)

    ![space-between col](https://user-images.githubusercontent.com/14116020/79190232-212b4000-7dfa-11ea-910e-8aea857d1397.png)

* **align**: Alinha todos os itens do container verticalmente (row) ou horizontalmente (col). (String - padrão: "initial" - css: align-items ou align-content). O "align-content" é ativado se o container tiver o atributo "wrap" setado nele, ou seja, ele alinha os conjuntos de itens como um todo. Caso contrário é ativado o "align-items" que alinha os itens separadamente.

  - **start**: Alinha os itens no começo.

    ![start row](https://user-images.githubusercontent.com/14116020/79190412-a0207880-7dfa-11ea-8df1-64bbb75e58bb.png)

    ![start col](https://user-images.githubusercontent.com/14116020/79190485-d65df800-7dfa-11ea-8dbe-22d096ee1d17.png)

  - **end**: Alinha os itens no final.

    ![end row](https://user-images.githubusercontent.com/14116020/79190553-fb526b00-7dfa-11ea-8c3c-647ae484c84a.png)

    ![end col](https://user-images.githubusercontent.com/14116020/79190610-1cb35700-7dfb-11ea-96ce-da042c0c7bfa.png)

  - **center**: Alinha os itens no centro.

    ![center row](https://user-images.githubusercontent.com/14116020/79190749-6bf98780-7dfb-11ea-8486-5a9456e97ace.png)

    ![center col](https://user-images.githubusercontent.com/14116020/79190804-8c294680-7dfb-11ea-86f6-9117057c5115.png)

  - **stretch**: Preenche os itens no container.

    ![stretch row](https://user-images.githubusercontent.com/14116020/79190895-c2ff5c80-7dfb-11ea-9d5e-2b0133cd1680.png)

    ![stretch col](https://user-images.githubusercontent.com/14116020/79190995-f4782800-7dfb-11ea-8d0c-8c0fe7e7f10b.png)

  - **baseline**: Alinha os itens tendo como base seu texto. Só funciona com o wrap **não** setado. css: "align-items".

    ![baseline row](https://user-images.githubusercontent.com/14116020/79189741-eecd1300-7df8-11ea-9d03-c4b40363ee3b.png)

    ![baseline col](https://user-images.githubusercontent.com/14116020/79189779-099f8780-7df9-11ea-9850-6a1d3b297866.png)

  - **space-around**: Alinha os itens com espaçamentos ao redor deles. Só funciona com o wrap setado. css: "align-content".

    ![space-around row](https://user-images.githubusercontent.com/14116020/79191272-8f710200-7dfc-11ea-9d43-664a65a2bc69.png)

    ![space-around col](https://user-images.githubusercontent.com/14116020/79191348-b8919280-7dfc-11ea-9ab4-d92c31d26982.png)

  - **space-between**: Alinha os itens com espaçamentos entre eles. Só funciona com o wrap setado. css: "align-content".

    row
    ![space-between row](https://user-images.githubusercontent.com/14116020/79191408-e545aa00-7dfc-11ea-8933-3e0fc4164f24.png)

    col
    ![space-between col](https://user-images.githubusercontent.com/14116020/79191453-ff7f8800-7dfc-11ea-835a-f9da7c7ce7bd.png)

#### Propriedades (FlexItem)

* **order**: Ordena os itens da forma que for inserido. Só é aceito valores de 1-12 e todos os itens devem ser preenchidos.
Ou seja, a lista de itens só pode ter no máximo 12 itens. (String - Opcional - css: order)

  ![order](https://user-images.githubusercontent.com/14116020/79191541-38b7f800-7dfd-11ea-85e4-9e8260aaaae5.png)

* **grow**: Faz o item crescer proporcionalmente em relação aos demais, preenchendo a linha. (Booleano - default: false - css: flex-grow)

  ![grow](https://user-images.githubusercontent.com/14116020/79191663-76b51c00-7dfd-11ea-8242-41590930ae18.png)

* **shrink**: Não deixe o item diminuir tanto quanto os outros itens. (Booleano - default: false - css: flex-shrink)

  ![shrink](https://user-images.githubusercontent.com/14116020/79188973-ec69b980-7df6-11ea-9e4c-a8a035b74528.png)

* **length**: Configura um tamanho inicial para o item em pixels. (String - Opcional - css: flex-basis).

  ![length](https://user-images.githubusercontent.com/14116020/79191725-a49a6080-7dfd-11ea-91c8-4f4ceaa7a4fb.png)

* **align**: Especifica o alinhamento do item selecionado dentro do conteiner. A propriedade substitui o alinhamento do atributo "align" definido no container. (String - Opcional - css: align-self).

  - **start**: Alinha o item no começo.

    ![start](https://user-images.githubusercontent.com/14116020/79192006-47eb7580-7dfe-11ea-992f-0da3382066c7.png)

  - **end**: Alinha o item no final.

    ![end](https://user-images.githubusercontent.com/14116020/79191924-183c6d80-7dfe-11ea-8ae3-50c5e73be08c.png)

  - **center**: Alinha o item no centro.

    ![center](https://user-images.githubusercontent.com/14116020/79191830-dad7e000-7dfd-11ea-95ab-0bf42bf8ee74.png)

  - **stretch**: Preenche o item no container.

    ![stretch](https://user-images.githubusercontent.com/14116020/79192050-5e91cc80-7dfe-11ea-92da-9d441e8cdb4b.png)

  - **baseline**: Alinha o item tendo como base seu texto.

    ![start](https://user-images.githubusercontent.com/14116020/79192006-47eb7580-7dfe-11ea-992f-0da3382066c7.png)

#### Exemplo

```jsx
<FlexContainer reverse direction="row" justify="center" align="space-around">
  <FlexItem>01</FlexItem>
  <FlexItem>02</FlexItem>
</FlexContainer>

<FlexContainer wrap direction="col" justify="center" align="stretch">
  <FlexItem>01</FlexItem><FlexItem>02</FlexItem><FlexItem>03</FlexItem><FlexItem>04</FlexItem><FlexItem>05</FlexItem><FlexItem>06</FlexItem><FlexItem>07</FlexItem><FlexItem>08</FlexItem><FlexItem>09</FlexItem><FlexItem>10</FlexItem><FlexItem>11</FlexItem><FlexItem>12</FlexItem><FlexItem>13</FlexItem><FlexItem>14</FlexItem><FlexItem>15</FlexItem><FlexItem>16</FlexItem><FlexItem>17</FlexItem><FlexItem>18</FlexItem><FlexItem>19</FlexItem><FlexItem>20</FlexItem><FlexItem>21</FlexItem><FlexItem>22</FlexItem><FlexItem>23</FlexItem><FlexItem>24</FlexItem><FlexItem>25</FlexItem><FlexItem>26</FlexItem><FlexItem>27</FlexItem><FlexItem>28</FlexItem><FlexItem>29</FlexItem><FlexItem>30</FlexItem>
</FlexContainer>

<FlexContainer direction="row" justify="center" align="stretch">
  <FlexItem order="3" length="100px">01</FlexItem>
  <FlexItem grow order="2" align="center">02</FlexItem>
  <FlexItem grow order="0">03</FlexItem>
  <FlexItem shrink order="1">04</FlexItem>
  <FlexItem grow order="4">05</FlexItem>
</FlexContainer>
);
```

### 2. Pagination

Componentes relacionados a criação de paginações.

#### Componentes

* Pagination

#### Propriedades especificas:

* **totalItens**: Total de itens que será paginado. (Inteiro - obrigatório)

* **activePage**: Página ativa pelo usuário na função handlePagination. (Inteiro - obrigatório)

* **itemPerPage**: Quantidade de itens que aparecerá por páginas. (Inteiro - default 20)

* **pageRange**: Quantidade de páginas que irá aparecer no componente de cada vez. (Inteiro - default 5)

* **firstPageText**: Título ou Icone que ao clicar vai voltar para a primeira página. (String - default "Primeiro")

* **lastPageText**: Título ou Icone que ao clicar vai redirecionar para a última página. (String - default "Último")

* **prevPageText**: Título ou Icone que ao clicar vai voltar para a página anterior. (String - default "<<")

* **nextPageText**: Título ou Icone que ao clicar vai avançar para a próxima página. (String - default ">>")

* **handlePagination**: Função que irá tratar a paginação. (Função - Obrigatório).

#### Exemplo:

```jsx
<Pagination
  totalItens={60}
  itemPerPage={20}
  activePage={this.state.activePage}
  handlePagination={this.__handlePagination}
/>
```

## Contribuir

#### 1. Como rodar o ambiente de desenvolvimento:

Rode os dois comandos abaixo em 2 abas diferentes. O primeiro comando vai ficar observando modificações do seu pacote e o segundo
comando consome essas modificações no html.

No diretorio raiz rode o npm start

```
npm start
```

No diretorio example rode o npm start.

```
cd example
npm start
```

#### 2. Como instalar ou remove um pacote.

Para instalar um novo pacote tem que fazer o seguinte comando:

```
npm install --save-dev nome-do-pacote
```

Com ele instalado tem que coloca-lo no package.json

```json
"dependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
},
"peerDependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
}
```

Com isso, teste se esse pacote está sendo utilizado, caso não rode o npm install e reinicie os servidores.

#### 3. Publicar no npmjs

1. Crie uma conta no https://www.npmjs.com/
2. Execute no terminal ```npm login``` e logar com as credenciais criadas no npmjs
3. Execute ```npm publish``` na pasta do projeto
4. E então use em outros projetos!

#### 4. Publicar documentação github pages

Rode o comando para criar uma pagina com a build do projeto example do seu repositório.

```
npm run deploy
```

#### 5. Atualizando um projeto.

Versões: MAJOR.MINOR.PATCH

* **MAJOR**: Versão em que fizeste modificações incompatives com versões anteriores, ou seja, que irá quebrar algo anteriormente feito.
* **MINOR**: Quando você adicionar funcionalidades que são compativeis com versões anteriores.
* **PATCH**: Correções de erros/bugs compativeis com versões anteriores.

## Licença

MIT © [VictorDeon](https://github.com/VictorDeon)

Criado a partir do pacote: [Create React Library](https://github.com/transitive-bullshit/create-react-library)
