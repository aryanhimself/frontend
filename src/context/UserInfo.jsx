import React, { createContext} from 'react';
import { toast } from 'react-toastify';
import { errorToast } from '../components/common/toast';
import { authAxios } from '../plugins/axios';
import Cookies from 'js-cookie';



const UserInfoContext = createContext({});

export const useUserInfo = () => React.useContext(UserInfoContext);

export default function UserInfoProvider ({ children }){
  const [user, setUser] = React.useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    email: "",
    role: ""
  });


  const getUserInfo = async () => {
    const csrfToken = Cookies.get('csrftoken');
    authAxios.get('/auth/me/', {
      withCredentials: true,
      headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json',
      },
    }
    ).then((res) => {
      setUser(res?.data?.data);
    }).catch(_ => {
      toast('Something went wrong!', errorToast);
    });
  }


  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
  <>
    <UserInfoContext.Provider value={user}>
        {children}
    </UserInfoContext.Provider>
  </>
  )
}
