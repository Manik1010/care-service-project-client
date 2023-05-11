import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4'>
            <div className=''>
                <div className='text-center'>
                    <h3 className='text-2xl text-orange-500 font-bold'>Our Services</h3>
                    <h2 className='text-5xl font-bold'> Our Services Area</h2>
                    <p>the majority have suffered alteration in some form,
                        by injected humour, or randomised <br />
                        words which do not look even slightly believable. </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;