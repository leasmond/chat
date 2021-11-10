import { useContext, useRef, useEffect } from "react";
import { Context } from "../../../store/store";
import Moment from "moment";
import Checkbox from "./checkbox";

let messagesLength = 0;

const Message = () => {
  const [state] = useContext(Context);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (state.dialog?.messages?.length !== messagesLength) {
      const scroll =
        messagesEndRef.current.scrollHeight -
        messagesEndRef.current.clientHeight;
      messagesEndRef.current.scrollTo(0, scroll);
      messagesLength = state.dialog?.messages?.length;
    }
  };

  useEffect(scrollToBottom, [state]);

  return (
    <div ref={messagesEndRef} className="dialog__users">
      {/* Show messages if dialog is selected */}
      {state.dialog &&
        state.chat[state.currentAccount.id]?.dialogs[
          state.dialog.id
        ].messages?.map((item, index) => (
          <label htmlFor={index} key={index} className="dialog__container">
            <div
              className={`message__position ${
                item.user ? "message__right" : "message__left"
              } ${item.checked && "message_selected"}`}
            >
              <Checkbox item={item} index={index} />
              <div
                className={`message__container ${
                  item.checked && " message_selected"
                }`}
              >
                <p className="message__users">{item.message}</p>
                <p className="message__date">
                  {Moment(item.date).format("HH:mm ")}
                </p>
              </div>
            </div>
          </label>
        ))}
      {/* Shows if there are no messages with the user */}
      {state.dialog && state.dialog.messages?.length === 0 && (
        <div className="dialog__empty">
          <p className="empty__message">
            С этим пользователем вы не переписывались
          </p>
        </div>
      )}
    </div>
  );
};

export default Message;
