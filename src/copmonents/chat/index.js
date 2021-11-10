import Header from "./header.js";
import Message from "./message";
import "./index.css";
import MessageForm from "./messageForm/index.js";

export const Chat = () => {
  return (
    <div className="chat">
      <Header />
      <Message />
      <MessageForm />
    </div>
  );
};

export default Chat;
