import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Teams.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Teams = () => {
    const teams = [
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1701315838~exp=1701316438~hmac=77085c35b28cebf5c8df866400fa95a5a7bdb129986410c43dac9380cef37ad4',
            name: 'John Doe'
        },
    ]
    return (
        <section className='mb-20 teams  relative'>
            <SectionTitle heading={'Our Teams'} subHeading={'Meet with our team members'} />
            <div className="">
                <Swiper
                    // slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={{
                        576: {
                          // width: 576,
                          slidesPerView: 1,
                        },
                        768: {
                          // width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          // width: 768,
                          slidesPerView: 4,
                        }
                      }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {teams.map((member) => (
                        <SwiperSlide key={member.name} >
                            <div className="text-gray-600 shadow-md rounded-lg bg-gray-100 flex flex-col mb-40">
                                <div className="p-4 flex-grow">
                                    <img className="h-52 rounded w-full object-cover object-center mb-6" src={member.img} alt="class" />
                                    <h2 className="text-lg text-[#538EC8] font-medium title-font">{member.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    );
};

export default Teams;