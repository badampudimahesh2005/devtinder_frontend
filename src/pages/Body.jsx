
import {Outlet, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { setUser } from '../store/slices/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);

  const fetchUser  = async () => {
    try {
      const response = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true
      });
      dispatch(setUser(response?.data));
    } catch (error) {
      if(error.response?.status === 401) {
        navigate("/login");
      }
      console.error("Error fetching user data: ", error.message);
    }
  }

  useEffect(() => {
    !userData && fetchUser();
  }, []);
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Body