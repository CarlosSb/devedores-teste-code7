import { useState } from "react";
import Head from "next/head";
import { MdSearch, MdDelete, MdArrowBack, MdEdit } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import Modal from "../components/Modal";

export default function Home() {
  const [isOpenDebt, setOpenDebt] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <div className="container mx-auto py-2 h-full">
        <Head>
          <title>Devedores</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-5xl mx-auto flex flex-col h-full">
          <div className="pb-1 pt-6">
            <button
              onClick={handleOpenModal}
              type="button"
              className="btn btn-primary"
            >
              + Divida
            </button>
          </div>

          <div className="flex gap-2 my-2 ">
            <div className="w-1/3 h-100 pb-10">
              <h2 className="text-sm text-gray-500 my-3">CLIENTES</h2>

              <form className="flex my-2 mr-1">
                <input
                  type="text"
                  placeholder="Buscar Cliente"
                  className="w-full py-2 px-3 border border-purple-600 focus:border-purple-800 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-white bg-purple-700 px-3 py-2 rounded-r-md focus:outline-none focus:bg-purple-800 hover:bg-purple-800"
                >
                  <MdSearch />
                </button>
              </form>

              <div className="flex flex-col gap-2 mt-1 pr-2 h-full overflow-y-auto">
                {/** lista de Clientes */}
                <button
                  type="button"
                  className="text-left p-4 bg-white rounded shadow-md focus:outline-none focus:bg-gray-50 hover:opacity-80"
                >
                  <p className="text-lg text-gray-700 font-medium">
                    Antonio Carlos Martins
                  </p>
                  <p className="text-xs text-gray-400 font-light">Usuário</p>
                </button>

                <button
                  type="button"
                  className="text-left p-4 bg-white rounded shadow-md focus:outline-none focus:bg-gray-50 hover:opacity-80"
                >
                  <p className="text-lg text-gray-700 font-medium">
                    Antonio Carlos Martins
                  </p>
                  <p className="text-xs text-gray-400 font-light">Usuário</p>
                </button>

                <button
                  type="button"
                  className="text-left p-4 bg-white rounded shadow-md focus:outline-none focus:bg-gray-50 hover:opacity-80"
                >
                  <p className="text-lg text-gray-700 font-medium">
                    Antonio Carlos Martins
                  </p>
                  <p className="text-xs text-gray-400 font-light">Usuário</p>
                </button>

                {/** lista de Clientes */}
              </div>
            </div>
            <div className="w-2/3">
              <h2 className="text-sm text-gray-500 my-3">DIVIDAS</h2>
              <div className="bg-white rounded shadow-md p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-gray-800">
                    Antonio Carlos Martins
                  </h2>
                  <button
                    onClick={handleOpenModal}
                    type="button"
                    className="text-purple-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none"
                  >
                    + Divida ao Cliente
                  </button>
                </div>
                <div className="h-96 relative mt-5 mb-4 ">
                  <div className="flex flex-col h-full overflow-y-auto m-1">
                    {/**lista de Dividas do Cliente */}

                    <button
                      onClick={() => setOpenDebt(true)}
                      type="button"
                      className="flex items-center justify-start gap-2 text-left p-3 rounded border-b border-gray-300 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 hover:opacity-80"
                    >
                      <div className="w-full">
                        <p className="text-lg text-gray-700 font-medium">
                          Descrição da divida de Antonio Carlos ...
                        </p>
                        <p className="text-xs text-gray-400">19/04/2021</p>
                      </div>

                      <p className="text-lg p-3">
                        R$<span className="text-blue-700">500,00</span>
                      </p>

                      <BsArrowRight className="text-gray-800 text-4xl mx-4" />
                    </button>

                    <button
                      type="button"
                      className="flex items-center justify-start gap-2 text-left p-3 rounded border-b border-gray-300 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 hover:opacity-80"
                    >
                      <div className="w-full">
                        <p className="text-lg text-gray-700 font-medium">
                          Descrição da divida de Antonio Carlos ...
                        </p>
                        <p className="text-xs text-gray-400">19/04/2021</p>
                      </div>

                      <p className="text-lg p-3">
                        R$<span className="text-blue-700">500,00</span>
                      </p>

                      <BsArrowRight className="text-gray-800 text-4xl mx-4" />
                    </button>

                    {/**lista de Dividas do Cliente */}
                  </div>

                  {isOpenDebt && (
                    <div className="absolute inset-0 bg-gray-50 rounded-md shadow-md">
                      <div className="flex items justify-between text-gray-800 text-xl p-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setOpenDebt(false)}
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
                          <h2 className="text-sm text-gray-500 my-3">
                            DSCRIÇÃO
                          </h2>
                          <p>
                            Amet ullamco commodo ad ex ea exercitation. Anim qui
                            non ullamco nisi dolor do ex non ad ut ea. Et et ex
                            sunt tempor.
                          </p>
                        </div>

                        <div className="my-5">
                          <h2 className="text-sm text-gray-500 my-3">VALOR</h2>
                          <p className="text-2xl">R$ 500,00</p>
                        </div>

                        <div className="my-5">
                          <h2 className="text-sm text-gray-500 my-3">
                            DATA DASTRO
                          </h2>
                          <p>R$ 19/04/2021</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Modal open={isOpenModal} setOpen={setIsOpenModal} />
    </>
  );
}
