import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { setRequests } from "../store/slices/requestsSlice";

const useRequests = () => {
  const dispatch = useDispatch();

 const getRequests = async (setError) => {
    try{
      const response = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(setRequests(response?.data?.data));
    } catch(err){
      setError(err?.response?.data || err.message);
    }
  };
  return getRequests;
};

export default useRequests;