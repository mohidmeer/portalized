import { Link } from "react-router-dom";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-black p-10 rounded-lg md:min-w-[786px]">
      <h3 className="font-[300]">Forgot your Password</h3>
      <p className="b4 text-[#d5d5d5d5]">Don't worry, we will help you reset your password.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
        {/* Email Input */}
        <Input
          Icon={MdOutlineMail}
          placeholder="Enter your Email"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Submit Button */}
        <div className="flex flex-col gap-3">
          <Button type="submit">Confirm Email</Button>
          <div className="flex gap-2 items-center justify-center">
            <p className="font-extralight">Remember password?</p>
            <Link to="/login" className="text-[20px]">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;