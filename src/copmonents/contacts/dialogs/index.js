import { useContext } from "react";
import { Context } from "../../../store/store";

const Dialogs = () => {
  const [state, dispatch] = useContext(Context);

  const selectedDialog = (item) => {
    dispatch({ type: "UPDATE_DIALOG", currentDialog: item });
  };

  const userName = (item) =>
    item.name
      .split(" ")
      .map((x) => x[0])
      .join("") +
    item.surname
      .split(" ")
      .map((x) => x[0])
          .join("");
    
  return (
    <div className="dialogs">
      {state.chat[state.currentAccount.id].dialogs.map((item, index) => (
        <div
          className={`${state.dialog?.id === index && "dialog__active"} dialog`}
          key={index}
          onClick={() => {
            selectedDialog(item);
          }}
        >
          <div className="avatar">
            <b>{userName(item)}</b>
          </div>
          <div className="user">
            <div className="user__name__date">
              <p className="user__name__text">
                {item.name + " " + item.surname}
              </p>
              <p className="user__date__text">пятница</p>
            </div>
            {item.messages && (
              <div className="user__dialog">
                <p className="user__dialog__text">
                  {item.messages[item.messages.length - 1]?.message}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dialogs;
