import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })), "All",
]

console.log(uniqueList);

const Resturant = () => {
  //useState Hooks
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    //For view all
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList);
  };

  return (
    <>
      {/* Use Props atribute=filterItem and menuList pass the data={filterItem} and {menuList}*/}
      <Navbar filterItem={filterItem} menuList={menuList}/>

      {/* Use Props atribute=menuData pass the data={menuData} */}
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant 