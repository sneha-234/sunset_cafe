import { FaSearch } from "react-icons/fa"

const MenuHeader = () => {
  return (
    <div>
   
    <nav className="flex items-center justify-between p-4">
      <div className="flex-shrink-0">
        <img src="https://s3-alpha-sig.figma.com/img/b257/ae62/d4b7a8d77b4795cda720da373a5b28c9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cOESPHE0krSaIKflpVpjzur1RzRHi~yD5SLQoRJHxMaq9pwsdqDRPUO0i2rdoJNw0LV4uO1MRu9mseY5-RuXsXvLaJQu8v78Tm2SgkTIvAG1Ss9rYCzn4XofsXrEv0VvvJ9DWYlTUxGVC-b~itCGBe7by38Do5VQR6PYLRjZVWwUeAQw0uVVKY8IXhskaX3vogTrhlFTIiVxsCC8SNuB1x3S3hkd2jf~~z71MVctF6hrmYYP88JPtzWCCD2jkCG7WhwiyHAS5UbqM4yBFhQyc9jAFC8aB0X4tdQio781ecczIccryuj0jmGlZDlYfTxs4PLeaq-ooQmG9Pp9oMuMQw__" alt="Logo" className="h-12 w-25" />
      </div>
      <div className="flex space-x-10 text-3xl text-white">
        <a href="/" className="hover:underline">Home</a>
        <a href="/menu" className="hover:underline">Menu</a>
        <a href="/contactus" className="hover:underline">Contact Us</a>
        <a href="/blog" className="hover:underline">Blog</a>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search items"
            className="p-2 pl-10 rounded-full placeholder-italic"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        </div>
    </nav>


    </div>
  )
}

export default MenuHeader
