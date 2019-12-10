import { h, app } from "hyperapp";

interface State {
  title: string,
  num: number,
  step: number
}

const actions = {
  increment: (state: State) => ({...state, num: state.num + state.step}),
  decrement: (state: State) => ({...state, num: state.num - state.step}),
  textchange: (state: State, payload: string) => ({...state, title: payload})
}

app({
  init: {
    title: 'カウント！',
    num: 0,
    step: 5
  },
  view: (state: State) => (
    <main className="container">
      <h1>{state.title}</h1>
      <label className="label">
        タイトル変更：<input className="input" type="text" onChange={[actions.textchange, e => e.target.value]} />
      </label>
      <h2>{state.num}</h2>
      <button className="button decrement" onclick={actions.decrement}>ー</button>
      <button className="button increment" onclick={actions.increment}>＋</button>
    </main>
  ),
  node: document.getElementById("app")
});
