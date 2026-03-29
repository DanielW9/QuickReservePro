# QuickReserve Pro
**Autor:** Daniel Wasiewicz
**Numer studenta:** 72676

## Stos technologiczny
* **Frontend:** React 19 + Vite
* **Backend:** Node.js 24 (NestJS)
* **Database:** Azure Cosmos DB
* **Notatka dotycząca stosu technologicznego: > "Wstępne prace nad projektem były prowadzone z wykorzystaniem środowiska Node.js. Jednak na potrzeby finalnego wdrożenia produkcyjnego (Artefakt 06), warstwa backendowa została zmigrowana na framework ASP.NET Core (C#). Zmiana ta została pomyślnie przeprowadzona w celu zapewnienia lepszej integracji z bazą Azure SQL, uzyskania wysokiej wydajności klasy enterprise oraz pełnego wykorzystania typowania statycznego. Warstwa frontendowa pozostała aplikacją React, zoptymalizowaną pod kątem wydajnego serwowania w chmurze za pośrednictwem platformy Vercel."

## Mapowanie na usługi Azure
| Komponent systemu | Usługa Azure | Opis |
| :--- | :--- | :--- |
| Frontend (SPA) | Azure Static Web Apps | Hostowanie statycznych plików React |
| Backend (API) | Azure App Service | Środowisko uruchomieniowe dla NestJS |
| Baza danych | Azure Cosmos DB | NoSQL-owa baza danych dla rezerwacji |
| Przechowywanie obrazów | Azure Blob Storage | (Opcjonalnie) Zdjęcia sal/biurek |

##  Status Projektu
* [x] **Artefakt 1:** Architektura i struktura folderów.
* [x] **Artefakt 2:** Środowisko wielokontenerowe uruchomione lokalnie (Docker Compose).
* [x] **Artefakt 3:** Implementacja Frontendu (React + Vite) w kontenerze.
* [x] **Artefakt 4:** Implementacja Backend API (NestJS), pełny CRUD oraz konteneryzacja obrazu backendu.
* [x] **Artefakt 5:** Pełna integracja systemowa, wzorzec DTO i trwałość danych.
* [x] **Artefakt 6:** Infrastruktura chmurowa, migracja do .NET (C#) i publiczna dostępność systemu.

##  Repository
* **Remote:** https://github.com/DanielW9/QuickReservePro