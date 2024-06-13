import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-gray-500 text-black py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p>Cafe</p>
          <p>
            CPlot No. 45, Street No.14
            <br />
            Marol MIDC Industry Estate,
            <br />
            Andheri{" "}
          </p>
          <p>East,Mumbai-400093</p>
        </div>
        {/* Help and Info Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Help and Info</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                About Cafe
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>809-908-5647</p>
          <p>Get In Touch</p>
          <p>Cgat With Us </p>
        </div>
        {/* Useful Links Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                {" "}
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                Terms Of Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                Payment Issues
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                Net Banking
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:text-white">
                Customer Orders
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <p className="mr-4 text-4xl text-center">Follow us on:</p>
        <a href="#" className=" hover:text-white mr-4">
          <FaWhatsapp className="w-8 h-8" />
        </a>
        <a href="#" className=" hover:text-white mr-4">
          <FaInstagram className="w-8 h-8" />
        </a>
        <a href="#" className=" hover:text-white mr-4">
          <FaTwitter className="w-8 h-8" />
        </a>
        <a href="#" className=" hover:text-white">
          <FaFacebook className="w-8 h-8" />
        </a>
      </div>
     
    </div>
    <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto text-white text-center">
          <p className="text-lg font-semibold">@2023 Railworld India. All Rights Reserved</p>
        </div>
    </div>
    </>

  );
};

export default Footer;
