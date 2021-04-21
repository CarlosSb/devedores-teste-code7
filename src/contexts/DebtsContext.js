import { createContext, useState } from "react";

export const DebtContext = createContext();

export function DebtProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDetailsDebt, setIsOpenDetailsDebt] = useState(false);
  const [selectDebt, setSelectDebt] = useState({});
  const [selectUser, setSelectUser] = useState({});

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

  return (
    <DebtContext.Provider
      value={{
        isOpenModal,
        isOpenDetailsDebt,
        selectDebt,
        selectUser,
        handleToggleModal,
        handleToggleDetailsDebt,
        handleSelectUser,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
}
