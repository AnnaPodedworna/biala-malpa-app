import React from 'react';
import { Link } from 'react-router-dom';

export default function Picker() {
  return (
    <div className="picker">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="/mexico">
          <img src="/images/bialamalpamexico.jpg" alt="Biała Małpa Mexico" title="Mexico" />
        </a>
        <a href="/multitap">
          <img src="/images/bialamalpa.png" alt="Biała Małpa Multitap" title="Multitap" />
        </a>
      </div>
            <div className="home-info">
        <div>
          <h2>MEXICO</h2>
          <p>Autentyczna kuchnia meksykańska</p>
          <p>Duży wybór tequili, mezcali i sotoli</p>
        </div>
        <div className="home-info2">
          <h2>MULTITAP</h2>
          <p>Ponad 500 rodzajów piw butelkowych w ciągłej ofercie</p>
          <p>30 piw lanych</p>
          <p>20 kranów + 4 pompy</p>
          <p>Pierwszy BeerWall w Katowicach z sześcioma kranami!</p>
        </div>
      </div>
      <footer className="footer">
        <p><strong>Mexico:</strong> 604 866 173</p>
        <p><strong>Adres:</strong> 3 Maja 38, 40-097 Katowice</p>
        <p><strong>Multitap:</strong> 720 866 173</p>
      </footer>
    </div>
  );
}



    