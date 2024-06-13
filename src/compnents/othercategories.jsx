

const OtherCategories = () => {
  const mainImages = [
    {
      src: "https://s3-alpha-sig.figma.com/img/5867/076d/397dec408c87a116fc4568fda33360d4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7h7oqCdxq7M3eLJ-soY7j1r~mZ4GXN7PCNlNg6lqcaZ3plPq0k89TXySKWnGuzCvUwCuBA-QY4KSuUsXBL4xVgETRcmOuJl3JPYcxvEbz1W59z3oZ33IYuFFyiaji1Skvd9s9ka2QwUgp69nWZliGXazRv5fNIHzhV3EaxAaMjlN3mBX-OEHrvv9QcnjUwQ2resM1F3D8zaIW0ECSPG7SypY2ofoLLN16TB9rR~uvcDlQ8DHrF7GjlTJqvp4oQAFDxsJyZwukQhY9XgJgHEpv1163EsEtdSl5tqAewWyXDVU6t3du~DzH6shlPZjnxAHtakiiExxpCMUeUmHIs9Nw__",
      name: "SALADS",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/deef/d89c/17c526e4b318ebb8a0680527ec55ffda?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzYQclDzJdbvVPiFXBIQqmIsi5wtVvvdCu04RjbHgtmA~GfBCnhBLFAJSYgVVPtKu8ePS~v1TuoBhTIy0mphlD0xyFBK97OgOY4g193oktUmN1JnDgqZYjr4mAWWGrmOT5l8Svu6RMR6wV2Egtp-e5cGmz~WYDw4vf-9XqXaeRPwV~aJtg60vLJCqZu-~mb-YTTyLGMYSNKmXS2E8EzGfoOLjQdXy6y9vycKwBatKUSGV5TNL6mrpxXx4SXxrVipEeXNPWCF5b-6vwJPdakwzEJaA8QxHi0Hbggf~a6LBc~E-KZQK3Iy2mYSZE6Fh78OM3d5vowpjWFZalyQ5sNdxQ__",
      name: "DESSERTS / ICE-CREAM",
    },
  ];

  const sideImage = {
    src: "https://s3-alpha-sig.figma.com/img/ae59/b61a/60abb8b6b956729afc7bc325a1cf5b8d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Un2vCMf99iWZ~mRYq149hlv34OB1TmdvHYpu2AWXj7t6YUAc8R5PsaV~Neqv-L0~CpRFQRwoBpHQoN-idcyijALn9zmbcoT~-L3zNN65gk-3N3o1AU-Pw5NTND6YgUhCpAtU4WbgdXtsEhkAWfs~TLDqWsxuCl2DCWJCthg0VKfj6qkC2oiVYrThESwW9aJUSxkMiqYJ0IvAGsN~L0u4l-599WEtv-tgTneBtRsfa4OZufmppGo62kdo0u464873rSx4GXssOF1vIOimEl24Gs2gvLavgVkoqJYvOxUOsHDOgZ4ZuisRxwbqTk28-dnL6sDSikcy1tmxx0WSsBQYJA__",
    name: "BURGER & SANDWICHES",
  };

  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-t border-gray-300 mx-2" />
          <h2 className="text-3xl font-bold px-4  text-white py-2"style={{background:"#D16E43"}} >OTHER CATEGORIES</h2>
          <hr className="flex-grow border-t border-gray-300 mx-2" />
        </div>
        <div className="flex justify-center items-center mb-8 space-x-4">
          <div className="w-1/6 text-center">
            <img src={sideImage.src} alt={sideImage.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <div className="text-white font-bold text-2xl">{sideImage.name}</div>
          </div>
          <div className="w-2/3  h-320 flex justify-center items-center space-x-4">
            {mainImages.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.src} alt={image.name} className="w-full h-90 object-cover rounded-lg mb-2" />
                <div className="text-white font-bold text-2xl">{image.name}</div>
              </div>
            ))}
          </div>
          <div className="w-1/6 text-center">
            <img src={sideImage.src} alt={sideImage.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <div className="text-white font-bold text-2xl">{sideImage.name}</div>
          </div>
        </div>
        <a href="#" className="inline-block text-white px-7 py-2 font-bold rounded-lg" style={{background:" #CB5F5F"}}>EXPLORE</a>
      </div>
    </div>
  );
};

export default OtherCategories;
