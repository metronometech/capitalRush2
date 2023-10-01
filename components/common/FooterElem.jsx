import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mb:block hidden pb-10 bg-[#080612]">
        <div className="pt-16 px-24 flex justify-between">
          <div>
            <Image
              src="/logo.png"
              className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              height={110}
              width={216}
            />
            <p className=" text-[18px] text-white font-quicksand">
              Get in the game of investment
            </p>
            <div className="flex justify-between">
              <p className=" mt-32 text-[16px] text-[#8D8D8D] font-quicksand">
                2023 © company Ins., All rights reserved
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className=" text-[18px]  text-white font-quicksand">About</h3>
            <Link href="/about" className=" no-underline">
            <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              About Us
            </p>
            </Link>
          </div>
          <div className="mt-12">
            <h3 className=" text-[18px] text-white font-quicksand">News letter</h3>
            <Link href="/" className=" no-underline">
              <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              Blog
              </p>
            </Link>
            <Link href="/" className=" no-underline">
              <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              FAQs
              </p>
            </Link>
          </div>
          <div className="mt-12">
            <h3 className=" text-[18px] text-white font-quicksand">Legal</h3>
            <Link href="/terms" className=" no-underline">
              <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
                Terms of use
              </p>
            </Link>
            <Link href="/privacy" className=" no-underline">
              <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
                Privacy Policy
              </p>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="/contact" className=" no-underline">
              <h3 className=" text-[18px] text-white font-quicksand">
                Contact
              </h3>
            </Link>
            {/* <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              000-000-00
            </p> */}
            <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              hello@capitalrush.gg
            </p>
          </div>
        </div>
        <div className=" mr-32 -mt-8 float-right flex gap-10">
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              src="/svg/footeryoutube.svg"
              height={32}
              width={45}
            />{" "}
          </Link>
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footer2.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="https://www.instagram.com/capitalrushofficial/" target="blank" className=" no-underline">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footerinsta.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/metronome-enterprises/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footerlinkedin.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footertwitter.svg"
              height={32}
              width={45}
            />
          </Link>
        </div>
      </div>


              {/* Mobile */}
      <div className=" mb:hidden block pb-10 pl-3 bg-[#080612]">
        <div className="pt-16  flex flex-col justify-between">
          <div>
            <Image
              src="/logo.png"
              className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              height={80}
              width={140}
            />
            <p className=" text-[18px]  text-white font-quicksand">
              Get in the game of investment
            </p>
            
          </div>
          <div className="mt-12">
            <h3 className=" text-[18px]  text-white font-quicksand">About</h3>
           <Link href="/about" className=" no-underline">
            <p className=" mt-4 text-[16px] text-[#8D8D8D] font-quicksand">
              About Us
            </p>
           </Link>
          </div>
          <div className="mt-12">
            <h3 className=" text-[18px] text-white font-quicksand">Legal</h3>
            <Link href="/terms" className=" no-underline">
              <p className=" mt-4 text-[16px] text-[#8D8D8D] font-quicksand">
                Terms of use
              </p>
            </Link>
            <Link href="/privacy" className=" no-underline">
              <p className=" mt-4 text-[16px] text-[#8D8D8D] font-quicksand">
                Privacy Policy
              </p>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="/contact" className=" no-underline">
              <h3 className=" text-[18px] text-white font-quicksand">
                Contact
              </h3>
            </Link>
            {/* <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
              000-000-00
            </p> */}
            <p className=" mt-4 text-[16px] text-[#8D8D8D] font-quicksand">
              hello@capitalrush.gg
            </p>
          </div>
          <div className="flex justify-between">
              
            </div>
        </div>
        <div className="pt-2 justify-center flex gap-5 mb:gap-10">
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              src="/svg/footeryoutube.svg"
              height={32}
              width={45}
            />{" "}
          </Link>
          <Link href="https://www.instagram.com/capitalrushofficial/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footer2.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footerinsta.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/metronome-enterprises/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footerlinkedin.svg"
              height={32}
              width={45}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              className="hover:brightness-125"
              alt="footer-icons"
              src="/svg/footertwitter.svg"
              height={32}
              width={45}
            />
          </Link>
        </div>
        <p className=" mt-2 mx-auto text-center text-[16px] text-[#8D8D8D] font-quicksand">
                2023 © company Ins., All rights reserved
              </p>
      </div>
    </div>
  );
};

export default Footer;
