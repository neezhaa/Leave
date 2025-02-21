import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("ahmed@example.com");
  const [password, setPassword] = useState("password123");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#f0f5f9]'>
    <div className="bg-white flex flex-col items-center justify-center max-w-[600px] rounded-[10px] w-full pt-[47px] pb-[20px]  h-auto mt-[45px] mb-[20px]">
            <h1 className='text-[32px] font-semibold tracking-[1px] leading-[1.1] m-0'>Sign In</h1>
            <div className='text-[#535c6d] py-[12px] px-[40px] text-center'>
                    <p className="inline-block mb-[27px] whitespace-nowrap text-[#535c6d] text-center">Not registered yet?<Link className='ml-[20px] link-b font-normal text-[#1e385b] pb-1 no-underline border-b border-[#0099fa] transition-all duration-500' to="">Registration</Link></p>

                    <form onSubmit={handleLogin} className='mx-auto max-w-[420px]'>
                    <div className='mb-[20px]'>
                        <input 
                            type="text" 
                            value={email} 
                            placeholder='Email *' 
                            onChange={ e => setEmail(e.target.value)}
                            className='bg-transparent border-0 border-b border-gray-400 
                                shadow-none text-[#758b9d] 
                                text-base h-auto leading-[1.4285] outline-none 
                                py-[10px] pb-[7px] relative w-full mb-5 
                                focus:border-blue-500 focus:ring-0'
                        />
                        <input 
                            type="password" 
                            value={password} 
                            placeholder='Password *' 
                            onChange={ e => setPassword(e.target.value)}
                            className='bg-transparent border-0 border-b border-gray-400 
                                shadow-none text-[#758b9d] 
                                text-base h-auto leading-[1.4285] outline-none 
                                py-[10px] pb-[7px] relative w-full mb-5 
                                focus:border-blue-500 focus:ring-0'
                        />
                        
                    </div>
                    <div className="submit-btn-wrap">
                    <button 
                        className="flex items-center justify-center bg-gradient-to-r from-[#0099fa] to-[#002ed9] 
                                    bg-[length:115%_auto] border-0 rounded-[10px] 
                                    text-white cursor-pointer text-[15px] font-semibold tracking-wide 
                                    max-w-[300px] overflow-hidden 
                                    pt-[16px] px-[20px] pb-[14px] 
                                    relative text-center uppercase 
                                    transition-all duration-500 w-full
                                    hover:brightness-110" 
                        type="submit">
                        
                        Sign In

                        {/* {loading && (
                            <div className="flex items-center ml-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse mx-1" style={{ animationDelay: "0.2s" }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                            </div>
                        )} */}

                        </button>

                    </div>
                    {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

                </form>
            </div>
        </div>
        </div>
  );
};

export default LoginPage;
