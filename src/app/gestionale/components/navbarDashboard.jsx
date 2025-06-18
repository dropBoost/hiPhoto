'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCloud, faCalendarWeek, faUser, faCirclePlus, faFileZipper  } from '@fortawesome/free-solid-svg-icons';

const iconaDashboard = <FontAwesomeIcon icon={faCloud} className='max-h-[15px]' />
const iconaArchivioPreventivi = <FontAwesomeIcon icon={faFileZipper} className='max-h-[15px]'  />
const iconaGestioneFoto = <FontAwesomeIcon icon={faCamera}  className='max-h-[15px]' />
const iconaRedazionePreventivi = <FontAwesomeIcon icon={faCirclePlus} className='max-h-[15px]'  />
const iconaAgendaEventi = <FontAwesomeIcon icon={faCalendarWeek} className='max-h-[15px]'  />
const iconaClienti = <FontAwesomeIcon icon={faUser} className='max-h-[15px]'  />



export default function DashboardNavbar () {


 const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
      <ul className="flex flex-row md:flex-col gap-2">
        <li>
          <Link
            href="./dashboard"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaDashboard}
          </Link>
        </li>
        <li>
          <Link
            href="./agenda-eventi"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/agenda-eventi') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaAgendaEventi}
          </Link>
        </li>
        <li>
          <Link
            href="./clienti"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/clienti') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaClienti}
          </Link>
        </li>
        <li>
          <Link
            href="./archivio-preventivi"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/archivio-preventivi') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaArchivioPreventivi}
          </Link>
        </li>
        <li>
          <Link
            href="./redazione-preventivi"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/redazione-preventivi') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaRedazionePreventivi}
          </Link>
        </li>
        <li>
          <Link
            href="./gestione-foto"
            className={`flex items-center justify-center rounded-full p-2 h-[40px] w-[40px] transition duration-700 ${
              isActive('/gestionale/gestione-foto') ? 'bg-rose-600' : 'bg-rose-400 hover:bg-rose-600'
            }`}
          >
            {iconaGestioneFoto}
          </Link>
        </li>
      </ul>
  );
    


}