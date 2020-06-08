import { h, app } from "hyperapp";
import { increment, decrement } from './actions/count';
import { textchange } from './actions/domchange';
import { CountBtn } from './components/countBtn';
import { State } from './utils/interface';

const init: State = {
  title: 'カウント！',
  num: 0,
  step: 5
}

const actions = {increment, decrement, textchange};

const view = (state: State) => (
  <main className="container">
    <h1>{state.title}</h1>
    <label className="label">
      タイトル変更：<input className="input" type="text" onChange={[actions.textchange, e => e.target.value]} />
    </label>
    <h2>{state.num}</h2>
    <CountBtn actions={actions}></CountBtn>
  </main>
)

const node = document.querySelector('#app');

app({init, view, node});