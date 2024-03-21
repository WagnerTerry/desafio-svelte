# Desafio Lesser

- Desafio feito com SvelteKit

- Crie um site que exiba um formulário com os campos "Nome", "Telefone" e "Email". Ao clicar no botão "Iniciar Desafio", o site deve exibir um contador regressivo de 15 segundos no formato mm:ss. Ao clicar no botão "Enviar", o site deve exibir um modal com o texto "Desafio finalizado com sucesso!".
- Se o usuário demorar mais que 15 segundos para clicar em "Enviar", o site deve exibir um modal com o texto "Desafio finalizado com falha!".
- O modal deve ter um X no canto superior direito (você pode e deve usar o modelo do DaisyUI) e deve fechar quando o usuário clica fora do modal e quando clica no X.
- O site deve ter uma página chamada "candidate" que exibe o nome, telefone e email do candidato, e esta sessão fica visível apenas após o desafio ser iniciado.
- Deve haver um botão no canto superior direito da tela que, ao ser clicado, vai para esta página. Nela, deve haver outro botão que, ao ser clicado, volta para a página do desafio.
- Ao entrar e sair da página "candidate", a contagem do tempo não deve ser interrompida.

Regras:
- Todo o cõdigo deve ser em Typescript, javascript sem tipos não é permitido.
- Utilize apenas Sveltekit, TailwindCSS e DaisyUI. Nenhum outro import é permitido. Se não conseguir com Sveltekit, use React (preferimos muito fortemente Sveltekit).
- Configure o Playwright ao inicializar o projeto. Se for utilizar sveltekit, inicialize o projeto com:

pnpm create svelte@latest my-app
cd my-app
pnpm install
pnpm run dev -- --open

- Siga a estrutura de pastas padrão do Sveltekit.
- Não invente a roda, suas soluções devem ser simples e diretas. Você terá a oportunidade de demonstrar suas habilidades mais avançadas em outras etapas do processo.
- Todo o código deve ser client-side, nenhum código server-side é permitido.
- Use o adapter-static para gerar o site estático.
- O código deve ser escrito em TypeScript.
- O código deve ser escrito em inglês.

- Deve haver cobertura de testes com o playright (deixe o navegador visível para assistirmos o teste). Os testes devem cobrir todos os requisitos solicitados. Todos os testes devem ser executados com o comando npx playwright test browser.spec.ts.
Segue a configuração do arquivo playwright.config.ts:

import type { PlaywrightTestConfig } from '@playwright/test'; const config: PlaywrightTestConfig = { webServer: { command: 'npm run build && npm run preview', port: 4173 }, testDir: 'tests', testMatch: /(.+.)?(test|spec).[jt]s/, use: { headless: false } }; export default config;
