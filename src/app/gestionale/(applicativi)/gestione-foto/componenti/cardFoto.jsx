'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil  } from '@fortawesome/free-solid-svg-icons';
import PopUpUPDATEMedia from './popUpUPDATEMedia';
import DeleteButton from '@/app/gestionale/components/deleteButton';

const iconaMatita = <FontAwesomeIcon icon={faPencil} className='max-h-[15px]' />

export default function CardFoto(props) {

    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = () => {
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const linkMedia = props.linkMedia // URL dell'immagine
    const posizione = props.posizione // Posizione o altro testo
    const evento = props.evento
    const dataEvento = props.dataEvento
    const id = props.id
    const uuid = props.uuid

    return (
        //  lg:w-[61vw] lg:h-[75vh] md:w-[78vw] md:h-[15vh] w-[76vw] h-[13vh]
        <>
        <div className="lg:h-[150px] lg:w-[150px] h-[75px] w-[75px] bg-cover bg-center rounded-xl p-2 flex justify-between shadow-lg" style={{ backgroundImage: `url(${linkMedia})` }} alt={evento}>
            <div className="">
                <div className="bg-white flex p-1 rounded-full w-[25px] h-[20px] justify-center items-center m-1">
                    <span className="text-[0.7rem] text-neutral-900 font-black" >{posizione}</span>
                </div>
                <div className="bg-rose-600/80 flex p-1 rounded-full w-[100%] h-[20px] justify-center items-center m-1">
                    <span className="lg:text-[0.7rem] text-[0.5rem] text-neutral-100" >{evento}</span>
                </div>
                <div className="bg-rose-600/80 flex p-1 rounded-full w-[100%] h-[20px] justify-center items-center m-1">
                    <span className="lg:text-[0.7rem] text-[0.5rem] text-neutral-100" >{dataEvento}</span>
                </div>
            </div>
            <div className="">
                <div className="bg-neutral-900 hover:bg-rose-600 flex p-1 rounded-full w-[100%] h-[20px] justify-center items-center m-1">
                    <button onClick={handleOpen} className="lg:text-[0.7rem] text-[0.5rem] text-neutral-100 hover:text-neutral-900" >{iconaMatita}</button>
                </div>
            </div>
            <PopUpUPDATEMedia id={id} status={showPopup} onClose={handleClose} />
            <DeleteButton uuid={uuid}/>
        </div>
        </>
    );
}                    