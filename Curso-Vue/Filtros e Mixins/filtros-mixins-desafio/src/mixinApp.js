export default {
  data() {
    return {
      texto: "Olá meu nome é Henrique",
    };
  },
  filters: {
    filtro(valor) {
      return valor.replace(/ /g, ',')
    },
  },
};
