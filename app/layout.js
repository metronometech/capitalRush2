import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | My Title",
    default: "Capital Rush - The New Era Of Gaming Is Here",
  },
  description:{
    template: "%s | My Description",
    default:  "Uncover the advantages, disadvantages, and educational value of stock trading games as practical tools for newcomers to learn the ropes of trading and investing journey in India"
  },
    keywords:{
      template:" %s | My Keywords",
      default:"stock market games, best app for investment & trading, beginer for stock market, knowledge about share market"
    }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <title>Capital Rush</title> */}
        {/* Below is the Google tag for this account. Copy and paste it in the code of every page of your website, immediately after the <head> element. Don’t add more than one Google tag to each page. */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1XBWNXWCV6"
        ></script>
        {/* <script>
          {" "}
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)} gtag('js', new Date()); gtag('config',
          'G-1XBWNXWCV6');
        </script> */}
      </head>
      <body className={inter.className}>
        {children}
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
