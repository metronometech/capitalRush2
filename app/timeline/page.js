import Nav2 from "@/components/common/Nav2";
import Timeline1 from "@/components/timeline/Timeline1";
import "../pagemodule.css";
import Footer from "@/components/common/FooterElem";
import Timeline2 from "@/components/timeline/Timeline2";

export const metadata = {
  title: "How Capital Rush Idea Came to Life | Capital Rush |Timeline",
  description: "Capital Rush, the investment & trading learning app versions and its develoment across the timeline.",
  keywords:"share market tips, course about stock market, best trading learning app"
};



const page = () => {
  return (
    <div className="mt-2">
      <div>
        <div className=" hidden md:block mb-32">
          <Nav2 />
        </div>
        <div className="bg-[#100B26] -mt-4 block md:hidden pb-24">
          <Nav2 variant="mobile" />
        </div>
        <Timeline1 />
      </div>
      <div className="home-sec2">
        <Timeline2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
