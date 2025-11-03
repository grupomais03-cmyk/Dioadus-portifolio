// =============================
// PÁGINA DE CATEGORIA
// =============================
const destaqueCategoria = document.getElementById("destaqueCategoria");
const listaCategoria = document.getElementById("listaCategoria");

if (destaqueCategoria && listaCategoria) {
  const categoriaSelecionada = JSON.parse(localStorage.getItem("categoriaSelecionada"));
  const todasCategorias = JSON.parse(localStorage.getItem("todasCategorias")) || [];

  if (categoriaSelecionada) {
    // Renderiza o destaque com pacotes, se houver
    destaqueCategoria.innerHTML = `
      <div class="destaqueCategoria">
        <h3>${categoriaSelecionada.nome}</h3>
        <p><strong>Descrição:</strong> ${categoriaSelecionada.desc}</p>
        ${
          categoriaSelecionada.pacotes && categoriaSelecionada.pacotes.length > 0
            ? `
              <h4 style="margin-top:10px;">Pacotes disponíveis:</h4>
              <ul>
                ${categoriaSelecionada.pacotes
                  .map(p => `<li><strong>${p.nome}:</strong> ${p.preco}</li>`)
                  .join("")}
              </ul>
            `
            : ""
        }
        <button onclick="enviarWhatsApp('${categoriaSelecionada.nome}')" class="btn">Comprar Agora</button>
      </div>
    `;
  } else {
    destaqueCategoria.innerHTML = `<p>Nenhuma categoria selecionada. Volte à página inicial.</p>`;
  }

  // Filtra as outras categorias
  const outras = todasCategorias.filter(c => c.id !== categoriaSelecionada?.id);

  listaCategoria.innerHTML = outras.map(c => `
    <div class="categoria-box category" 
         data-id="${c.id}" 
         data-nome="${c.nome}" 
         data-desc="${c.desc}">
      ${c.nome}
    </div>
  `).join("");

  // Reaplica o clique nas outras categorias
  document.querySelectorAll("#listaCategoria .category").forEach(c => {
    c.addEventListener("click", () => {
      const nome = c.dataset.nome;
      let pacotes = [];

      if (nome === "Aulas Domicíliar") {
        pacotes = [
          { nome: "Familiar", preco: "75.000,00 AOA" },
          { nome: "Individual", preco: "35.000,00 AOA" }
        ];
      } else if (nome === "PACOTE PME") {
        pacotes = [
          { nome: "Pequenas Empresa (Startup)", preco: "250.000,00 AOA" },
          { nome: "Médias Empresa", preco: "500.000,00 AOA" },
          { nome: "Grandes Empresa", preco: "1.000.000,00 AOA" }
        ];
      }

      const novaCategoria = {
        id: c.dataset.id,
        nome,
        desc: c.dataset.desc,
        pacotes
      };
      localStorage.setItem("categoriaSelecionada", JSON.stringify(novaCategoria));
      window.location.reload(); // Atualiza o destaque com a nova categoria
    });
  });
}
