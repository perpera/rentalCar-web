# RentalCar Web Application (Frontend)

This is the frontend part of the **RentalCar** web application — a car rental service platform. The app allows users to browse available cars, filter listings, view detailed information, and book a car rental through an intuitive UI.

---

## Project Overview

The goal of this project is to create a React-based frontend application for the RentalCar company. It provides a multi-page user interface including:

- **Home page** with a banner and call-to-action button
- **Catalog page** listing available cars with filtering and favorites functionality
- **Car details page** showing full car information and a booking form

The frontend consumes a ready-made backend API documented [here](https://car-rental-api.goit.global/api-docs/).

---

## Technologies Used

- React with Vite as the build tool
- Redux for global state management
- React Router for client-side routing
- Axios for HTTP requests
- CSS Modules for styling (you can replace with other CSS-in-JS or frameworks if desired)

---

## Features

### Routing

- `/` — Home page
- `/catalog` — Catalog page showing all cars with filtering and pagination
- `/catalog/:id` — Detail page for individual cars including booking form

### State Management

- Redux stores the list of cars, current filters, and should store favorites
- Filter results reset on new search criteria to maintain data accuracy
- Favorites will be persisted across page reloads using localStorage integration later

### Catalog Page

- Displays cars fetched from backend with server-side filtering by brand and price
- Users can add or remove cars from favorites, which visually updates the UI
- "Load More" button loads additional cars with applied filters (server-side pagination)

### Car Details Page

- Shows detailed car info including images and rental company details
- Contains a booking form with validation powered by react-hook-form and Yup
- Upon successful booking, users receive a confirmation toast notification

### Additional Details

- Mileage values are formatted with thousand separators for readability (e.g., "5 000 km")
- The UI is designed for desktop; responsiveness will be added later on

---

## Installation & Running

1. Clone the repository:

   ```bash
   git clone https://github.com/perpera/rentalCar-web.git
   cd rentalCar-web
   
2. Install dependencies:
   
   ```bash
   npm install

3. Start the development server:
   
   ```bash
   npm run dev

4. Open http://localhost:5173 in your browser to view the app.

---
## Deployment

The project is ready for deployment on Vercel platform. Just connect your GitHub repo and set up the build command npm run build with output folder dist.

---
## License

This project is open source and free to use. *i know it`s raw and bad for now
