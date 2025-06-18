'use client'

import { useEffect, useState } from "react";
import { putMediaAction } from "../action/action.jsx"
import { getOneMediaAction } from "../action/action.jsx"

export default function PopUpUPDATEMedia({ status, onClose, id }) {

    const [visibile, setVisibile] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (status && id) {
            async function fetchMedia() {
                const data = await getOneMediaAction(id);
                if (data && data.visibile !== undefined) {
                    setVisibile(data.visibile);
                }
            }
            fetchMedia();
        }
    }, [status, id]);

    useEffect(() => {
        if (saved) {
            const timer = setTimeout(() => {
                setSaved(false);
                onClose(); // chiude dopo 3 secondi
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [saved, onClose]);

    if (!status) return null;

    console.log("test", visibile)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-neutral-900/80 border w-[250px] border-rose-600 p-10 rounded-lg shadow-lg text-center">
                {saved ? (
                    <p className="text-neutral-400 font-semibold">Media aggiornato con successo!</p>
                ) : (
                    <form
                        action={async (formData) => {
                            const newFormData = new FormData();
                            newFormData.append("visibile", visibile);
                            newFormData.append("id", id);
                            await putMediaAction(newFormData, id);
                            setSaved(true); // attiva il messaggio
                        }}
                        className="w-full"
                    >
                        <input type="hidden" name="id" value={id} />
                        <input type="hidden" name="visibile" value={visibile} />

                        <div className="mb-4 flex items-center justify-center gap-2">
                            <input
                                type="checkbox"
                                id="visibile"
                                checked={visibile}
                                onChange={(e) => setVisibile(e.target.checked)}
                                className="accent-rose-600 w-4 h-4"
                            />
                            <label htmlFor="visibile" className="text-white text-sm">Visibile</label>
                        </div>

                        <button
                            type="submit"
                            className="mt-5 me-2 px-2 py-1 bg-rose-400 hover:bg-rose-600 text-white text-sm rounded-lg"
                        >
                            Aggiorna
                        </button>
                        <button
                            onClick={onClose}
                            className="mt-5 px-2 py-1 bg-neutral-700 hover:bg-neutral-800 text-white text-sm rounded-lg"
                        >
                            Chiudi
                        </button>
                    </form>
                )}


            </div>
        </div>
    );
}