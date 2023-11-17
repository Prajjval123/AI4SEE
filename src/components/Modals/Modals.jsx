import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFillTelephoneOutboundFill, BsWhatsapp } from "react-icons/bs";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from "sweetalert2";

const Modal = () => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    const [hoveredWhatsapp, setHoveredWhatsapp] = useState(false);
    const whatsappRef = useRef(null);

    const [hoveredCall, setHoveredCall] = useState(false);
    const callRef = useRef(null);

    const onSubmit = data => {
        console.log(data);

        // Send email using EmailJS
        emailjs.send(import.meta.env.VITE_emailjs_service_id, import.meta.env.VITE_emailjs_template_id, data, import.meta.env.VITE_emailjs_public_id)
            .then((response) => {
                console.log('Email sent successfully!', response.text);
                if (response.text == 'OK') {
                    window.my_modal_3.close();
                    reset();
                    Swal.fire(
                        {
                            title: 'Good job!',
                            text: 'Enquiry Send Successfully',
                            icon: 'success',
                            confirmButtonText: 'Continue',
                            confirmButtonColor: '#538EC8'
                        }
                    );
                }
                else {
                    Swal.fire(
                        {
                            title: 'Error!',
                            text: 'Something is wrong.',
                            icon: 'error',
                            confirmButtonText: 'Try again',
                            confirmButtonColor: '#538EC8'
                        }
                    );
                }
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <motion.button
                animate={{
                    scale: [1, 1.1, 1], // Scale animation from 1 to 1.1 and back to 1
                }}
                transition={{
                    duration: 2, // Animation duration in seconds
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: 'reverse', // Reverse the animation direction after each repeat
                }}
                className="z-40 fixed bottom-20 left-5"
                onClick={() => window.open(`https://wa.me/+917996464155`, "_blank")}>
                <div
                    onMouseEnter={() => setHoveredWhatsapp(true)}
                    onMouseLeave={() => setHoveredWhatsapp(false)}
                    className="flex p-3 items-center rounded-full text-white bg-[#25D366]"
                >
                    <BsWhatsapp className="text-2xl" />
                    <div
                        style={{ width: hoveredWhatsapp ? whatsappRef.current?.offsetWidth || 0 : 0 }}
                        className="overflow-x-hidden transition-all duration-300 ease-out">
                        <span ref={whatsappRef} className="px-1.5 whitespace-nowrap">Whatsapp</span>
                    </div>
                </div>
            </motion.button>

            {/* call button  */}
            <motion.button
                animate={{
                    scale: [1, 1.1, 1], // Scale animation from 1 to 1.1 and back to 1
                }}
                transition={{
                    duration: 2, // Animation duration in seconds
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: 'reverse', // Reverse the animation direction after each repeat
                }}
                className="z-40 fixed bottom-5 left-5"
                onClick={() => window.open('tel:+917996464155', "_blank")}>
                <div
                    onMouseEnter={() => setHoveredCall(true)}
                    onMouseLeave={() => setHoveredCall(false)}
                    className="flex p-3 items-center rounded-full text-white bg-[#c691f8]"
                >
                    <BsFillTelephoneOutboundFill className="text-2xl" />
                    <div
                        style={{ width: hoveredCall ? callRef.current?.offsetWidth || 0 : 0 }}
                        className="overflow-x-hidden transition-all duration-300 ease-out">
                        <span ref={callRef} className="px-1.5 whitespace-nowrap">Call Us</span>
                    </div>
                </div>
            </motion.button>

            <div id="my_modal_8" className="modal">

                <form onSubmit={handleSubmit(onSubmit)} className="modal-box space-y-4 bg-gray-100">
               
                    <div className="modal-action">
                    <a  href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=> reset()} >✕</a>

                    </div>
                    <h1 className="text-center text-2xl font-semibold">Quick Enquiry</h1>

                    {/* row 1  */}
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Enter Your Name*"
                                type="text"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Enter Your Email*"
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>

                    {/* row 2  */}
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Subject to enquiry*"
                                type="text"
                                {...register("subject", { required: true })}
                            />
                        </div>
                        <div className="w-1/2">
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <PhoneInput
                                        {...field}
                                        country={'in'}
                                        autoFormat={false}
                                        placeholder="Phone No.*"
                                        inputClass="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        containerClass="w-full rounded-lg border-gray-200"
                                        dropdownClass="w-full rounded-lg border-gray-200"
                                        inputStyle={{ height: "100%", width: "100%" }}
                                    />
                                )}
                            />
                        </div>
                    </div>


                    {/* row 3  */}
                    <div className="">
                        <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Your message*..."
                            rows="5"
                            {...register("message", { required: true })}
                        ></textarea>

                    </div>

                    <div className="text-xs text-error">
                        {(errors.message?.type === 'required' || errors.name?.type === 'required' || errors.subject?.type === 'required' || errors.email?.type === 'required') && <p>*Please Fill Up The Required Fields</p>}
                    </div>
                    <div className="mt-4">
                        <button className=" w-full cursor-pointer rounded-md bg-[#538EC8] hover:bg-[#4c77a1] text-gray-100 py-3 px-5 text-base btn border-0" type="submit">send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modal;