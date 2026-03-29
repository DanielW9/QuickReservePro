import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8081";

  useEffect(() => {
    axios.get(`${apiUrl}/reservations`)
      .then(res => {
        setData(res.data);
        console.log("Dane pobrane pomyślnie!");
      })
      .catch(err => console.log("Oczekiwanie na API pod adresem: " + apiUrl));
  }, [apiUrl]);

  const handleAdd = async () => {
    const name = prompt("Podaj nazwę rezerwacji:");
    if (!name) return;
    try {
      await axios.post(`${apiUrl}/reservations`, { name });
      window.location.reload();
    } catch (err) {
      alert("Błąd dodawania!");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>QuickReserve Pro - Dashboard</h1>
      <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '8px' }}>
        <h3>Lista rezerwacji:</h3>
        <button onClick={handleAdd} style={{ marginBottom: '10px', padding: '10px' }}>Dodaj nową</button>
        
        {data.length > 0 ? (
          <ul>{data.map((item, i) => <li key={i}>{item.name} (ID: {item.id || item._id})</li>)}</ul>
        ) : (
          <p>Brak danych (Połączono z: {apiUrl})</p>
        )}
      </div>
    </div>
  );
}
export default App;