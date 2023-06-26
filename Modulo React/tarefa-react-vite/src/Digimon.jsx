import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DigimonList() {
  const [digimons, setDigimons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
        setDigimons(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDigimons = digimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Digimons</h1>
      <input type="text" placeholder="Procure digimon favorito" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredDigimons.map((digimon) => (
         
            <div key={digimon.id} style={{ border: '1px solid black', borderRadius:'10%', width:'400px', textAlign:'center' }}>
              <img src={digimon.img} alt={digimon.name} />
              <p>nome:{digimon.name}</p>
              <p>nivel:{digimon.level}</p>
            </div>
        
        ))}
      </ul>
    </div>
  );
}

export default DigimonList;

