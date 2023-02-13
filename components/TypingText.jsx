import { motion } from "framer-motion"
import { textContainer, textVariant } from "@/utils/motion"

export const RunningText = ({title,color, align}) => {
    return (
        <motion.p variants={textContainer} initial="hidden"
        whileInView="show" className={`${color && align ? 
        'text-[#7d7d7d] text-left' : 'text-center text-gray-500'} mt-10
        font-semibold mb-5`}>
            {Array.from("|  Fresh Coffee").map((letter, index) => (
                <motion.span key={index} variants={textVariant}>
                    {letter === ' ' ? '\u00A0' : letter }
                </motion.span>
            ))}
        </motion.p>
    )
}

export const TitlePage = ({title, color, align}) => {
    return (
        <motion.h2 variants={textVariant} initial="hidden"
        whileInView="show" className={`${color && align ? 
        'text-[#e8e8e8] text-left' : 'text-center text-gray-700'}
        text-4xl font-semibold mt-4`}> {title}
        </motion.h2> 
    )
}