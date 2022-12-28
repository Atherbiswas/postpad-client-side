import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logInPic from "../../../assests/login.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success("Account create successfully");
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
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-secondary">
                <span className="capitalize text-xl">Sign Up</span>
              </button>
            </div>
            <p className="text-center mt-1">
              Already have an account?{" "}
              <Link className="text-secondary font-bold" to="/signIn">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
