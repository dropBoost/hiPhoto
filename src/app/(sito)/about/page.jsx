export default function PageAbout () {
    return(
        <>
        <div className="bg-white lg:ps-[8rem] lg:pe-[8rem]">
            <div className="pe-20 ps-10 pb-5 pt-5 border-b border-b-red-700">
                <h1 className="font-playfair text-stone-300 text-7xl">History</h1>
            </div>
            {/* BLOCCO FOTO + TESTO  */}
            <div className="flex lg:flex-row flex-col">
                <div className="bg-stone-800 p-10 lg:w-[120vw] h-[40vh] flex justify-center items-center bg-[url('/bio.jpg')] bg-cover bg-center">
                </div>
                <div className="pt-5 pe-10 ps-10">
                    <h3 className="text-red-800 text-3xl font-playfair mb-3 mt-3">Benvenuti nel mondo di STUDIO BARRASSO</h3>
                    <p className="text-stone-600">
                        Da oltre quarant’anni, Sandro Barrasso racconta storie con la luce, cattura emozioni attraverso l’obiettivo e trasforma attimi irripetibili in ricordi senza tempo. Lo STUDIO BARRASSO, fondato nel cuore della passione per la fotografia, è oggi un punto di riferimento nel mondo del wedding e degli eventi privati e aziendali.
                    </p><br/>
                    <p className="text-stone-600">
                        Con un’esperienza maturata in decenni di lavoro sul campo, Sandro ha affinato uno stile unico: elegante, autentico, profondamente umano. I suoi scatti non sono semplici immagini, ma racconti visivi che sanno parlare al cuore. Fotografie che sanno conservare il profumo di un abbraccio, la luce negli occhi degli sposi, la magia sospesa di un sì sussurrato.
                    </p>
                </div>
            </div>
            {/* FINE BLOCCO FOTO + TESTO  */}
            {/* BLOCCO TESTO  */}
            <div className="flex flex-row">
                <div className="pe-10 ps-10 pb-10">
                    <h3 className="text-red-800 text-3xl font-playfair mb-3 mt-3">Una storia di famiglia, una passione che si rinnova</h3>
                    <p className="text-stone-600">
                        Oggi accanto a Sandro c’è anche Simone Barrasso, suo figlio, videomaker specializzato nel settore dello spettacolo e delle cerimonie. Con uno sguardo fresco e contemporaneo, Simone porta all'interno dello studio un linguaggio visivo moderno e cinematografico, capace di fondere tecnica e creatività in ogni produzione video.
                        Questa sinergia tra padre e figlio, tra esperienza e innovazione, rappresenta l’anima di STUDIO BARRASSO: uno spazio dove tradizione e futuro convivono, dove ogni evento diventa un'opera d'arte in movimento.
                    </p>
                    <h3 className="text-red-800 text-3xl font-playfair mb-3 mt-3">Dalle radici napoletane a tutta Italia</h3>
                    <p className="text-stone-600">
                        Lo Studio Barrasso nasce a Napoli, nel cuore pulsante di una città che vive d’arte, di luce e di emozioni. È qui che Sandro Barrasso ha mosso i primi passi nel mondo della fotografia, ispirato dalla vivacità dei volti, dai colori intensi, dal fascino autentico delle tradizioni partenopee.
                        Questa terra, ricca di storia e sentimento, ha forgiato il suo stile: caldo, empatico, sempre attento all’essenza delle persone.
                    </p>
                    <p className="text-stone-600">
                        Con il tempo, la professionalità dello studio e la qualità delle immagini hanno varcato i confini della città, raggiungendo coppie ed eventi in tutta Italia. Oggi Studio Barrasso è riconosciuto a livello nazionale per il suo approccio unico, la cura nei dettagli e la capacità di adattarsi con eleganza e discrezione a ogni contesto, dal matrimonio in costiera amalfitana alla cerimonia nel cuore di Milano.
                    </p>
                    <p className="text-stone-600">
                        Non importa dove si trovi il tuo evento: Sandro e Simone Barrasso con il loro team portano ovunque la stessa passione, la stessa dedizione e lo stesso sguardo profondo che li ha resi, negli anni, un nome di riferimento nel mondo della fotografia.
                    </p>
                    <h3 className="text-red-800 text-3xl font-playfair mb-3 mt-3">Fotografia e video per matrimoni, cerimonie ed eventi speciali</h3>
                    <p className="text-stone-600">
                        Che si tratti di un matrimonio intimo o di una grande celebrazione, di una festa privata o di un evento aziendale, STUDIO BARRASSO mette a disposizione un team competente, attrezzature professionali e, soprattutto, una sensibilità profonda verso le persone e i loro momenti più importanti.
                        Ogni progetto viene seguito con cura artigianale, ascoltando i desideri dei clienti, studiando ogni dettaglio e costruendo un racconto visivo su misura. Lo stile? Naturale, elegante, mai invasivo. La filosofia? Rispettare l’autenticità degli attimi, esaltarne la bellezza senza forzarla.
                    </p>
                    <h3 className="text-red-800 text-3xl font-playfair mb-3 mt-3">Emozioni che restano, immagini che vivono</h3>
                    <p className="text-stone-600">
                        Sappiamo quanto sia importante affidarsi a chi sa guardare oltre la superficie, a chi sa cogliere l’anima di un momento. Per questo chi sceglie STUDIO BARRASSO non sceglie solo un servizio, ma un compagno di viaggio in grado di restituire emozioni sincere, immagini vive, ricordi autentici.
                        Ogni lavoro firmato Barrasso è pensato per durare nel tempo: non solo per essere visto, ma per essere sentito. Un archivio prezioso di sensazioni, un racconto personale che rimane.
                    </p>                    
                </div>
            </div>
            {/* FINE BLOCCO TESTO  */}
            {/* BLOCCO FOTO  */}
            <div className="flex flex-row">
                <div className="bg-stone-800 bg-[url('https://www.sandrobarrasso.com/media/wedding-1.jpg')] bg-cover bg-center p-10 flex justify-center items-center h-[400px] w-screen"></div>
            </div>
            {/* FINE BLOCCO FOTO  */}
        </div>
        </>
    )
}