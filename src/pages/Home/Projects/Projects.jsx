import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img2 from '../../../assets/services/analytics.jpg';
import img1 from '../../../assets/services/computer.jpg';
import img3 from '../../../assets/services/time-series.jpg';

const Projects = () => {
    const services = [
        {
            title: 'Ai Classroom Online',
            description: 'Unlock the power of visual data with our cutting-edge computer vision solutions. From image recognition to object tracking, we bring your vision to life.',
            image: img1, 
        },
        {
            title: 'InternNest',
            description: 'Gain valuable insights into your business with our end-to-end analytics services. We analyze data comprehensively to help you make informed decisions.',
            image: img2, 
        },
        {
            title: 'Other Projects',
            description: 'Understand patterns and trends over time with our time series analysis expertise. Make data-driven predictions and optimize your strategies.',
            image: img3, 
        }
    ];
    

    return (
        <section id="projects" className="mb-20  ">
            <SectionTitle heading={'Our Projects'} subHeading={'Explore our most popular dynamic projects'} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                {services.map((classObj) => (
                    <div key={classObj._id} className="text-gray-600 shadow-md rounded-lg bg-gray-100 flex flex-col">
                        <div className="p-4 flex-grow">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.image} alt="class" />
                          <div className="flex gap-4 justify-between">
                          <h2 className="text-lg text-[#538EC8] font-medium title-font">{classObj.title}</h2>
                          <button className="btn btn-xs btn-info "> Live link</button>
                          </div>
                         
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;