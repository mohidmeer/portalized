import { TabGroup, TabPanel, TabPanels, TabList, Tab } from "@headlessui/react"
import Input from "../../components/ui/input"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Button from "../../components/ui/button"
import { useState } from "react"


const Profile = () => {

    return (
        <div className='flex flex-col gap-y-[100px]' >

            <section className="max-w-7xl mx-auto w-full mt-20">
                <h5 className="h5 ml-2">Profile</h5>
                <div className="mt-10">
                    <TabGroup>
                        <TabList className={'flex gap-10  overflow-x-scroll md:overflow-x-auto'}>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h9 border-b-2 " >
                                Personal Details
                            </Tab>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h9 border-b-2 " >
                                Change password
                            </Tab>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h9 border-b-2 " >
                                Payment Options
                            </Tab>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h9 border-b-2 " >
                                Comminucations
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <PersonalDetailsForm />
                            </TabPanel>
                            <TabPanel>
                                <ChangePasswordForm />
                            </TabPanel>
                            <TabPanel>
                                <PaymentOptionsForm />
                            </TabPanel>
                            <TabPanel>
                                <CommunicationsForm/>
                            </TabPanel>

                        </TabPanels>
                    </TabGroup>
                </div>
            </section>
        </div>
    )
}

export default Profile





const PersonalDetailsForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        toast.success('Message Submitted');
        console.log('Form Data:', data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-4 mt-10 md:mt-5 px-2 md:px-0">
                <div className="flex flex-col gap-1">
                    <label className="ml-1">First Name</label>
                    <Input
                        error={errors.firstname}
                        placeholder="First Name"
                        className="bg-black b7"
                        {...register('firstname', { required: 'First Name is required' })}
                    />
                    {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label className="ml-1">Middle Name</label>
                    <Input
                        error={errors.middlename}
                        placeholder="Middle Name"
                        className="bg-black b7"
                        {...register('middlename')}
                    />
                    {errors.middlename && <p className="text-red-500">{errors.middlename.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label className="ml-1">Last Name</label>
                    <Input
                        error={errors.lastname}
                        placeholder="Last Name"
                        className="bg-black b7"
                        {...register('lastname', { required: 'Last Name is required' })}
                    />
                    {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
                </div>
                <div className="flex col-span-full justify-end items-center gap-4">
                    <Button className="">
                        Save Changes
                    </Button>
                    <Button className="!bg-primary-200 text-white  !px-10">
                        Cancel
                    </Button>
                </div>
            </form>
            <div className="mt-10 flex flex-col gap-8 px-2 md:px-0 ">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="c7" >Linked Email</p>
                        <p className="h8">muhammadzeeshan@gmail.com</p>
                    </div>
                    <Button className="!bg-primary-200 text-white  !px-10">
                        Edit
                    </Button>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="c7" >Mobile Number</p>
                        <p className="h8">+44 35453120</p>
                    </div>
                    <Button className="!bg-primary-200 text-white !px-10">
                        Edit
                    </Button>
                </div>
            </div>
        </div>



    );
};

const ChangePasswordForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        toast.success('Message Submitted');
        console.log('Form Data:', data);
    };
    return (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 mt-10 md:mt-5 px-2 md:px-0 min-h-[40vh]">

            <div className="flex flex-col gap-1">
                <label className="ml-1">Old Password</label>
                <Input
                    error={errors.oldPassword}
                    placeholder="Old Password"
                    type="password"
                    className="bg-black b7"
                    {...register('oldPassword', { required: 'Old Password is required' })}
                />
                {errors.oldPassword && <p className="text-red-500">{errors.oldPassword.message}</p>}
            </div>


            <div className="flex flex-col gap-1">
                <label className="ml-1">New Password</label>
                <Input
                    error={errors.newPassword}
                    placeholder="New Password"
                    type="password"
                    className="bg-black b7"
                    {...register('newPassword', {
                        required: 'New Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                    })}
                />
                {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label className="ml-1">Confirm New Password</label>
                <Input
                    error={errors.confirmNewPassword}
                    placeholder="Confirm New Password"
                    type="password"
                    className="bg-black b7"
                    {...register('confirmNewPassword', {
                        required: 'Confirm New Password is required',
                        validate: (value) =>
                            value === watch('newPassword') || 'Passwords do not match',
                    })}
                />
                {errors.confirmNewPassword && (
                    <p className="text-red-500">{errors.confirmNewPassword.message}</p>
                )}
            </div>

            <div className="flex col-span-full justify-end items-center gap-4">
                <Button className="">
                    Save Changes
                </Button>
                <Button className="!bg-primary-200 text-white !px-10">
                    Cancel
                </Button>
            </div>
        </form>
    );
};

const PaymentOptionsForm = () => {


    const mockpaymentOptions = [
        {
            id: 1,
            name: 'VISA Credit Card',
            imgSrc: '/assets/visa.png'
        },
        {
            id: 2,
            name: 'MasterCard Credit Card',
            imgSrc: '/assets/master.png'
        },
    ]

    const [userPaymentOptions, setUserPaymentOptions] = useState(mockpaymentOptions)

    const [openPaymentForm, setOpenPaymentForm] = useState(false)



    const PaymentForm = ({ setOpenPaymentForm }) => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const onSubmit = (data) => {
            toast.success('Payment Information Submitted');
            console.log('Form Data:', data);
            setOpenPaymentForm(false)
        };

        return (
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-4 mt-10 md:mt-5 px-2 md:px-0 ">
                <div className="flex flex-col gap-1">
                    <label className="ml-1">Name on Card</label>
                    <Input
                        error={errors.nameOnCard}
                        placeholder="Name on Card"
                        className="bg-black b7"
                        {...register('nameOnCard', { required: 'Name on Card is required' })}
                    />
                    {errors.nameOnCard && <p className="text-red-500">{errors.nameOnCard.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="ml-1">Card Number</label>
                    <Input
                        error={errors.cardNumber}
                        placeholder="Card Number"
                        className="bg-black b7"
                        {...register('cardNumber', {
                            required: 'Card Number is required',
                            pattern: {
                                value: /^\d{16}$/,
                                message: 'Card Number must be 16 digits',
                            },
                        })}
                    />
                    {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="ml-1">Expiry Date</label>
                    <Input
                        error={errors.expiryDate}
                        placeholder="MM/YY"
                        className="bg-black b7"
                        {...register('expiryDate', {
                            required: 'Expiry Date is required',
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                message: 'Expiry Date must be in MM/YY format',
                            },
                        })}
                    />
                    {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="ml-1">CVV</label>
                    <Input
                        error={errors.cvv}
                        placeholder="CVV"
                        className="bg-black b7"
                        {...register('cvv', {
                            required: 'CVV is required',
                            pattern: {
                                value: /^\d{3}$/,
                                message: 'CVV must be 3 digits',
                            },
                        })}
                    />
                    {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
                </div>

                <div className="flex col-span-full justify-end items-center gap-4">
                    <Button className="">Save Changes</Button>
                    <Button className="!bg-primary-200 text-white !px-10">Cancel</Button>
                </div>
            </form>
        );
    };


    return (
        <>

            {
                openPaymentForm ?
                    <PaymentForm setOpenPaymentForm={setOpenPaymentForm} /> :
                    <div className="p-4 mt-5">
                        <h6 className="h8">Payment Methods</h6>
                        <p className="b8">Add payment information for easy checkout</p>
                        <div className="flex flex-col mt-10 gap-10">
                            {
                                userPaymentOptions.map((option) => (
                                    <div className="flex justify-between items-center" key={option.id} >
                                        <div className="flex gap-4 items-center">
                                            <img src={option.imgSrc} />
                                            <p>{option.name}</p>
                                        </div>

                                        <button className="text-red-500">
                                            Delete
                                        </button>

                                    </div>
                                ))
                            }
                            <button onClick={() => { setOpenPaymentForm(true) }} className=" max-w-fit text-[16px] flex gap-4 items-center">
                                <span className="text-[20px] mb-1">+</span>
                                Add payment method
                            </button>
                        </div>
                    </div>
            }

        </>
    );
};

const CommunicationsForm = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 mt-5">
            <h6 className="h8">Communication Preferences</h6>

            <div className="mt-4">
                <p>Promotional</p>
                <p className="text-primary-100">
                    Get updates for travel deals, special offers and other promotions.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            {...register('promotionalEmail')}
                        />
                        <div className="relative w-11 h-6 bg-primary-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white/70 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
                        <span className="ms-3 text-sm font-medium text-primary-100">Email</span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            {...register('promotionalSms')}
                        />
                        <div className="relative w-11 h-6 bg-primary-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white/70 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
                        <span className="ms-3 text-sm font-medium text-primary-100">Sms</span>
                    </label>
                </div>
            </div>

            <hr className="my-10" />

            <div className="mt-4">
                <p>Trip and Travel</p>
                <p className="text-primary-100">
                    Get updates for travel deals, special offers and other promotions.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            {...register('tripEmail')}
                        />
                        <div className="relative w-11 h-6 bg-primary-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white/70 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
                        <span className="ms-3 text-sm font-medium text-primary-100">Email</span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            {...register('tripSms')}
                        />
                        <div className="relative w-11 h-6 bg-primary-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white/70 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
                        <span className="ms-3 text-sm font-medium text-primary-100">Sms</span>
                    </label>
                </div>
            </div>

            <div className="flex col-span-full justify-end items-center gap-4 mt-4">
                <Button type="submit" className=" px-10 py-2 rounded">
                    Save Changes
                </Button>
            </div>
        </form>
    );
};






