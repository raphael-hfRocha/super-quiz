<template>
  <div class="question">
    <span>{{ question.text }}</span>
    <ul class="answers">
      <li v-for="(answer, i) in question.answers" :key="answer.text">
        <span class="number">{{ i + 1 }}</span>
        <span class="text">{{ answer.text }}</span>
      </li>
    </ul>
  </div>
  <!-- <div id="questions">
    <div>
      <span align="center">{{ question.text }}</span>
      <div class="container" v-for="(item, index) in question.answers" :key="index">
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped>
  #questions {
    width: 1000px;
    height: 400px;
    background-color: white;
    border: 2px solid black;
    border-radius: 15px;
  }
  .container {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-auto-rows: 200px 200px;
    color: #000;
  }
  .question {
    height: 400px;
    color: #000;
    background-color: #fff;
    width: 70%;
    border-radius: 20px;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  ul.answers {
    font-size: 2rem;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .answers li {
    margin: 20px;
    background-color: #89c454;
    border-radius: 8px;
    width: 40%;
    display: flex;
  }
  .answers .number {
    padding: 10px;
    background-color: #1e9c31;
    color: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .answers .text {
    flex: 1;
    align-self: center;
  }
</style>