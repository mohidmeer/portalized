import { Link } from "react-router-dom";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();    

  const onSubmit = (data) => { 
    
    toast('Submitted')
    console.log(data); 
  };

  return (
    <div className="bg-black p-10 rounded-lg md:min-w-[786px]">
      <h3 className="font-[300]">Log In</h3>
      <p className="b4 text-[#d5d5d5d5]">Enter your credentials to continue to your account.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
        <Input
          Icon={MdOutlineMail}
          error={!!errors.email} 
          placeholder="Enter your Email"
          {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <div className="flex flex-col gap-3">
          <Input
            error={!!errors.password} 
            Icon={MdLockOutline}
            placeholder="Enter your account password"
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          <Link to={'/forgot-password'} className="ml-auto">Forgot Password?</Link>
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit">
            Log In
          </Button>
          <div className="flex gap-2 items-center justify-center">
            <p className="font-extralight">Don't have an Account?</p>
            <Link to={'/sign-up'} className="text-[20px]">
              Create Now
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;