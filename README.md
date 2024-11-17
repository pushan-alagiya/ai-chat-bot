AI Chatbot

## Description

This project is an AI-powered chatbot built using React.js, Node.js, Express.js, and the OpenAI API. The chatbot is capable of understanding and responding to user inputs naturally, making it ideal for applications such as customer support, virtual assistance, or just general conversation.

## Features

- **Natural Language Understanding**: Powered by OpenAI's advanced language models.
- **Interactive Chat Interface**: Real-time, dynamic responses for seamless user interaction.
- **Customizable Behavior**: Configure responses to suit specific use cases or industries.
- **Scalable Design**: Modular architecture for easy expansion and integration.

## Example

![Chatbot Interface Example](https://github.com/pushan-alagiya/ai-chat-bot/blob/main/ss.png?raw=true)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pushan-alagiya/ai-chat-bot
cd intelligent-chatbot
```

2. Install dependencies:

```bash
cd frontend/
npm install

cd backend/
npm install
```

3. Configure environment variables:

Create a `.env` file in the root directory and provide the following:

```dotenv
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
MODEL='gpt-4'
EXPRESS_PORT='5000'
VITE_PORT='5173'
```

4. Replace `YOUR_OPENAI_API_KEY` with your OpenAI API key.

## Usage

1. Start the backend server:

```bash
npm run start-backend
```

2. Start the frontend client:

```bash
npm run start-frontend
```

3. Access the chatbot in your browser at `http://localhost:5173`.
