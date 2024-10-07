import axios from 'axios';

import { fetchData, fetchSuccess, fetchError, } from './ApiAction';

export const apiActionCreator = (auth) => async (dispatch) => {
    dispatch(fetchData());
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (response.status === 200) {
            dispatch(fetchSuccess(response.data));
            return Promise.resolve(response.data);
        } else {
            dispatch(fetchError('Invalid response'));
            return Promise.reject('Invalid response');
        }
    } catch (error) {
        dispatch(fetchError(error.message));
        return Promise.reject(error.message);
    }

};



