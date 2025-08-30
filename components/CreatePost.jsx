import React from "react";
import Header from "./Header";
import "react-awesome-button/dist/styles.css";
import { FaLinkedin } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white">
      <Header />
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[70%] h-[600px] lg:h-[600px] rounded-lg bg-white">
        <div className="flex-[0.6] bg-gradient-to-br from-emerald-400 to-emerald-600 ">
          <div className="flex flex-row gap-2 font-rubik">
            <h5 className="p-1">Aurafarmer.ai</h5>
          </div>
          <form className="p-3 ">
            <div className="flex flex-col gap-2 font-sans ">
              <label htmlFor="title" className=" font-semibold text-xl">
                {" "}
                Post Title
              </label>{" "}
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="Enter title for post.."
                className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black "
              ></input>
            </div>
            <div className="flex flex-col gap-2 font-sans ">
              <label htmlFor="image" className=" font-semibold text-xl">
                {" "}
                Image
              </label>{" "}
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                required
                placeholder="Enter title for post.."
                className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black "
              ></input>
            </div>
            <div className="flex flex-col gap-2 font-sans ">
              <label htmlFor="other" className=" font-semibold text-xl">
                {" "}
                Post instructions
              </label>{" "}
              <textarea
                name="other"
                id="other"
                placeholder="write specifications for your post (optional)."
                className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black "
              ></textarea>
              <div className=" flex w-full justify-center p-2 felx-row">
                <button className="group flex items-center gap-2 p-2 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out">
                  <span>Post On</span>
                  <FaLinkedin className="w-5 h-5 group-hover:text-blue-500 transition-all ease-in-out " />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
