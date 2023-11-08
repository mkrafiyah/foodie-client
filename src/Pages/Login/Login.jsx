import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
   const {signInUser, signInWithGoogle} = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const [successLogin, setSuccessLogin] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
   
   
    const handleLogin = e =>{
       e.preventDefault();

       const form = new FormData(e.currentTarget)
        
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)

        setSuccessLogin('');
        setErrorLogin('');

        //signIn user
        signInUser(email, password)
        .then(result=>{
            setSuccessLogin('successful', result.user)
            e.target.reset();
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            setErrorLogin(error.message);
        })
   }
//google signIn
   const handleGoogle = () =>{
    signInWithGoogle()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.error(error)
    })
   }
    return (
        <div className="flex justify-between">
            <div>
                <img className="w-[400px]" src="https://i.ibb.co/QrQkF4n/login.jpg" alt="" />
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full m-4 md:w-1/2 rounded-xl bg-orange-200 p-5">
                    <div className="text-center lg:text-left p-3">
                        <h1 className="text-5xl font-bold text-amber-900">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-amber-900 text-white">Login</button>
                            </div>
                            <p className="text-center mt-2">---OR---</p>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn bg-amber-900 text-white">Google Login</button>
                            </div>
                            <p>Do not have an account? Go to <Link className="text-amber-900 font-bold" to='/registration'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            {
               successLogin &&  Swal.fire('Login SuccessFul!')
                
            }
            {
                errorLogin &&  <p>{errorLogin}</p>
            }
        </div>
    );
};

export default Login;