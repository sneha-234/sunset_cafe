

const IMAGE_DATA = [
  {
    image: "https://s3-alpha-sig.figma.com/img/7b08/79ca/10050046329d669946c4117d4e817a1c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7il15Lo7SC0l2B~CoAkDZRg~dA69yJNe6PXV6KdUXTW0dT4Gnao0RtKHoIikfdLhIp4ySEwCk4E7dyCiVrp6HrzdwuqdBHjZdrBC6hQJpKmJtEJieiQ0FkCczKmU1Bra3sD6ZKFZIPC2BALIUhLABATt-ktpd8KT3I1eXnZ0HvuS1Uh5XYT93vR5rS5RSXbTBSq2tyczdH48RPjN97cBSHtp9Zt6KayLoZSeiDJrCCDz2VwJHyj8ayxdkzAYTEVq6E48sGnIpP9IsmmilvTiClucMcWqbBVdeeMbL86AOILizZH6T2fuIQWv1KQr9y1AxbtoRi-lYVPVIN2p05xA__",
    button: " HOT BEVERAGES ",
    products: [
      { name: "Espresso", subheading: "A single shot of concentrated coffee", price: "Rs 120" },
      { name: "Cappuccino", subheading: "Equal parts espresso steamed milk, and foam", price: "RS 250" },
      { name: "Americano", subheading: "Espresso shots with hot water", price: "Rs 158" }
    ]
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/b827/f2fe/a2fdd489354b1f47a534fad2f8650ab7?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzAcPaQ24xhbBrMS7xyZScu37WHZI0OixwRfIE3pU5BTTqu5btxDK8WrH3j~3iC0y0Bj2CgnXP1hclQqNm6oJ9Y~UEjiWE-SrjeR8Vr5xBFRYLQLaA7QHdAwq~8yqKrymDfmj5bA7Myt7dRMZAY8yQFpAXUXAegGCD9PNpPgLiuJdu2MzQLIctMTfyWzo6BvpIS3JVovdT3vBonBVqq9VcRkZMk78XojC4Dbrp5we6DSlHlWcXbmFE40HgS6~Og4ly7f3Lxtj2pyHyP2CTWx2Y~TsJ2r0ZjQiiZjreg9ePU7Iv~1IYoiGak3sji5XsNksWEbY-vkb4gkOCQwRpvWiw__",
    button: "COLD BEVERAGES",
    products: [
      { name: "Iced Coffee", subheading: "a cold version of your favourite coffee", price: "Rs 140" },
      { name: "Iced Latte", subheading: "a chilled coffee beverage that's made by mixing espresso with chilled milk, simple syrup, and ice cubes", price: "Rs 130" },
      { name: "Frappuccino", subheading: " a line of blended iced coffee drinks", price: "Rs 120" },
      { name: "Affogato", subheading: "a traditional Italian coffee-dessert where hot espresso is poured over gelato or ice cream, with the option of adding a splash of liquor", price: "Rs 110" },
      { name: "Ice Latte", subheading: "a chilled coffee beverage that's made by mixing espresso with chilled milk, simple syrup, and ice cubes", price: "Rs 160" }
    ]
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/1a04/96a6/816d499d9bf7104bbb5fec5159acdb1f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llKLiDN59NkFasNStiCf7hYY586rV9ejeK~5vGxw95BHKu9z53XEpYhXXNTNAJcp371rrHEiAUU6-Jfohi3HeoXjT~SIYlDd0gOkGNlA5xRZr-YzTIKoBHYEJ~Bo-YAEjlaTqwJccyVXxwY-RmNwqHfkjB6mQk4lWJdrOQ~KcWxRo~jBp7pVUJbp~kHm1x~64jmQqfcEMlNspgYLBD-xuF-hT4eg37NBafdKBc4L0Rlr9kCFFP6sgLVRViK6nbVU0pySDN2WpOiDaMpLb3xYraHELfbWcs8qscITDjYunZLxvCodIU2X0XBzEK0OjqbMq~WpgvnwJsdq2tnPEuHNUQ__",
    button: "SPECIALTY DRINKS",
    products: [
      { name: "Matcha Latte", subheading: "consists of matcha powder (made from the finely-ground leaves of certain green tea plants), water, and milk", price: "Rs 148" },
      { name: "Turmic Latte", subheading: "Mix almond milk and coconut oil in a small saucepan and simmer over the stove until warmed through, about 6-8 minutes.", price: "Rs 160" },
      { name: "Caramel Tea", subheading: "black, herbal or rooibos tea infused with caramel flavoring", price: "Rs 160" },
      { name: "Green Tea", subheading: "a high antioxidant content ", price: "Rs 120" },
      { name: "Herbal Infusions", subheading: " made from mixtures of dried leaves, stems, grasses, barks, fruits and flowers that give them their taste and provide the benefits of herbal teas", price: "Rs 120" }
    ]
  }
];

const MenuTop = () => {
  return (
    <div className="text-left p-8"> {/* Changed 'text-center' to 'text-left' */}
      <div className="flex items-center justify-center mb-4">
        <hr className="border-t-2 border-orange w-[20vh] h-0" />
        <h1 className="text-3xl font-bold px-4" style={{color:"#D16E43"}}> S  U  N  S  E  T</h1>
        <hr className="border-t-2 border-orange w-[20vh] h-0" />
      </div>
      <h2 className="text-5xl text-white mb-8 text-center" style={{ fontFamily: 'Inspiration' }}>CAFE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {IMAGE_DATA.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 mb-4">
              <img 
                src={data.image} 
                alt={`Image ${index + 1}`} 
                className="rounded-full w-full h-full object-cover" 
              />
            </div>
            <button className=" text-white py-2 px-4 rounded-full font-bold text-3xl" style={{background:"#D16E43"}}>
              {data.button}
            </button>
            <div className="mt-4 border-t border-gray-300 w-full"></div>
            {data.products.map((product, pIndex) => (
              <div key={pIndex} className="flex items-start w-full py-4">
                <div className="w-1/2">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-white">{product.subheading}</p>
                </div>
                <div className="w-1/2 flex items-start justify-center">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700">+</button>
                  <p className="text-white ml-4">{product.price}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-300 w-full mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTop;
