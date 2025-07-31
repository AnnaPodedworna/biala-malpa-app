import React, { useEffect, useState } from 'react';
import { useBeer } from '../context/BeerContext';
import '../App.css';

export default function Multitap() {
  const { beers } = useBeer();
  const [search, setSearch] = useState('');
  const [foundBeer, setFoundBeer] = useState(null);
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const loadBeers = async () => {
      try {
        const response = await fetch('/mock-api/mock-api-100-beers.json');
        const data = await response.json();
        setAllBeers(data.beers || []);
      } catch (error) {
        console.error('Błąd ładowania mock API:', error);
      }
    };
    loadBeers();
  }, []);

const handleSearch = () => {
  const trimmed = search.trim();
  if (!trimmed) {
    setFoundBeer(null);
    return;
  }

  const match = allBeers.find(b =>
    b.name.toLowerCase().includes(trimmed.toLowerCase())
  );
  setFoundBeer(match || false);
};

  const handleReset = () => {
    setSearch('');
    setFoundBeer(null);
  };

  return (
    <div className="multitap">
      <h2 className="beerwall">BEER WALL</h2>

      <div>
        {beers.map((beer, index) => (
          <div key={index} className="beer-card">
            <img src={beer.image} alt={beer.name} />
            <div>
              <h4>{beer.name}</h4>
              <p>{beer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="beer-info reservation-box">
        <h3>Co piję?</h3>
        <input
          type="text"
          placeholder="Wpisz nazwę piwa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleSearch}>Szukaj</button>
          {foundBeer !== null && (
            <button onClick={handleReset} style={{ marginLeft: '1rem' }}>
              Powrót
            </button>
          )}
        </div>
      </div>

      <div className="beer-grid">
        {foundBeer === null &&
          allBeers.map((beer, index) => (
            <div key={index} className="beer-title">
              <img src={beer.image} alt={beer.name} />
              <h4>{beer.name}</h4>
            </div>
          ))}

        {foundBeer && (
          <div className="beer-card expanded">
            <img src={foundBeer.image} alt={foundBeer.name} />
            <div>
              <h4>{foundBeer.name}</h4>
              <p><strong>Styl:</strong> {foundBeer.style}</p>
              <p><strong>ABV:</strong> {foundBeer.abv}</p>
              <p><strong>Browar:</strong> {foundBeer.brewery}</p>
              <p><strong>Opis:</strong> {foundBeer.description}</p>
            </div>
          </div>
        )}

        {foundBeer === false && (
          <p style={{ marginTop: '1rem' }}>Nie znaleziono piwa.</p>
        )}
      </div>
    </div>
  );
}