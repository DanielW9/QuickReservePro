import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/reservations`)
      .then(res => setData(res.data))
      .catch(err => console.log("Oczekiwanie na API..."));
  }, [apiUrl]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>QuickReserve Pro - Dashboard</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h3>Lista rezerwacji:</h3>
        {data.length > 0 ? (
          <ul>{data.map((item, i) => <li key={i}>{item.name}</li>)}</ul>
        ) : (
          <p>Brak danych (Połączono z: {apiUrl})</p>
        )}
      </div>
    </div>
  );
}
export default App;