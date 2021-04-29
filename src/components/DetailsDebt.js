import { useContext, useState } from "react";
import { MdEdit, MdArrowBack, MdDelete, MdWarning } from "react-icons/md";
import { StageSpinner } from "react-spinners-kit";

import { DebtContext } from "../contexts/DebtsContext";
import apiDebt from "../services/apiDebt";

export default function DetailsDebt() {
  const {
    selectDebt,
    handleEditDebt,
    setIsOpenModal,
    handleToggleDetailsDebt,
  } = useContext(DebtContext);

  const [loading, setLoading] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);

  async function deleteDebt(id) {
    setLoading(true);
    await apiDebt
      .delete(`divida/${id}?uuid=${process.env.UUID}`)
      .then((response) => {
        console.log(response.data);
        handleToggleDetailsDebt();
      })
      .catch((err) => console.log(err.response))
      .finally(() => {
        setLoading(false);
        setConfirmDel(false);
      });
  }

  function handleConfirmed() {
    setConfirmDel(true);
  }

  function handleDeleteDebt() {
    deleteDebt(selectDebt._id);
  }

  return (
    <div className="absolute inset-0 bg-gray-50 rounded-md shadow-md">
      <div className="flex items justify-between text-gray-800 text-xl p-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleToggleDetailsDebt({})}
            type="button"
            className="focus:outline-none p-2 rounded-full hover:bg-gray-100"
          >
            <MdArrowBack />
          </button>
          <h2>Detalhes Divida</h2>
        </div>
        {(!confirmDel && (
          <button
            disabled={loading}
            onClick={handleConfirmed}
            type="button"
            className=" focus:outline-none hover:bg-opacity-80 p-2 rounded-full text-red-700 hover:bg-gray-100"
          >
            <MdDelete />
          </button>
        )) || (
          <button
            disabled={loading}
            onClick={handleDeleteDebt}
            type="button"
            className="flex items-center justify-center gap-2 focus:outline-none hover:bg-opacity-80 p-2 rounded-full text-base text-yellow-500 hover:bg-gray-100"
          >
            <StageSpinner size={30} color="#9d7aed" loading={loading} />
            {!loading && (
              <>
                <MdWarning /> Confirmar
              </>
            )}
          </button>
        )}
      </div>

      <div className="px-4 text-gray-800">
        <button
          type="button"
          onClick={() => {
            setIsOpenModal(true);
            handleEditDebt();
          }}
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
          <p className="text-2xl">
            <span className="p-1">R$</span>
            <span className="text-blue-700">
              {selectDebt?.valor?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-sm text-gray-500 my-3">DATA DASTRO</h2>
          <p>{new Date(selectDebt?.criado).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
