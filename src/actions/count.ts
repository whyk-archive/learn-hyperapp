import { Actions } from '../utils/interface';

export const increment: Actions['increment'] = (state) => ({...state, num: state.num + state.step});
export const decrement: Actions['decrement'] = (state) => ({...state, num: state.num - state.step});