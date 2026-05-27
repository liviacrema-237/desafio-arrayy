

**Descrição**: Repositório com exercícios em JavaScript que trabalham vetores (arrays) sem utilizar métodos prontos de arrays. Cada exercício está em sua própria pasta com um `index.html` e um `script.js`.

**Estrutura do projeto**
- `ex01/` — exercício 1
- `ex02/` — exercício 2
- `ex03/` — exercício 3
- `ex04/` — exercício 4 (subpasta `edx04/` contém os arquivos)

**Exercícios**
1) Ler 10 números inteiros e armazenar em um vetor; calcular e exibir a soma apenas dos números pares contidos no vetor.
2) Preencher automaticamente um vetor numérico com 7 números gerados aleatoriamente e mostrar os valores gerados.
3) Solicitar ao usuário 10 números inteiros e armazenar em um vetor; depois pedir ao usuário um número e verificar quantas vezes ele aparece no vetor.
4) Pedir ao usuário 10 números e armazenar em um vetor; criar um vetor novo removendo valores duplicados; exibir o vetor original e o vetor sem duplicatas.

**Arquivos**
- Cada exercício tem dois arquivos principais: `index.html` e `script.js`.

**Requisitos / Restrições**
- Não utilizar funções prontas de arrays (como `push`, `filter`, `map`, `includes`, `indexOf`, `reduce`, etc.).
- Implementar a lógica de manipulação de vetores usando estruturas de controle (loops, condicionais) e operações manuais.

**Como executar**
- Abra o arquivo `index.html` da pasta do exercício em um navegador (ex.: abra `ex01/index.html`).
- Os programas que solicitam entrada usam `prompt()` — insira valores nas janelas de diálogo do navegador.
- Opcional: executar um servidor local (recomendado para evitar restrições de origem). Exemplos:

```bash
# Usando Python 3
cd desafio-arrayy
python -m http.server 8000
# Abra em: http://localhost:8000/ex01/index.html

# Ou usando http-server (Node.js):
npx http-server . -p 8000
```

**Enviar ao repositório remoto (Git)**

```bash
git add .
git commit -m "Add solutions and README"
git push origin main
```

Se a branch remota for diferente de `main`, ajuste `origin <branch>` conforme necessário.

**Observações**
- Os `script.js` usam `prompt()` para leitura e `alert()` ou `console.log()` para saída. Teste abrindo o `index.html` no navegador.
- Se quiser, posso implementar ou revisar os scripts de cada exercício para garantir que não usem métodos de array proibidos.

Boa jornada com os exercícios! Se desejar, implemento os arquivos `script.js` conforme os requisitos.
