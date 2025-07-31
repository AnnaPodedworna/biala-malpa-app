# Biała Małpa App

Aplikacja prezentująca ofertę gastronomiczną dwóch lokali: Biała Małpa Mexico i Biała Małpa Multitap. Umożliwia przeglądanie dań, wyszukiwanie piw z beer walla oraz dokonywanie rezerwacji stolika.

# Stack
- React 18
- React Router
- Context API (zarządzanie stanem piw)
- CSS (responsywny layout i stylizacje)
- Mock API (dane o piwach)
- Lokalna symulacja rezerwacji

# Struktura komponentów

`Mexico.jsx`
Wyświetla menu restauracji Biała Małpa Mexico z kategoriami dań oraz formularzem rezerwacji.
Funkcje:
- dynamiczne wyświetlanie kategorii i dań
- rezerwacja stolika z imieniem, datą, godziną i liczbą osób
- stylizowana karta dania (nazwa, cena, opis, zdjęcie)


`Multitap.jsx`
Strona multitapu z listą piw oraz możliwością wyszukiwania piwa.
Funkcje:
- wyświetlanie piw z mock API
- wyszukiwarka piwa z wynikami i stylizacją
- każda karta zawiera nazwę, opis i etykietę piwa


`BeerContext.jsx`
Context API dla zarządzania listą piw (dodawanie, aktualizacja, wyszukiwanie). Dane inicjalizowane z lokalnego mocka (kilkadziesiąt piw z opisami i etykietami).


# Funkcjonalności

- Menu z dynamicznymi kategoriami i opisami
- Rezerwacja stolika z wyborem imienia, daty, godziny (12–21) i liczby osób
- Beer Wall – lista aktualnych piw i wyszukiwarka
- Etykiety piw w wysokiej jakości
- Tła kategorii i formularzy z przezroczystym ciemnym motywem


# Uruchomienie projektu

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoj-user/biala-malpa.git
   cd biala-malpa

2. Zainstaluj zależności:
bash
   npm install

3. Uruchom aplikację:
bash
   npm run dev


# Pomysły na rozwój
- Dodanie obsługi rezerwacji z backendem (np. Firebase / Supabase)
- Zintegrowanie z prawdziwym API piwnym (np. BreweryDB)
- Panel administratora do edycji menu i piw



# Autor
Projekt stworzony jako aplikacja demonstracyjna na potrzeby prezentacji frontendu z użyciem React i Context API.
