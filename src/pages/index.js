import Head from "next/head";
import { MdSearch } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div className="container mx-auto py-2 h-full">
      <Head>
        <title>Devedores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto flex flex-col h-full">
        <div className="pb-1 pt-6">
          <button type="button" className="btn btn-primary">
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
              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-xs text-gray-400 font-light">Usuário</p>
              </div>

              {/** lista de Clientes */}
            </div>
          </div>
          <div className="w-2/3">
            <h2 className="text-sm text-gray-500 my-3">DIVIDAS</h2>
            <div className="bg-white rounded shadow-md p-4 mt-2 h-full ">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl">Antonio Carlos Martins</h2>
                <button
                  type="button"
                  className="text-purple-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none"
                >
                  + Divida ao Cliente
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-1 py-2 h-full overflow-y-auto">
                {/**lista de Dividas do Cliente */}

                <div className="flex items-center justify-start gap-2 p-3 border-b border-gray-300">
                  <div className="w-full">
                    <p>Descrição da divida de Antonio Carlos ...</p>
                    <p className="text-xs text-gray-400">19/04/2021</p>
                  </div>

                  <p className="text-lg p-3">
                    R$<span className="text-blue-700">500,00</span>
                  </p>

                  <button
                    type="button"
                    className="focus:outline-none hover:bg-opacity-80 text-white text-2xl p-2 rounded-full bg-gray-400"
                  >
                    <BsArrowRight className="" />
                  </button>
                </div>

                <div className="flex items-center justify-start gap-2 p-3 border-b border-gray-300">
                  <div className="w-full">
                    <p>Descrição da divida de Antonio Carlos ...</p>
                    <p className="text-xs text-gray-400">19/04/2021</p>
                  </div>

                  <p className="text-lg p-3">
                    R$<span className="text-blue-700">500,00</span>
                  </p>

                  <button
                    type="button"
                    className="focus:outline-none hover:bg-opacity-80 text-white text-2xl p-2 rounded-full bg-gray-400"
                  >
                    <BsArrowRight className="" />
                  </button>
                </div>

                {/**lista de Dividas do Cliente */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
