<template>
  <div id="result" :class="{wrong: !result}">
    <span v-if="result">Resposta certa!</span>
    <span v-else>Resposta errada!</span>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped>
    .result {
        height: 400px;
        color: #000;
        background-color: #fff;
        width: 70%;
        border-radius: 20px;
        font-size: 5.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89c454;
        color: #30863d;
    }
    .result hr {
        color: #fff;
    }
    .result .wrong {
        background-color: #f05250;
        color: #bb2814;
    }
    .result button {
        outline: none;
        align-self: center;
        padding: 10px 20px;
        font-size: 1.7rem;
        border-radius: 8px;
        background-color: #fff;
        color: #30863d;
        font-weight: 600;
    }
    .result .wrong button {
        color: #bb2814;
    }
</style>