import Image from "next/image";
import {useState} from "react";
import {IconEye, IconEyeOff} from "@tabler/icons-react";
import Link from "next/link";

const  Login=()=>{
    const [showPassword,setShowPassword]=useState<boolean>(false);
    return(
        <div className="bg-gray-300 flex justify-center h-screen">
        <div className="flex p-20 w-[900px] justify-center drop-shadow-xl ">
            <div className="w-2/5 rounded-l-xl bg-white overflow-hidden">
                <Image src="/assets/logo.png" alt="logo" height={300} width={300} className="w-40 h-30" />
                <Image src="/assets/login.jpg" alt="services image" height={500} width={300} className="w-full h-full object-cover rounded-r-lg drop-shadow-lg" />
            </div>

            <div className="w-3/5 bg-white p-10 rounded-r-xl">
                <p className="font-bold text-2xl text-center mb-10">Welcome Back!</p>
                <p className="text-teal-700 font-semibold mb-5">Sign in to Hamro Sewa</p>
                <form action="">
                    <div className="mb-5">
                    <input type="text" placeholder="Email Address" className="border p-3 focus:ring focus:outline-none focus:ring-teal-200 focus:opacity-50 rounded w-full" required={true}/>
                    </div>
                    <div className="mb-5">
                        <div className="relative">
                    <input type={showPassword ? "text":"password"} placeholder="Password" className="border p-3 focus:ring focus:ring-teal-200 focus:outline-none focus:opacity-50 rounded w-full" required={true}/>
                       <button type="button"
                               onClick={()=>setShowPassword(!showPassword)}
                               className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                       >
                           {showPassword ? (
                               <IconEye className="h-5 w-5 text-gray-500"/>
                           ):(
                               <IconEyeOff  className="h-5 w-5 text-gray-500"/>
                           )}

                       </button>
                        </div>
                        </div>
                    <div className="flex justify-between mb-7 gap-10">
                        <div>
                        <input type="checkbox"/><span className="ml-2">Remember Me</span>
                        </div>
                        <div>
                            <span className="text-teal-500"><u>Forgot Password ?</u></span>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-6 rounded"> Sign In</button>
                    </div>
                </form>
                <div className="inline-flex items-center justify-center w-full gap-3 ">
                    <hr className=" w-1/2 h-0.5 my-8 bg-gray-500 border-0 rounded "/>
                    <span className="font-semibold "> or </span>
                    <hr className=" w-1/2 h-0.5 my-8 bg-gray-500 border-0 rounded "/>
                </div>
                <div className="flex justify-center mb-8">
                   <div className="-mt-3 bg-gray-300 w-max py-1 px-2 flex gap-2 rounded items-center ">
                      <div> <Image src="/assets/google.webp" alt="google logo" height={100} width={100} className="w-6 h-6"/> </div>
                       <div><span className="font-semibold text-sm">Sign in with Google</span></div>
                   </div>
                </div>
                <div className="text-sm text-center">
                    <Link href="" className="text-blue-600  ">Privacy Policy</Link>
                    <span> and </span>
                    <Link href="" className="text-blue-600  "> Terms of Service </Link>
                    <span> Apply. </span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login;