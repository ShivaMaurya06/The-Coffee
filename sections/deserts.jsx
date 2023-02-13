import Section from "@/components/Section";
import { RunningText, TitlePage } from "@/components/TypingText";
import { desert, beverage } from "@/constant";
import DnBCard from "@/components/DnBCard";
import { Hidden } from "@mui/material";

const Deserts = () => {
    return (
        <>
        <Hidden mdDown>
        <Section id="deserts">
          <RunningText />
          <TitlePage title="Beverages"/>
          
          <div className="mt-[50px] flex flex-wrap min-h-[40vh]">
          {beverage.map((dsnbs, index) => (
              <DnBCard key={index} {...dsnbs} />
          ))}
          </div>  
          <TitlePage title="Deserts"/>
          
          <div className="mt-[50px] flex flex-wrap min-h-[40vh]">
          {desert.map((dsnbs, index) => (
              <DnBCard key={index} {...dsnbs} />
          ))}
          </div>  
        </Section>  
        </Hidden>

        <Hidden mdUp>
        <Section id="deserts">
          <RunningText />
          
          <TitlePage title="Beverages" />
          <div className="mt-[20px] flex flex-wrap min-h-[40vh]">
          {beverage.map((dsnbs, index) => (
              <DnBCard key={index} {...dsnbs} />
          ))}
          </div>

          <TitlePage title="Deserts "/>
          <div className="mt-[50px] flex flex-wrap min-h-[40vh]">
          {desert.map((dsnbs, index) => (
              <DnBCard key={index} {...dsnbs} />
          ))}
          </div>    
        </Section>  
        </Hidden>
        </>
    )
}

export default Deserts