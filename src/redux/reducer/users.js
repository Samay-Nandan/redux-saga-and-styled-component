import { ACTION_TYPES_FOR_USER } from "../actionTypes/users"

const initialState = {
    userList: []
}

export const userReducer = (state = initialState, { type, userList, indexId }) => {
    switch (type) {
        case ACTION_TYPES_FOR_USER.SET_USER_DATA: 
            return { 
                    ...state, 
                    userList 
            }
        case ACTION_TYPES_FOR_USER.DELETE_USER_DATA: 
            return { 
                    ...state, 
                    userList: indexId 
            }
        case ACTION_TYPES_FOR_USER.UPDATE_USER_DATA: 
            return { 
                    ...state, 
                    userList: indexId 
            }
        default: 
            return state
    }
}