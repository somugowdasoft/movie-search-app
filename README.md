# Movie Search App

A full-featured Movie Search Application built with React, utilizing the OMDB API to fetch movie data. This app allows users to search for movies, view detailed information, and manage a list of their favorite movies.

## Features

- **Search Movies**: Users can enter movie titles or keywords to search for movies. The search results display movie posters, titles, and brief descriptions.
  
- **Filter Movies**: The app includes a dropdown filter that allows users to filter search results based on movie types (e.g., movie, series, etc.). The filtering uses the OMDB API endpoint without directly filtering the results in JavaScript.

- **View Movie Details**: Clicking on a movie from the search results takes users to a detailed view that includes:
  - A larger poster
  - Title
  - Release Year
  - Genre
  - Plot Summary
  - Ratings
  - Cast Information

- **Manage Favorites**: Users can add movies to their favorites list. The favorites are persisted using local storage, so they remain available even after page reloads. Users can also view their favorite movies on a dedicated favorites page and remove movies from the list.

- **Responsive Design**: The application is designed to be mobile-friendly and responsive, ensuring a smooth user experience across different devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation between pages.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **OMDB API**: A free API to fetch movie data.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A package manager like npm or yarn.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   
2. Navigate into the project directory:
   cd movie-search-app
   
3. Install the dependencies:
   npm install
