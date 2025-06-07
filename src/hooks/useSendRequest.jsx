import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { useCallback } from "react";

const useSendRequest = () => {
    const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (id, status, setError) => {
    try {
      const response = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
    } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
    }
  }, [dispatch]
  )
  return sendRequest;
};

export default useSendRequest;