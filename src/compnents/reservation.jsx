

const ReservationForm = () => {
  return (
    <div className="p-8 w-full ml-0  overflow-hidden flex mx-2"style={{background: "#0F172B"}}>
      
      <div className="w-1/3 flex items-center justify-center p-4">
        <img
        src="https://s3-alpha-sig.figma.com/img/99b0/662e/5478ebb19b3f8e2fdb216c09cabd52df?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHTNTy4SFhc5fpdY-0BwO7~Is57vjVPYs-pFsunUBD6zLU-TtuRxXia-qW-1YmjD7IWlM0GLJ3fgYOSUTlu9AbK08cGZ5cqJAwgrfeJ6GtUOx2Uqm88LJm4~VOHv~U3EMiWg7v~yIv~kkgcTcLFUX~P-b2PrLxDubFgcRlAZyAIS1Pk5EFEw7X-Mk9QdUTcRLzbdCDTbr7tdzIJ3zWqqMVBc6qfOvto0S3ib6nxiuXccs7QkrVyQMJ6TB4ThLVfFqOPhj3D5aNhZazEP6beI7wRp~Usg5VqdBarGOeiETIplcOFGihEzUEJDVifKDdMbW6WxMYJB-GU6NBwBxlTT6w__"
          alt="Restaurant"
          className="object-cover h-64 w-64 rounded-lg shadow-lg"
          style={{height:"500px" , width:"500px"}}
        />
      </div>

      {/* Right side: Heading, Subtitle, and Form */}
      <div className="w-2/3 p-4">
        <h1 className="text-3xl font-bold text-white" style={{color: "#FFAB08"}}>RESERVATION </h1>
        <h2 className="text-xl font-semibold mt-2 text-white">Book a table  Online!</h2>
        <form className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="bookDate">Book a Table</label>
            <input 
              type="date"
              id="bookDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="people">Number of People</label>
            <input 
              type="number"
              id="people"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter number of people"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="request">Special Request</label>
            <textarea 
              id="request"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter any special request"
            />
          </div>
          <div className="col-span-2">
            <button 
              type="submit"
              className="bg-white  hover:bg-gray-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style= {{background:"#FFAB08"}}>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
