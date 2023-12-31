import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo,email, password)

        //create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="flex justify-between">
            <div>
                <img className="w-[400px]" src="https://i.ibb.co/r2ZpdJ5/registration.jpg" alt="" />
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full m-4  md:w-1/2 rounded-xl bg-orange-200 p-5">
                    <div className="text-center lg:text-left p-3">
                        <h1 className="text-base md:text-5xl font-bold text-amber-900">Register now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                <button className="btn bg-amber-900 text-white">Register</button>
                            </div>
                            <p>Already have an account? Go to <Link className="text-amber-900 font-bold" to='/login'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;