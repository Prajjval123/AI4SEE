import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams()
    console.log(id)
    const [serviceDetails, setServiceDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { image, description, title, features } = serviceDetails
    useEffect(() => {
        fetch('/services.json')
            .then(
                res => res.json()
            )
            .then(data => {
                const findService = data.find(service => service._id === id);
                setServiceDetails(findService)
                setIsLoading(false)
            })
    }, [id])
    if (isLoading) {
        return <div className='animate-spin'>loading</div>
    }
    return (
        <div className='  my-20 p-5 md:p-10 shadow-2xl grid md:grid-cols-2 gap-5'>
            <figure>
                <img src={image} alt={image} className='w-fit h-500' />
            </figure>
            <div className=' flex flex-col justify-center gap-3'>
                <h2 className='text-2xl font-bold '>{title}</h2>
                <h6><span className='font-medium my-4'>Description:</span> {description}</h6>
                <div>
                    <span className='font-medium'>Services:</span>
                    <ul>
                        {features.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;