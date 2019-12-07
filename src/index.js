import { h, app } from "hyperapp";

const actions = {
  increment: state => ({...state, num: state.num + state.step}),
  decrement: state => ({...state, num: state.num - state.step}),
  textchange: (state, payload) => ({...state, title: payload})
}

app({
  init: {
    title: 'カウント！',
    num: 0,
    step: 5
  },
  view: state => (
    <main class="container">
      <h1>{state.title}</h1>
      <h2>{state.num}</h2>
      <input type="text" onChange={[actions.textchange, e => e.target.value]} />
      <button class="button decrement" onclick={actions.decrement}>ー</button>
      <button class="button increment" onclick={actions.increment}>＋</button>
    </main>
  ),
  node: document.getElementById("app")
});
