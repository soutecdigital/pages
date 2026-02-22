Segurança do código cliente (o que você pode e não pode evitar)

Importante: qualquer código que precise rodar no navegador é acessível ao usuário — não existe forma 100% segura de "esconder" HTML/CSS/JS que roda no cliente. Grandes empresas não "bloqueiam" inspeção; elas reduzem risco com as práticas abaixo.

Boas práticas:
- Faça o build de produção (`next build`) e sirva os bundles minificados — isso já dificulta leitura.
- Não gere nem publique source maps em produção (no Next isso é controlado por `productionBrowserSourceMaps` no `next.config.js`).
- Nunca coloque chaves secretas em código cliente; use variáveis de ambiente no servidor e rotas API.
- Mova lógica sensível/critica para o servidor (API routes, funções/Workers). O cliente só faz chamadas HTTP.
- Opcional: obfuscar o JavaScript (ferramentas como `javascript-obfuscator`) — é só uma camada extra e pode complicar debugging e performance.
- Controle acesso a endpoints com autenticação/ratelimits; proteja dados sensíveis no backend.

O que eu posso fazer por você:
- Remover quaisquer source maps gerados e acrescentar instruções CI para não fazer upload de source maps.
- Adicionar um passo opcional de obfuscação no `package.json` (com aviso sobre trade-offs).

Deploy para Cloudflare Pages (resumo rápido)

1. No terminal (use `cmd` no Windows se PowerShell bloquear scripts):
   - `npm run build`
   - `npx next export` (gera a pasta `out/`)
2. Publique `out/` no Cloudflare Pages via GitHub integration ou com `wrangler pages publish out`.

Se quiser, eu posso:
- Executar `npm run build && npx next export` localmente e preparar os arquivos para publicação.
- Criar um workflow GitHub Actions que faz build + export e publica automaticamente no Cloudflare Pages.
