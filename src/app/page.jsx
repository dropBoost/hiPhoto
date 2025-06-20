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
    <div className="flex flex-col bg-white h-screen w-screen">
      <SocialNavbar/>
      <div id="header" className="flex justify-center flex-col items-center bg-white h-[15vh] w-full">
        <Logo altezza={"1rem"} link="/"/>
      </div>
      <div id="body" className=" bg-stone-100 flex flex-1 justify-center items-center lg:p-20 p-5">
        <div className="grid grid-cols-12 lg:grid-rows-2 grid-rows-11 lg:h-[50vh] h-[60vh] w-screen gap-5 justify-center">
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-1 col-span-6 row-span-5 col-start-1 row-start-1 bg-[url(https://isjsobqmkpwrtiaqgthz.supabase.co/storage/v1/object/public/mediafile/uploads/ac646530-4941-4a66-a760-d9b15a40a4e2.jpg)] bg-cover bg-center">
          <div className="w-full h-full inset-0 bg-stone-900/40">
            <Link href="/wedding" className="block hover:bg-red-700/40 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                WEDDING
              </button>
            </Link>
          </div>        
          </div>
          <div className="flex lg:justify-start lg:items-start justify-start items-start lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-1 col-span-6 row-span-3 col-start-7 row-start-1 bg-stone-200/50">
            <p className="font-playfair text-playfair text-stone-500 xl:text-[1.5rem] md:text-[0.9rem] text-[0.75rem] font-500 p-5">
              Da oltre quarant’anni, catturiamo emozioni e ricordi senza tempo.
            </p>
          </div>
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-1 lg:col-start-7 lg:row-start-1 col-span-6 row-span-1 col-start-7 row-start-4  font-playfair lg:text-md text-[0.5rem] font-light bg-red-700">
            <Link href="/about" className="flex justify-center items-center bg-red-700 hover:bg-stone-700/10 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="flex justify-center items-center hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full">
                Chi Siamo
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center lg:col-span-3 lg:row-span-1 lg:col-start-10 lg:row-start-1 col-span-6 row-span-3 col-start-1 row-start-6 bg-red-500 bg-[url(https://isjsobqmkpwrtiaqgthz.supabase.co/storage/v1/object/public/mediafile/uploads/78e568b8-111e-4f65-b427-563dd9bc354c.jpg)] bg-cover bg-center">
            <div className="w-full h-full inset-0 bg-stone-900/40">
            <Link href="/baby" className="block bg-stone-200/10 hover:bg-red-700/70 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                BABY
              </button>
            </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-5 bg-[url(https://isjsobqmkpwrtiaqgthz.supabase.co/storage/v1/object/public/mediafile/uploads/f7f30c31-f40e-460d-b950-a3bd9f61f4e7.jpg)] bg-cover bg-center">
            <div className="w-full h-full inset-0 bg-stone-900/40">
            <Link href="/black-and-white" className="block hover:bg-stone-900/70 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 h-full w-full text-center">
             <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                B&W
              </button>
            </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-6 lg:row-start-2 col-span-6 row-span-3 col-start-1 row-start-9 bg-stone-900">
            <div className="w-full h-full inset-0 bg-stone-900/40">
            <Link href="/food" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                FOOD
              </button>
            </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-8 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-9 bg-red-600 bg-[url(https://isjsobqmkpwrtiaqgthz.supabase.co/storage/v1/object/public/mediafile/uploads/7aa9021b-78d4-45ad-a225-9c262c9c6fca.jpg)] bg-cover bg-center">
            <div className="w-full h-full inset-0 bg-stone-900/40">
            <Link href="/event" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                EVENT
              </button>
            </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:col-span-2 lg:row-span-1 lg:col-start-10 lg:row-start-2 col-span-6 row-span-2 col-start-7 row-start-7 bg-stone-900">
            <Link href="/video" className="block bg-stone-200/10 hover:bg-red-700 hover:text-stone-100 font-bold text-stone-700/80 ps-5 pe-5 p-3 w-full h-full text-center">
              <button className="hover:text-stone-100 font-bold text-stone-100 ps-5 pe-5 p-3 w-full h-full text-shadow-lg/30">
                VIDEO
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center font-playfair lg:text-md text-[0.5rem] font-light lg:col-span-1 lg:row-span-1 lg:col-start-12 lg:row-start-2 col-span-6 row-span-1 col-start-7 row-start-11 bg-red-700 ">
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