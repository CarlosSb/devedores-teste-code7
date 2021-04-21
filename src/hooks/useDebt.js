import { useContext } from "react";
import { DebtContext } from "../contexts/DebtsContext";

const useDebt = () => useContext(DebtContext);

export default useDebt;
