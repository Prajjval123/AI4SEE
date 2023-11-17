import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img4 from '../../../assets/services/ai.jpg';
import img2 from '../../../assets/services/analytics.jpg';
import img1 from '../../../assets/services/computer.jpg';
import img5 from '../../../assets/services/iot.jpg';
import img3 from '../../../assets/services/time-series.jpg';
import img6 from '../../../assets/services/web-app.jpg';

const Service = () => {
    const services = [
        {
            _id: "1",
            title: 'Computer Vision',
            description: 'Unlock the power of visual data with our cutting-edge computer vision solutions. From image recognition to object tracking, we bring your vision to life.',
            image: img1, // Replace with the actual image URL
        },
        {
            _id: "2",
            title: 'End to End Analytics',
            description: 'Gain valuable insights into your business with our end-to-end analytics services. We analyze data comprehensively to help you make informed decisions.',
            image: img2, // Replace with the actual image URL
        },
        {
            _id: "3",
            title: 'Time Series Analysis',
            description: 'Understand patterns and trends over time with our time series analysis expertise. Make data-driven predictions and optimize your strategies.',
            image: img3, // Replace with the actual image URL
        },
        {
            _id: "4",
            title: 'Scalable AI',
            description: 'Empower your business with scalable artificial intelligence solutions. Our AI models adapt and grow with your business needs, ensuring long-term success.',
            image: img4, // Replace with the actual image URL
        },
        {
            _id: "5",
            title: 'IoT Integration',
            description: 'Connect and optimize your devices with our IoT integration services. Harness the potential of the Internet of Things to enhance efficiency and productivity.',
            image: img5, // Replace with the actual image URL
        },
        {
            _id: "6",
            title: 'Mobile and Web Application Development',
            description: 'Transform your ideas into reality with our expert mobile and web application development services. We create seamless and user-friendly digital experiences.',
            image: img6, // Replace with the actual image URL
        },
    ];


    return (
        <section className="mb-20">
            <SectionTitle heading={'Our Services'} subHeading={'Explore our most popular programming language courses'} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-16 lg:mx-24">
                {services.map((classObj) => (
                    <div key={classObj._id} className="text-gray-600 shadow-md rounded-lg bg-gray-100 flex flex-col">
                        <div className="p-4 flex-grow">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.image} alt="class" />
                            <h2 className="text-lg text-[#538EC8] font-medium title-font">{classObj.title}</h2>
                            <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">{classObj.description}</h3>
                        </div>
                        <div className="flex justify-between p-4">
                            <button className="btn btn-xs btn-info "> Details</button>

                        </div>
                    </div>
                ))}
            </div>

       
        </section>
    );
};

export default Service;