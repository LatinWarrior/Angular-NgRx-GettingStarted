import { User } from './../user';

import { UserActions, UserActionTypes } from './user.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {      
      maskUserName: boolean;
      currentUser: User;
}

const initialState: UserState = {      
      maskUserName: true,
      currentUser: null
}

// Selector functions.
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
      getUserFeatureState,
      state => state.maskUserName
);

export const getCurrentUser = createSelector(
      getUserFeatureState,
      state => state.currentUser
);

export function reducer(state = initialState, action: UserActions): UserState {
      console.log(`action: ${JSON.stringify(action)}`);
      switch(action.type) {            
            case UserActionTypes.MaskUserName:
                  return {
                        ...state,
                        maskUserName: action.payload
                  };
            default:
                  return state;
      }
}