import Head from "next/head";
import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="container mx-auto my-10 h-full">
      <Head>
        <title>Devedores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto flex flex-col m-5">
        <div className="py-8">
          <button type="button" className="btn btn-primary">
            + Divida
          </button>
        </div>

        <div className="flex gap-2">
          <div className="w-1/3 h-full">
            <h2 className="text-sm text-gray-500 my-3">CLIENTES</h2>

            <div className="flex my-2">
              <input
                type="text"
                value=""
                placeholder="Buscar Cliente"
                className="w-full"
              />
              <button type="button" className="btn btn-primary">
                <MdSearch />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {/** lista de Clientes */}
              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-sm text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-sm text-gray-400 font-light">Usuário</p>
              </div>

              <div className="p-4 bg-white rounded shadow-md">
                <p className="text-lg text-gray-800 font-medium">
                  Antonio Carlos Martins
                </p>
                <p className="text-sm text-gray-400 font-light">Usuário</p>
              </div>
              {/** lista de Clientes */}
            </div>
          </div>
          <div className="w-2/3 ">
            <h2 className="text-sm text-gray-500 my-3">DIVIDAS</h2>
            <div className="bg-white rounded shadow-md h-full p-4">
              Conteudo
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
