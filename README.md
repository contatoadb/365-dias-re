# 365 Dias com a Rê

App PWA de afirmações diárias baseado no Método Louise Hay, com a Imersão O Novo Despertar inclusa.

- 365 afirmações em 12 ciclos temáticos, começando em 15/09/2026
- Uma prática diária de 2 minutos com explicação completa ("Ler mais")
- Meditações guiadas da Rê (semanais) e afirmações na voz dela (trechos da imersão de janeiro)
- Sequência, conquistas e progresso salvos no aparelho
- Instalável no celular (PWA), com áudios disponíveis offline

## Rodar

Site estático, sem build. Qualquer servidor serve a pasta:

```bash
npx serve .
```

Publicado hoje em https://365-dias-re.vercel.app (Vercel, deploy da raiz).

## Estrutura

- `index.html`: app inteiro (HTML, CSS, JS e conteúdo)
- `audio/`: 13 clipes mp3 (6 meditações, 7 afirmações)
- `manifest.json`, `sw.js`, `icon-*.png`: PWA

## Próximos passos sugeridos

- Login e progresso na nuvem (Supabase) para sincronizar entre aparelhos e dar visibilidade à equipe
- Liberar acesso via webhook do checkout
- Gravar áudios para os dias que hoje são só texto
- Trocar o ícone provisório pelo logo oficial

## Versão pública v1: `15-dias/`

Trilha de 15 dias (16/09 a 02/10/2026, com 26 e 27 reservados para a imersão). Ao entrar, a pessoa escolhe o foco: Dinheiro, Propósito e sucesso profissional, Relacionamento ou Saúde física e emocional. Cada trilha reaproveita afirmações, práticas e áudios da versão de 365 dias. Publicada em https://15-dias-re.vercel.app.
