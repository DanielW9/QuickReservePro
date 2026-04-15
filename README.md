# QuickReserve Pro
**Autor:** Daniel Wasiewicz  
**Numer studenta:** 72676

## Stos technologiczny
* **Frontend:** React 19 + Vite
* **Backend:** ASP.NET Core 8 (C#) - *zmigrowano z NestJS*
* **Database:** Azure SQL Database
* **Security:** Azure Key Vault + Managed Identity

> **Notatka dotycząca stosu technologicznego:** > "Wstępne prace nad projektem były prowadzone z wykorzystaniem środowiska Node.js. Jednak na potrzeby finalnego wdrożenia produkcyjnego (Artefakt 06), warstwa backendowa została zmigrowana na framework ASP.NET Core (C#). Zmiana ta została pomyślnie przeprowadzona w celu zapewnienia lepszej integracji z bazą Azure SQL, uzyskania wysokiej wydajności klasy enterprise oraz pełnego wykorzystania typowania statycznego. Warstwa frontendowa pozostała aplikacją React, zoptymalizowaną pod kątem wydajnego serwowania w chmurze za pośrednictwem platformy Vercel."

## Mapowanie na usługi Azure
| Komponent systemu | Usługa Azure | Opis |
| :--- | :--- | :--- |
| Frontend (SPA) | Vercel / Azure Static Web Apps | Hostowanie aplikacji React |
| Backend (API) | Azure App Service | Środowisko uruchomieniowe dla .NET API |
| Baza danych | Azure SQL | Relacyjna baza danych dla rezerwacji |
| Bezpieczeństwo | Azure Key Vault | Magazyn sekretów i parametrów połączenia |
| Autoryzacja | Managed Identity | Bezhasłowy dostęp aplikacji do zasobów Azure |

## 🛡️ Bezpieczeństwo (Artefakt 7)
W projekcie zaimplementowano profesjonalny model zabezpieczeń chmurowych:
* **Secret Management:** Wszystkie klucze i hasła zostały usunięte z kodu i przeniesione do **Azure Key Vault**.
* **Identity:** Aplikacja korzysta z **Managed Identity**, co eliminuje potrzebę przechowywania poświadczeń do Key Vault w plikach konfiguracyjnych.
* **RBAC:** Dostęp do sekretów jest kontrolowany poprzez role Azure (**Key Vault Secrets User**).

## ✅ Status Projektu
* [x] **Artefakt 1:** Architektura i struktura folderów.
* [x] **Artefakt 2:** Środowisko wielokontenerowe uruchomione lokalnie (Docker Compose).
* [x] **Artefakt 3:** Implementacja Frontendu (React + Vite) w kontenerze.
* [x] **Artefakt 4:** Implementacja Backend API (NestJS), pełny CRUD oraz konteneryzacja obrazu backendu.
* [x] **Artefakt 5:** Pełna integracja systemowa, wzorzec DTO i trwałość danych.
* [x] **Artefakt 6:** Infrastruktura chmurowa, migracja do .NET (C#) i publiczna dostępność systemu.
* [x] **Artefakt 7:** Zabezpieczenie sekretów (Key Vault), Managed Identity i wdrożenie modelu RBAC.

## 🔗 Repository
* **Remote:** [https://github.com/DanielW9/QuickReservePro](https://github.com/DanielW9/QuickReservePro)