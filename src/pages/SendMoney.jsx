import React from "react";
import { useForm } from "react-hook-form";


const SendMoney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center h-screen justify-center bg-primary">
      <div className="flex-col items-center text-white md:ml-[20%]">
        <h1 className="font-bold text-5xl">Send Money Easily</h1>
        <p className="font-semibold text-xl">Easy Money Transfer to others</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="max-w-[75%] mx-auto">
          <label className="input flex items-center gap-2 mb-2 md:mb-4">
            <input
              type="number"
              className="grow py-2 px-6 rounded-lg"
              placeholder="Recipient Mobile No"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input
            //   type={showPassword ? "text" : "password"}
              className="grow py-2 px-6 rounded-lg"
              type="number"
              placeholder="Amount"
              {...register("amount", { required: true })}
            />
            {/* <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span> */}
            {errors.amount && (
              <span className="text-red-600 text-sm">Password is required</span>
            )}
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input
              type="number"
              className="grow py-2 px-6 rounded-lg"
              placeholder="Pin"
              {...register("pin", { required: true })}
            />
            {errors.pin && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </label>

          <button className="btn bg-[#6F42C1] text-white w-full">Confirm</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SendMoney;