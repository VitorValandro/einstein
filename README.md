# Case Einstein Floripa

Este é o repositório do website do processo seletivo para organizadores do Einstein Floripa.
Aqui está todo o código fonte do site, que foi feito com Astro, React e TailwindCSS, com deploy no Github Pages e CI/CD com Github Actions.

### Como rodar o projeto

Antes de tudo, clone o repositório:

```bash
git clone git@github.com:VitorValandro/einstein.git
```

Depois, instale as dependências:

```bash
yarn
```

Agora, crie um arquivo `.env` na raiz do projeto e adicione a variável `STORYBLOK_TOKEN` com o token de acesso à API do Storyblok como valor. Este token foi disponibilizado no e-mail de submissão do case, e é um token secreto, então não deve ser compartilhado.

Com o arquivo de configuracão do ambiente pronto, rode o projeto:

```bash
yarn dev
```

Você também pode usar `yarn build` para gerar o site estático e `yarn preview` para ver a build de produção localmente.

## Sobre o projeto

Eu tomei liberdade e resolvi mudar algumas coisas do design original que veio junto com as informações do case. Manti o conteúdo e o esquema de cores, mas resolvi reestruturar a página e redesenhar alguns componentes pegando algumas referências do atual site do projeto. Se tratando de uma landing page estática, usei um CMS para simplificar o gerenciamento do conteúdo. No caso, escolhi o Storyblok que tem um plano gratuito bastante generoso e é bem simples de usar.

## Sobre a stack

As ferramentas escolhidas para o desenvolvimento do projeto foram Astro, React e tailwindcss, com uma integração ao Storyblok para gerenciar o conteúdo.

O Astro é um framework simples e enxuto que permite a criação de sites estáticos bastante leves e performáticos. Ele é bastante flexível e permite a integração com outras ferramentas, como o React, que foi usado para criar os componentes reativos da página. No caso, os únicos componentes que usam React são o carrosel de depoimentos e a seção com os resultados e impacto que tem o contador de números animado. Usei o tailwind para facilitar a estilização dos componentes e a centralização do design system. O Storyblok foi usado para gerenciar o conteúdo da página, permitindo que usuários possam editar o texto e as imagens sem precisar mexer no código.

O deployment é bem flexível porque a build final é um site estático em HTML, CSS e JS, então pode ser hospedado em qualquer lugar. No caso, escolhi o Github Pages por ser gratuito e ter integração com o Github Actions, que foi usado para automatizar o deploy do site.

Talvez o Astro e a integração com o Storyblok sejam novidades, mas garanto que são ferramentas muito simples e que facilitam muito o desenvolvimento e a experiência dos usuários não-técnicos que precisam gerenciar o conteúdo do site. Posso explicar mais sobre a geração dos static paths e a renderização dos componentes futuramente.
