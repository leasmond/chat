import "../index.css";
import { useContext } from "react";
import { Context } from "../../../store/store";

export const Header = () => {
  const [state, dispatch] = useContext(Context);

  const dataUser =
    state.chat[state.currentAccount.id].dialogs[state.dialog?.id];

  const userName = dataUser?.name + " " + dataUser?.surname;

  const userNameAvatar =
    dataUser?.name
      .split(" ")
      .map((x) => x[0])
      .join("") +
    dataUser?.surname
      .split(" ")
      .map((x) => x[0])
      .join("");

  //  Deleting the selected message
  const checkboxRemove = (index) => {
    dispatch({
      type: "REMOVE_MESSAGE",
      index,
    });
  };

  return (
    <div className="header__chat">
      {/* Display first and last names if dialog is selected */}
      {state.chat[state.currentAccount.id].dialogs[state.dialog?.id] && (
        <div className="header__name">
          <div className="header__avatar">
            <b>{userNameAvatar}</b>
          </div>
          <p className="user__name__text">{userName}</p>
        </div>
      )}
      {/* Displays the delete button if at least one checkbox is true */}
      {state.dialog?.messages.find((item) => item.checked === true) && (
        <div className="dialogs_delete">
          <button
            className="dialog__button_remove"
            onClick={() => checkboxRemove(state.dialog.id)}
          >
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
