import { useState, useEffect } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const [name, setName] = useState("");
  const [reservations, setReservations] = useState<any[]>([]);
  const [error, setError] = useState("");
  const API_URL = "http://localhost:8081/reservations";

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setReservations(res.data);
      setError("");
    } catch (err) {
      setError("Błąd połączenia z: " + API_URL);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = async () => {
    if (!name) return;
    try {
      await axios.post(API_URL, { name });
      setName("");
      fetchData();
    } catch (err) {
      setError("Nie udało się dodać rezerwacji.");
    }
  };

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h1>QuickReserve Pro - Dashboard</h1>
      <div style={{ border: '1px solid white', padding: '20px', marginTop: '20px' }}>
        <h3>Lista rezerwacji:</h3>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nazwa..." 
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAdd}>Dodaj</button>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <ul style={{ marginTop: '20px' }}>
          {reservations.length > 0 ? (
            reservations.map((r) => <li key={r.id}>{r.name} (ID: {r.id})</li>)
          ) : (
            <p>Brak danych (Połączono z: {API_URL})</p>
          )}
        </ul>
      </div>
    </div>
  );
};