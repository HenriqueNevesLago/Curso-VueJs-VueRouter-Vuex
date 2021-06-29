new Vue({
	el: '#Container',
	data: {
		border: 'border',
		progresso: 'progresso',
		width: 0,
	},
	methods: {
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
