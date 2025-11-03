// =============================
// CAPTURA CLIQUE NAS CATEGORIAS (HOME)
// =============================
const categorias = document.querySelectorAll(".category");

if (categorias.length > 0) {
  categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
      const id = categoria.dataset.id;
      const nome = categoria.dataset.nome;
      const desc = categoria.dataset.desc;

      // Define pacotes conforme a categoria
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

      const categoriaClicada = {
        id,
        nome,
        desc,
        pacotes
      };

      // Salva categoria clicada
      localStorage.setItem("categoriaSelecionada", JSON.stringify(categoriaClicada));

      // Salva todas as categorias (só Domiciliar e PME)
      const todasCategorias = [
        {
          id: "2",
          nome: "Aulas Domicíliar",
          desc: "Aprenda inglês no conforto da sua casa com aulas personalizadas e práticas!"
        },
        {
          id: "3",
          nome: "PACOTE PME",
          desc: "Sua empresa global começa aqui. Invista na comunicação internacional da sua equipe."
        }
      ];
      localStorage.setItem("todasCategorias", JSON.stringify(todasCategorias));

      // Redireciona
      window.location.href = "categoria.html";
    });
  });
}
