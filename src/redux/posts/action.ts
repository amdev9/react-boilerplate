

import { Action, ActionFunctionAny, createAction } from "redux-actions";
 
export type TActionType = ActionFunctionAny<Action<string>>

export const getPosts = createAction("GET_POSTS")
