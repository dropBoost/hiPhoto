'use client'

export default function PageContatti () {

    return(
        <>
        <div className="grid grid-cols-12 grid-rows-12 justify-center items-center bg-red-200 w-full h-full">
            <div className="flex col-span-12 row-span-6 justify-center items-center bg-white h-full w-full">
                <div className="bg-white h-full w-full font-playfair p-10">
                    <div className="">
                        <h1 className="text-5xl text-stone-300 text-light mb-3">CONTATTI</h1>
                    </div>
                    <div className="grid grid-cols-12 grid-rows-1 justify-center items-center w-full h-full gap-5">
                        <div className="flex col-span-4 row-span-1 justify-start items-start h-full w-full">
                            <p className="text-stone-700 text-xl" >puoi contattarci tramite la nostra email <b>info@sandrobarrasso.com</b> o attraverso il nostro numero whatsApp: <b>+39 335 536 2754</b> per qualsiasi informazioni o preventivi per il tuo evento.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex col-span-12 row-span-6 justify-center items-center bg-stone-300 h-full w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6605816957244!2d14.345334576418288!3d40.835418430050126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba651f46b7adf%3A0x831cd4d69042813f!2sSandro%20Barrasso%20Artista%20Fotografo!5e0!3m2!1sit!2sit!4v1750363443904!5m2!1sit!2sit" className="w-full h-full" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>    
            </div>            
        </div>
        </>
    )
}