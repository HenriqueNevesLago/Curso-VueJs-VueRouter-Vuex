new Vue({
	el: '#desafio',
	data: {
		cssDestaque: 'destaque',
		textColor: 'css2',
		tamanhoFonte: 'css1',
		classe3: '',
		border: 'border',
		progresso: 'progresso',
		width: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.cssDestaque = this.cssDestaque == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		 iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`
				if(valor ==100) clearInterval(temporizador)
			},500)
		 },
	}
})
