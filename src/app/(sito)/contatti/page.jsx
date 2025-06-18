'use client'

export default function PageContatti () {

    return(
        <>
        <div className="grid grid-cols-12 grid-rows-12 justify-center items-center bg-red-200 w-full h-full">
            <div className="flex col-span-12 row-span-8 justify-center items-center bg-white h-full w-full">
                <div className="bg-white h-full w-full font-playfair p-10">
                    <div className="border-b border-red-400">
                        <h1 className="text-5xl text-stone-400 text-light mb-3">CONTATTI</h1>
                    </div>
                    <div className="grid grid-cols-12 grid-rows-1 justify-center items-center bg-red-200 w-full h-full gap-5">
                        <div className="flex col-span-4 row-span-1 justify-center items-center bg-red-800 h-full w-full"></div>
                        <div className="flex col-span-4 row-span-1 justify-center items-center bg-red-800 h-full w-full"></div>
                        <div className="flex col-span-4 row-span-1 justify-center items-center bg-red-800 h-full w-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex col-span-12 row-span-4 justify-center items-center bg-stone-300 h-full w-full">
                
            </div>            
        </div>
        </>
    )
}