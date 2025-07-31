import React, { useState } from 'react';
import '../App.css';

const menu = [
  {
    category: 'Zupy',
    items: [
      { name: 'Krem pomidorowo-paprykowy', price: 18, image: '/images/krempomidorowopaprykowy.png', description: 'Krem z pieczonej papryki i pomidorów z nutą czosnku.' },
      { name: 'Krem z kukurydzy', price: 20, image: '/images/kremzkukurydzy.png', description: 'Delikatny krem z kukurydzy z dodatkiem kolendry.' },
      { name: 'Pozole', price: 28, image: '/images/pozole2.png', description: 'Tradycyjna zupa z kukurydzy cacahuazintle i mięsa wieprzowego.' },
    ]
  },
  {
    category: 'Burrito',
    items: [
      { name: 'Burrito Chilli con Carne', price: 43, image: '/images/burritochili.png', description: 'Wołowina duszona z fasolą, przyprawami i serem w tortilli.' },
      { name: 'Burrito Tinga de Pollo', price: 43, image: '/images/burritopollo.png', description: 'Kurczak gotowany w sosie chipotle z ryżem i fasolą.' },
    ]
  },
  {
    category: 'Quesadilla',
    items: [
      { name: 'Quesadilla Tinga de Pollo z warzywami', price: 42, image: '/images/qwarzywa.png', description: 'Kurczak z warzywami i serem w chrupiącej tortilli.' },
      { name: 'Quesadilla Carnitas', price: 42, image: '/images/qcarnitas.png', description: 'Wieprzowina carnitas z serem i salsą.' },
      { name: 'Quesadilla 4 sery', price: 42, image: '/images/qsery.png', description: 'Mieszanka 4 serów: cheddar, mimolette, mozzarella, pleśniowy.' },
    ]
  },
  {
    category: 'Sosy',
    items: [
      { name: 'Sos orzechowy', price: 4, image: '/images/sosy.png', description: 'Aksamitny sos z orzechów ziemnych.' },
      { name: 'Sos chilli', price: 4, image: '/images/sosy.png', description: 'Ostry sos na bazie papryczek chilli.' },
      { name: 'Sos Tomatillo', price: 4, image: '/images/sosy.png', description: 'Zielony sos z pomidorów tomatillo i kolendry.' },
      { name: 'Sos Guacamole', price: 4, image: '/images/sosy.png', description: 'Klasyczne guacamole z awokado, limonką i cebulą.' },
      { name: 'Sos Pico de Gallo', price: 4, image: '/images/sosy.png', description: 'Salsa z pomidorów, cebuli i kolendry.' },
      { name: 'Sos mango', price: 4, image: '/images/sosy.png', description: 'Słodko-pikantny sos z mango i papryczek.' },
    ]
  }
];

export default function Mexico() {
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);

  const handleReservation = () => {
    alert(`Zarezerwowano stolik dla ${name} (${guests} osób) na ${reservationDate} o ${reservationTime}`);
  };

  return (
    <div className="mexico">
      <h2 className="menumexico">MENU BIAŁA MAŁPA MEXICO</h2>
      {menu.map((section) => (
        <div key={section.category}>
          <h3 className="category-heading">{section.category}</h3>
          {section.items.map((item) => (
            <div key={item.name} className="dish-card">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price.toFixed(2)} zł</p>
                <p><em>{item.description}</em></p>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="reservation-box">
        <h2>Rezerwacja stolika</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label>Imię: </label>
          <input
            type="text"
            placeholder="Twoje imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Liczba osób: </label>
          <input
            type="number"
            min="1"
            max="20"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Wybierz datę: </label>
          <input
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Wybierz godzinę: </label>
          <select
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', width: '100%' }}
          >
            <option value="">-- wybierz godzinę --</option>
            {Array.from({ length: 18 }, (_, i) => {
              const hour = 12 + Math.floor(i / 2);
              const minutes = i % 2 === 0 ? '00' : '30';
              const time = `${String(hour).padStart(2, '0')}:${minutes}`;
              return <option key={time} value={time}>{time}</option>;
            })}
          </select>
        </div>
        <button onClick={handleReservation} style={{ width: '100%' }}>Zarezerwuj stolik</button>
      </div>
    </div>
  );
}
