import SocialNavbar from "../components/socialNavabar";
import FooterBar from "../components/footerBar";

export default function LayoutSito({ children }) {
  return (
    <>
    <div className="flex flex-col bg-white h-screen w-screen">
      <div>
        <SocialNavbar/>
      </div> 
      <div className="bg-stone-100 h-screen overflow-auto">
        {children}
      </div>
      <div>
        <FooterBar/>
      </div>
    </div>
    </>
  );
}