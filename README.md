# Waste Skip Selection Redesign

This project is a redesign of the skip selection page for the waste management service at [We Want Waste](https://wewantwaste.co.uk/). The goal was to improve the look and feel of the page while maintaining its functionality, ensuring responsiveness, and enhancing the overall user experience.

## Objective

The task was to redesign the skip selection page, focusing on:

- Clean and maintainable React code.
- Improved UI/UX design.
- Responsiveness for both mobile and desktop browsers.
- Using the provided API to populate skip options dynamically.

## Features

- **Dynamic Data Fetching**: Skip options are fetched from the API endpoint: [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft).
- **Responsive Design**: The page is fully responsive and adapts to different screen sizes, ensuring a seamless experience on both mobile and desktop devices.
- **Improved UI/UX**: Redesigned components with a modern and user-friendly interface.
- **Filter**: Users can filter skips by placement type (e.g., road placement or heavy waste) and view skip sizes.
- **Interactive Step Progress Indicator**: A visual guide to show the user's progress through the selection process.

## Approach

1. **Code Structure**:

   - The project is organized into reusable components located in the `src/components` folder.
   - Context API is used for state management, ensuring a clean and scalable architecture.

2. **Styling**:

   - Tailwind CSS is used for styling, enabling rapid development and consistent design.
   - Custom styles are applied to enhance the visual appeal.

3. **API Integration**:

   - The `fetchSkipsByLocation` function in `src/lib/api.ts` handles data fetching from the provided API.
   - The skip data is dynamically rendered on the page.

4. **Responsiveness**:

   - The layout and components are designed to adapt to different screen sizes using responsive utilities from Tailwind CSS.

5. **Error Handling**:
   - Graceful error handling is implemented to display user-friendly messages in case of API failures.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd waste-skip
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## File Structure

The project is structured as follows:

```
src/
├── App.tsx                  # Main application component
├── components/              # Reusable UI components
├── contexts/                # Context API for state management
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and API integration
├── types/                   # TypeScript type definitions
├── index.css                # Global styles
├── main.tsx                 # Application entry point
└── vite-env.d.ts            # Vite environment types
```

## Submission

- The redesigned skip selection page is hosted on a public GitHub repository.
- A live demo is available via a sandbox link for testing.

## Notes

- The project was completed within the 72-hour timeframe.
- The redesign adheres to the original functionality while improving the visual and interactive aspects of the page.

## Contact

If you have any questions or feedback, feel free to reach out.
