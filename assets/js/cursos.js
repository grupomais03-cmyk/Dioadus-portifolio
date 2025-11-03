// Captura clique nos produtos da HOME
const produtos = document.querySelectorAll(".produto");

if (produtos) {
  produtos.forEach(produto => {
    produto.addEventListener("click", () => {
      const produtoClicado = {
        id: produto.dataset.id,
        nome: produto.dataset.nome,
        preco: produto.dataset.preco,
        desc: produto.dataset.desc,
      };

      // Salva no localStorage
      localStorage.setItem("produtoSelecionado", JSON.stringify(produtoClicado));

      // Também salva todos os produtos (para montar lista na página produtos)
      const todosProdutos = Array.from(document.querySelectorAll(".produto")).map(p => ({
        id: p.dataset.id,
        nome: p.dataset.nome,
        preco: p.dataset.preco,
        desc: p.dataset.desc
      }));
      localStorage.setItem("todosProdutos", JSON.stringify(todosProdutos));

      // Redireciona
      window.location.href = "produto.html";
    });
  });
}

// Página de PRODUTOS
const destaque = document.getElementById("destaque");
const lista = document.getElementById("listaCursos");

if (destaque && lista) {
  const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
  const todosProdutos = JSON.parse(localStorage.getItem("todosProdutos")) || [];

  if (produtoSelecionado) {
    destaque.innerHTML = `
      <div class="destaque">
        <h3>${produtoSelecionado.nome}</h3>
        <p><strong>Preço:</strong> ${produtoSelecionado.preco}</p>
        <p><strong>Descrição:</strong> ${produtoSelecionado.desc}</p>
        <button onclick="enviarWhatsApp('${produtoSelecionado.nome}')" class="btn">Comprar Agora</button>
      </div>
    `;
  }

  // Filtra os outros produtos
  const outros = todosProdutos.filter(p => p.id !== produtoSelecionado.id);

  lista.innerHTML = outros.map(p => `
    <div class="services-box produto" data-id="${p.id}" data-nome="${p.nome}" data-preco="${p.preco}" data-desc="${p.desc}">
      ${p.nome}
    </div>
  `).join("");

  // Reaplica clique nos produtos abaixo
  document.querySelectorAll("#listaCursos .produto").forEach(p => {
    p.addEventListener("click", () => {
      localStorage.setItem("produtoSelecionado", JSON.stringify({
        id: p.dataset.id,
        nome: p.dataset.nome,
        preco: p.dataset.preco,
        desc: p.dataset.desc
      }));
      window.location.reload(); // recarrega com novo destaque
    });
  });
}
