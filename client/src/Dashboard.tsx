import { useState } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const [error, setError] = useState("");

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:8081/reservations', { name: "" });
    } catch (err: any) {
      // Obsługa błędów - walidacja statusu
      if (err.response?.status === 400) setError("Błąd walidacji: Imię jest wymagane!");
      else setError("Błąd serwera.");
    }
  };

  return (
    <div>
      <h1>Panel Rezerwacji</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button onClick={handleAdd}>Dodaj testowo</button>
    </div>
  );
};