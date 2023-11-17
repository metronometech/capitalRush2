import Footer from "@/components/common/FooterElem";
import Nav2 from "@/components/common/Nav2";
import Terms from "@/components/extras/Terms";

const page = () => {
  return (
    <div className="pt-8 bg-[#100B26] ">
      <Nav2 />
      <Terms />
      <Footer />
    </div>
  );
};

export default page;
