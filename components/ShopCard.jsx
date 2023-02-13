import Image from "next/image";
import { Hidden } from "@mui/material";

const ShopCard = ({ id, imageUrl }) => {
  return (
    <>
      <Hidden lgDown>
        <div className="w-5/6 h-[55%] flex flex-row  border-[2px] border-gray-500 shadow-xl shadow-gray-600 ">
          <div className="h-full w-full relative">
            <Image src={imageUrl} alt="shop" fill className="object-cover" />
          </div>
        </div>
      </Hidden>

      <Hidden mdDown lgUp>
        <div className="w-5/6 h-[60%] flex flex-row border-[2px] border-gray-500 shadow-xl shadow-gray-600 ">
          <div className="h-full w-full relative">
            <Image src={imageUrl} alt="shop" fill className="object-cover" />
          </div>
        </div>
      </Hidden>

      <Hidden smDown mdUp>
        <div className="w-4/5 h-[80%] flex flex-col border-[2px] border-gray-500 shadow-xl shadow-gray-600">
          <div className="h-full w-full relative">
            <Image src={imageUrl} alt="shop" fill className="object-cover" />
          </div>
          
        </div>
      </Hidden>

      <Hidden smUp>
      <div className="w-4/5 h-[70%] flex flex-col border-[2px] border-gray-500 shadow-xl shadow-gray-600">
          <div className="h-full w-full relative">
            <Image src={imageUrl} alt="shop" fill className="object-cover" />
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default ShopCard;
