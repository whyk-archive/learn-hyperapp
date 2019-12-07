import { h, app } from "hyperapp";

const increment = state => ({...state, num: state.num + 1});
const decrement = state => ({...state, num: state.num - 1});

app({
  init: {
    title: 'カウント',
    num: 0,
  },
  view: state => (
    <main>
      <h1>{state.title}</h1>
      <h2>{state.num}</h2>
      <button onclick={decrement}>-</button>
      <button onclick={increment}>+</button>
    </main>
  ),
  node: document.getElementById("app")
});
