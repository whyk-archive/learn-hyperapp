export interface State {
  title: string,
  num: number,
  step: number
}

export interface Actions {
  increment: (state: State) => State,
  decrement: (state: State) => State,
  textchange: (state: State, payload: string) => State
}