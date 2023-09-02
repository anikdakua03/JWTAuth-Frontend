import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';

const PATH_URL = '/Teams';

const Users = () => {
    const { setAuth } = useAuth();

    const refresh = useRefreshToken();

    const [users, setusers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getusers = async () => {
            try {
                const response = await axios.get(PATH_URL,{
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setusers(response.data);

            } catch (error) {
                console.error(error);
            }
        }

        getusers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])


  return (
    <article>
        <h2>Teams list</h2>    
        {users?.lemgth
            ? (
                <ul>
                    {users.map((user, i) => <li key={i}>{user?.usernae}</li>)}
                </ul>
            ) : <p> NO users found !!</p>
        }
        <button onClick={() => refresh()}>Refresh</button>
        <br/>
    </article>
  )
}

export default Users