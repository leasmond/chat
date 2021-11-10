import { setData } from "../data";

const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DIALOG":
      return {
        ...state,
        dialog: action.currentDialog,
      };

    case "ADD_MESSAGE":
      const stateCopy = { ...state };
      stateCopy.chat[state.currentAccount.id].dialogs[
        stateCopy.dialog.id
      ].messages = [
        ...state.chat[state.currentAccount.id].dialogs[stateCopy.dialog.id]
          .messages,
        {
          id: action.id,
          date: action.date,
          user: action.user,
          message: action.message,
          checked: action.checked,
        },
      ];
      // Adds a message to the user you are writing to
      stateCopy.chat[action.accountId].dialogs[stateCopy.dialog.id].messages = [
        ...state.chat[action.accountId].dialogs[stateCopy.dialog.id].messages,
        {
          id: action.id,
          date: action.date,
          message: action.message,
          checked: action.checked,
        },
      ];
      setData(stateCopy.chat);
      return {
        ...stateCopy,
      };

    case "REMOVE_MESSAGE":
      const stateRemove = { ...state };
      const newMessages = stateRemove.chat[state.currentAccount.id].dialogs[
        action.index
      ].messages.filter((item) => !item.checked);
      stateRemove.chat[state.currentAccount.id].dialogs[action.index].messages =
        newMessages;
      setData(stateRemove.chat);
      return {
        ...stateRemove,
      };

    case "CHECK_MESSAGE":
      const stateCopy1 = { ...state };
      stateCopy1.chat[state.currentAccount.id].dialogs[
        stateCopy1.dialog.id
      ].messages[action.messageIndex].checked = action.checked;
      return {
        ...stateCopy1,
      };

    case "CURRENT_ACCOUNT":
      return {
        ...state,
        currentAccount: action.currentAccount,
      };

    case "UPDATE_STATE":
      return {
        ...state,
        chat: action.state,
      };
    default:
      return state;
  }
};

export default Reducer;
