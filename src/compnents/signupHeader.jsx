
import { FaSearch } from "react-icons/fa";

const SignupHeader = () => {
  return (
    <div>
     
    <div className="flex justify-between items-center  text-white py-4 px-6">
    <img src="https://s3-alpha-sig.figma.com/img/b257/ae62/d4b7a8d77b4795cda720da373a5b28c9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cOESPHE0krSaIKflpVpjzur1RzRHi~yD5SLQoRJHxMaq9pwsdqDRPUO0i2rdoJNw0LV4uO1MRu9mseY5-RuXsXvLaJQu8v78Tm2SgkTIvAG1Ss9rYCzn4XofsXrEv0VvvJ9DWYlTUxGVC-b~itCGBe7by38Do5VQR6PYLRjZVWwUeAQw0uVVKY8IXhskaX3vogTrhlFTIiVxsCC8SNuB1x3S3hkd2jf~~z71MVctF6hrmYYP88JPtzWCCD2jkCG7WhwiyHAS5UbqM4yBFhQyc9jAFC8aB0X4tdQio781ecczIccryuj0jmGlZDlYfTxs4PLeaq-ooQmG9Pp9oMuMQw__" alt="Logo" className="h-8 mr-4" />
      <div className="flex items-center">

        <div className="flex-grow text-center">
        {/* Navigation links shifted to the center */}
        <a href="/" className="inline-block px-4 py-2 text-white hover:bg-zinc-700 text-3xl">Home</a>
        <a href="/menu" className="inline-block px-4 py-2 text-white hover:bg-zinc-700  text-3xl">Menu</a>
        <a href="/contactus" className="inline-block px-4 py-2 text-white hover:bg-zinc-700  text-3xl">Contact us</a>
        <a href="/blog" className="inline-block px-4 py-2 text-white hover:bg-zinc-700  text-3xl">Blog</a>
      </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 rounded-md placeholder-italic"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}



export default SignupHeader
