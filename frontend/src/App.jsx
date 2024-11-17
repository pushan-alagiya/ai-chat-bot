import Chat from "./chat/Chat.jsx";
import "./css/App.css";
// The main App component
const App = () => {
  return (
    // Using React fragments to avoid unnecessary divs
    <>
      <main>
        <div className="main-section">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg"
            alt="Chatbot"
            style={{ width: "500px", height: "500px", borderRadius: "1rem" }}
          />
          <Chat />
        </div>
      </main>
    </>
  );
};

export default App;
