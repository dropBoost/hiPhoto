import CaricamentoClienti from "./componenti/caricamento-clienti"

export default function Clienti () {
    return (
<>
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full p-5 gap-4 justify-center items-center">
          <div className="lg:col-span-9 col-span-12 col-start-1 lg:row-span-12 row-span-3 row-start-1 h-full border border-1 border-rose-600 rounded-2xl p-5 flex items-start justify-start ">
            ELENCO CLIENTI
          </div>
          <div className="lg:col-span-4 col-span-12 lg:col-start-10 col-start-1 lg:row-span-12 lg:row-start-1 row-span-9 row-start-4 h-full bg-neutral-800 rounded-2xl flex items-start justify-center p-5">
            <CaricamentoClienti/>
          </div>
        </div>
        </>
    )
}