<template>
	<div id="app">
		<h1>Tarefas</h1>
		<tasks-progress :progress="progress"></tasks-progress>
		<NewTask @taskAdded="addName($event.name)"></NewTask>
		<ArrayTask :name="arrayName"></ArrayTask>
	</div>
</template>

<script>
import TasksProgress from './components/TasksProgress.vue'
import NewTask from './components/NewTask.vue'
import ArrayTask from './components/ArrayTask.vue'
export default {
	components: { TasksProgress, NewTask, ArrayTask },
	data() {
		return {
			arrayName: [],
		}
	},
	methods: {
		addName(name) {
			if (this.arrayName.map(e => e.name).indexOf(name) == -1) {
				this.arrayName.push({name: name, color: 'red'})
			}
		}
	},
	computed: {
		progress() {
			const total = this.arrayName.length
			const done = this.arrayName.filter(t => t.color == 'green').length
			return Math.round(done / total * 100) || 0
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
