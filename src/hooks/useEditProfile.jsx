import axios from "axios";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { setUser } from "../store/slices/userSlice";

const useEditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editProfile = useCallback(
    async (formData, setError) => {
      try {
        const res = await axios.patch(BASE_URL + "/profile/edit", formData, {
          withCredentials: true,
        });
          dispatch(setUser(res?.data?.data));
          navigate('/profile');
      } catch (error) {
        setError(error?.response?.data || error.message);
      }
    },
    [dispatch]
  );

  return editProfile;
};
export default useEditProfile;