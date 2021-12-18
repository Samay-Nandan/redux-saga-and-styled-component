import { ACTION_TYPES_FOR_USER } from "../actionTypes/users"

export const setUser = (userList) => {
    return {
        type: ACTION_TYPES_FOR_USER.SET_USER_DATA,
        userList
    }
}

export const getUser = () => {
    return {
        type: ACTION_TYPES_FOR_USER.GET_USER_DATA
    }
}

export const deleteUser = (indexId) => {
    return {
        type: ACTION_TYPES_FOR_USER.DELETE_USER_DATA,
        indexId
    }
}

export const updateUser = (indexId) => {
    return {
        type: ACTION_TYPES_FOR_USER.UPDATE_USER_DATA,
        indexId
    }
}

