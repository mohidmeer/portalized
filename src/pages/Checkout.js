import React, { useEffect, useState } from 'react'
import { MdDelete, MdStar } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import Button from '../components/ui/button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Input from '../components/ui/input';

const Checkout = () => {


    const [checkoutStep, setCheckoutStep] = useState("cart");

    const cartItems = useSelector((state) => state.cart.cartItems);


    const handleCheckout = () => {
        setCheckoutStep("shipping");
    };

    const handleShipping = () => {
        setCheckoutStep("billing");
    };



    return (
        <div className='flex flex-col gap-y-[100px]' >
            <section className='max-w-7xl mx-auto w-full py-20' >
                <div className='grid grid-cols-3 gap-x-10'>
                    <div className='rounded-md bg-primary-200 col-span-2 p-4 '>

                        {checkoutStep === "cart" && (
                            <Cart />
                        )}
                        {checkoutStep === "shipping" && (
                            <ShippingForm handleShipping={handleShipping} />
                        )}
                        {checkoutStep === "billing" && (
                            <PaymentForm   />
                        )}

                    </div>
                    <div className="">
                        <div className='rounded-md bg-primary-200 p-4 flex flex-col gap-4'>
                            <h3 className="h6">Summary</h3>

                            <div className="my-4 border-t border-gray-300"></div>

                            <div className="flex justify-between items-center">
                                <p className="h8">Total</p>
                                <p className="h8">
                                    {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                </p>
                            </div>


                            <div className="flex justify-between items-center">
                                <p className="h8">Tax (0%)</p>
                                <p className="h8">0.00</p>
                            </div>


                            <div className="flex justify-between items-center">
                                <p className="h8 font-light ">Shipping</p>
                                <p className="h8">5.00</p>
                            </div>





                            <div className="flex justify-between items-center font-semibold mt-4">
                                <p className='h6'>Total</p>
                                <p className='h6'>
                                    {(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5.00).toFixed(2)}
                                </p>
                            </div>

                            <div className="my-4 border-t border-gray-300"></div>

                            {checkoutStep === "cart" && (
                                <Button onClick={handleCheckout} >
                                    Continue to Checkout
                                </Button>
                            )}


                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Checkout




function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    return (

        <div className="w-full">
            <div className="flex justify-between items-center">
                <h6 className="h6 font-light">{`Your Cart (${cartItems.length})`}</h6>
            </div>
            <div className="mt-4 space-y-4">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex  justify-between  items-center    gap-4 bg-[#121212] p-3 rounded-lg"
                    >
                        <div className='flex gap-6 '>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-32 h-32 rounded object-cover"
                            />

                            <div className="flex-1 flex flex-col justify-between">
                                <p className="h8">{item.name}</p>
                                <p className="h7 mt-1">${item.price}</p>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="flex gap-1 items-center   "
                                >
                                    <MdDelete /> Delete
                                </button>
                            </div>
                        </div>

                        <div className="  max-w-fit bg-black rounded-xl flex items-center gap-4 ">
                            <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-2 rounded max-w-fit"
                            >
                                -
                            </button>
                            <span className="">{item.quantity}</span>
                            <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-2 rounded max-w-fit"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}



const ShippingForm = ({handleShipping}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        toast.success('Shipping Information Submitted');
        console.log('Form Data:', data);
        handleShipping();
    };

    return (
        <div className="mx-auto max-w-4xl">
            <h2 className="h2 text-left">Shipping Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-9">

                <div>
                    <label className='h9 ml-1' htmlFor="email">Email Address</label>
                    <Input
                        error={errors.email}
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className=" !bg-primary-300 "
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>


                <div className="flex justify-start items-center h9 gap-2  ">
                    <input type="checkbox" id="newsletter" {...register('newsletter')} className='text-primary-300 accent-primary-200    h-5 w-5  rounded focus:ring-2 focus:ring-black/40  bg-primary-300 ' />
                    Email me with new offers and newsletter
                </div>

                <h6 className="  h8">Shipping Address</h6>
                <div className="grid grid-cols-2 gap-6">
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="firstName">First Name</label>
                        <Input
                            error={errors.firstName}
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            className=" !bg-primary-300 "
                            {...register('firstName', { required: 'First name is required' })}
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="lastName">Last Name</label>
                        <Input
                            error={errors.lastName}

                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            className=" !bg-primary-300 "
                            {...register('lastName', { required: 'Last name is required' })}
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="country">Country</label>
                        <Input
                            error={errors.country}

                            type="text"
                            id="country"
                            placeholder="Enter your country"
                            className=" !bg-primary-300 "
                            {...register('country', { required: 'Country is required' })}
                        />
                        {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="state">State</label>
                        <Input
                            error={errors.state}

                            type="text"
                            id="state"
                            placeholder="Enter your country"
                            className=" !bg-primary-300 "
                            {...register('state', { required: 'Country is required' })}
                        />
                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="city">City</label>
                        <Input
                            error={errors.city}

                            type="text"
                            id="city"
                            placeholder="Enter your city"
                            className=" !bg-primary-300 "
                            {...register('city', { required: 'City is required' })}
                        />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="address">Address</label>
                        <Input
                            error={errors.address}

                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            className=" !bg-primary-300 "
                            {...register('address', { required: 'Address is required' })}
                        />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="zip">Zip</label>
                        <Input
                            error={errors.zip}

                            type="text"
                            id="zip"
                            placeholder="Enter your zip"
                            className=" !bg-primary-300 "
                            {...register('zip', { required: 'zip is required' })}
                        />
                        {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='h9 ml-1' htmlFor="Phone Number">Phone Number</label>
                        <Input
                            error={errors.phonenumber}
                            type="text"
                            id="phonenumber"
                            placeholder="Enter your Phone Number"
                            className=" !bg-primary-300 "
                            {...register('phonenumber', { required: 'Phone Number is required' })}
                        />
                        {errors.phonenumber && <p className="text-red-500">{errors.phonenumber.message}</p>}
                    </div>
                </div>




                <button
                    
                    type="submit"
                    className="w-full bg-white text-black px-8 py-2 rounded-lg mt-6 max-w-fit mx-auto    "
                >
                    Confirm
                </button>
            </form>
        </div>
    )
}



const PaymentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        toast.success('Payment Information Submitted');
        console.log('Form Data:', data);
    };

    return (
        <div className="mx-auto max-w-4xl">
            <h2 className="h2 text-left">Payment Details</h2>
            <form className='grid grid-cols-2 gap-6 mt-10' onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col gap-2'>
                    <label className='h9 ml-1' htmlFor="cardholderName">Cardholder Name</label>
                    <Input
                        type="text"
                        error={errors.cardholderName}
                        id="cardholderName"
                        placeholder="Enter cardholder name"
                        className="!bg-primary-300"
                        {...register('cardholderName', { required: 'Cardholder Name is required' })}
                    />
                    {errors.cardholderName && <p className="text-red-500">{errors.cardholderName.message}</p>}
                </div>


                <div className='flex flex-col gap-2'>
                    <label className='h9 ml-1' htmlFor="cardNumber">Card Number</label>
                    <Input
                        type="text"
                        error={errors.cardNumber}
                        id="cardNumber"
                        placeholder="Enter card number"
                        className="!bg-primary-300"
                        {...register('cardNumber', { required: 'Card Number is required' })}
                    />
                    {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
                </div>


                <div className='flex flex-col gap-2'>
                    <label className='h9 ml-1' htmlFor="expiryDate">Expiry Date</label>
                    <Input
                        error={errors.expiryDate}
                        type="text"
                        id="expiryDate"
                        placeholder="MM/YY"
                        className="!bg-primary-300"
                        {...register('expiryDate', { required: 'Expiry Date is required' })}
                    />
                    {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
                </div>


                <div className='flex flex-col gap-2'>
                    <label className='h9 ml-1' htmlFor="cvv">CVV</label>
                    <Input
                        error={errors.cvv}
                        type="text"
                        id="cvv"
                        placeholder="Enter CVV"
                        className="!bg-primary-300"
                        {...register('cvv', { required: 'CVV is required' })}
                    />
                    {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
                </div>

                <div className="col-span-2 mt-4 flex justify-center items-center">
                    <button
                        type="submit"
                        className="w-full bg-white text-black px-8 py-2 rounded-lg mt-6 max-w-fit mx-auto    "
                    >
                        Confirm
                    </button>

                </div>
            </form>
        </div>
    )
}