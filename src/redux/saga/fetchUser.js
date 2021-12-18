import { put } from 'redux-saga/effects'
import { setUser } from '../action/users'
import axios from 'axios'

export const fetchUserApi = () => axios.request({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`
});

export function* fetchUser() {
    try {
        const { data } = yield fetchUserApi();
        yield put(setUser(data));   
    } catch (error) {
        console.log(" ERROR OCCURED WHILE FETCHING USER ", error);
    }
}