import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { setUser } from '../store/slices/userSlice';
import { BASE_URL } from '../utils/constant';
import { Toaster } from 'react-hot-toast';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!document.cookie) return;

        const { data } = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });

        dispatch(setUser(data));
      } catch (error) {
        const status = error.response?.status;
        if (status === 401) {
          navigate('/login');
        } else {
          console.error('Error fetching user data:', error.response?.data?.message || error.message);
          // navigate('/error');
        }
      }
    };

    if (!user) fetchUser();
  }, [user, dispatch, navigate]);

  return (
    <>
        <Toaster position="top-center" />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Body;
