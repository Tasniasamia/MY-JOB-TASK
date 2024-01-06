import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query';
const Card = ({ data , refetch}) => {
    let [isOpen, setIsOpen] = useState(false);
    const [err, setErr] = useState(null);
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(null); // Define the success variable
    const[Id,setId]=useState("");
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        // const formData = new FormData();
        // formData.append('image', data.image[0]); // Assuming 'image' is the field name

        // try {
        //     const response = await fetch('https://api.imgbb.com/1/upload?key=392c6501cc4955e873764521bd71a665', {
        //         method: 'POST',
        //         body: formData,
        //     });

        //     if (response.ok) {
        //         const result = await response.json();
        //         const imageUrl = result.data.url;
        //         console.log('Image uploaded:', imageUrl);

              const postData={
                name:data.name,
                email:data.email,
                phone_number:data.phone_number,
                address:data.address,
                image:data.image
              }
              const postResponse = await axios.put(`https://server-site-ruddy.vercel.app/user/${Id}`, postData);
              console.log('Post response:', postResponse.data);
              if (postResponse.data) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your Information has been Updated",
                      showConfirmButton: false,
                      timer: 1500
                  });
              }
              refetch()   
              reset();             

            
        //     } else {
        //         throw new Error('Image upload failed');
        //     }
        // } catch (error) {
        //     console.error('Error uploading image:', error);

        // }
    };

    function closeModal() {
        setIsOpen(false)
      }
    
      const openUpdateModal = (id) => {
        setIsOpen(true); // Opens the modal
        setId(id); // Sets the ID
      };

const deleteUser=async(id)=>{
  const deleteResponse=await axios.delete(`https://server-site-ruddy.vercel.app/user/${id}`)
  if (deleteResponse.data) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        refetch() 
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    })
  }
}     

const addToFavourite=async(id)=>{
  const favouriteResponse=await axios.put(`https://server-site-ruddy.vercel.app/favourite/${id}`)
  if (favouriteResponse.data) {
    refetch() 
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add to Favourite List",
        showConfirmButton: false,
        timer: 1500
    });
}

}

const addToGeneral=async(id)=>{
  const generalResponse=await axios.put(`https://server-site-ruddy.vercel.app/general/${id}`)
  if (generalResponse.data) {
    refetch() 
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added into General ",
        showConfirmButton: false,
        timer: 1500
    });
}
}
  
    return (
        <div>
            <div className="card  w-96 mt-6 bg-green-100 shadow-xl ">
                <div className="relative">
                    <img src={data?.image} alt="Shoes"style={{height:"250px",width:"100%"}} className='object-cover'  />
                    {
                        data.status=="General"?<i className="fa-regular fa-heart absolute top-[10px] right-[10px] "onClick={()=>{addToFavourite(data?._id)}}></i>
                        : <i className="fa-solid fa-heart absolute top-[10px] right-[10px]"onClick={()=>{addToGeneral(data?._id)}}></i>
                    }
                   
                    {/* <i className="fa-solid fa-heart "></i> */}
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                    </h2>
                    <ul className="list-style-none">
                        <li><i className="fa-solid fa-envelope me-1 mb-2"></i>  {data?.email}</li>
                        <li><i className="fa-solid fa-phone me-1 mb-2"></i> {data?.phone_number}</li>
                        <li><i className="fa-solid fa-location-dot me-1"></i> {data?.address}</li>

                    </ul>
                    <div className="card-actions justify-end mt-4">
                    <div className="badge badge-outline p-3" onClick={()=>{openUpdateModal(data?._id)}}>Update</div>
                    <div className="badge badge-outline p-3"onClick={()=>{deleteUser(data?._id)}}>Delete</div>
                    </div>
                </div>
            </div>

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
            <Dialog.Panel className="bg-base-200 lg:w-[40%] w-[90%] ">
            <div className="relative ">
            <div className="md:flex    ">
                <div className=" w-full p-4 shadow-2xl bg-base-100 w-full  bg-green-100 lg:py-4  rounded-box">
                    <h1 className='lg:text-4xl text-xl font-bold lg:py-5 py-2 uppercase'>Update Information</h1>
                    <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
                         <div className='text-start'>Name</div>
                        <input {...register("name", { required: 'Name is required' })} placeholder="Name"defaultValue={data?.name} className='my-4 p-2 border border-2 w-full rounded-lg' />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        <div className='text-start'>Email</div>
                        <input {...register("email", {
                            required: 'Email is required', pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })} defaultValue={data?.email} placeholder="Email" className='my-4 p-2 border border-2 w-full rounded-lg' />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <div className='text-start'>Phone number</div>
                        <input {...register("phone_number", {
                            required: 'Phone Number is required',
                            pattern: {
                                value: /^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                                message: 'Invalid phone number format'
                            }
                        })}
                        placeholder="Phone Number"
                        defaultValue={data?.phone_number}
                        className='my-2 p-2 border border-2 w-full rounded-lg' />
                        {errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
                        <div className='text-start'>Address</div>
                        <input {...register("address", { required: 'Address is required' })} placeholder="Address"
                        defaultValue={data?.address} className='my-4 p-2 border border-2 w-full rounded-lg' />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                        <div className='text-start'>Image URL</div>
                        <input type="text"defaultValue={data?.image} accept="image/*"{...register('image')} placeholder='Image URL' className='my-4 p-2 border border-2 w-full rounded-lg' />
                        <button className='btn btn-success text-white mt-4 w-full' type="submit">
                            <span className='lg:mx-2'>U</span>
                            <span className='lg:mx-2'>P</span>
                            <span className='lg:mx-2'>D</span>
                            <span className='lg:mx-2'>A</span>
                            <span className='lg:mx-2'>T</span>
                            <span className='lg:mx-2'>E</span>
                        </button>
                    </form>
                </div>
            </div>
           

                  <div className=" absolute top-0 right-[5px]">
                    <button
                      type="button"
                      className=" "
                      onClick={closeModal}
                    >
                    <i className="fa-regular fa-circle-xmark text-xl"></i>                    
                    </button>
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
};

export default Card;





