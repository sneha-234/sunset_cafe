import AboutUs from "./compnents/aboutus"
import CardComponent from "./compnents/card"
import Navbar from "./compnents/navbar"
import ReservationForm from "./compnents/reservation"
import Subscribe from "./compnents/subscribe"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <CardComponent/>
      <ReservationForm/>
      <Subscribe/>

    </div>
  )
}

export default Home
