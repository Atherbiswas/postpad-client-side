import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logInPic from "../../../assests/login.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success("Log in success");
            navigate('/')
        })
        .catch(error => console.error(error))
    }
  return (
    <div className="hero">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
        <div className="text-center  lg:text-left">
          <img src={logInPic} className=" w-full rounded-md" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-inner text-black border rounded-md">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign In</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  <span className="text-black">Forgot password?</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-secondary">
                <span className="capitalize text-xl">Sign In</span>
              </button>
            </div>
            <hr className="mt-1" />
            <button className="btn btn-outline btn-secondary">
              <FcGoogle className="mx-2 text-2xl"></FcGoogle>
              <span className="capitalize text-xl">Sign In With Google</span>
            </button>
            <p className="text-center mt-1">
              New to postPad?{" "}
              <Link className="text-secondary font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
