
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { setUser } from '../store/slices/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const Body = () => {

  const dispatch = useDispatch();

  const fetchUser  = async () => {
    try {
      const response = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true
      });
      dispatch(setUser(response?.data));
    } catch (error) {
      console.error("Error fetching user data: ", error.response?.data?.message || error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Body