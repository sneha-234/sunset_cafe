import MenuTop from "./compnents/MenuTop"
import MenuHeader from "./compnents/menuHeader"
import OtherCategories from "./compnents/othercategories"



const Menu = () => {
  return (
    <div style={{background:"#252323"}}>
        <MenuHeader/>
        <MenuTop/>
        <OtherCategories/>
    </div>
  )
}

export default Menu
