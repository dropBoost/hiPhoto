import CardContratto from './redazioneContrattiCardContratto';
import { useState, useEffect } from 'react';
import GruppoIconeButton from "./gruppoIconeButton";
import BottoneAggiornaListaAuto from "./redazioneContrattiBottoneAggiornaAuto";
import BottoneAggiungiContratto from "./redazioneContrattiBottoneAggiungiContratto";
import BottoneAggiornaElencoContratti from './redazioneContrattiBottoneAggiorniElencoContratti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPassport, faFileImport } from '@fortawesome/free-solid-svg-icons';

const apiToken = 'NIKNiFuaKS6H9dGuVo0LWVtlH8LXA6QA';
const tableAnagraficaClientiId = '456576';
const tableContrattiId = '456578';
const tableVeicoliId = '456549';
const urlTableContratti = `https://api.baserow.io/api/database/rows/table/${tableContrattiId}/?user_field_names=true`;
const urlTableClienti = `https://api.baserow.io/api/database/rows/table/${tableAnagraficaClientiId}/?user_field_names=true`;
const urlTableVeicoli = `https://api.baserow.io/api/database/rows/table/${tableVeicoliId}/?user_field_names=true`;

const iconaContratto = <FontAwesomeIcon className="me-2 text-fuchsia-500 text-xl" icon={faPassport} />


function ElencoContratti () {

    const [contratti, setContrattoData] = useState([]);
    const [anagrafica, setAnagraficaData] = useState([]);
    const [veicoli, setVeicoliData] = useState([]);

    // Funzione per ottenere i contratti
    const fetchContratti = () => {
      fetch(urlTableContratti, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${apiToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((contratto) => {
          setContrattoData(contratto.results);
        })
        .catch((error) => console.error('Errore nella fetch dei contratti:', error));
    };

    // Funzione per ottenere i clienti
    const fetchClienti = () => {
        fetch(urlTableClienti, {
          method: 'GET',
          headers: {
            'Authorization': `Token ${apiToken}`,
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((clienti) => {
              setAnagraficaData(clienti.results);
              
          })
          .catch((error) => console.error('Errore nella fetch dei clienti:', error));
    };

    // Funzione per ottenere i veicoli
    const fetchVeicoli = () => {
      fetch(urlTableVeicoli, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${apiToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((veicoli) => {
            setVeicoliData(veicoli.results);
        })
        .catch((error) => console.error('Errore nella fetch dei veicoli:', error));
  };

    // Funzione per fare entrambe le fetch
    const aggiornaDati = () => {
        fetchContratti();
        fetchClienti();
        fetchVeicoli()
    };

    // Esegui la fetch iniziale quando il componente viene caricato
    useEffect(() => {
      fetchContratti();
      fetchClienti();
      fetchVeicoli();
    }, []);

 
      return(
        <>
          <div className="flex items-start justify-between">
              <h6 className="mb-5 text-indigo-400 p-1 font-bold">{iconaContratto}  ELENCO CONTRATTI</h6>
              <GruppoIconeButton>
                  <BottoneAggiornaElencoContratti action={aggiornaDati} />
              </GruppoIconeButton>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 max-h-[75vh] gap-5 overflow-y-auto pe-5">
          {contratti?.length > 0 ? (
            contratti.map((contratto, index) => {

              const clienteInfo = anagrafica.find(cliente => cliente.ID === contratto.cliente) || {};
              const veicoloInfo = veicoli.find(veicolo => veicolo.ID === contratto.veicolo) || {};
              const secondoConducente = anagrafica.find(secondoConducente => secondoConducente.ID === contratto.secondoConducente ) || {};

              return (
                <CardContratto
                  key={contratto.ID}
                  nominativo={`${clienteInfo?.nome ?? 'Nome non disponibile'} ${clienteInfo?.cognome ?? ''}`}
                  nome={clienteInfo.nome}
                  cognome={clienteInfo.cognome}
                  marca={veicoloInfo.marca}
                  modello={veicoloInfo.modello}
                />
              );
            })
          ) : (
            <p>Caricamento o nessun contratto disponibile...</p>
          )}
          </div>
        </>
      );
}










