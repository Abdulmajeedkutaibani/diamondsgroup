import React from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

// testimonials data
import { testimonials } from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const TestiSlider = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en';

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const {
            authorImg,
            authorText,
            authorName,
            authorPosition,
            authorPhone,
          } = item;
          return (
            <SwiperSlide key={index} className=''>
              <div
                className={`text-center lg:text-left pb-8 flex flex-col lg:items-start items-center lg:flex-row gap-12 lg:gap-32 wrap `}
              >
                <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                  <img className='rounded-2xl  w-full' src={authorImg} alt='' />
                </div>
                <div
                  className={`flex flex-col max-w-3xl ${
                    currentLanguageCode === 'ar' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className='mb-12'>
                    <p className='text-2xl text-accent '>{t(authorName)}</p>
                    <p className=' text-base font-bold '>{t(authorPosition)}</p>
                  </div>
                  <h5 className='font-body md:text-xl mb-8 italic font-normal'>
                    {authorText}
                  </h5>
                  <h5 className='font-body md:text-xl mb-8 italic font-normal'>
                    {authorPhone}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
