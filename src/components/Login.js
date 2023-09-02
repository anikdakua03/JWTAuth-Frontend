
import React, {useEffect, useRef, useState } from 'react'
import Registration from './Registration';
import axios from '../services/AxiosServices';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LOGIN_URL = '/Authentication/Login'


const Login = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate(); // will take to a page
  const location = useLocation(); // gets pages location
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  // if any error is there , and user is making changes , the current error will be empty
  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault(); //  prevent reloading page aftre submit

    // preventing any unknown trick to bypass
    const v1 = PWD_REGEX.test(pwd);
    if (!v1) {
      setErrMsg("Invalid enrty !!");
      return;
    }
    const data = {
      Email: email,
      Password: pwd
    }

    try {
      const response = await axios.post(LOGIN_URL,
        data,// JSON.stringify({name, email, pwd})
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response.data));
      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;
      setAuth({email, pwd, roles, accessToken});

      // then also have to clear input field from registration 
      setEmail('');
      setPwd('');
      // after successful login it  will navagte t next page , wher it wants
      navigate(from, { replace: true }); 
    }
    catch (error) {
      if (!error) {
        setErrMsg(" No server response");
      }
      else if (error.response?.status === 400) {

        setErrMsg("");
      }
      else if (error.response?.status === 401) {

        setErrMsg("You are unauthorized !!");
      }
      // generic error avoiadble here
      else {
        setErrMsg(error?.response.errors);
        setErrMsg("Invalid credentials, try again !!");
      }
      errRef.current.focus();
    }
  }

  return (

      <div className='dark:bg-slate-800'>
          <section>
            <section>
              <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>
            </section>
            <div className='flex mt-5 justify-center'>
              <div className="w-full mt-4 max-w-xs justify-center">
                <div className='flex justify-center font-bold text-green-600 text-2xl'>Log in</div>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>

                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      ref={emailRef}
                      autoComplete='off'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      placeholder="Enter your email" />

                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>

                    <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      placeholder="Enter your password" />
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Log in
                    </button>
                  </div>

                </form>
                  <div className='text-2xl'>Doesn't have an account ?</div> <br />
                  <span className='line'>
                    {Registration}
                    <a href='/registration' className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Register here</a>
                  </span>
              </div>
            </div>
      </section>
      </div>
            //  )}</>
  )
}

export default Login
