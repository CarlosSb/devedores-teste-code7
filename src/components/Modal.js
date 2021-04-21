/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";

import useDebt from "../hooks/useDebt";
import apiDebt from "../services/apiDebt";

function Modal({ users = [] }) {
  const { selectUser, selectDebt, isOpenModal, handleToggleModal } = useDebt();

  const cancelButtonRef = useRef();

  return (
    <Transition.Root show={isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={isOpenModal}
        onClose={handleToggleModal}
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
                  className=" rounded-full p-2 hover:bg-gray-50 focus:outline-none"
                  onClick={handleToggleModal}
                >
                  <MdClose />
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4">
                <form>
                  <div className="my-4 w-2/3">
                    <label className="text-sm text-gray-500 my-3">
                      CLIENTE
                    </label>
                    <div className="relative inline-block w-full text-gray-800">
                      <select
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
                    <textarea className="w-full h-16 px-3 py-2 text-base text-gray-800 placeholder-gray-500 border rounded-lg focus:outline-none focus: border-purple-700" />
                  </div>
                  <div className="my-4 w-1/2">
                    <label className="text-sm text-gray-500 my-3">Valor</label>
                    <input
                      className="w-full h-10 px-3 text-base text-gray-800 placeholder-gray-500 border rounded-lg focus:outline-none focus:border-purple-700"
                      type="text"
                      placeholder="Regular input"
                    />
                  </div>

                  <div className=" flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setOpen(false)}
                    >
                      Salvar
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
