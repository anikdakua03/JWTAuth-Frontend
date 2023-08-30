
import React, { useEffect, useRef, useState } from 'react'
import Login from './Login';
// import { faCheck, faTimes,  } from "@fortawesome/free-solid-svg-icons"; // faInfoCircle
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../services/AxiosServices';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = 'http://localhost:5121/api/Authentication/Register';
const REGISTER_URL = '/Authentication/Register';

const Registration = () => {

  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  // const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  // for retyping same pwd
  // const [matchPwd, setMatchPwd] = useState('');
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(''); // for any error
  const [success, setSuccess] = useState(false); //  for success

  useEffect(() => {
    nameRef.current.focus();
  }, [])

  // setting the name
  useEffect(() => {
    // console.log(name);
    setValidName(name);
  }, [name])

  // setting the email
  useEffect(() => {
    // console.log(email);
    setValidEmail(email);
  }, [email])

  // validating the password then setting
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
    // checking with retyped pwd
    // const match = pwd === matchPwd;
    // setValidMatch(match);
  }, [pwd])

  // for clearing error message when user is redoing it in any of the name , email or pwd
  useEffect(() => {
    setErrMsg('');
  }, [name, email, pwd])

  const data = {
    Name: name,
    Email: email,
    Password: pwd
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // 

    // preventing any unknown trick to bypass
    const v1 = PWD_REGEX.test(pwd);
    if (!v1) {
      setErrMsg("Invalid enrty !!");
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL,
        data,// JSON.stringify({name, email, pwd})
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.data.token);
      // for getting full objest response
      console.log(JSON.stringify(response));
      setSuccess(true);
      // then also have to clear input field from registration 
    }
    catch (error) {
      if (!error) {
        setErrMsg(" No server response");
      }
      else if (error.response?.status === 409) {

        setErrMsg("Name already taken");
      }
      // generic error avoiadble here
      else {
        setErrMsg("Some other errors");
      }
      errRef.current.focus();
    }
  }
  return (
    <>
      {success ? (<section>
        <h1 className='text-3xl text-amber-300'>Registration successful, please verify your email from your email</h1>
        <a href='/login'>Log in now</a>
      </section>)
        : (
          <section>
            <div className='flex mt-5 justify-center'>
              <div className="w-full mt-4 max-w-xs justify-center">

                <section>
                  <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>
                </section>

                <div className='flex justify-center font-bold text-blue-600 text-2xl'>Register</div>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>

                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      autoComplete='off'
                      ref={nameRef}
                      onChange={(e) => setName(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      placeholder="Your name" />

                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>

                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"
                      type="email"
                      autoComplete='off'
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      placeholder="Enter your email" />

                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password

                      {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} /> */}
                      {/* <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}

                    </label>
                    <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
                      type="password"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      // aria-describedby='pwdnote'
                      // onFocus={() => setPwdFocus(true)}
                      // onBlur={() => setPwdFocus(false)}
                      placeholder="Enter your password" />

                    {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p> */}

                  </div>

                  <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      disabled={!validName || !validEmail || !validPwd ? true : false}>
                      Register
                    </button>
                  </div>

                </form>

                  <div className='text-2xl text-center'>Already registered ? </div><br />
                  <span className='line'>
                    {Login}
                    <a href='/login' className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center "> Log in</a>
                  </span>

              </div>
            </div>
          </section>
        )}
    </>
  )
}


// =====================================================================================================================================
//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Success!</h1>
//           <p>
//             <a href="/Login">Sign In</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//           <h1>Register</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="username">
//               Username:
//               <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//               <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
//             </label>
//             <input
//               type="text"
//               id="username"
//               ref={nameRef}
//               autoComplete="off"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//               aria-invalid={validName ? "false" : "true"}
//             />

//             <label htmlFor="email">
//               Email:
//               <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
//               <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
//             </label>
//             <input
//               type="text"
//               id="email"
//               autoComplete="off"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               required
//               aria-invalid={validEmail ? "false" : "true"}
//             />


//             <label htmlFor="password">
//               Password:
//               <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//               <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//             </label>
//             <input
//               type="password"
//               id="password"
//               onChange={(e) => setPwd(e.target.value)}
//               value={pwd}
//               required
//               aria-invalid={validPwd ? "false" : "true"}
//               aria-describedby="pwdnote"
//               onFocus={() => setPwdFocus(true)}
//               onBlur={() => setPwdFocus(false)}
//             />
//             <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//               <FontAwesomeIcon icon={faInfoCircle} />
//               8 to 24 characters.<br />
//               Must include uppercase and lowercase letters, a number and a special character.<br />
//               Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//             </p>

//             <button disabled={!validName || !validPwd ? true : false}>Register </button>
//           </form>
//           <p>
//             Already registered?<br />
//             <span className="line">
//               {/*put router link here*/}
//               <a href="/Login">Log In now</a>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   )
// }
// -------------------------------------------------------------------------------------------------------------------------------

export default Registration