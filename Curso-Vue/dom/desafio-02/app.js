new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        exibirMsg() {
            alert("Msg exibida com sucesso")
        },
        inputValue(event) {
            this.valor = event.target.value
        },
        inputValue2(event) {
            this.valor2 = event.target.value
        }
    }
})