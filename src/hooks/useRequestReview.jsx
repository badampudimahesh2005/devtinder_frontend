import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeRequest } from "../store/slices/requestsSlice";

const useRequestReview = () => {
  const dispatch = useDispatch();
  const requestReview = async (connectionId, status, setError) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + connectionId,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(res?.data?.data?._id));
    } catch (err) {
      setError(err?.response?.data || err.message);
    }
  };
  return requestReview;
};

export default useRequestReview;