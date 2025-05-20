<template>
	<div id="app">
		<h1 align="center">Super quiz</h1>
		<div class="app">
			<Questions v-if="questionMode" :question="question[currentQuestion]" />
			<Result v-else :result="result" @confirmed="nextQuestion"/>
		</div>
	</div>
</template>

<script>
import question from './util/questions';
import Questions from './components/Panel/Questions/index.vue'
import Result from './components/Result/index.vue';

export default {
	components: {
		Questions,
		Result
	},
	data() {
		return {
			result: false,
			questionMode: true,
			question,
			currentQuestion: 0
		}
	},
	methods: {
		showResult(result) {
			this.result = result;
			this.questionMode = false
		},
		nextQuestion() {
			this.questionMode = true
			let r = Math.random() * this.question.length
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #ffffff;
	margin-top: 60px;
	font-size: 1.5rem;
}
.app {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
}
</style>
