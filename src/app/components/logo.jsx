import Image from "next/image"

export default function Logo (props) {

    const link = props.link

       return( 
       <>
       <Image src="/logo.png" alt="Logo Sandro Barrasso" href={link} width={"80"} height={"80"} quality={50}/>
       </>
       )

}