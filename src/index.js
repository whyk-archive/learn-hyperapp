import { h, app } from "hyperapp";

app({
  init: 0,
  view: state => (
    <main>
      <h1>{state}</h1>
      <button onclick={state => state - 1}>-</button>
      <button onclick={state => state + 1}>+</button>
    </main>
  ),
  node: document.getElementById("app")
});
