import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8081";

  useEffect(() => {
    axios.get(`${apiUrl}/reservations`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log("Błąd połączenia z API pod adresem: " + apiUrl));
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

  const handleDelete = async (id) => {
    if (!window.confirm("Czy na pewno chcesz usunąć tę rezerwację?")) return;
    try {
      await axios.delete(`${apiUrl}/reservations/${id}`);
      setData(data.filter(item => (item.id || item._id) !== id));
    } catch (err) {
      alert("Błąd podczas usuwania!");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#144d1e', color: 'white', minHeight: '100vh', fontFamily: 'Arial' }}>
      <h1>QuickReserve Pro - Dashboard</h1>
      <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '8px' }}>
        <h3>Lista rezerwacji:</h3>
        <button onClick={handleAdd} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Dodaj nową
        </button>
        
        {data.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.map((item, i) => (
              <li key={i} style={{ padding: '10px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.name} <small style={{ color: '#888' }}>(ID: {item.id || item._id})</small></span>
                <button 
                  onClick={() => handleDelete(item.id || item._id)} 
                  style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Brak danych (Połączono z: {apiUrl})</p>
        )}
      </div>
    </div>
  );
}

export default App;