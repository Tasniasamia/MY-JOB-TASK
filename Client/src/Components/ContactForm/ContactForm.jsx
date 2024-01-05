import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ContactForm = () => {
    const [err, setErr] = useState(null);
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(null); // Define the success variable

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]); // Assuming 'image' is the field name

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=392c6501cc4955e873764521bd71a665', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                const imageUrl = result.data.url; 
                console.log('Image uploaded:', imageUrl);
        
               
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
           
        }
    };


    return (
        <div className=" lg:my-16">
            <div className="md:flex  justify-center  ">
                <div className=" w-full p-4 shadow-2xl bg-base-100 w-full lg:w-[60%] bg-green-100 lg:py-4 lg:m-2">
                <h1 className='lg:text-4xl text-xl text-center font-bold lg:py-5 py-2'>Create New Contact</h1>
                <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required: 'Name is required'})}placeholder="Name" className='my-4 p-2 border border-2 w-full rounded-lg'/>
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                <input {...register("email", {required: 'Email is required',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'}})}placeholder="Email"className='my-4 p-2 border border-2 w-full rounded-lg' />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <input {...register("phone_number", {required: 'Phone Number is required',
                pattern: {
                        value: /^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                        message: 'Invalid phone number format'
                    }})}
                placeholder="Phone Number"
                className='my-2 p-2 border border-2 w-full rounded-lg'/>
                {errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
                <input {...register("address", {required: 'Address is required'})} placeholder="Address"
                className='my-4 p-2 border border-2 w-full rounded-lg'/>
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                <input type="file"accept="image/*"{...register('image')} className='my-4'/>
                <button className='btn btn-success text-white mt-4 w-full'type="submit">
                <span className='lg:mx-2'>S</span>
                <span className='lg:mx-2'>U</span> 
                <span className='lg:mx-2'>B</span>
                <span className='lg:mx-2'>M</span> 
                <span className='lg:mx-2'>I</span>  
                <span className='lg:mx-2'>T</span> 
                </button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
