import Footer from "@/components/common/FooterElem";
import Nav2 from "@/components/common/Nav2";
import Privacy from "@/components/extras/Privacy";

export const metadata = {
  title: "Capital Rush | Privacy Policy",
  description: "Check out the Capital Rush Privacy Policy to understand how we store and protect your data at Capital Rush",
  keywords:"app for online trading, basics of share market "
};

const page = () => {
  return (
    <div className="pt-8 bg-[#100B26] ">
      <Nav2 />
      <Privacy />
      <Footer />
    </div>
  );
};

export default page;
