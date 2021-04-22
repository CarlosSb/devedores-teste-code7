/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { StageSpinner } from "react-spinners-kit";

import useDebt from "../hooks/useDebt";
import apiDebt from "../services/apiDebt";

function Modal({ users = [] }) {
  const {
    selectUser,
    setSelectDebt,
    selectDebt,
    editDebt,
    intoDebtUser,
    isOpenModal,
    setIsOpenModal,
    handleToggleDetailsDebt,
  } = useDebt();

  const [loading, setLoading] = useState(false);
  const [idUsuario, setIdUsuario] = useState(users[0]?.id);
  const [motivo, setModivo] = useState("");
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!!editDebt) {
      setIdUsuario(selectDebt?.idUsuario);
      setModivo(selectDebt?.motivo);
      setValor(selectDebt?.valor);
    } else if (!!intoDebtUser) {
      setIdUsuario(selectUser.id);
      setModivo("");
      setValor(0);
    } else {
      setIdUsuario(users[0]?.id);
      setModivo("");
      setValor(0);
    }
  }, [editDebt, intoDebtUser, selectDebt]);

  const cancelButtonRef = useRef();

  async function insertDebt(resp) {
    setLoading(true);
    await apiDebt
      .post("/divida/?uuid=a8fcf925-ca07-44ba-9745-3c1a2ba48c32", resp)
      .then((response) => {
        setIsOpenModal(false);
        handleToggleDetailsDebt({});
      })
      .catch((err) => console.log(err.response))
      .finally(() => {
        console.log("finalizando");
        setLoading(false);
      });
  }

  async function updateDebt(data, id) {
    setLoading(true);
    await apiDebt
      .put(`/divida/${id}?uuid=a8fcf925-ca07-44ba-9745-3c1a2ba48c32`, data)
      .then(() => {
        setIsOpenModal(false);
        setSelectDebt({
          _id: id,
          ...data,
        });
      })
      .catch((err) => console.log(err.response))
      .finally(() => {
        console.log("finalizando");
        setLoading(false);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      idUsuario: Number(idUsuario),
      motivo,
      valor: Number(valor),
    };
    if (editDebt) {
      updateDebt(data, selectDebt._id);
    } else {
      insertDebt(data);
    }
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <Transition.Root show={isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={isOpenModal}
        onClose={() => (!loading ? handleCloseModal() : {})}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="flex items-center justify-between px-4 py-2 text-2xl text-gray-800">
                <h2>Divida</h2>
                <button
                  type="button"
                  disabled={loading}
                  className=" rounded-full p-2 hover:bg-gray-50 focus:outline-none"
                  onClick={() => handleCloseModal()}
                >
                  <MdClose />
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4">
                <form onSubmit={handleSubmit}>
                  <div className="my-4 w-2/3">
                    <label className="text-sm text-gray-500 my-3">
                      CLIENTE
                    </label>
                    <div className="relative inline-block w-full text-gray-800">
                      <select
                        disabled={editDebt || intoDebtUser}
                        value={idUsuario}
                        onChange={(e) => setIdUsuario(e.target.value)}
                        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-500 bg-white border rounded-lg appearance-none focus:border-purple-700 focus:outline-none"
                        placeholder="Regular input"
                      >
                        {users?.map((us, index) => (
                          <option key={index} value={us.id}>
                            {us.name}
                          </option>
                        ))}
                        {users?.length === 0 && (
                          <option>Usuários não encontradados</option>
                        )}
                      </select>
                      <div className=" rounded-r-lg text-purple-800 absolute right-2 top-2 flex items-center ">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="text-sm text-gray-500 my-3">
                      DESCRIÇÃO
                    </label>
                    <textarea
                      onChange={(e) => setModivo(e.target.value)}
                      value={motivo}
                      className="w-full h-16 px-3 py-2 text-base text-gray-800 placeholder-gray-500 border rounded-lg focus:outline-none focus: border-purple-700"
                    />
                  </div>
                  <div className="my-4 w-1/2">
                    <label className="text-sm text-gray-500 my-3">Valor</label>
                    <input
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      className="w-full h-10 px-3 text-base text-gray-800 placeholder-gray-500 border rounded-lg focus:outline-none focus:border-purple-700"
                      type="number"
                      placeholder="150,00"
                    />
                  </div>

                  <div className=" flex justify-end gap-2 mt-4">
                    <button
                      disabled={loading}
                      type="button"
                      className="btn btn-outline"
                      onClick={() => (!loading ? handleCloseModal() : {})}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary flex items-center justify-center gap-2 w-20"
                    >
                      <StageSpinner size={30} color="#fff" loading={loading} />
                      {!loading && "Salvar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
