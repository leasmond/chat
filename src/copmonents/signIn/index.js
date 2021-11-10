import { Context } from "../../store/store";
import { useContext, useState } from "react";
import { accounts } from "../../data";
import "../../App.css";

const SignIn = () => {
  const [, dispatch] = useContext(Context);
  const [login, setLogin] = useState("123");
  const [password, setPassword] = useState("123");
  const [alertSign, setAlertSign] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Checking the account for existence in the database
    const currentAccount = accounts.find(
      (item) => item.login === login && item.password === password
    );

    if (currentAccount) {
      dispatch({
        type: "CURRENT_ACCOUNT",
        currentAccount,
      });
      setLogin("");
      setPassword("");
    } else {
      setAlertSign("Неверный логин или пароль");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="signIn__form">
      <div className="signIn">
        <label className="signIn__label">Логин</label>
        <input
          className="signIn__input"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label className="signIn__label">Пароль</label>
        <input
          className="signIn__input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="signIn__button"
          onClick={(event) => handleSubmit(event)}
          type="submit"
        >
          Войти
        </button>
        {alertSign && <p>{alertSign}</p>}
      </div>
    </form>
  );
};
export default SignIn;
