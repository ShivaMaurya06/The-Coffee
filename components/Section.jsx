import { Hidden } from "@mui/material";

const Section = ({ children, id }) => {
  return (
    <>
      <Hidden lgDown>
        <section
          id={id}
          className="min-h-screen w-screen
    overflow-x-hidden relative px-[6rem] py-[1rem]"
        >
          {children}
        </section>
      </Hidden>

      <Hidden mdDown lgUp>
        <section
          id={id}
          className=" w-screen
    overflow-x-hidden relative px-[1rem] py-[1rem]"
        >
          {children}
        </section>
      </Hidden>

      <Hidden smDown mdUp>
        <section
          id={id}
          className="min-h-[80vh] w-screen
    overflow-x-hidden relative px-[1rem] py-[1rem] mb-5"
        >
          {children}
        </section>
      </Hidden>

      <Hidden smUp>
        <section
          id={id}
          className="min-h-[50vh] w-screen
    overflow-x-hidden relative px-[0.8rem] py-[1rem]"
        >
          {children}
        </section>
      </Hidden>
    </>
  );
};

export default Section;
