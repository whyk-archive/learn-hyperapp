import { h, app } from "hyperapp";

const increment = state => ({...state, num: state.num + state.step});
const decrement = state => ({...state, num: state.num - state.step});

app({
  init: {
    title: 'カウント',
    num: 0,
    step: 5
  },
  view: state => (
    <main class="container">
      <h1>{state.title}</h1>
      <h2>{state.num}</h2>
      <button class="button decrement" onclick={decrement}>ー</button>
      <button class="button increment" onclick={increment}>＋</button>
    </main>
  ),
  node: document.getElementById("app")
});
