'use client'

import { useState, useEffect } from 'react';
import { postClientiAction } from '../action/action';

import codiciComune from '../componenti/elencoComuni.json'
import capComuni from '../componenti/gi_cap.json'

const elencoProvincieItaliane = [...new Set(codiciComune.map(provincia => provincia.provincia))].sort()

export default function CaricamentoClienti () {

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

    const [formClientiData, setFormClientiData] = useState({
      nome: '',
      cognome: '',
      via: '',
      numeroCivico: '',
      cap: '',
      provincia: '',
      citta: '',
      recapitoTelefonico: '',
      email: '',
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const inputValue = type === "checkbox" ? checked : value;

       
      setFormClientiData({ ...formClientiData, [name]: inputValue,});
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

  return (

    <div className="overflow-auto ps-3 pe-3 w-[100%] h-[100%]">

      <form action={postClientiAction} className="rounded-lg shadow-lg w-[100%] h-full">

      {/* Nome */}
      <div className="mb-4">
        <label htmlFor="nome" className="block text-white mb-2">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formClientiData.nome}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>
      {/* Cognome */}
      <div className="mb-4">
        <label htmlFor="cognome" className="block text-white mb-2">Cognome</label>
        <input
          type="text"
          id="cognome"
          name="cognome"
          value={formClientiData.cognome}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>
      {/* Via */}
      <div className="mb-4">
        <label htmlFor="via" className="block text-white mb-2">Via</label>
        <input
          type="text"
          id="via"
          name="via"
          value={formClientiData.via}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>    
      {/* Numero Civico */}
      <div className="mb-4">
        <label htmlFor="numeroCivico" className="block text-white mb-2">Numero Civico</label>
        <input
          type="text"
          id="numeroCivico"
          name="numeroCivico"
          value={formClientiData.numeroCivico}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>
      {/* Provincia */}
      <div className="mb-4">
        <label htmlFor="provincia" className="block text-white text-300 mb-2">PROVINCIA</label>
        <select
          id="provincia"
          name="provincia"
          value={formClientiData.provincia}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600">
          <option value="">Seleziona la Provincia</option>
            {elencoProvincieItaliane.map((provincia, index) => (
              <option key={index} value={provincia}>{provincia}</option>
            ))}
        </select>
      </div>
      {/* Citta */}
      <div className="mb-4">
        <label htmlFor="citta" className="block text-white text-300 mb-2">Città</label>
        <select
          id="citta"
          name="citta"
          value={formClientiData.citta}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600">
          {elencoComuneProvinciaResidenza.map((comune, index) => (
            <option key={comune.ID} value={comune.comune} data-istat={`0${comune.codiceIstat}`}>{comune.comune}</option>
          ))}
        </select>
      </div>
      {/* CAP */}
      <div className="mb-4">
        <label htmlFor="cap" className="block text-white text-300 mb-2">CAP</label>
        <select
          id="cap"
          name="cap"
          value={formClientiData.cap}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600">
          <option>CAP</option>
          {capResidenza.map((cap, index) => (
            <option key={index} value={cap.cap}>{cap.cap}</option>
          ))}
        </select>
      </div>
      {/* Recapito Telefonico */}
      <div className="mb-4">
        <label htmlFor="recapitoTelefonico" className="block text-white mb-2">Recapito Telefonico</label>
        <input
          type="text"
          id="recapitoTelefonico"
          name="recapitoTelefonico"
          value={formClientiData.recapitoTelefonico}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formClientiData.email}
          onChange={handleChange}
          className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
        />
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-600"
      >
        Invia
      </button>
    </form> 



    </div>

  );
}
