import  { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TEXT_DATA = [
  {
    text: "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot"
  },
  {
    text: "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot"
  }
];

const Subscribe = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); 
    }
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/bcf9/baaf/e450e5c5e86aa12a5eb0ca5c732e06b8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWFmnuK~EzmG7FhlBYnyBOrR0NOAFhG8mMc-YQ0s8HEInFwHWTgkIks4ojFamEXbrquxEyf9ttnLyCfYIxPns5UrAN6-528E94-YrURw0hwLJ4ORWth2Wjcgh-~jaZsRxhj2cyVceuWsjWo1zjBeCL7-whSdterv~bI~X4zr5OIwhWqFCZEOfmksPAtAbTL22AB9Y8CvkNhONZXdnT7jDzNeXvLlTE6TCF4Qw3yz2ahYfNQcV2MCw3V3e75EbY~0TrccVPZb0GlUKLuRPulOcMdsHWWudQld7BNpIGM5UpuXnug2GxjUU~ldW0FE5LpRwxPCOqepEA0WFSiiqgPJAA__')" }}>
      <div className="absolute top-0 left-0 w-full bg-opacity-70 bg-black text-white py-6 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">Motivation: Being Hard Work</h1>
          <div className="bg-gray-500 text-white p-4 rounded-md mt-4 w-full max-w-md">
            <Slider {...settings} ref={sliderRef}>
              {TEXT_DATA.map((data, index) => (
                <div key={index}>
                  <p>{data.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-start py-10 text-white px-10">
        <h1 className="text-4xl font-bold mb-2">Subscribe To Newsletter</h1>
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#BBA6A6" }}>and Get -20% off</h1>
        <p className="max-w-md mb-6 text-start">Your Gateway to Serenity, Culinary Delights, and Unforgettable Moments.</p>
        <form className="flex max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-2 rounded-l-md border border-gray-300"
          />
          <button
            type="submit"
            className=" text-white p-2 rounded-r-md" style={{background:"#BBA6A6"}}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

  );
};

export default Subscribe;
