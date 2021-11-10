import { useContext } from "react";
import { Context } from "../../../store/store";

const Header = () => {
  const [state] = useContext(Context);
  return (
    <div className="header__contacts">
      <p className="user__name__text">
        {state.currentAccount.name + " " + state.currentAccount.surname}
      </p>
    </div>
  );
};

export default Header;
