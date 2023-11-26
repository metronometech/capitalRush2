  import "../pagemodule.css";
  import Nav2 from "@/components/common/Nav2";
  import About1 from "@/components/About/About1";


  export const metadata = {
    title: "Learn Trading with Fun | Capital Rush | About Us",
    description: "Introduce readers to investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
    keywords:"stock market games, best app for investment & trading, beginer for stock market, knowledge about share market"
  };

  // const metadata = {
    
  //   description: "Introduce readers to investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
  // };

  const page = () => {

    // useEffect(() => {
    //   // Dynamically update metadata
    //   document.title = metadata.title;
    // }, []);

    return (
      <div className="">
        <div className="bg-[#100B26]">
          <div className=" hidden md:block mb-32">
            <Nav2 />
          </div>
          <div className=" block md:hidden pt-4">
            <Nav2 variant="mobile" />
          </div>
          <About1 />
        </div>
      </div>
    );
  };


  export default page;

