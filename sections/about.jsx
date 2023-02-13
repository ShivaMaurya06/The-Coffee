import Image from "next/image";
import { RunningText, TitlePage } from "@/components/TypingText";
import { shop } from "@/constant";
import ShopCard from "@/components/ShopCard";
import { Hidden } from "@mui/material";

const AboutUs = () => {
  return (
    <>
    <Hidden lgDown>
      <div id="about" className="mt-10 flex flex-row justify-center min-h-[80vh]">
        <div className="w-1/2 flex items-center justify-center">
          <ShopCard {...shop} />
        </div>
        <div className="w-1/2 bg-stone-800 bg-opacity-95 px-[50px] rounded-tl-xl">
          <>
            <h1 className="text-5xl font-mono text-stone-600 pt-[50px] ">
              The Coffee Shop
            </h1>
          </>
          <div className="pt-[30px]">
            <>
              <RunningText color="bg-white" align="text-left" />
              <TitlePage title="About Us" color="bg-white" align="text-left" />
            </>
            <div className="text-white text-opacity-80 text-xl text-justify font-sans pt-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo
                maxime exercitationem corporis non id ab esse ipsam culpa
                veritatis nulla quaerat incidunt earum animi amet laboriosam
                labore excepturi magnam!{" "}
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolores maxime iure commodi enim vel officiis earum obcaecati quo.
                Animi neque eveniet obcaecati quos, tempora rerum odit sit facilis
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Hidden>

    <Hidden mdDown lgUp>
      <div id="about" className="mt-[30px] flex flex-row min-h-[60vh] w-screen ">
        <div className="w-1/2 flex items-center justify-center">
          <ShopCard {...shop} />
        </div>
        <div className="w-1/2 bg-stone-800 bg-opacity-95 px-[50px] rounded-tl-xl">
          <>
            <h1 className="text-4xl font-mono text-stone-600 pt-[40px] ">
              The Coffee Shop
            </h1>
          </>
          <div className="pt-[10px]">
            <>
              <RunningText color="bg-white" align="text-left" />
              <TitlePage title="About Us" color="bg-white" align="text-left" />
            </>
            <div className="text-white text-opacity-80 text-[20px] text-justify font-sans pt-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo
                maxime exercitationem corporis non id ab esse ipsam culpa
                veritatis nulla quaerat incidunt earum animi amet laboriosam
                labore excepturi magnam!{" "}
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolores maxime iure commodi enim vel officiis earum obcaecati quo.
                Animi neque eveniet obcaecati quos, tempora rerum odit sit facilis
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Hidden>

    <Hidden smDown mdUp>
    <div id="about" className=" flex flex-row min-h-[65vh] w-screen ">
        <div className="w-1/2 flex items-center justify-center">
          <ShopCard {...shop} />
        </div>
        <div className="w-1/2 bg-stone-800 bg-opacity-95 px-[30px] rounded-tl-xl">
          <>
            <h1 className="text-[28px] font-mono text-stone-600 pt-[20px] ">
              The Coffee Shop
            </h1>
          </>
          <div className="pt-[25px]">
            <>
              <RunningText color="bg-white" align="text-left" />
              <TitlePage title="About Us" color="bg-white" align="text-left" />
            </>
            <div className="text-white text-opacity-80 text-[18px] text-justify font-sans pt-[30px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo
                maxime exercitationem corporis non id ab esse ipsam culpa
                veritatis nulla quaerat incidunt earum animi amet laboriosam
                labore excepturi magnam!{" "}
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolores maxime iure commodi enim vel officiis earum obcaecati quo.
                Animi neque eveniet obcaecati quos, tempora rerum odit sit facilis
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Hidden>

    <Hidden smUp>
      <div id="about" className="mt-10 flex flex-row min-h-[60vh] w-screen ">
        <div className="w-1/2 flex items-center justify-center">
          <ShopCard {...shop} />
        </div>
        <div className="w-1/2 bg-stone-800 bg-opacity-95 px-[20px] rounded-tl-xl">
          <>
            <h1 className="text-lg font-mono text-stone-600 pt-[15px] ">
              The Coffee Shop
            </h1>
          </>
          <div className="pt-[5px]">
            <>
            <RunningText color="bg-white" align="text-left" />
              <TitlePage title="About Us" color="bg-white" align="text-left" />
            </>
            <div className="text-white text-opacity-80 text-[15px] text-justify font-sans pt-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo
                maxime exercitationem corporis non id ab esse ipsam culpa
                veritatis nulla quaerat incidunt earum animi amet laboriosam
                labore excepturi magnam!{" "}
              </p>
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolores maxime iure commodi enim vel officiis earum obcaecati quo.
                Animi neque eveniet obcaecati quos, tempora rerum odit sit facilis
                laudantium.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Hidden>
      </>
  )
};

export default AboutUs;
