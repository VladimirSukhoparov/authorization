import React, { useState } from "react";
import "./style.css";

const Modal = ({ setIsOpen, writeLS }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    writeLS("user", [login, password]);
    setIsOpen(false);
  };
  return (
    <div className="Modal">
      <div className="Modal-container">
        <div className={"Modal-head"}>
          <h1 className={"Modal-title"}>Вы не авторизованы!</h1>
        </div>
        <div className={"Modal-form"}>
          <p className={"Modal-text"}>Введите логин:</p>
          <input onChange={onChangeLogin} required />
          <p className={"Modal-text"}>Введите пароль:</p>
          <input onChange={onChangePassword} type={"password"} required />
          <button
            className={"Modal-btn"}
            onClick={() => {
              login && password && handleClick();
            }}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
