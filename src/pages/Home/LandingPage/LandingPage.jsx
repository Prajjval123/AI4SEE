import { motion } from 'framer-motion';
import img5 from '../../../assets/AnalyticsImage.jpg';
import img3 from '../../../assets/chatbot1.jpg';
import img1 from '../../../assets/computer-vision.gif';
import img6 from '../../../assets/scalabl-ai.png';
import img4 from '../../../assets/services/analytics.jpg';
import img2 from '../../../assets/time-series-analysis.png';
// import Modal from "../../../components/Modal/Modal";
import Modal from '../../../components/Modals/Modals';
import Banner from "../Banner/Banner";
import Projects from '../Projects/Projects';
import Service from "../Service/Service";
import Teams from '../Teams/Teams';

const LandingPage = () => {
    const listItems = [
        { id: 0, text: "Computer Vision" },
        { id: 1, text: "Time Series Analytics" },
        { id: 2, text: "IOT Integration" },
        { id: 3, text: "NLP LLM Chatbots" },
        { id: 4, text: "End to End Analytics" },
        { id: 5, text: "Big Data Analytics" },
    ];

    const listImages = [
        { img: img1, alt: "Computer Vision" },
        { img: img2, alt: "Time Series Analytics" },
        { img: img6, alt: "IOT Integration" },
        { img: img3, alt: "NLP LLM Chatbots" },
        { img: img4, alt: "End to End Analytics" },
        { img: img5, alt: "Big Data Analytics" }
    ];

    return (
        <div className=''>

            <div id='home' className="bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] flex flex-col lg:gap-4 lg:flex-row justify-evenly items-center font-bold lg:text-xl text-gray-600"
                style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
                {/* <h2 className="border-2 p-2 rounded-2xl shadow-2xl font-bold">Training from 20+ years of Industry Experts</h2>
                <h2 className="border-2 p-2 rounded-2xl shadow-2xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Rs. 20k for Complete Data Science Course</h2> */}
                <h2 className="relative top-6">We make your business grow with</h2>
                {/* <h2 className="relative top-6"></h2> */}
            </div>

            <Banner listItems={listItems} listImages={listImages} />
            <div className='my-container'>
                <Service />
                <Projects />
                <Teams />
            </div>
            {/* Modal component and motion button */}
            <motion.a
                animate={{
                    scale: [1, 1.1, 1], // Scale animation from 1 to 1.1 and back to 1
                }}
                transition={{
                    duration: 2, // Animation duration in seconds
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: 'reverse', // Reverse the animation direction after each repeat
                }}
                href="#my_modal_8"
                className="bg-[#4da6ff] hover:bg-[#4da6ffd4] px-3 py-2 rounded-2xl font-bold text-gray-100 fixed bottom-5 right-5 z-50" >
                Contact Us
            </motion.a>
            <Modal />
        </div>
    );
};

export default LandingPage;