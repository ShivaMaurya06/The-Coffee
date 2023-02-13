import { Ourmenu } from "@/constant";
import Section from "@/components/Section";
import CoffeeCard from "@/components/CoffeeCard";
import { RunningText, TitlePage } from "@/components/TypingText";

import { Hidden } from "@mui/material";

const OurMenu = () => {

  return (
    <Section id="menu">
      <RunningText />
      <TitlePage title="Our Delightful Coffees" />
      <Hidden lgDown>
        <div className="mt-[50px] flex flex-wrap flex-row justify-center items-center min-h-[70vh] gap-2">
          {Ourmenu.map((coffee, index) => (
            <CoffeeCard
              key={index}
              {...coffee}
            />
          ))}
        </div>
      </Hidden>

      <Hidden mdDown lgUp>
        <div className="mt-[50px] flex flex-wrap flex-row justify-center items-center min-h-[70vh] gap-2">
          {Ourmenu.map((coffee, index) => (
            <CoffeeCard
              key={index}
              {...coffee}
            />
          ))}
        </div>
      </Hidden>

      <Hidden smDown mdUp>
      <div className="mt-[50px] flex flex-wrap flex-row justify-center items-center min-h-[70vh] gap-4">
          {Ourmenu.map((coffee, index) => (
            <CoffeeCard
              key={index}
              {...coffee} />
          ))}
        </div>
      </Hidden>

      <Hidden smUp>
        <div className="mt-[50px] flex flex-col justify-center items-center min-h-[70vh] gap-4">
          {Ourmenu.map((coffee, index) => (
            <CoffeeCard
              key={index}
              {...coffee} />
          ))}
        </div>
      </Hidden>
    </Section>
  );
};

export default OurMenu;
