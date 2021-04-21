import { createContext, useState, useEffect } from "react";
import apiDebt from "../services/apiDebt";

export const DebtContext = createContext();

export function DebtProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDetailsDebt, setIsOpenDetailsDebt] = useState(false);
  const [selectDebt, setSelectDebt] = useState({});
  const [selectUser, setSelectUser] = useState({});
  const [dividas, setDividas] = useState([]);
  const [editDebt, setEditDebt] = useState(false);
  const [intoDebtUser, setIntoDebtUser] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleToggleDetailsDebt(data) {
    setIsOpenDetailsDebt(!isOpenDetailsDebt);

    setSelectDebt(data);
  }

  function handleSelectUser(data) {
    setSelectUser(data);
  }

  function handleEditDebt() {
    setIntoDebtUser(false);
    setEditDebt(true);
  }

  function handleIntoDebtUser() {
    setIntoDebtUser(true);
    setEditDebt(false);
  }

  return (
    <DebtContext.Provider
      value={{
        dividas,
        setDividas,
        isOpenModal,
        isOpenDetailsDebt,
        selectDebt,
        selectUser,
        editDebt,
        intoDebtUser,
        handleEditDebt,
        handleIntoDebtUser,
        handleToggleModal,
        handleToggleDetailsDebt,
        handleSelectUser,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
}
