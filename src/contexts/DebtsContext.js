import { createContext, useState } from "react";

export const DebtContext = createContext();

export function DebtProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDetailsDebt, setIsOpenDetailsDebt] = useState(false);
  const [selectDebt, setSelectDebt] = useState({});
  const [selectUser, setSelectUser] = useState({});
  const [dividas, setDividas] = useState([]);
  const [dividasData, setDividasData] = useState([]);
  const [editDebt, setEditDebt] = useState(false);
  const [intoDebtUser, setIntoDebtUser] = useState(false);

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

  function handleEmpytDebtUser() {
    setIntoDebtUser(false);
    setEditDebt(false);
    setIsOpenDetailsDebt(false);
  }

  return (
    <DebtContext.Provider
      value={{
        dividas,
        setDividas,
        dividasData,
        setDividasData,
        isOpenModal,
        setIsOpenModal,
        isOpenDetailsDebt,
        setIsOpenDetailsDebt,
        selectDebt,
        selectUser,
        setSelectDebt,
        editDebt,
        intoDebtUser,
        handleEditDebt,
        handleIntoDebtUser,
        handleEmpytDebtUser,
        handleToggleDetailsDebt,
        handleSelectUser,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
}
