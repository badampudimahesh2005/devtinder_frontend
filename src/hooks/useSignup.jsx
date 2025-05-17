import axios from "axios";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { setUser } from "../store/slices/userSlice";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = useCallback(
    async (formData, setError) => {
      try {
        console.log(formData);
        const res = await axios.post(BASE_URL + "/signup", formData, {
          withCredentials: true,
        });
        console.log(res);
          dispatch(setUser(res?.data?.data));
          navigate('/');
      } catch (error) {
        setError(error?.response?.data || error.message);
        console.error(error);
      }
    },
    [dispatch]
  );

  return signup;
};
export default useSignup;