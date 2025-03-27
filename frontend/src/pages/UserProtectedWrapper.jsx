import React, { useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const UserProtectedWrapper = ({
    children
}) => {

    const { user } = useContext(UserDataContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        if (!token) {
            navigate("/login");
        }
    }, [token]) 



  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper
