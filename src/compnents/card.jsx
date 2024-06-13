import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CARD_COMPONENT = [
  {
    heading: "FLAT",
    subheading: "RS 75 OFF",
    button: "USE CODE USC30",
    text: "ON ORDER ABOVE RS 399",
    image: "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  },
  {
    heading: "FLAT",
    subheading: "Rs 100 OFF",
    button: "USE CODE RTH30",
    text: "ON ORDER ABOVE RS 500",
    image: "https://s3-alpha-sig.figma.com/img/fa03/18c1/5ed6aef59ca1169aaf3dc20940c90c56?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lzWQjkvnwHiugF~cRcA-RWo39PEdAADwcw3JQu616zEa4mo3gEBdl1jMVqjz03xaFpG4PIlDfMEZ~nzwu-oEbeyPrF6NyUiIQu0s3MWGx8WUS26TaMRGqTEpLvlcQUSAunvxo-cVTGBwFm3lWqqjNXX2x0fxmPZKg0vpIV8PR5I6MHQUN5vmgEfsRkXbHsAxMbHyp7rW~PVtZbbfKaKrb8kXODGwffdigynpQm8qwMTECou81BNPedjWs5vPNqFt1e~16OjrPRhgOa9qYSrHMnPyZfXXob4ym5kI4VFZOZT9W8gQVME64cinGqiBXRJIH19aH1lPJ8ABlsDCW1OhXg__"
  },
  {
    heading: "FLAT",
    subheading: "RS 75 OFF",
    button: "USE CODE USC30",
    text: "ON ORDER ABOVE RS 399",
    image: "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  },
  {
    heading: "FLAT",
    subheading: "Rs 100 OFF",
    button: "USE CODE RTH30",
    text: "ON ORDER ABOVE RS 500",
    image: "https://s3-alpha-sig.figma.com/img/fa03/18c1/5ed6aef59ca1169aaf3dc20940c90c56?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lzWQjkvnwHiugF~cRcA-RWo39PEdAADwcw3JQu616zEa4mo3gEBdl1jMVqjz03xaFpG4PIlDfMEZ~nzwu-oEbeyPrF6NyUiIQu0s3MWGx8WUS26TaMRGqTEpLvlcQUSAunvxo-cVTGBwFm3lWqqjNXX2x0fxmPZKg0vpIV8PR5I6MHQUN5vmgEfsRkXbHsAxMbHyp7rW~PVtZbbfKaKrb8kXODGwffdigynpQm8qwMTECou81BNPedjWs5vPNqFt1e~16OjrPRhgOa9qYSrHMnPyZfXXob4ym5kI4VFZOZT9W8gQVME64cinGqiBXRJIH19aH1lPJ8ABlsDCW1OhXg__"
  },
  {
    heading: "FLAT",
    subheading: "RS 75 OFF",
    button: "USE CODE USC30",
    text: "ON ORDER ABOVE RS 399",
    image: "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
  },
  {
    heading: "FLAT",
    subheading: "Rs 100 OFF",
    button: "USE CODE RTH30",
    text: "ON ORDER ABOVE RS 500",
    image: "https://s3-alpha-sig.figma.com/img/fa03/18c1/5ed6aef59ca1169aaf3dc20940c90c56?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lzWQjkvnwHiugF~cRcA-RWo39PEdAADwcw3JQu616zEa4mo3gEBdl1jMVqjz03xaFpG4PIlDfMEZ~nzwu-oEbeyPrF6NyUiIQu0s3MWGx8WUS26TaMRGqTEpLvlcQUSAunvxo-cVTGBwFm3lWqqjNXX2x0fxmPZKg0vpIV8PR5I6MHQUN5vmgEfsRkXbHsAxMbHyp7rW~PVtZbbfKaKrb8kXODGwffdigynpQm8qwMTECou81BNPedjWs5vPNqFt1e~16OjrPRhgOa9qYSrHMnPyZfXXob4ym5kI4VFZOZT9W8gQVME64cinGqiBXRJIH19aH1lPJ8ABlsDCW1OhXg__"
  }
];

const CardComponent = () => {
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
    slidesToShow: 2, // Display 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className= " p-10" style={{background:" #B8A3BA"}}>
        <Slider {...settings} ref={sliderRef}>
          {CARD_COMPONENT.map((data, index) => (
      <div  key={index} className="max-w-6xl mx-auto">
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden flex mx-2">
              <div className="w-2/3 p-8">
                <h1 className="text-2xl font-bold">{data.heading}</h1>
                <h2 className="text-xl font-semibold mt-2" style={{ color: "green" }}>{data.subheading}</h2>
                <p className="text-black-700 mt-4 font-bold">{data.text}</p>
                <button className="mt-4 text-black px-4 py-2 rounded hover:bg-blue-600 border border-black">
                  {data.button}
                </button>
              </div>
              <div className="w-1/3 flex items-center justify-center p-4">
                <img
                  src={data.image}
                  alt="Card Image"
                  className="object-cover h-48 w-48 rounded-full shadow-lg"
                />
              </div>
            </div>

      </div>
      ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
