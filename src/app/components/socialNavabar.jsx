'use client'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import Navbar from './mainNavbar';

const socialFacebook = <FontAwesomeIcon icon={faFacebook} className='text-lg m-1 hover:text-red-700' />
const socialInstagram = <FontAwesomeIcon icon={faWhatsapp} className='text-lg m-1 hover:text-red-700' />
const socialWhatsApp = <FontAwesomeIcon icon={faInstagram} className='text-lg m-1 hover:text-red-700' />

export default function SocialNavbar () {


    return (
        <>
        <div id="header" className="flex flex-row justify-between items-center bg-stone-100 h-[5vh] w-full text-[0.7rem] text-stone-600 p-3">
            <div className=""><Navbar bgColore={"bg-stone-900"} coloreText={"text-red-700"} /></div>
            <a href='/'><div className=""><font className="font-900">SANDRO BARRASSO</font> | Photography</div></a>
            <div className="pe-2">
                <ul className="flex flex-row md:flex-row items-center justify-center gap-1">
                    <li>
                        <Link
                        href="./agenda-eventi"
                        className={`flex items-center justify-center`}>
                        {socialInstagram}
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="./agenda-eventi"
                        className={`flex items-center justify-center`}>
                        {socialFacebook}
                        </Link>
                    </li>
                    <li >
                        <Link
                        href="./agenda-eventi"
                        className={`flex items-center justify-center`}>
                        {socialWhatsApp}
                        </Link>
                    </li>                                        
                </ul>
            </div>
        </div>      
        </>
    )

}