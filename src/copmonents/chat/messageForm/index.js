import { useContext, useState } from "react";
import { Context } from "../../../store/store";
import { accounts } from "../../../data";

const MessageForm = () => {
  const [state, dispatch] = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      dispatch({
        type: "ADD_MESSAGE",
        id: state.chat[state.currentAccount.id].dialogs[state.dialog.id]
          .messages.length,
        date: new Date(),
        user: true,
        message: inputValue,
        checked: false,
        accountId: accounts.findIndex(
          (item) => item.token === state.dialog?.token
        ),
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="dialog__input"
      />
      <button type="submit" className="input__button">
        <img src="/images/send-button.png" alt="send button" />
      </button>
    </form>
  );
};

export default MessageForm;
