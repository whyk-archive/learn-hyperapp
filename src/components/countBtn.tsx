import { h, app } from "hyperapp";
import { Actions } from '../utils/interface';



export const CountBtn = ({ actions }: {actions: Actions}) => {
  return (
    <div>
      <button className="button decrement" onclick={actions.decrement}>ー</button>
      <button className="button increment" onclick={actions.increment}>＋</button>
    </div>
  )
}

