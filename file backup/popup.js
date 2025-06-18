import { useEffect } from "react";

const PopUpAddCliente = ({ status, onClose, props }) => {

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                onClose(); // Chiude il popup dopo 3 secondi
            }, 4000);
        }
    }, [status, onClose]);

    if (!status) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-neutral-900/80 border border-fuchsia-500 p-10 rounded-lg shadow-lg text-center">
                <p className="text-white font-bold">Cliente  registrato con successo!</p>
                <button
                    onClick={onClose}
                    className="mt-5 px-2 py-1 bg-indigo-500 text-white text-sm rounded-lg"
                >
                    Chiudi
                </button>
            </div>
        </div>
    );
};

export default PopUpAddCliente;