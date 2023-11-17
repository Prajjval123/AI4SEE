
import React from 'react';
const ContactSection = () => {
    const position = [12.9922, 77.7014]; // Replace with the coordinates of your location

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message) 
        
        // Handle the form submission logic here
    };

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col items-center justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8034156133385!2d77.70588687392409!3d12.984421914599372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119ad151d04d%3A0xdb0f92f620e4c210!2sFamilies%20Supermarket!5e0!3m2!1sen!2sbd!4v1699839116646!5m2!1sen!2sbd" className='h-[400px] w-[500px]' loading="lazy"></iframe>
                        <p className='mt-5'>AI4SEE PVT. LTD., (Near Families Supermarket Hoodi), NCPR Industrial Layout, Banglore, Karnataka 560048</p>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit} className="bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                                   Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                                  Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"

                                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                                   Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"

                                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
