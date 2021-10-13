import { AnyAction } from "redux";

export interface IAuthState {}

const defaultState: IAuthState = {};

export const authReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
