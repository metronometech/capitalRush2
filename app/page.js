import FooterElem from "@/components/common/FooterElem";
import Home1 from "@/components/home/Home1";
import Home2 from "@/components/home/Home2";
import Home3 from "@/components/home/Home3";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#100B26] w-full text-31xl font-poppins">
    <Home1 />
    <Home2 />
    <Home3 />
    <FooterElem />
    </div>
  );
}

{
  /* <img
  className=" h-[95.54%] w-[95.49%] top-[4.09%] right-[2.64%] bottom-[0.37%] left-[1.88%] max-w-full  max-h-full"
  alt=""
  src="/tiles-path.svg"
/> */
}
