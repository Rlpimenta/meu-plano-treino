# Meu Plano de Treino

Aplicação estática para consultar treinos, acompanhar exercícios e registar a evolução. Criada com HTML, CSS e JavaScript, sem servidor ou instalação.

**Aplicação publicada:** https://rlpimenta.github.io/meu-plano-treino/

## Páginas

- `index.html` é o modelo único dos seis treinos. Sem parâmetro, abre D1; usa `?dia=D2` (até `?dia=D6`) para selecionar outro dia.
- `d1.html` a `d6.html` continuam como redirecionamentos compatíveis com os endereços antigos; D6 é o treino D.O Abdominais.
- `progresso.html` reúne frequência, avaliações, gráficos e histórico.

## Funcionalidades

- Marcação de sessões e exercícios, cronómetro, registo de pesos e reorganização dos exercícios.
- Histórico de exercícios assinalados como não realizados.
- Avaliações físicas, comparação de registos e gráficos de evolução.
- Exportação e importação de cópia de segurança em JSON.
- Atalho para abrir o Spotify; o ícone é um SVG criado no `js/script.js`.

## Ficheiros principais

- `css/style.css` — estilos partilhados e responsividade.
- `js/script.js` — dados dos treinos e interações das páginas D1–D6.
- `js/progresso.js` — registos, avaliações, gráficos e cópias de segurança.

## Dados

Os registos ficam no armazenamento local do navegador e dispositivo; não sincronizam automaticamente. Exporta uma cópia antes de mudar de dispositivo, navegador ou limpar os dados do navegador. A importação substitui registos com as mesmas chaves.

As páginas usam imagens externas para os exercícios e podem precisar de ligação à Internet para as carregar.
