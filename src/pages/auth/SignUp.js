import { Link } from "react-router-dom";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission, e.g., send data to your API
  };

  return (
    <div className="bg-black p-10 rounded-lg md:min-w-[786px]">
      <h3 className="font-[300] h3">Create Account</h3>
      <p className="b4 text-[#d5d5d5d5]">Fill out the required data to create your account.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">    
        <Input
          Icon={CiUser}
          placeholder="Full Name"
          error={errors.name} // Pass error state for name field
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}


        <Input
          Icon={MdOutlineMail}
          placeholder="Email"
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


        <Input
          Icon={MdLockOutline}
          type="password"
          placeholder="Password"
          error={errors.password} 
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}


        <Input
          Icon={MdLockOutline}
          type="password"
          placeholder="Confirm Password"
          error={errors.confirmPassword} // Pass error state for confirmPassword field
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === watch("password") || "Passwords don't match",
          })}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}


        <div className="flex flex-col gap-3">
          <Button type="submit">Create Account</Button>
          <div className="flex gap-2 items-center justify-center">
            <p className="font-extralight">Already have an account?</p>
            <Link to={"/login"} className="text-[20px]">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;