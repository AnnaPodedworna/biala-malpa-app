import React, { useState } from 'react';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rezerwacja dla ${name} na ${people} osób, termin: ${date}`);
    setName('');
    setPeople('');
    setDate('');
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h3>Zarezerwuj stolik</h3>
      <input type="text" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Liczba osób" value={people} onChange={(e) => setPeople(e.target.value)} required />
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Rezerwuj</button>
    </form>
  );
}
