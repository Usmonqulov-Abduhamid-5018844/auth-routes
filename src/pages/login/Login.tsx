import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="size-140 h-[100vh] bg-gray-700 p-4 flex-col w-[100%] ">
      <div className="w-[400px] bg-white mx-auto py-[40px] mt-[50px] rounded-2xl">
        <h1 className="font-bold text-[25px] text-center">Login</h1>
        <form
          action=""
          className="flex justify-center flex-col gap-[30px] mt-[30px] px-[40px] max-[650px]:px-[6px]"
        >
          <input
            className="border-2 rounded-[8px] flex h-12 indent-5 text-[20px]"
            placeholder="Enter your UserName"
            type="text"
          />
          <input
            className="border-2 rounded-[8px] flex h-12 indent-5 text-[20px] "
            placeholder="Enter your Email"
            type="email"
          />
          <input
            className="border-2 rounded-[8px] flex h-12 indent-5 text-[20px]"
            placeholder="Enter your Phone"
            type="tel"
          />
          <input
            className="border-2 rounded-[8px] flex h-12 indent-5 text-[20px] "
            placeholder="Enter your Password"
            type="password"
          />
          <input
            className="border-2 rounded-[8px] flex h-12 indent-5 text-[20px]"
            placeholder="Enter your City"
            type="text"
          />

          <div className="flex justify-center gap-10">
            <button
              className="border-2 px-[40px] py-[6px] rounded-[6px] bg-emerald-500 text-white font-bold border-none max-[650px]:px-[25px]"
              type="submit"
            >
              Submit
            </button>
            <button type="button"
              onClick={() => navigate(-1)}
              className="border-2 px-[40px] py-[6px] rounded-[6px] bg-emerald-500 text-white font-bold border-none max-[650px]:px-[25px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Login);
