import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './ui/input';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Message Submitted');
    console.log('Form Data:', data);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="h2 text-center">Share your thoughts with Us</h2>
      <p className="c6 text-center text-primary-100">
        Share your thoughts or feedback with us here.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-9">
        <Input
            error={errors.name}
          placeholder="Enter your name"
          className="bg-black b7"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-red-500 ">{errors.name.message}</p>} 

        <Input
        error={errors.email}
          placeholder="Enter your email"
          className="bg-black b7"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}

        <textarea
          placeholder="Write your message"
          className={`bg-black transition-all duration-300 p-4 outline-none focus:ring-2 ring-[#333333] rounded-xl border border-[#333333] text-[#9D9D9D] placeholder:text-[#9D9D9D] b7 w-full ${errors.message && 'ring-red-600'}`}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className="text-red-500 ">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="w-full transition-all duration-300 bg-white text-black px-4 py-2 rounded-lg focus:ring-4 ring-white/30 b7 max-w-fit mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm