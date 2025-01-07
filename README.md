# Chat Interface

This project is a chat interface built with React and TypeScript. It allows users to interact with a bot by sending messages and receiving responses.
Backend of the project: https://github.com/Vishvsalvi/supermind-backend
## Features

- User and bot messaging
- Markdown support for message content
- Typing indicator for bot responses
- Scrollable chat area

## Technologies Used

- React
- TypeScript
- Axios
- React Markdown
- Tailwind CSS

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Type your message in the input field and press the send button or hit enter.
- The bot will respond to your message, and the conversation will be displayed in the chat area.

## API Endpoint

The chat interface communicates with a backend API to get responses from the bot. The API endpoint is configured in the `handleSubmit` function in `page.tsx`:
```typescript
const response = await axios.post('https://wild-tooth-5997.ploomberapp.io/call_function', {
  question: input
});
```

## License

This project is licensed under the MIT License.
