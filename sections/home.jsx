import { Hidden } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Hidden lgDown>
        <section
          id="home"
          className="h-screen w-screen text-white 
    relative scroll-smooth overflow-x-hidden flex justify-center items-center"
        >
          <div
            className="absolute top-0 left-0 h-full w-full 
        z-[1]"
          >
            <Image
              src="/images/bgfinal3.jpg"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative h-[60%] w-[85%] z-[20] px-[8rem] py-[1rem] 
        flex flex-col justify-center items-center bg-stone-800 bg-opacity-[50%] rounded-3xl"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl">Serving you the best coffee in town</h1>
              <p className="text-2xl mt-2 mb-10 font-md tracking-wider">
                Freshly Brewed Coffee
              </p>
              <Link
                href="#menu"
                className="bg-gray-800 px-[2rem] py-[8px] 
                  rounded-xl scroll-smooth"
              >
                <p className="font-semibold tracking-wider">MENU</p>
              </Link>
            </div>
          </div>
        </section>
      </Hidden>

      <Hidden mdDown lgUp>
        <section
          id="home"
          className="h-screen w-screen text-white 
    relative scroll-smooth overflow-x-hidden flex justify-center items-center"
        >
          <div
            className="absolute top-0 left-0 h-full w-full 
        z-[1]"
          >
            <Image
              src="/images/bgfinal3.jpg"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative h-[60%] w-[85%] z-[20] px-[8rem] py-[1rem] flex flex-col justify-center 
            items-center bg-stone-800 bg-opacity-[50%] rounded-3xl"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-[40px]">Serving you the best coffee in town</h1>
              <p className="text-xl mt-2 mb-[60px] font-md tracking-wider">
                Freshly Brewed Coffee
              </p>
              <Link
                href="#menu"
                className="bg-gray-800 px-[1.7rem] py-[8px] 
                  rounded-xl scroll-smooth"
              >
                <p className="font-semibold tracking-wider">MENU</p>
              </Link>
            </div>
          </div>
        </section>
      </Hidden>

      <Hidden smDown mdUp>
        <section
          id="home"
          className="h-screen w-screen text-white 
    relative scroll-smooth overflow-x-hidden flex justify-center items-center"
        >
          <div
            className="absolute top-0 left-0 h-full w-full 
        z-[1]"
          >
            <Image
              src="/images/bgfinal3.jpg"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative h-[60%] w-[85%] z-[20] px-[5.5rem] py-[1rem] 
        flex flex-col justify-center items-center bg-stone-800 bg-opacity-[50%] rounded-3xl"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl ">Serving you the best coffee in town</h1>
              <p className="text-lg mt-2 mb-10 font-md tracking-wider">
                Freshly Brewed Coffee
              </p>
              <Link
                href="#menu"
                className="bg-gray-800 px-[1.2rem] py-[8px] 
                  rounded-xl scroll-smooth"
              >
                <p className="font-semibold tracking-wider">MENU</p>
              </Link>
            </div>
          </div>
        </section>
      </Hidden>

      <Hidden smUp>
        <section
          id="home"
          className="h-screen w-screen text-white 
    relative scroll-smooth overflow-x-hidden flex justify-center items-center"
        >
          <div
            className="absolute top-0 left-0 h-full w-full 
        z-[1]"
          >
            <Image
              src="/images/bgfinal3.jpg"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative h-[60%] w-[85%] z-[20] px-[3.5rem] py-[1rem] 
        flex flex-col justify-center items-center bg-stone-800 bg-opacity-[60%] rounded-3xl"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-[24px] ">Serving you the best coffee in town</h1>
              <p className="text-md mt-2 mb-10 font-md tracking-wider">
                Freshly Brewed Coffee
              </p>
              <Link
                href="#menu"
                className="bg-gray-800 px-[1rem] py-[7px] 
                  rounded-xl scroll-smooth"
              >
                <p className="font-semibold tracking-wider">MENU</p>
              </Link>
            </div>
          </div>
        </section>
      </Hidden>
    </>
  );
};

export default Home;
