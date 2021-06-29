new Vue({
    el:'#desafio',
    data: {
        usuario: {
            nome: 'Henrique Neves',
            idade: 18,
        },
        img: 'img/imgVue.png'
    },
    methods: {
        idadeMultiplicada() {
            return this.usuario.idade * 3
        },
        AleatoryNumber() {
            return Math.random().toFixed(2)
        }
    }
 }) 