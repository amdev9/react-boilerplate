import { handleActions } from 'redux-actions'
import { getPosts, TActionType } from './action'

interface IState {
  status: string,
  items: Array<any>
}

const DEFAULT_STATE: IState = {
  status: "",
  items: [],
}

export interface IFlattenReducer<State> {
  (state: State): State;
}

export interface IFlattenReducerMap<State> {
  [actionType: string]: IFlattenReducer<State>;
}

const handlers: IFlattenReducerMap<IState> = {
  [getPosts as any]: (state: IState) => ({ ...state, status: "PENDING" })
}





export default handleActions(handlers, DEFAULT_STATE)
