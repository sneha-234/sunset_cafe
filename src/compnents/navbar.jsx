import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css';





const CARD_DATA =[
{
  image: "https://s3-alpha-sig.figma.com/img/4e77/c1e1/7ebc0f3fcd0370fb611351f8e0b3e70b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l08-q1F5GiTiwf6xPtkNO2aAnUfpt9JyIxGLIu2dS~BIjPB8oaQhY-8OVxVyJZYPqHAA0SRdDvr4NMJePgPmQAKTkxIPlw0L4jEirG1r5PIHTO9NfmNLHv3Bq9ECiX9FB74Ao8XABtbLy50gkMFDBj~4IrAUbFicEj9gkNYsu5m71brU7lknrLmFT4W9umyfmLmAirshqtgWDkXdLUV5-mmY2GxX4Sq2E3LaXwpLL-PYy9Ww6G5-ezSdu~Oi1n5qADVFRxGfArp061iIZA~7C9-b3JEc9PqBFM4u44rPQs34Yma-IL6WRwkaV6cWJ4WP1RNH7Z-JE7VdqDpEvxq2qQ__",
  title: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
  subtitle:"Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai."
},
{
  image: "https://s3-alpha-sig.figma.com/img/0e59/c503/32878087cf16c51021ceecf79884996c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkXYDdzGmdvthPR~e~2rK35cyX2N6ubnGKSYXioUSK2lnXvw~T5DKqob3-b2zTuXbp8Nh-jrj~abRdg-zSHq7eYUhl-ySCTQFJpGbaW0X2OQPxKmyh9-AVc6e5KZrM8BbhzCqOin6luOmvCAzWbW-VrwONOxylI6ad27OW1XACqBW1cExPYrb8lv-CM~Ze1Xm9CrCFuFURXGs11prFujv9tJaYh0owsk8JQZnjXAhIx16VbcvwAujMRWKcbngunu3Vhqr~j7N-LeyqKivPqNrEPnJYsNY8wyO79wYycRH9Mq2H0n1OINntMIYNdKYIF~hI~PBKEhogiArWMGPIAvRg__",
  title:"Sizzling Tandoori Platter: A Feast for the Senses",
  subtitle:"Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney"
},
{
  image: "https://s3-alpha-sig.figma.com/img/c381/1cec/9b11d127e08ebdf15b912071c2c23651?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Quoi4sEm24cenApjFi-B-SOqUCR1Ynyp~uOzpMjHNfBc846ANXxe6z6vda6MlXXCouDX5U6r-jhbGwehZxOTewB27UXXdnZxcdMBy-Y1gxUoL~XM4m2gNwB6bRziECSULrLU8vQzntOm2H~1uKuFvkqWQch8~QWgpGQA37pHQTW4GAJphd9gRa9aDJZq8RvNxJs~0CBGZtM5UKa2-OOKn8JYuGbB8h-l1-L1i5mnZVP6cu-lq6y--ktSfi-O0TM7l25gAiCfEcAuzyL98aJ9Sve~PnAB4i8lrAQO76NeiCc4pR0xWwCiY3akv1MlsXzvxo4DO~pqe7K666loR3EQDg__",
  title :"Mango Curry Chicken",
  subtitle:"Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes."
},

{
  image: "https://s3-alpha-sig.figma.com/img/4e77/c1e1/7ebc0f3fcd0370fb611351f8e0b3e70b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l08-q1F5GiTiwf6xPtkNO2aAnUfpt9JyIxGLIu2dS~BIjPB8oaQhY-8OVxVyJZYPqHAA0SRdDvr4NMJePgPmQAKTkxIPlw0L4jEirG1r5PIHTO9NfmNLHv3Bq9ECiX9FB74Ao8XABtbLy50gkMFDBj~4IrAUbFicEj9gkNYsu5m71brU7lknrLmFT4W9umyfmLmAirshqtgWDkXdLUV5-mmY2GxX4Sq2E3LaXwpLL-PYy9Ww6G5-ezSdu~Oi1n5qADVFRxGfArp061iIZA~7C9-b3JEc9PqBFM4u44rPQs34Yma-IL6WRwkaV6cWJ4WP1RNH7Z-JE7VdqDpEvxq2qQ__",
  title: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
  subtitle:"Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai."

},

{
  image: "https://s3-alpha-sig.figma.com/img/c381/1cec/9b11d127e08ebdf15b912071c2c23651?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Quoi4sEm24cenApjFi-B-SOqUCR1Ynyp~uOzpMjHNfBc846ANXxe6z6vda6MlXXCouDX5U6r-jhbGwehZxOTewB27UXXdnZxcdMBy-Y1gxUoL~XM4m2gNwB6bRziECSULrLU8vQzntOm2H~1uKuFvkqWQch8~QWgpGQA37pHQTW4GAJphd9gRa9aDJZq8RvNxJs~0CBGZtM5UKa2-OOKn8JYuGbB8h-l1-L1i5mnZVP6cu-lq6y--ktSfi-O0TM7l25gAiCfEcAuzyL98aJ9Sve~PnAB4i8lrAQO76NeiCc4pR0xWwCiY3akv1MlsXzvxo4DO~pqe7K666loR3EQDg__",
  title :"Mango Curry Chicken",
  subtitle:"Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes."
},
{
  image: "https://s3-alpha-sig.figma.com/img/0e59/c503/32878087cf16c51021ceecf79884996c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkXYDdzGmdvthPR~e~2rK35cyX2N6ubnGKSYXioUSK2lnXvw~T5DKqob3-b2zTuXbp8Nh-jrj~abRdg-zSHq7eYUhl-ySCTQFJpGbaW0X2OQPxKmyh9-AVc6e5KZrM8BbhzCqOin6luOmvCAzWbW-VrwONOxylI6ad27OW1XACqBW1cExPYrb8lv-CM~Ze1Xm9CrCFuFURXGs11prFujv9tJaYh0owsk8JQZnjXAhIx16VbcvwAujMRWKcbngunu3Vhqr~j7N-LeyqKivPqNrEPnJYsNY8wyO79wYycRH9Mq2H0n1OINntMIYNdKYIF~hI~PBKEhogiArWMGPIAvRg__",
  title:"Sizzling Tandoori Platter: A Feast for the Senses",
  subtitle:"Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney"
},



]

function Navbar() {

  const [currentIndex, setCurrentIndex] = useState(0); // Set initial index to 0 (for the first image)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CARD_DATA.length - 3 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CARD_DATA.length);
  };


  return (
    <div className="relative hero h-screen mt-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/5283/0a58/0a565334ca788790865c262c9b0481f8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyW2sAI9YM6Xqf1-23af4qFAw5LmZzhbf2KIg9O302KpXTvLrpX7agQ1vTEwh9yIijZJk3YRlLmoCkHsm1UoZyk4vUus8deZB5cVONZS3ZxSdQf1Cta5AdmSQyyB4pGKbnDoLhsXuiVQcbArPPOVNotrIVK5b7I8pLOusjJbaUWHv0hjHOTuzq337GT0fZFEaJ4xb2LlSNFzl3-BzusxfYkLVdSpcj5hCUOp8SswfgS0sNyzBTUfvGfoogxZV9dQzIdXFcew5pDejsAPb~3tncf6J0vPkca9l72tDkjq7Z~Q0hT12ap6FSIQWooCgUERzbXn1huRvr39X10XYT8-Iw__')" }}>
      <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-5 bg-black bg-opacity-50">
        <img src="https://s3-alpha-sig.figma.com/img/b257/ae62/d4b7a8d77b4795cda720da373a5b28c9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cOESPHE0krSaIKflpVpjzur1RzRHi~yD5SLQoRJHxMaq9pwsdqDRPUO0i2rdoJNw0LV4uO1MRu9mseY5-RuXsXvLaJQu8v78Tm2SgkTIvAG1Ss9rYCzn4XofsXrEv0VvvJ9DWYlTUxGVC-b~itCGBe7by38Do5VQR6PYLRjZVWwUeAQw0uVVKY8IXhskaX3vogTrhlFTIiVxsCC8SNuB1x3S3hkd2jf~~z71MVctF6hrmYYP88JPtzWCCD2jkCG7WhwiyHAS5UbqM4yBFhQyc9jAFC8aB0X4tdQio781ecczIccryuj0jmGlZDlYfTxs4PLeaq-ooQmG9Pp9oMuMQw__" alt="Logo" className="h-12" />
        <div className="flex space-x-8 text-white text-lg">
        <NavLink exact to="/" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Home</NavLink>
        <NavLink to="/menu" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Menu</NavLink>
        <NavLink to="/contactus" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Contact Us</NavLink>
        <NavLink to="/blog" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Blog</NavLink>
        <NavLink to="/signIn" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Sign In</NavLink>
        <NavLink to="/login" className="text-white text-lg hover:text-yellow-400" activeClassName="border-b-2 border-yellow-400">Login</NavLink>
       
        <NavLink to="/cart" className="text-white text-lg hover:text-yellow-400 flex items-center" activeClassName="border-b-2 border-yellow-400">
            My Cart
            <FaShoppingCart className="ml-2" size={24} />
          </NavLink>
        </div>
      </nav>
      <div className="flex-grow flex flex-col items-start justify-center text-left text-white px-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#D16E43' }}>WELCOME</h1>
          <p className="text-lg font-bold">
            Discover Culinary Elegance at Café Sunset:
            <br />
            Where Every Sip and Bite Unveils
            <br/>
            a Symphony of Flavors and Moments.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#D16E43' }}>Gateway to Serenity, <br/>Culinary Delights,</h1>
          <p className="text-lg font-bold">
            Step into a World Where Ambiance, Flavor, and
            <br/>Warmth Converge—A Haven Where Every Visit
            <br/>Feels Like Coming Home.
          </p>
        </div>
        <button className="bg-none border border-white text-white font-bold py-2 px-4 rounded mt-9">
          Order now
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-center">
        {/* Slider buttons and card container */}
        <div className="flex items-center">
          <button onClick={handlePrevClick} className="hover:bg-gray-400 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l">
            <FaChevronLeft />
          </button>
          <div className="flex flex-wrap gap-8 justify-center">
            {CARD_DATA.slice(currentIndex, currentIndex + 3).map((data, index) => (
              <div key={index} className="w-64 bg-white rounded-xl shadow-md overflow-hidden">
                <img className="h-40 w-full object-cover" src={data.image} alt="Man looking at item at a store" />
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm font-semibold" style={{ color: '#D16E43' }}>{data.title}</div>
                  <p className="mt-1 text-gray-500">{data.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNextClick} className="hover:bg-gray-400 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;