import SocialNavbar from "./components/socialNavabar";
import FooterBar from "./components/footerBar";
import Logo from "./components/logo";
import Link from "next/link";

const images = [
  "https://www.sandrobarrasso.com/media/wedding-1.jpg",
  "https://www.sandrobarrasso.com/media/wedding-4.jpg",
  "https://www.sandrobarrasso.com/media/wedding-3.jpg"
];

export default function Home() {
  return (
    <>
    <div className="flex flex-col bg-white max-h-screen w-screen">
      <SocialNavbar/>
      <div id="header" className="flex justify-center flex-col items-center bg-white h-[20vh] w-full">
        <Logo altezza={"1rem"} link="/"/>
      </div>
      <div id="body" className=" bg-stone-100 flex flex-1 justify-center items-center lg:p-20 p-5">
        <div className="grid grid-cols-12 lg:grid-rows-2 grid-rows-11 lg:h-[50vh] h-[70vh] w-screen gap-5">
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-1 col-span-6 row-span-5 col-start-1 row-start-1 bg-red-100 bg-[url(https://www.sandrobarrasso.com/media/wedding-1.jpg)] bg-cover bg-center">
            <Link href="/wedding" className="block bg-stone-200/10 hover:bg-red-700/70 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                WEDDING
              </button>
            </Link>      
          </div>
          <div className="flex lg:justify-start lg:items-start justify-start items-start lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-1 col-span-6 row-span-3 col-start-7 row-start-1 bg-stone-200/50">
            <p className="font-playfair text-playfair text-stone-500 xl:text-[1.5rem] md:text-[0.9rem] text-[0.75rem] font-500 p-5">
              Da oltre quarant’anni, catturiamo emozioni e ricordi senza tempo.
            </p>
          </div>
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-1 lg:col-start-7 lg:row-start-1 col-span-6 row-span-1 col-start-7 row-start-4  font-playfair lg:text-md text-xs font-light p-4 bg-red-700">
            <Link href="/about" className="flex justify-center items-center bg-red-700 hover:bg-stone-700/10 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="flex justify-center items-center hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full">
                Chi Siamo
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-1 lg:col-start-10 lg:row-start-1 col-span-6 row-span-3 col-start-1 row-start-6 bg-red-500 bg-[url(https://www.sandrobarrasso.com/media/baby-1.jpg)] bg-cover bg-center">
            <Link href="/baby" className="block bg-stone-200/10 hover:bg-red-700/70 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                BABY
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-5 bg-stone-700">
            <Link href="/black-and-white" className="block bg-stone-900 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 h-full w-full text-center">
             <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                B&W
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-6 lg:row-start-2 col-span-6 row-span-3 col-start-1 row-start-9 bg-stone-700">
            <Link href="/food" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                FOOD
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-8 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-9 bg-red-600 bg-[url(https://www.sandrobarrasso.com/media/event-1.jpg)] bg-cover bg-center">
            <Link href="/event" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                EVENT
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-10 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-7 bg-red-600 bg-[url(https://www.sandrobarrasso.com/media/event-1.jpg)] bg-cover bg-center">
            <Link href="/video" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:bg-stone-200/10 hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                VIDEO
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center p-4 font-playfair lg:text-md text-xs font-light lg:col-span-1 lg:row-span-1 lg:col-start-12 lg:row-start-2 col-span-6 row-span-1 col-start-7 row-start-11 bg-red-700 ">
            <Link href="/contatti" className="flex justify-center items-center bg-red-700 hover:bg-stone-700/10 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="flex justify-center items-center hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full">
                Contatti
              </button>
            </Link>
          </div>  
        </div>
      </div>
      <FooterBar/>
    </div>
    </>
  );
}