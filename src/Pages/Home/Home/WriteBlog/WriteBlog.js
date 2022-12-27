import React from "react";
import blogImg from "../../../../assests/blog.png";

const WriteBlog = () => {
  return (
    <div className="lg:mt-24 mt-5">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">
        Write Your Post
      </h1>
      <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse container mx-auto lg:mt-10 mt-5">
        <div className="basis-5/12 lg:mx-12">
          <div className="stack lg:mt-3">
            <div className="grid  rounded bg-primary text-primary-content place-content-center">
              <img src={blogImg} className="shadow-2xl rounded-sm" alt="" />
            </div>
            <div className="grid  rounded bg-accent text-accent-content place-content-center">
              <img src={blogImg} className="shadow-2xl rounded-sm" alt="" />
            </div>
            <div className="grid  rounded bg-secondary text-secondary-content place-content-center">
              <img src={blogImg} className="shadow-2xl rounded-sm" alt="" />
            </div>
          </div>
        </div>
        <div className="basis-7/12">
          <div className="card flex-shrink-0 w-full  shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload post Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write Blog text</span>
                </label>
                <textarea
                  className="textarea textarea-bordered  h-24"
                  placeholder="Write here"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Post Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
