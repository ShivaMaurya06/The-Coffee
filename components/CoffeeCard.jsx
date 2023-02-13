import { motion } from "framer-motion";
import Image from "next/image";
import { Hidden } from "@mui/material";
import { cardText } from "@/utils/cardmotion";

const CoffeeCard = ({ id, imageUrl, title, price, active, handleClick }) => {
  return (
    <>
      <Hidden lgDown>
      <div className="relative h-[300px] w-2/5 rounded-xl overflow-hidden z-10 shadow-lg">
          <Image src={imageUrl} alt={id} fill className="object-cover" />
          <motion.div variants={cardText}
            initial="hidden" 
            whileHover="show"
            className="absolute bottom-0 h-[100%] w-[100%] flex flex-col text-3xl
            justify-center items-center text-white bg-black bg-opacity-40" >
            {title}
            <div className="text-xl">{price}</div>
          </motion.div>
        </div>
      </Hidden>

      <Hidden mdDown lgUp>
      <div className="relative h-[300px] w-1/3 rounded-xl overflow-hidden z-10 shadow-lg">
          <Image src={imageUrl} alt={id} fill className="object-cover" />
          <motion.div variants={cardText}
            initial="hidden" 
            whileHover="show"
            className="absolute bottom-0 h-[100%] w-[100%] flex flex-col text-3xl
            justify-center items-center text-white bg-black bg-opacity-40" >
            {title}
            <div className="text-xl">{price}</div>
          </motion.div>
        </div>
      </Hidden>

      <Hidden smDown mdUp>
      <div className="relative h-[250px] w-1/3 rounded-xl overflow-hidden z-10 shadow-lg">
          <Image src={imageUrl} alt={id} fill className="object-cover" />
          <motion.div variants={cardText}
            initial="hidden" 
            whileHover="show"
            className="absolute bottom-0 h-[100%] w-[100%] flex flex-col text-3xl
            justify-center items-center text-white bg-black bg-opacity-40" >
            {title}
            <div className="text-xl">{price}</div>
          </motion.div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div className="relative h-[200px] w-2/3 rounded-xl overflow-hidden z-10 shadow-lg">
          <Image src={imageUrl} alt={id} fill className="object-cover" />
          <motion.div variants={cardText}
            initial="hidden" 
            whileHover="show"
            className="absolute bottom-0 h-full w-full flex flex-col text-3xl
            justify-center items-center text-white bg-black bg-opacity-40" >
            {title}
            <div className="text-xl">{price}</div>
          </motion.div>
        </div>
      </Hidden>
    </>
  );
};

export default CoffeeCard;
