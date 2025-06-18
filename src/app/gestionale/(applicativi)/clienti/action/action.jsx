'use server'

//FETCH PER SCRIVERE I MEDIA DEL FORM SUL DATABASE
export const postClientiAction = async (formClientiData) => {

    const nome = formClientiData.get('nome') || '';
    const cognome = formClientiData.get('cognome') || '';
    const via = formClientiData.get('via') || '';
    const numeroCivico = formClientiData.get('numeroCivico') || '';
    const cap = formClientiData.get('cap') || '';
    const provincia = formClientiData.get('provincia') || '';
    const citta = formClientiData.get('citta') || '';
    const recapitoTelefonico = formClientiData.get('recapitoTelefonico') || '';
    const email = formClientiData.get('email') || '';
    const dataCreazioneCliente = Date()

    const clienteUploadData = {
        nome,
        cognome,
        via,
        numeroCivico,
        cap,
        provincia,
        citta,
        recapitoTelefonico,
        email,
        dataCreazioneCliente
    };

    fetch(process.env.URL_CLIENTI, {
            method: 'POST',
            headers: {
              'Authorization': `Token ${process.env.API_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteUploadData)  // Converti i dati in formato JSON
          })
            .then((response) => response.json())
            
            .catch((error) => console.error('Errore nella richiesta:', error)); // Aggiungi una gestione degli errori

}

//FETCH PER OTTENERE I MEDIA DAL DATABASE
export const getMediaAction = async () => {
    
    let media = []

    try {
        const response = await fetch(process.env.URL_MEDIA, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${process.env.API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        });

        if (!response.ok) {
        throw new Error('Errore nella fetch');
        }

        const data = await response.json();
        media = data.results;  // supponendo che i dati siano qui

    } catch (error) {
        console.error('Errore nella fetch:', error);
    }

    return (media)

}

//FETCH PER OTTENERE UN SOLO MEDIA DAL DATABASE
export const getOneMediaAction = async (id) => {
    
    let media = null

    try {
        const response = await fetch(`${process.env.URL_MEDIA_PATCH}${id}/?user_field_names=true`, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${process.env.API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        });
console.log('Fetching media from:', `${process.env.URL_MEDIA_PATCH}${id}/?user_field_names=true`);

        if (!response.ok) {
        throw new Error('Errore nella fetch');
        }

        const data = await response.json();
        media = data;  // supponendo che i dati siano qui

    } catch (error) {
        console.error('Errore nella fetch:', error);
    }

    return (media)

}

//FETCH PER MODIFICARE I MEDIA DAL DATABASE
export const putMediaAction = async (formData) => {
    
    const visibile = formData.get('visibile') || '';
    const id = formData.get('id');

    const mediaPutData = {
        visibile,
    };

    try {
        const res = await fetch(`${process.env.URL_MEDIA_PATCH}${id}/?user_field_names=true`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Token ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mediaPutData)
        });

        const json = await res.json();
        return json;

    } catch (error) {
        console.error('Errore nella richiesta:', error);
    }

}