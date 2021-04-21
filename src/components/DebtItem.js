import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { DebtContext } from "../contexts/DebtsContext";

export default function DebtItem({ data = {} }) {
  const { handleToggleDetailsDebt } = useContext(DebtContext);

  return (
    <button
      key={data._id}
      onClick={() => handleToggleDetailsDebt(data)}
      type="button"
      className="flex items-center justify-between gap-2 text-left p-3 rounded border-b border-gray-300 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 hover:opacity-80"
    >
      <div className="w-full max-w-sm">
        <p className="text-lg text-gray-700 font-medium  truncate">
          {data?.motivo}
        </p>
        <p className="text-xs text-gray-400">{data?.criado}</p>
      </div>

      <p className="text-lg p-3">
        R$<span className="text-blue-700">{data?.valor}</span>
      </p>

      <BsArrowRight className="text-gray-800 text-3xl mx-4" />
    </button>
  );
}
