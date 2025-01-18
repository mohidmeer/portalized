import { Link, Links } from "react-router-dom"
import Input from "../../components/ui/input"
import Button from "../../components/ui/button"
import { MdOutlineMarkEmailRead } from "react-icons/md";


const ResetPassword = () => {
    return (
        <div className="bg-black  p-10 rounded-lg  md:min-w-[786px] flex flex-col gap-10 text-center  justify-center items-center ">
            <div>
                <MdOutlineMarkEmailRead size={102} />
            </div>  
            <div>
                <h3 className="font-[300]" >Password reset link has been set</h3>
                <p className="b4  !font-[200]   ">Check your email, we have sent an email with password reset link.</p>
            </div>

            <Button>
                Done
            </Button>
        </div>

    )
}

export default ResetPassword   
