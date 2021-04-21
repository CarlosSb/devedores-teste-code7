import { useContext, useState } from "react";
import { MdEdit, MdArrowBack, MdDelete } from "react-icons/md";
import { DebtContext } from "../contexts/DebtsContext";

export default function DetailsDebt() {
  const { selectDebt, handleToggleDetailsDebt } = useContext(DebtContext);

  return (
    <div className="absolute inset-0 bg-gray-50 rounded-md shadow-md">
      <div className="flex items justify-between text-gray-800 text-xl p-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleDetailsDebt}
            type="button"
            className="focus:outline-none p-2 rounded-full hover:bg-gray-100"
          >
            <MdArrowBack />
          </button>
          <h2>Detalhes Divida</h2>
        </div>

        <button
          type="button"
          className=" focus:outline-none hover:bg-opacity-80 p-2 rounded-full text-red-700 hover:bg-gray-100"
        >
          <MdDelete />
        </button>
      </div>

      <div className="px-4 text-gray-800">
        <button
          type="button"
          className="flex items-center gap-1 text-purple-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none"
        >
          <MdEdit /> EDITAR
        </button>

        <div className="my-5">
          <h2 className="text-sm text-gray-500 my-3">MOTIVO</h2>
          <p>{selectDebt?.motivo}</p>
        </div>

        <div className="my-5">
          <h2 className="text-sm text-gray-500 my-3">VALOR</h2>
          <p className="text-2xl">{`R$ ${selectDebt?.valor}`}</p>
        </div>

        <div className="my-5">
          <h2 className="text-sm text-gray-500 my-3">DATA DASTRO</h2>
          <p>{selectDebt?.criado}</p>
        </div>
      </div>
    </div>
  );
}
