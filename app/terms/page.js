import Footer from "@/components/common/FooterElem";
import Nav2 from "@/components/common/Nav2";
import Terms from "@/components/extras/Terms";

export const metadata = {
  title: "Capital Rush | Terms & Condition",
  description: "Read about Capital Rush Terms and Conditions carefully. Standard Usage, Promotions, Cash Bonus Offers , Deposit Bonus Offers, etc",
  keywords:"app for trade, best app for stock market, best app for trading india,"
};

const page = () => {
  return (
    <div className="pt-8 bg-[#100B26] ">
       <div className=" hidden md:block mb-20">
          <Nav2 />
        </div>
        <div className="-mt-8 block md:hidden">
          <Nav2 variant="mobile" />
        </div>
      <Terms />
      <Footer />
    </div>
  );
};

export default page;
