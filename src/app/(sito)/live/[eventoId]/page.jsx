// app/eventi/[idEvento]/page.jsx

export default function Eventi({ params }) {
  const { eventoId } = params;

  return (
    <div>
      <h1>ID Evento: {eventoId}</h1>
    </div>
  );
}