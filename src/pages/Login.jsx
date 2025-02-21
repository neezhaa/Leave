import { useState } from "react";
import data from '../data.json';
import { Link } from "react-router-dom";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("sophierenault");
  const [password, setPassword] = useState("mdp456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    const responsable = data.responsables.find(
      (responsable) =>
        (responsable.email === emailOrUsername || responsable.username === emailOrUsername) &&
        responsable.motdepasse === password
    );

    if (responsable) {
      setLoading(false)
      localStorage.setItem("loggedIn", JSON.stringify(responsable));
      window.location.href = "/";
    } else {
      setError("Identifiants incorrects");
      setLoading(false)
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
    //     <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
    //     <div className="mb-4">
    //       <input
    //         type="text"
    //         placeholder="Email ou Nom d'utilisateur"
    //         value={emailOrUsername}
    //         onChange={(e) => setEmailOrUsername(e.target.value)}
    //         className="form-input w-full p-2 border rounded"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <input
    //         type="password"
    //         placeholder="Mot de passe"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="form-input w-full p-2 border rounded"
    //       />
    //     </div>
    //     {error && <p className="text-red-500 mb-4">{error}</p>}
    //     <button
    //       onClick={handleLogin}
    //       className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
    //     >
    //       Se connecter
    //     </button>
    //   </div>
    // </div>
    <div className='flex items-center justify-center w-screen h-screen bg-[#f0f5f9]'>
    <div className="bg-white flex flex-col items-center justify-center max-w-[600px] rounded-[10px] w-full pt-[47px] pb-[20px]  h-auto mt-[45px] mb-[20px]">
            <h1 className='text-[32px] font-semibold tracking-[1px] leading-[1.1] m-0'>Sign In</h1>
            <div className='text-[#535c6d] py-[12px] px-[40px] text-center'>
                    <p className="inline-block mb-[27px] whitespace-nowrap text-[#535c6d] text-center">Not registered yet?<Link className='ml-[20px] link-b font-normal text-[#1e385b] pb-1 no-underline border-b border-[#0099fa] transition-all duration-500' to="">Registration</Link></p>

                    <form onSubmit={handleLogin} className='mx-auto max-w-[420px]'>
                    <div className='mb-[20px]'>
                        <input 
                            type="text" 
                            value={emailOrUsername} 
                            placeholder='Email *' 
                            onChange={ e => setEmailOrUsername(e.target.value)}
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
                        <div className="flex items-center justify-between mb-[5px]">
                            <div className="block my-[10px] relative">
                                <p className="text-[#758b9d] text-[14px]">
                                    <input id='remember' className='absolute h-[15px] left-0 top-[3px] mt-[1px] width-[15px]' type="checkbox"/>
                                    <label htmlFor='remember' className='pl-[23px]'>Remember me</label>
                                </p>
                            </div>
                            <div>
                                <Link className='link-b border-b border-[#0099fa] text-[#1e385b] relative transition-all duration-500' to="/password_recovery">
                                <span className="absolute left-[-28px] top-[5px] 
                                    bg-[url('https://pocketoption.com/themes/2017-09/img/icon-refresh-blue.svg')] 
                                    bg-center bg-no-repeat bg-contain 
                                    h-[16px] w-[16px]">
                                </span>
                                Password recovery</Link>
                            </div>
                        </div>
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

                        {loading && (
                            <div className="flex items-center ml-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse mx-1" style={{ animationDelay: "0.2s" }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                            </div>
                        )}

                        </button>

                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                </form>
            </div>
        </div>
        </div>
  );
};

export default Login;
