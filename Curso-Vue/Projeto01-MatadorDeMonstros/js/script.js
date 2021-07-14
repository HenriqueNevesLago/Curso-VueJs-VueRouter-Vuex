new Vue({
  el: "#Container",
  data: {
    border: "border",
    progresso: "progresso",
    widthPlayer: 100,
    widthMonster: 100,
    cont: 0,

    arrayList: [],
  },
  methods: {
    attack() {
      if (this.widthPlayer <= 0 || this.widthMonster <= 0) {
        this.widthMonster === 0;
        this.widthPlayer === 0;
        this.arrayList == [];
        this.arrayList.push("Fim de jogo");
      } else {
        let valAleatory = Math.random() * 6;
        this.widthPlayer -= valAleatory;
        this.arrayList.push(
          "MONSTRO ATINGIU JOGADOR COM " + this.widthPlayer.toFixed(2)
        );

        valAleatory = Math.random() * 5;
        this.widthMonster -= valAleatory;
        this.arrayList.push(
          "JOGADOR ATINGIU MONSTRO COM " + this.widthMonster.toFixed(2)
        );
      }
    },
    EspecialAttack() {
      if (this.cont == 0) {
        let valAleatory = Math.random() * 5;
        this.widthPlayer -= valAleatory;
        this.arrayList.push(
          "JOGADOR ATINGIU MONSTRO COM ATAQUE ESPECIAL DE " +
            this.widthMonster.toFixed(2)
        );

        valAleatory = Math.random() * 10;
        this.widthMonster -= valAleatory;
        this.arrayList.push(
          "JOGADOR ATINGIU MONSTRO COM ATAQUE ESPECIAL DE  " +
            this.widthMonster.toFixed(2)
        );
      }
      this.cont = 1;
    },
  },
});
