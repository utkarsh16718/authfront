import { useEffect  } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useContext } from 'react';
import context from '../context/Authcontext';



const User = () => {

  const { user, setUser } = useContext(context)
  const sendRequest = async () => {
    const res = await axios.get('http://localhost:4000/user', {
      withCredentials: true
    })
    const data = await res.data;
  
    setUser(data);
  }
  useEffect(() => {
    sendRequest()
  }, [])

  return (
    <div className='flex justify-centre items-center h-[80vh] '>
      {user && <h1>{user.name}</h1>}
    </div>
  )
}

export default User