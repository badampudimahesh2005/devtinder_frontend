import  { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../store/slices/userSlice';
import { BASE_URL } from '../utils/constant';

const useLogin = () => {
    const dispatch = useDispatch();
  
    const login = useCallback(async (email, password, setError) => {
        try {
            const response = await axios.post(BASE_URL + "/login", {
                email,
                password
            }, {
                withCredentials: true
            });
            dispatch(setUser(response?.data?.data));

        } catch (error) {
            setError(error?.response?.data || error.message);
            console.error("Login failed: ", error.response?.data?.message || error.message);
        }
    }, [dispatch]);

    return login;
}

export default useLogin