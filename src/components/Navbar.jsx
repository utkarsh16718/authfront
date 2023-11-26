
import { Link } from "react-router-dom"
import context from "../context/Authcontext"
import { useContext } from "react"


export const Navbar = () => {
    const { isAuth } = useContext(context)
    return (
        <div className="flex flex-col lg:flex-row justify-between px-2 py-3 bg-purple-500 text-white  ">
            <h2 className=" font-bold text-2xl text-center ">Mern Auth</h2>
            <div className="flex gap-5  justify-center">
                <Link to='/' className=" list-none text-xl cursor-pointer ">Home</Link>
                
                {!isAuth &&(<Link to='/login' className=" list-none text-xl cursor-pointer ">Login</Link>)}

                {!isAuth && (<Link to='/signup' className=" list-none text-xl cursor-pointer ">Signup</Link>)}
                {
                    isAuth && (
                    <Link to='#' className=" list-none text-xl cursor-pointer ">Logout</Link>)
                }

            </div>
        </div>
    )
}
