import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { useEffect, useState } from "react";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(
                res => res.json()
            )
            .then(data=> {
                setServices(data)
            })
    }, [])

    return (
        <section  id='services' className="mb-20">
            <SectionTitle heading={'Our Services'} subHeading={'Explore our most popular programming language courses'} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                {services.map((classObj) => (
                    <div key={classObj._id} className="text-gray-600 shadow-md rounded-lg bg-gray-100 flex flex-col">
                        <div className="p-4 flex-grow">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={classObj.image} alt="class" />
                            <h2 className="text-lg text-[#538EC8] font-medium title-font">{classObj.title}</h2>
                            <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">{classObj.description}</h3>
                        </div>
                        <div className="flex justify-between p-4">
                            <Link to={`/service/${classObj._id}`} className="btn btn-xs btn-info "> Details</Link>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Service;