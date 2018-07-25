
class Restaurante {

  constructor() {

    this.ingredientesDoDia = [{ name: "carne", grams: 1000 }, { name: "alface", grams: 200 }, { name: "queijo", grams: 1000 }, { name: "presunto", grams: 800 }, { name: "massa", grams: 500 }];
    this.pratos = [{
      name: 'Hamburguer',
      ingredients: [
        { name: 'carne', grams: 200 },
        { name: 'alface', grams: 30 },
        { name: 'queijo', grams: 150 },
        { name: 'presunto', grams: 80 }
      ]
    }, {
      name: "Lasanha",
      ingredients: [
        { name: 'carne', grams: 100 },
        { name: 'queijo', grams: 50 },
        { name: 'presunto', grams: 25 },
        { name: 'massa', grams: 100 }
      ]
    }];

  };
  pratosDisp() {
    const pratosDisponiveis = this.pratos.filter(sPrat => {
      const temTodosIngredientes = sPrat.ingredients.reduce((acc, current) => {
        const ingrediente = this.ingredientesDoDia.find((ingrediente) => ingrediente.name === current.name);
        return acc && (ingrediente.grams >= current.grams);
      }, true);

      return temTodosIngredientes;
    });

    return pratosDisponiveis;

  
  }
  entregarPedido(nome, pedido) {
    const pratosDisponiveis = this.pratosDisp();
    const prato = pratosDisponiveis.find(prato => prato.name === pedido);

    if (prato) {
      console.log(`O pedido ${pedido} esta sendo feito .`);
      this.ingredientesDoDia = this.ingredientesDoDia.map(ingrediente => {
        const ingrPrat = pratoIngr => pratoIngr.name === ingrediente.name;
        const isIngredient = prato.ingredients.find(ingrPrat) || { grams: 0 };

        return { ...ingrediente, grams: (ingrediente.grams - isIngredient.grams) }
      });
        console.log(`O estoque de ingredientes atualizado apos o pedido ${pedido} : `);
        console.log(this.ingredientesDoDia)
    } else {
      console.log(`Não temos ingredientes suficientes para fazer ${pedido}.`);
    }
  }
}




let nome = 'Vinicius';
let pedido = 'Hamburguer';
restauranteVinicius = new Restaurante();
restauranteVinicius.entregarPedido(nome, pedido);

