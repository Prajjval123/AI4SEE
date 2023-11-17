import { motion } from 'framer-motion';
import img5 from '../../../assets/AnalyticsImage.jpg';
import img4 from '../../../assets/IoT-Image.jpg';
import img3 from '../../../assets/computer-vision.gif';
import img1 from '../../../assets/scalabl-ai.png';
import img2 from '../../../assets/time-series-analysis.png';
// import Modal from "../../../components/Modal/Modal";
import Modal from '../../../components/Modals/Modals';
import Banner from "../Banner/Banner";
import Projects from '../Projects/Projects';
import Service from "../Service/Service";

const LandingPage = () => {
    const listItems = [
        { id: 0, text: "Computer Vision" },
        { id: 1, text: "Statistics and Algebra" },
        { id: 2, text: "Machine Learning" },
        { id: 3, text: "NLP and Computer Vision" },
        { id: 4, text: "Sensor Data Analytics" }
    ];

    const listImages = [
        { img: img1, alt: "Python Programming" },
        { img: img2, alt: "Statistics and Algebra" },
        { img: img3, alt: "Machine and Deep Learning" },
        { img: img4, alt: "NLP and Computer Vision" },
        { img: img5, alt: "Big Data and IoT" }
    ];

    return (
        <>
            {/* <Helmet>
                <title>Home | AI-classroom</title>
            </Helmet> */}

            {/* banner heading  */}
            <div className="bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] flex flex-col lg:gap-4 lg:flex-row justify-evenly items-center font-bold lg:text-xl text-gray-600"
                style={{ lineHeight: "1.5", letterSpacing: "1px" }}>
                {/* <h2 className="border-2 p-2 rounded-2xl shadow-2xl font-bold">Training from 20+ years of Industry Experts</h2>
                <h2 className="border-2 p-2 rounded-2xl shadow-2xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Rs. 20k for Complete Data Science Course</h2> */}
                <h2 className="relative top-6">We make your business grow with</h2>
                {/* <h2 className="relative top-6"></h2> */}
            </div>

            <Banner listItems={listItems} listImages={listImages} />

            <Service />
            <Projects />
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
        </>
    );
};

export default LandingPage;