const ws = new WebSocket("ws://192.168.2.37");

function Main() {
  const [user, setUser] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const sendMessage = { user, message };

    // Отправим сообщение на сервер
    ws.send(JSON.stringify(sendMessage));

    setMessage("");
  };

  return (
    <>
      <FormMessage
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
        user={user}
        setUser={setUser}
      />
      <Messages />
    </>
  );
}

function FormMessage({ handleSubmit, message, setMessage, user, setUser }) {
  return (
    <div id="form-message">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Имя отправителя"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          name="message"
          placeholder="Текст сообщения"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

function Messages() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    ws.addEventListener("message", (e) => {
      setMessages((prevMessages) => [JSON.parse(e.data), ...prevMessages]);
    });
  }, []);

  return (
    <div id="messages">
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  );
}

function Message({ message }) {
  return (
    <>
      <div id="message">
        <b>{message.user}:</b> {message.message}
      </div>
      <hr />
    </>
  );
}

function App() {
  return <Main />;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
