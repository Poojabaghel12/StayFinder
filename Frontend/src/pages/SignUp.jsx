import React, { useContext, useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';

function SignUp() {
    let[show, setShow] = useState(false)
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let [name,setName]= useState("")
    let [email,setEmail]= useState("")
    let [password,setPassword]= useState("")


    const handleSignUp = async (e) => {
        try{
            e.preventDefault()
            let result = await axios.post(serverUrl + "/api/auth/signup",{
                name,
                email,
                password
            }, {withCredentials:true})
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[40px] rounded-[50%] flex items-center justify-center' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
        <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleSignUp}>
            <h1 className='text-[30px] text-[black]'>Welcome to StayFinder</h1>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
                <label htmlFor="name" className='text-[20px]' >UserName</label>
                <input type="text" id='name' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setName(e.target.value)} autoComplete="username" value={name}/>
            </div>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
                <label htmlFor="email" className='text-[20px]' >Email</label>
                <input type="text" id='email' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setEmail(e.target.value)} autoComplete="email" value={email} />
            </div>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
                <label htmlFor="password" className='text-[20px]' >Password</label>
                <input type={show?"text":"password"} id='password' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] ' required onChange={(e)=>setPassword(e.target.value)} autoComplete="current-password" value={password} />
                {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev=>!prev)} />}
                {show && <IoMdEyeOff className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer'  onClick={()=>setShow(prev=>!prev)} />}
            </div>
            <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg mt-[20px]'>SignUp</button>
            <p className='text-[18px]'>Already have an account? <span className='text-[19px] text-[red] cursor-pointer' 
            onClick={()=>navigate("/login")}>Login</span>
            </p> 
        </form>
      
    </div>
  )
}

export default SignUp
