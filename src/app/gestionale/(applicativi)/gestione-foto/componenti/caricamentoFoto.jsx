'use client'

import { postMediaAction } from "../action/actionCaricamentoMedia"

export default function CaricamentoFoto() {

  return (
    <div className="overflow-auto ps-3 pe-3 w-[100%] h-[100%]">

      <form action={postMediaAction} className="rounded-lg shadow-lg w-[100%] h-full" method="post">

        {/* Data Evento */}
        <div className="mb-4">
          <label htmlFor="dataEvento" className="block text-white mb-2">Data Evento</label>
          <input
            type="date"
            id="dataEvento"
            name="dataEvento"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
            required
          />
        </div>

        {/* Tipologia */}
        <div className="mb-4">
          <label htmlFor="tipologia" className="block text-white text-300 mb-2">Tipologia</label>
          <select
            id="tipologia"
            name="tipologia"
            defaultValue=""
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
            required
          >
            <option value="" disabled>Seleziona tipologia file</option>
            <option value="immagine">Immagine</option>
            <option value="video">Video</option>
          </select>
        </div>

        {/* Wedding */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="wedding"
            name="wedding"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="wedding" className="text-white">Wedding</label>
        </div>

        {/* Event */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="event"
            name="event"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="event" className="text-white">Event</label>
        </div>

        {/* BW */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="bw"
            name="bw"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="bw" className="text-white">BW</label>
        </div>

        {/* Baby */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="baby"
            name="baby"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="baby" className="text-white">Baby</label>
        </div>

        {/* Food */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="food"
            name="food"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="food" className="text-white">Food</label>
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-white mb-2">File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*,video/*"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
          />
        </div>

        {/* Posizione */}
        <div className="mb-4">
          <label htmlFor="posizione" className="block text-white mb-2">Posizione</label>
          <input
            type="text"
            id="posizione"
            name="posizione"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-rose-600"
            required
          />
        </div>

        {/* Visibile */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="visibile"
            name="visibile"
            className="rounded text-rose-600 focus:ring-rose-600"
          />
          <label htmlFor="visibile" className="text-white">Visibile</label>
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
  )
}

