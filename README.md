**Meu Plano de Treino — React + Vite**

Aplicação mobile-first publicada em GitHub Pages: https://rlpimenta.github.io/meu-plano-treino/

## Executar localmente

1. Instalar Node.js LTS.
2. Nesta pasta, executar `npm install` e depois `npm run dev`.
3. Para gerar e publicar localmente os ficheiros estáticos, executar `npm run build`. O build compila `app/` e copia o resultado para a raiz, usada pelo GitHub Pages.

## Estrutura

- `app/src/` — interface React, cartões e dados base dos treinos.
- `app/public/` — recursos públicos da aplicação.
- `scripts/publish-pages.mjs` — publica o build na raiz para manter a configuração atual do GitHub Pages.
- `d1.html`–`d6.html` e `progresso.html` — redirecionamentos compatíveis com links antigos.

## Funcionalidades

Dashboard, seis treinos, cartões de exercícios com demonstrações em movimento, alternativas por toque na imagem, registo por série, cronómetro de descanso de 90 segundos, cargas, reordenação, avaliações, gráficos, atividade, cardio, nutrição e cópia de segurança.

O plano inclui Cable Hip Adduction em D2 (2 séries de 12–15 por lado). Alternativas e substituições são temporárias para a sessão.

## Dados e imagens

Os registos ficam no armazenamento local deste navegador e dispositivo; não sincronizam automaticamente entre dispositivos. Exporta uma cópia antes de trocar de navegador ou dispositivo. As demonstrações de exercício requerem ligação à internet.
