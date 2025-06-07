import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { setConnections } from "../store/slices/connectionSlice";
import { useCallback } from "react";


const useConnections = () => {

    const dispatch = useDispatch();

    const getConnections = useCallback(async (setError) => {
        try {
            setError(null);
            const response = await axios.get(BASE_URL+'/user/connections', {
                withCredentials: true,
            });
            
            dispatch(setConnections(response?.data?.data));
        }catch (error) {
            setError(error?.response?.data?.message || "Failed to fetch connections");
        }
    }
,[dispatch])
    return getConnections;
};

export default useConnections;