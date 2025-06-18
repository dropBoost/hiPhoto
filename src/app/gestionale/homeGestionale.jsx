'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCloud, faCalendarWeek, faUser, faCirclePlus, faFileZipper  } from '@fortawesome/free-solid-svg-icons';

const iconaDashboard = <FontAwesomeIcon icon={faCloud} className='h-[100px] text-neutral-200 hover:text-rose-700' />
const iconaArchivioPreventivi = <FontAwesomeIcon icon={faFileZipper} className='h-[100px] text-neutral-200 hover:text-rose-700'  />
const iconaGestioneFoto = <FontAwesomeIcon icon={faCamera}  className='h-[100px] text-neutral-200 hover:text-rose-700' />
const iconaRedazionePreventivi = <FontAwesomeIcon icon={faCirclePlus} className='h-[100px] text-neutral-200 hover:text-rose-700'  />
const iconaAgendaEventi = <FontAwesomeIcon icon={faCalendarWeek} className='h-[100px] text-neutral-200 hover:text-rose-700'  />
const iconaClienti = <FontAwesomeIcon icon={faUser} className='h-[100px] text-neutral-200 hover:text-rose-700'  />

export default function HomeGestionale () {

 const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
      <div className="flex w-full flex-wrap flex-row justify-start items-center md:flex-row gap-4 p-5">
        <div>
          <Link
            href="./gestionale/dashboard"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/dashboard') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}>
            {iconaDashboard}
            <span className='mt-3 text-sm'>DASHBOARD</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/agenda-eventi"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/agenda-eventi') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}
          >
            {iconaAgendaEventi}
            <span className='mt-3 text-sm'>AGENDA EVENTI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/clienti"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/clienti') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}
          >
            {iconaClienti}
            <span className='mt-3 text-sm'>CLIENTI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/archivio-preventivi"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/archivio-preventivi') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}
          >
            {iconaArchivioPreventivi}
            <span className='mt-3 text-sm'>ARCHIVIO PREVENTIVI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/redazione-preventivi"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/redazione-preventivi') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}
          >
            {iconaRedazionePreventivi}
            <span className='mt-3 text-sm'>REDAZIONE PREVENTIVI</span>
          </Link>
        </div>
        <div>
          <Link
            href="./gestionale/gestione-foto"
            className={`flex items-center flex-col justify-center rounded-[1.5rem] p-2 h-[200px] w-[200px] transition duration-700 ${
              isActive('/gestionale/gestione-foto') ? 'bg-rose-600' : 'bg-white hover:bg-rose-600'
            }`}
          >
            {iconaGestioneFoto}
            <span className='mt-3 text-sm'>GESTIONE FOTO</span>
          </Link>
        </div>
      </div>
  );
}