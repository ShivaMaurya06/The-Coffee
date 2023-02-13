import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hidden, IconButton, Slide, FormControlLabel } from "@mui/material";

import { Items } from "@/constant/NavItems";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

import { navContainer } from "@/utils/cardmotion";
import { useState } from "react";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  const handleOpen = () => {
        setMenu(!menu)
  }
  const handleClose = () => {
        setMenu(false)
  }

  return (
    <>
      <Hidden lgDown>
        <div
          className="px-[3rem] py-[1rem] z-30 fixed top-0 
    min-h-[10vh] w-screen bg-stone-700 
    flex flex-row justify-between items-center"
        >
          <div className=" ">
            <div className="bg-white rounded-full">
              <Link href="/">
                <Image src="/logo3.png" alt="logo" height={45} width={45} />
              </Link>
            </div>
          </div>
          <ul className=" w-[45%] flex flex-row justify-around items-center text-lg text-white">
            <Link href="#menu">
              <li>Our Menu</li>
            </Link>

            <Link href="#deserts">
              <li>Extras</li>
            </Link>

            <Link href="#about">
              <li>About Us</li>
            </Link>

            <Link href="#contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </Hidden>

      <Hidden mdDown lgUp>
        <div
          className="px-[3rem] py-[1rem] z-30 fixed top-0 
    min-h-[10vh] w-screen bg-stone-700 
    flex flex-row justify-between items-center"
        >
          <div className=" ">
            <div className="bg-white rounded-full">
              <Link href="/">
                <Image src="/logo3.png" alt="logo" height={45} width={45} />
              </Link>
            </div>
          </div>
          <ul className=" w-[45%] flex flex-row justify-around items-center text-white">
            <Link href="#menu">
              <li>Our Menu</li>
            </Link>

            <Link href="#deserts">
              <li>Extras</li>
            </Link>

            <Link href="#about">
              <li>About Us</li>
            </Link>

            <Link href="#contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </Hidden>

      <Hidden smDown mdUp>
        <div className="px-[3rem] py-[0.8rem] z-30 fixed top-0 
           h-[74px] w-screen bg-stone-700 ">
          <div className="flex flex-row justify-between items-center">  
          <div className="bg-white rounded-full">
            <Link href="/">
              <Image src="/logo3.png" alt="logo" height={45} width={45} />
            </Link>
          </div>
          <IconButton onClick={handleOpen}> 
         { menu === false ? <MenuOutlinedIcon  sx={{fontSize: "32px", color: "white" }} /> 
         : <MenuOpenOutlinedIcon sx={{fontSize: "32px", color: "white"}} />
          }
          </IconButton>
        </div>
        { menu && (
        <div 
        className="absolute top-[74px] right-0 h-[300px] w-[180px] bg-black rounded-bl-3xl">
            <div className="relative h-full w-full px-[4px] py-[7%] flex flex-col justify-center items-center">
                { Items.map((item, index) => (
                    <div key={index} className="w-full h-1/4 text-white flex flex-row items-center justify-center">
                     <Link href={item.tUrl} key={index} onClick={handleClose}>
                     {item.title}
                     </Link>
                    </div>
                ))}
            </div>
        </div>
        )}
        </div>
      </Hidden>

      <Hidden smUp>
      <div className="px-[3rem] py-[0.8rem] z-30 fixed top-0 
           h-[74px] w-screen bg-stone-700 ">
          <div className="flex flex-row justify-between items-center">  
          <div className="bg-white rounded-full">
            <Link href="/">
              <Image src="/logo3.png" alt="logo" height={45} width={45} />
            </Link>
          </div>
          <IconButton onClick={handleOpen}> 
         { menu === false ? <MenuOutlinedIcon  sx={{fontSize: "32px", color: "white" }} /> 
         : <MenuOpenOutlinedIcon sx={{fontSize: "32px", color: "white"}} />
          }
          </IconButton>
        </div>
        { menu && (
        <div 
        className="absolute top-[74px] right-0 h-[200px] w-[140px] bg-black">
            <div className="relative h-full w-full px-[4px] py-[7%] flex flex-col justify-center items-center">
                { Items.map((item, index) => (
                    <div key={index} className="w-full h-1/4 text-white flex flex-row items-center justify-center">
                     <Link href={item.tUrl} key={index} onClick={handleClose}>
                     {item.title}
                     </Link>
                    </div>
                ))}
            </div>
        </div>
        )}
        </div>
      </Hidden>
    </>
  );
};

export default Navbar;
