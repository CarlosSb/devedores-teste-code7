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
      className="relative flex items-center justify-between gap-2 text-left p-3 mx-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 hover:opacity-80"
    >
      <div className="w-full pr-32">
        <p className="text-lg text-gray-700 font-medium truncate">
          {data?.motivo}
        </p>
        <p className="text-xs text-gray-400 truncate">
          {new Date(data?.criado).toLocaleString()}
        </p>
      </div>

      <div className=" absolute flex items-center justify-between right-0 top-0 bottom-0">
        <p className="text-lg p-3 ">
          <span className="p-1">R$</span>
          <span className="text-blue-700">
            {data?.valor.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
        </p>

        <BsArrowRight className="text-gray-800 text-3xl mx-3" />
      </div>
    </button>
  );
}
