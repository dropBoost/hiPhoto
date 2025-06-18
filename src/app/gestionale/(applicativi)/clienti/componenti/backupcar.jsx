'use client'

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import PopUpAddCliente from "./popUpAddCliente";
import codiciComune from '../elencoComuni.json'
import capComuni from '../gi_cap.json'

const iconaUser = <FontAwesomeIcon className="me-2 text-fuchsia-500" icon={faUser} />
const iconaUserPlus = <FontAwesomeIcon className="me-2" icon={faUserPlus} />

const apiToken = 'NIKNiFuaKS6H9dGuVo0LWVtlH8LXA6QA'; // Sostituisci con il tuo API token
const tableAnagraficaClientiId = '456576'; // Sostituisci con l'ID della tua tabella
const urlTableClienti = `https://api.baserow.io/api/database/rows/table/${tableAnagraficaClientiId}/`;

const elencoProvincieItaliane = [...new Set(codiciComune.map(provincia => provincia.provincia))].sort()


function RegistrazioneClienti () {

    const [provinciaTemp, setProvinciaTemp] = useState("");
    const [provinciaTempResidenza, setProvinciaTempResidenza] = useState("");
    const [cittaResidenzaTempISTAT, setCittaResidenzaTemp] = useState("");

    const [elencoComuneProvincia, setElencoComuneProvincia] = useState([]);
    const [elencoComuneProvinciaResidenza, setElencoComuneProvinciaResidenza] = useState([]);
    const [capResidenza, setCapResidenza] = useState([]);

    useEffect(() => {
        const comuniFiltrati = codiciComune.filter(comune => comune.provincia === provinciaTemp);
        setElencoComuneProvincia(comuniFiltrati);
    }, [provinciaTemp]);

    useEffect(() => {
        const comuniFiltratiResidenza = codiciComune.filter(comune => comune.provincia === provinciaTempResidenza);
        setElencoComuneProvinciaResidenza(comuniFiltratiResidenza);
    }, [provinciaTempResidenza]);

    useEffect(() => {
        const capFiltrato = capComuni.filter(cap => cap.codice_istat == cittaResidenzaTempISTAT);
        setCapResidenza(capFiltrato);
    }, [cittaResidenzaTempISTAT]);
    
    
    const [aperturaPop, setAperturaPop] = useState(false);

    const [clienteDataForm, setClienteAdd] = useState({

        nome: "",
        cognome: "",
        luogoDiNascita: "",
        provinciaDiNascita: "",
        dataDiNascita: "",
        codiceFiscale: "",
        via: "",
        civico: "",
        cap: "",
        citta: "",
        provincia: "",
        cartaIdentita: "",
        scadenzaCartaIdentita:"",
        patente: "",
        scadenzaPatente: "",
        enteRilascio: "",
        recapitoTelefonico: "",
        email:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        const cliente = {
            field_3552800: clienteDataForm.nome,
            field_3552801: clienteDataForm.cognome,
            field_3552802: clienteDataForm.luogoDiNascita,
            field_3552803: clienteDataForm.provinciaDiNascita,
            field_3552804: clienteDataForm.dataDiNascita,
            field_3552805: clienteDataForm.codiceFiscale,
            field_3552806: clienteDataForm.via,
            field_3552807: clienteDataForm.civico,
            field_3552808: clienteDataForm.cap,
            field_3552809: clienteDataForm.citta,
            field_3552810: clienteDataForm.provincia,
            field_3552811: clienteDataForm.cartaIdentita,
            field_3552812: clienteDataForm.scadenzaCartaIdentita,
            field_3552813: clienteDataForm.patente,
            field_3552814: clienteDataForm.scadenzaPatente,
            field_3552815: clienteDataForm.enteRilascio,
            field_3552816: clienteDataForm.recapitoTelefonico,
            field_3552817: clienteDataForm.email,
        }

        if (
            clienteDataForm.codiceFiscale.length !== 16 ||
            clienteDataForm.name == "" ||
            clienteDataForm.cognome == "" ||
            clienteDataForm.via == "" ||
            clienteDataForm.civico == "" ||
            clienteDataForm.cartaIdentita == "" ||
            clienteDataForm.scadenzaCartaIdentita == "" ||
            clienteDataForm.patente == "" ||
            clienteDataForm.scadenzaPatente == "" ||
            clienteDataForm.enteRilascio == "" ||
            clienteDataForm.recapitoTelefonico == "" ||
            clienteDataForm.email == ""
        ){
            console.log("errore nei campi")
        } else {
            fetch(urlTableClienti, {
                method: 'POST',
                headers: {
                  'Authorization': `Token ${apiToken}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente)  // Converti i dati in formato JSON
              })
                .then((response) => response.json())
                .then(data => {
                    setAperturaPop(true)
                    console.log('Nuovo cliente aggiunto:', data);
                })
                .catch((error) => console.error('Errore nella richiesta:', error));
        }


    }

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        const inputValue = type == "checkbox" ? checked : value
        
        setClienteAdd({...clienteDataForm, [name]: inputValue,})
        if (name == "provinciaDiNascita"){
            setProvinciaTemp(value)
        } else if(name == "provincia"){
            setProvinciaTempResidenza(value)
        } else if(name == "citta"){
            const selectedOption = e.target.options[e.target.selectedIndex];
            const istatValue = selectedOption.getAttribute('data-istat');
            setCittaResidenzaTemp(istatValue);
        }

    }

    

    return(
    <>
    <form className="p-5 bg-neutral-950 w-[100%]" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between">       
            <h6 className="mb-5 text-indigo-400 p-1 font-bold">{iconaUser}REGISTRAZIONE ANAGRAFICA CLIENTI</h6>
            <button id="addCarButton" className="p-1 ps-3 text-[0.9rem] bg-fuchsia-950 hover:bg-neutral-900 hover:border hover:border-fuchsia-500 text-white" type="submit">
                {iconaUserPlus}
            </button>
        </div>
        <hr className='mb-5 border-indigo-400/30'></hr>
        <div className="grid grid-cols-4 grid-rows-8 gap-5">
            <div className="col-span-2 row-span-1 col-start-1 row-start-1">
                <label htmlFor="nome" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                NOME
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.nome} id="nome" name="nome" type="text" placeholder="Davide" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/>
            </div>
            <div className="col-span-2 row-span-1 col-start-3 row-start-1">
                <label htmlFor="cognome" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                COGNOME
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.cognome} id="cognome" name="cognome" type="text" placeholder="Rossi" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-1 row-start-2">
                <label htmlFor="provinciaDiNascita" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                PROVINCIA DI NASCITA
                </label>
                <select 
                    onChange={handleInputChange} 
                    value={clienteDataForm.provinciaDiNascita} 
                    id="provinciaDiNascita"
                    name="provinciaDiNascita" 
                    autoComplete="provincia"
                    required
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona provincia di nascita</option>
                    {elencoProvincieItaliane.map((provincia, index) => (
                    <option key={index} value={provincia}>{provincia}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-2 row-span-1 col-start-2 row-start-2">
                <label htmlFor="luogoDiNascita" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                COMUNE DI NASCITA
                </label>
                <select 
                    onChange={handleInputChange} 
                    value={clienteDataForm.luogoDiNascita} 
                    id="luogoDiNascita" 
                    name="luogoDiNascita" 
                    autoComplete="comune"
                    required
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona comune di nascita</option>
                    {elencoComuneProvincia.map((comune, index) => (
                    <option key={comune.ID} value={comune.comune}>{comune.comune}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-2">
                <label htmlFor="dataDiNascita" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                DATA DI NASCITA
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.dataDiNascita} id="dataDiNascita" name="dataDiNascita" type="date" placeholder="10-09-1991" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-3 row-span-1 col-start-1 row-start-3">
                <label htmlFor="codiceFiscale" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CODICE FISCALE
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.codiceFiscale} id="codiceFiscale" name="codiceFiscale" type="text" placeholder="VNCDVD91P10H935Y" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-3">
                <label htmlFor="codiceFiscale" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                calcolo codice fiscale
                </label>
                {/* <input onChange={handleInputChange} value={clienteDataForm.codiceFiscale} id="codiceFiscale" name="codiceFiscale" type="text" placeholder="Classe A" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]"/> */}
            </div>
            <div className="col-span-3 row-span-1 col-start-1 row-start-4">
                <label htmlFor="via" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                VIA
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.via} id="via" name="via" type="text" placeholder="via Roma" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-4">
                <label htmlFor="civico" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CIVICO
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.civico} id="civico" name="civico" type="text" placeholder="71" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-5">
                <label htmlFor="cap" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CAP
                </label>
                <select 
                    onChange={handleInputChange}
                    value={clienteDataForm.cap}
                    id="cap"
                    name="cap"
                    autoComplete="cap"
                    required
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                    <option>CAP</option>
                    {capResidenza.map((cap, index) => (
                    <option key={index} value={cap.cap}>{cap.cap}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-2 row-span-1 col-start-2 row-start-5">
                <label htmlFor="citta" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CITTà
                </label>
                <select 
                    onChange={handleInputChange} 
                    value={clienteDataForm.citta}
                    id="citta"
                    name="citta"
                    autoComplete="città"
                    required
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                    {elencoComuneProvinciaResidenza.map((comune, index) => (
                    <option key={comune.ID} value={comune.comune} data-istat={`0${comune.codiceIstat}`}>{comune.comune}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-1 row-span-1 col-start-1 row-start-5">
            <label htmlFor="provincia" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                PROVINCIA
                </label>
                <select 
                    onChange={handleInputChange}
                    value={clienteDataForm.provincia}
                    id="provincia"
                    name="provincia" 
                    autoComplete="provincia"
                    required
                    className="rounded-lg p-1 ps-3 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]">
                <option>seleziona provincia di nascita</option>
                    {elencoProvincieItaliane.map((provincia, index) => (
                    <option key={index} value={provincia}>{provincia}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-3 row-span-1 col-start-1 row-start-6">
                <label htmlFor="cartaIdentita" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                CARTA DI IDENTITà
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.cartaIdentita} id="cartaIdentita" name="cartaIdentita" type="text" placeholder="CI658452" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-6">
                <label htmlFor="scadenzaCartaIdentita" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SCADENZA C.I.
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.scadenzaCartaIdentita} id="scadenzaCartaIdentita" name="scadenzaCartaIdentita" type="date" placeholder="20-09-2030" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-2 row-span-1 col-start-1 row-start-7">
                <label htmlFor="patente" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                PATENTE
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.patente} id="patente" name="patente" type="text" placeholder="PG58954" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-3 row-start-7">
                <label htmlFor="scadenzaPatente" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                SCADENZA PATENTE
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.scadenzaPatente} id="scadenzaPatente" name="scadenzaPatente" type="date" placeholder="20-10-2040" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-1 row-span-1 col-start-4 row-start-7">
                <label htmlFor="enteRilascio" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                ENTE RILASCIO
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.enteRilascio} id="enteRilascio" name="enteRilascio" type="text" placeholder="MIT-25415" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-2 row-span-1 col-start-1 row-start-8">
                <label htmlFor="recapitoTelefonico" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                RECAPITO TELEFONICO
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.recapitoTelefonico} id="recapitoTelefonico" name="recapitoTelefonico" type="text" placeholder="366 33 22 999" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
            <div className="col-span-2 row-span-1 col-start-3 row-start-8">
                <label htmlFor="email" className="block text-sm/6 font-medium text-indigo-400 w-[100%] mb-2">
                EMAIL
                </label>
                <input onChange={handleInputChange} value={clienteDataForm.email} id="email" name="email" type="email" placeholder="email@email.it" className="rounded-lg p-1 ps-4 block text-base text-gray-500 placeholder:text-gray-700 focus:outline-none sm:text-sm/6 w-[100%]" required/>
            </div>
        </div>
    </form>
    <PopUpAddCliente status={aperturaPop} onClose={() => setAperturaPop(false)} />
    </>
    )
}



export default RegistrazioneClienti
