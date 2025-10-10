# Journal with AI

Journal with AI is a simple journaling application powered by AI, built with React and Express. Reflect on your day and receive AI-driven insights into your journal entries.

## Features

- Beautiful, minimal UI with Tailwind CSS
- Type your thoughts in a journaling textarea
- Submit your entry and get instant AI feedback
- AI responds with simple, encouraging analysis
- Data stays private on your device

## Getting Started

### Prerequisites

- Node.js (version 16+ recommended)
- npm

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/journal-with-ai.git
   cd journal-with-ai
   ```

2. **Install client & server dependencies**
   ```
   npm install
   cd server
   npm install
   cd ..
   ```

### Running the app

1. **Start the Express server**

   In a terminal:
   ```
   cd server
   node app.js
   ```

2. **Start the React client**

   In another terminal, at the project root:
   ```
   npm start
   ```

3. **Visit** [http://localhost:3000](http://localhost:3000) in your browser.

### Usage

- Write your feelings in the journal box.
- Click **Submit**.
- Wait for the AI to analyze your entry and display feedback.

> _Your entries are private and stay on your device._

## Project Structure

```
/src           # React frontend code
/server        # Express backend API
```

- **src/App.js**: Main React UI.
- **server/app.js**: Express API endpoint.

## Customization

You can modify the AI's feedback logic in `server/app.js`.

## License

MIT

## Acknowledgements

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

