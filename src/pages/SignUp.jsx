import {useState,} from 'react'
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const handleSubmit =async () => {
    const res= await axios.post('http://localhost:4000/signUp',{name, email, password

    })
    const data=res.data;
  }


  return (
    <div className='flex flex-col gap-3 rounded-md shadow-lg w-fit p-7 mx-auto my-[30vh] '>

      <input type="text" name="name" id="name" placeholder='Enter Your Name' className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none' value={name} onChange={(e)=>setName(e.target.value)}/>


      <input type="email" name='email' id='email' placeholder='Email' className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none ' value={email} onChange={(e)=>setEmail(e.target.value)} />

      <input type="password" name="password" id="password"  placeholder='Enter Password' className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none  ' value={password} onChange={(e)=>setPassword(e.target.value)} />

      <button type='submit' onClick={handleSubmit} className='px-3 py-2 bg-purple-500 rounded-full shadow-md text-white hover:bg-purple-900  '  >SignUp</button>

    </div>
  )
}

export default SignUp