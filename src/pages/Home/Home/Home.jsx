import React from 'react';
import Banner from '../Banner/Banner';
import ContactSection from '../Contact/Contact';
import ServiceSection from '../Service/Service';

const Home = () => {
    return (
        <div>
           <Banner/>
           <ServiceSection/>
           <ContactSection/>
        </div>
    );
};

export default Home;