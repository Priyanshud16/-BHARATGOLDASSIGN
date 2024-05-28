# -BHARATGOLDASSIGN





# Input Form App

This is a simple React application that demonstrates a form for collecting user input regarding gift preferences. It allows users to fill in details about the occasion, recipient's preferences, and budget. The collected data is then displayed below the form.

## Features

- **Form Inputs**: Users can input their name, select an occasion, specify the type of gift, gender, age range, religion, type of jewelry, and budget.
- **Data Submission**: When the user submits the form, the entered data is stored and displayed below the form.
- **Reset**: Users can reset the form to its initial state by clicking the 'Reset' button.

## Technologies Used

- **React**: The front-end framework used for building the user interface.
- **useState**: React hook for managing local component state.
- **useReducer**: React hook for managing state with complex logic.
- **CSS**: Styling is done using CSS files.
- **Assets**: External images are imported and used within the application.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/input-form-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd input-form-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Folder Structure

- **src**: Contains the source code for the React application.
  - **assets**: Stores images and other static assets used in the application.
  - **components**: Contains React components used in the application.
  - **styles**: Holds CSS files for styling the components.
  - **App.js**: The main component that renders the entire application.

## Code Structure

- **App.js**: Defines the main component of the application. It contains the form for user input, data submission logic, and rendering of submitted data.
- **Reducer**: Manages the state of the form inputs using a reducer function.
- **Form Inputs**: Various form inputs like text fields, select dropdowns, and radio buttons are defined with corresponding event handlers to update the state.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

## License

