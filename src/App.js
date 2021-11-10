import { useContext } from "react";
import { Context } from "./store/store";
import Contacts from "./copmonents/contacts";
import Chat from "./copmonents/chat";
import SignIn from "./copmonents/signIn";
import "./App.css";

const App = () => {
  const [state] = useContext(Context);
  return (
    <div className="App">
      {state.currentAccount ? (
        <>
          <Contacts />
          <Chat />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default App;
