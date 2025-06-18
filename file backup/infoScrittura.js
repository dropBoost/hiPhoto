import { useState, useEffect } from "react";

import PopUpAddContratto from "./redazioneContrattiPopUp";
import GruppoIconeButton from "./gruppoIconeButton";
import BottoneAggiornaListaAuto from "./redazioneContrattiBottoneAggiornaAuto";
import BottoneAggiungiContratto from "./redazioneContrattiBottoneAggiungiContratto";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPassport, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { GaugeReferenceArc } from "@mui/x-charts";

const apiToken = 'NIKNiFuaKS6H9dGuVo0LWVtlH8LXA6QA'; // Sostituisci con il tuo API token
const tableContrattiId = '456578';
const urlTableContratti = `https://api.baserow.io/api/database/rows/table/${tableContrattiId}/`;
const tableVeicoliId = '456549';
const urlVeicoli = `https://api.baserow.io/api/database/rows/table/${tableVeicoliId}/?user_field_names=true`;
const tableAnagraficaClientiId = '456576';
const urlTableClienti = `https://api.baserow.io/api/database/rows/table/${tableAnagraficaClientiId}/?user_field_names=true`;
const urlTableContrattiGet = `https://api.baserow.io/api/database/rows/table/${tableContrattiId}/?user_field_names=true`;


const iconaContratto = <FontAwesomeIcon className="me-2 text-fuchsia-500 text-xl" icon={faPassport} />
const iconaUserPlus = <FontAwesomeIcon className="me-2" icon={faFileImport} />

function DatiContratto () {

    const [updateVeicoli, setUpdateVeicoli] = useState(false);
    const [listAuto, setListAuto] = useState([]);
    const [listContract, setListContract] = useState([]);
    const [contrattoDataForm, setContrattoAdd] = useState({
        dataConsegnaOut: "",
        dataConsegnaIn: "",
        orarioDiConsegnaOut: "",
        orarioDiConsegnaIn: "",
        luogoDiConsegnaOut: "",
        luogoDiConsegnaIn: "",
        tariffaGiornaliera: "",
        tariffaMensile: "",
        sconto: "",
        franchigiaFurtoIncendio: "",
        franchigiaCasco: "",
        completato: false,
        veicolo: "",
        cliente: "",
        secondoConducente: "",
    });
    const [originalListAuto, setOriginalListAuto] = useState([]);
    const [listCustomer, setListCustomer] = useState([]);
    const [aperturaPop, setAperturaPop] = useState(false);
    // RECUPERO VALORI LIVE DAL FORM

    const [dataDiConsegnaOutLive, setDataDiConsegnaOutLive] = useState("");
    const [dataDiConsegnaInLive, setDataDiConsegnaInLive] = useState("");

    // console.log(`OUT: ${dataDiConsegnaOutLive} IN: ${dataDiConsegnaInLive}`)

    useEffect(() => {
        setDataDiConsegnaOutLive(contrattoDataForm.dataDiConsegnaOut);
        setDataDiConsegnaInLive(contrattoDataForm.dataDiConsegnaIn);
    }, [contrattoDataForm.dataDiConsegnaOut, contrattoDataForm.dataDiConsegnaIn]);

    // IN FASE DI SUBMIT (INVIO) PRENDE I VALORI DEL FORM E LI PASSA ALLA FETCH PER SCRIVERLI SUL DATABASE

    const handleSubmit = (e) => {
        e.preventDefault()

        const contrattoValue = {
            field_3581590: contrattoDataForm.dataDiConsegnaOut,
            field_3581592: contrattoDataForm.dataDiConsegnaIn,
            field_3581593: contrattoDataForm.orarioDiConsegnaOut,
            field_3581595: contrattoDataForm.orarioDiConsegnaIn,
            field_3581594: contrattoDataForm.luogoDiConsegnaOut,
            field_3581596: contrattoDataForm.luogoDiConsegnaIn,
            field_3581598: contrattoDataForm.tariffaGiornaliera.toString(),
            field_3631834: contrattoDataForm.tariffaMensile.toString(),
            field_3581599: contrattoDataForm.sconto.toString(),
            field_3581603: contrattoDataForm.franchigiaFurtoIncendio.toString(),
            field_3581609: contrattoDataForm.franchigiaCasco.toString(),
            field_3581602: contrattoDataForm.completato.toString(),
            field_3581882: contrattoDataForm.veicolo,
            field_3581883: contrattoDataForm.cliente,
            field_3631851: contrattoDataForm.secondoConducente,
        }

        fetch(urlTableContratti, {
            method: 'POST',
            headers: {
              'Authorization': `Token ${apiToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contrattoValue)  // Converti i dati in formato JSON
          })
            .then((response) => response.json())
            .then(contratto => {
                setAperturaPop(true)
                setContrattoAdd({
                    dataConsegnaOut: "",
                    dataConsegnaIn: "",
                    orarioDiConsegnaOut: "",
                    orarioDiConsegnaIn: "",
                    luogoDiConsegnaOut: "",
                    luogoDiConsegnaIn: "",
                    tariffaGiornaliera: "",
                    tariffaMensile: "",
                    sconto: "",
                    franchigiaFurtoIncendio: "",
                    franchigiaCasco: "",
                    completato: false,
                    veicolo: "",
                    cliente: "",
                    secondoConducente: "",
                })
                console.log('Nuovo contratto aggiunto:', contratto);
            })
            .catch((error) => console.error('Errore nella richiesta:', error)); // Aggiungi una gestione degli errori
    }

    // SUL CHANGE ASSEGNA IL TIPO DI VALORE GIUSTO AL CAMPO>DATABASE

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        const inputValue = type === "checkbox" ? checked : value;
      
        if (name === "dataDiConsegnaOut" || name === "dataDiConsegnaIn") {
          // Se il campo riguarda una data, convertila nel formato corretto (YYYY-MM-DD)
          const formattedDate = new Date(inputValue).toISOString().split('T')[0];
          setContrattoAdd({
            ...contrattoDataForm,
            [name]: formattedDate,
          });
        } else {
          setContrattoAdd({
            ...contrattoDataForm,
            [name]: inputValue,
          });
        }

    }
    
    //VEICOLI
    useEffect(() => {
        fetch(urlVeicoli, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${apiToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((veicoli) => {
            setListAuto(veicoli.results);
            setOriginalListAuto(veicoli.results); // Mantieni la copia originale
        })
        .catch((error) => console.error('Errore nella fetch:', error));
    }, []);
    
    //CLIENTI
    useEffect(() => {
        fetch(urlTableClienti, {
          method: 'GET',
          headers: {
            'Authorization': `Token ${apiToken}`,
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((clienti) => {
              setListCustomer(clienti.results);
          })
          .catch((error) => console.error('Errore nella fetch:', error));
      }, []);
     
    //CONTRATTI
    useEffect(() => {
        fetch(urlTableContrattiGet, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${apiToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((contratti) => {
            setListContract(contratti.results);
        })
        .catch((error) => console.error('Errore nella fetch:', error));
    }, []);
    
    
    // Funzione per verificare se un veicolo è disponibile tra le date selezionate
    const isVeicoloDisponibile = (veicoloId) => {
        const { dataDiConsegnaOut, dataDiConsegnaIn } = contrattoDataForm;
        return listContract.every((contratto) => {
            const contrattoOut = contratto.dataConsegnaOut;
            const contrattoIn = contratto.dataConsegnaIn;
            const veicoloInContratto = contratto.veicolo;
            // Verifica se il veicolo è già presente in un contratto che si sovrappone alle date selezionate
            if (veicoloInContratto == veicoloId) {
                return (contrattoIn <= dataDiConsegnaOut || contrattoOut >= dataDiConsegnaIn);
            }
            return true;
        });
    };

    const aggiornaVeicoliDisponibili = () => {
        const veicoliDisponibili = originalListAuto.filter((veicolo) => isVeicoloDisponibile(veicolo.ID));
        setListAuto(veicoliDisponibili);
    };
    
    


    return(
    <>
    <form className="p-5 bg-neutral-950 w-[100%]" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between">
            <h6 className="mb-5 text-indigo-400 p-1 font-bold">{iconaContratto}  DATI CONTRATTO</h6>
            <GruppoIconeButton>
                <BottoneAggiornaListaAuto action={aggiornaVeicoliDisponibili} />
                <BottoneAggiungiContratto/>
            </GruppoIconeButton>
        </div>
        <hr className='mb-5 border-indigo-400/30'></hr>
        <div className="grid grid-cols-12 grid-rows-5 gap-5">
            <div className="col-span-4 row-span-1 col-start-1 row-start-1">
                <label htmlFor="dataDiConsegnaOut" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                DATA DI CONSEGNA OUT
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.dataDiConsegnaOut || ''} id="dataDiConsegnaOut" name="dataDiConsegnaOut" type="date" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-2 row-span-1 col-start-5 row-start-1">
                <label htmlFor="orarioDiConsegnaOut" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                O. OUT
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.orarioDiConsegnaOut} id="orarioDiConsegnaOut" name="orarioDiConsegnaOut" type="time" placeholder="10:00" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-4 row-span-1 col-start-7 row-start-1">
                <label htmlFor="dataDiConsegnaIn" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                DATA DI CONSEGNA IN
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.dataDiConsegnaIn || ''} id="dataDiConsegnaIn" name="dataDiConsegnaIn" type="date" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-2 row-span-1 col-start-11 row-start-1">
                <label htmlFor="orarioDiConsegnaIn" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                O. IN
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.orarioDiConsegnaIn} id="orarioDiConsegnaIn" name="orarioDiConsegnaIn" type="time" placeholder="13:00" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-12 row-span-1 col-start-1 row-start-2">
                <label htmlFor="veicolo" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SELEZIONA AUTO
                </label>
                <select 
                    onChange={handleInputChange} 
                    value={contrattoDataForm.veicolo} 
                    id="veicolo" 
                    name="veicolo" 
                    autoComplete="veicolo" 
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona auto</option>
                    {listAuto.map((veicoloSelect, index) => (
                        <option key={veicoloSelect.ID} value={veicoloSelect.ID}>
                            {index} - {veicoloSelect.targa} - {veicoloSelect.marca} {veicoloSelect.modello}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-span-6 row-span-1 col-start-1 row-start-3">
                <label htmlFor="cliente" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SELEZIONA CONTRAENTE/CONDUCENTE
                </label>
                <select onChange={handleInputChange} value={contrattoDataForm.cliente} id="cliente" name="cliente" autoComplete="cliente" className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona contraente conducente</option>
                {listCustomer
                .map((customersSelect, index) =>
                (
                <option key={customersSelect.ID} value={customersSelect.ID}>{customersSelect.cognome} {customersSelect.nome} - {customersSelect.telefono}</option>
                )
                )}
                </select>
            </div>
            <div className="col-span-6 row-span-1 col-start-7 row-start-3">
                <label htmlFor="secondoConducente" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SELEZIONA SECONDO CONDUCENTE
                </label>
                <select onChange={handleInputChange} value={contrattoDataForm.secondoConducente} id="secondoConducente" name="secondoConducente" autoComplete="secondoConducente" className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona secondo conducente</option>
                {listCustomer
                .map((customersSelect, index) =>
                (
                <option key={customersSelect.ID} value={customersSelect.ID}>{customersSelect.cognome} {customersSelect.nome} - {customersSelect.telefono}</option>
                )
                )}
                </select>
            </div>
            <div className="col-span-6 row-span-1 col-start-1 row-start-4">
                <label htmlFor="luogoDiConsegnaOut" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                LUOGO DI CONSEGNA OUT
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.luogoDiConsegnaOut} id="luogoDiConsegnaOut" name="luogoDiConsegnaOut" type="text" placeholder="Brusciano" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-6 row-span-1 col-start-7 row-start-4">
                <label htmlFor="luogoDiConsegnaIn" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                LUOGO DI CONSEGNA IN
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.luogoDiConsegnaIn} id="luogoDiConsegnaIn" name="luogoDiConsegnaIn" type="text" placeholder="Brusciano" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-4 row-span-1 col-start-1 row-start-5">
                <label htmlFor="tariffaGiornaliera" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                TARIFFA GIORNALIERA
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.tariffaGiornaliera} id="tariffaGiornaliera" name="tariffaGiornaliera" type="number" placeholder="50" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-4 row-span-1 col-start-5 row-start-5">
                <label htmlFor="tariffaMensile" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                TARIFFA MENSILE
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.tariffaMensile} id="tariffaMensile" name="tariffaMensile" type="number" placeholder="600" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-2 row-span-1 col-start-9 row-start-5">
                <label htmlFor="sconto" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SCONTO %
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.sconto} id="sconto" name="sconto" type="number" placeholder="10" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-4 row-span-1 col-start-1 row-start-6">
                <label htmlFor="franchigiaCasco" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CASCO / €
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.franchigiaCasco} id="franchigiaCasco" name="franchigiaCasco" type="number" placeholder="200" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-3 row-span-1 col-start-5 row-start-6">
                <label htmlFor="franchigiaFurtoIncendio" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                FURTO E INCENDIO / €
                </label>
                <input onChange={handleInputChange} value={contrattoDataForm.franchigiaFurtoIncendio} id="franchigiaFurtoIncendio" name="franchigiaFurtoIncendio" type="number" placeholder="500" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
        </div>
    </form>
    <PopUpAddContratto status={aperturaPop} onClose={() => setAperturaPop(false)} />
    </>
    )
}



export default DatiContratto