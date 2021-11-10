import { useContext } from "react";
import { Context } from "../../../../store/store";

const Checkbox = ({ item, index }) => {
  const [, dispatch] = useContext(Context);

  const checkMessage = (messageIndex, checked) => {
    dispatch({
      type: "CHECK_MESSAGE",
      messageIndex,
      checked,
    });
  };
  
  return (
    <div className="container__icon">
      <img
        height="16px"
        width="16px"
        src="/images/check-mark.png"
        alt="checkbox"
        className={item.checked ? "checkbox__image_checked" : "checkbox__image"}
      />
      <input
        id={index}
        className="input__checkbox"
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          checkMessage(index, !item.checked);
        }}
      />
    </div>
  );
};

export default Checkbox;
