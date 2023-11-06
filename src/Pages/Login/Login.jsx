import { Link } from "react-router-dom";


const Login = () => {

   const handleLogin = e =>{
    e.preventDefault();
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
                            <p>Do not have an account? Go to <Link className="text-amber-900 font-bold" to='/registration'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;