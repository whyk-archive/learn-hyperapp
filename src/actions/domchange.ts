import { Actions } from '../utils/interface';

export const textchange: Actions['textchange'] = (state, payload) => ({...state, title: payload});