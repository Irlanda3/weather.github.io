# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


=========================================================
Prerequisites
Before you begin, make sure you have the following installed on your system:

Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.

npm or Yarn: You need either npm (comes with Node.js) or Yarn as your package manager. You can install Yarn using npm by running npm install -g yarn. npm is suggested.

Steps to Run the Weather App Locally
Follow these steps to run the weather app on your local machine:

Step 1: download the zip folder and extract content.

Step 2: Install Dependencies : 

npm install.

In the project directory, install the required dependencies using npm or Yarn. Run one of the following commands:
npm install
# or
yarn

Step 3: Get an API Key

To fetch weather data from the OpenWeatherMap API, you need an API key. If you don't have one, you can obtain it by following these steps:

Visit the OpenWeatherMap website.
Sign up for a free account or log in if you already have one.
Once logged in, go to your API keys page.
Generate a new API key (it's free for limited usage).

Step 4: Set Your API Key

In the project directory, create a .env file if it doesn't already exist. Add your API key to this file as follows:

VITE_REACT_APP_API_KEY=your-api-key-here

Save the .env file.

Step 5: Accessing Environment Variables:

In your code, you can access the environment variables using process.env. Here's an example of how you can access the   `REACT_APP_API_KEY` environment variable:

let api_key = import.meta.env.VITE_REACT_APP_API_KEY;

You can use this apiKey variable in your code wherever you need the api_key, such as when making API requests.

Step 6: Navigate to the Project Directory:

Change your current directory to the Weather App project folder:

cd weather-app


Step 7: Start the Development Server

Now, you can start the development server to run the weather app locally. Use the following command:


npm run dev

This will start the development server, and you should see a message indicating the server is running. By default, the app will be available at http://localhost:3000.

Step 8: Access the Weather App

Open your web browser and navigate to http://localhost:3000. You should see the weather app's user interface.

Step 9: Enter a Location

In the app's input field, you can enter the name of a city (e.g., Denver) or a zip code, country code (e.g., 80204, us). Press the "Get Forecast" button to fetch and display the weather forecast for the entered location.




