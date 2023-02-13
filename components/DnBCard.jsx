import Image from "next/image";
import { Hidden } from "@mui/material";
import { motion } from "framer-motion";
import { cardContainer1, cardContainer2 } from "@/utils/cardmotion";

const DnBCard = ({ id, imageUrl }) => {
  return (
    <>
    <Hidden lgDown>
    <motion.div variants={cardContainer2}
    initial="hidden"
    whileInView="show" 
    className="w-1/4 h-[400px]">
      <div className="relative left-[5px]  w-[95%] h-[95%] mx-[1px] my-[10px] rounded-xl shadow-lg shadow-gray-500">
        <Image
          src={imageUrl}
          alt={id}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </motion.div>
    </Hidden>

    <Hidden mdDown lgUp>
    <motion.div variants={cardContainer2}
    initial="hidden"
    whileInView="show" 
    className=" w-1/4 h-[500px]">
      <div className="relative left-[5px]  w-[95%] h-[95%] mx-[1px] my-[10px] rounded-xl shadow-md shadow-gray-500">
        <Image
          src={imageUrl}
          alt={id}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </motion.div>
    </Hidden>

    <Hidden smDown mdUp>
    <motion.div variants={cardContainer2}
    initial="hidden"
    whileInView="show" 
    className=" w-1/2 h-[420px] mb-[10px]">
      <div className="relative left-[5px]  w-[95%] h-[95%] mx-[1px] my-[10px] rounded-xl shadow-md shadow-gray-500">
        <Image
          src={imageUrl}
          alt={id}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </motion.div>
    </Hidden>

    <Hidden smUp>
    <motion.div
    variants={cardContainer1}
    initial="hidden"
    whileInView="show" 
    className="w-1/2 h-[300px]">
      <div className="relative left-[5px] w-[95%] h-[95%] mx-[1px] my-[10px] rounded-xl shadow-md shadow-gray-500">
        <Image
          src={imageUrl}
          alt={id}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </motion.div>
    </Hidden>
   </> 
  );
};

export default DnBCard;
