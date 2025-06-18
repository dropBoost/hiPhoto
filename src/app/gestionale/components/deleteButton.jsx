'use client'

import { deleteMediaAction } from "../(applicativi)/gestione-foto/action/action";

export default function DeleteButton({ uuid }) {
  const handleDelete = async () => {
    const confirm = window.confirm('Sei sicuro di voler eliminare questo media?');
    if (!confirm) return;

    const res = await deleteMediaAction(uuid);
    if (res.success) {
      alert('Media eliminato con successo!');
      // trigger eventuale refresh, router.refresh() o altro
    } else {
      alert('Errore: ' + res.error);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:underline">
      Elimina
    </button>
  );
}