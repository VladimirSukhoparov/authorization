import React, { useState } from "react";
import Store from "./components/store";
import "style.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Modal from "./components/modal";

const app = () => {
  const { readLS, writeLS, removeLS } = useLocalStorage(); //отправку на сервер не делал, сделал через локалсторадж.
  const user = readLS("user");
  const [isOpen, setIsOpen] = useState(!user);

  return (
    <div className="App">
      <Store setIsOpen={setIsOpen} removeLS={removeLS} />
      {isOpen && <Modal setIsOpen={setIsOpen} writeLS={writeLS} />}
    </div>
  );
};

export default app;
