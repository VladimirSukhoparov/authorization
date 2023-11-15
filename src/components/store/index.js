import React from "react";
import "style.css";

const Store = ({ removeLS, setIsOpen }) => {
  return (
    <div className="store">
      Вы авторизованы!:)
      <button
        onClick={() => {
          removeLS("user");
          setIsOpen(true);
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default React.memo(Store);
