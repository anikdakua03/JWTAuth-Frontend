
import useAuth from './useAuth'
import axios from 'axios';

const URL_PATH = '/Authentication/RefreshToken';

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.post(URL_PATH, {
            withCredentials : true
        });

        setAuth( prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);

            return {...prev, accessToken: response.data.accessToken}
        });

        return response.data.accessToken;
    }

  return refresh;
};

export default useRefreshToken
