import { useEffect, useState } from "react";
import useSWR from "swr";
import Head from "next/head";
import { MdArrowBack } from "react-icons/md";
import { FiInfo } from "react-icons/fi";

import Modal from "../components/Modal";
import ClientItem from "../components/ClientItem";
import Search from "../components/Search";
import ListDebts from "../components/ListDebts";
import useDebt from "../hooks/useDebt";
import apiUser from "../services/apiUser";

const fetcher = (url) =>
  apiUser
    .get(url, { validateStatus: false })
    .then((res) => res.data)
    .catch((err) => err.response);

function Home(props) {
  const {
    handleSelectUser,
    handleEmpytDebtUser,
    setIsOpenModal,
    selectUser,
  } = useDebt();


  const { data, error } = useSWR(`/users`, fetcher, {
    initialData: props.users,
  });

  const [buscar, setBuscar] = useState("");
  const [users, setUsers] = useState(props.users);


  useEffect(() => {
    // se data for igual a array atribui data de nao []
    const usersData = Array.isArray(data) ? data : [];

    const resultUserFilter = usersData.filter(
      (us) => us.name.toLowerCase().indexOf(buscar.toLowerCase()) > -1
    );
    setUsers(resultUserFilter);
  }, [buscar, data]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  if (error) return <div>falha no carregamento</div>;

  return (
    <>
      <div className="container mx-auto p-2 h-full">
        <Head>
          <title>Devedores</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-5xl mx-auto flex flex-col h-full">
          <div className="pt-6">
            <button
              onClick={() => {
                setIsOpenModal(true);
                handleEmpytDebtUser();
              }}
              type="button"
              className="btn btn-primary"
            >
              + Divida
            </button>
            <p className="text-sm text-gray-500 my-2 flex items-center ">
              <FiInfo className="text-gray-700 ml-2 mr-1" /> Escolhar um cliente
              para atribuir dividas
            </p>
          </div>

          <div className="flex gap-2 mt-0 mb-2 ">
            <div className="w-full md:w-1/3 md:h-100 pb-10">
              <h2 className="text-sm text-gray-500 my-3">CLIENTES</h2>

              <Search value={buscar} setValue={setBuscar} />

              <div className="flex flex-col gap-2 mt-1 pr-2 h-full overflow-y-auto">
                {/** lista de Clientes */}

                {users.map((cliente, index) => (
                  <ClientItem key={index} data={cliente} />
                ))}

                {users.length === 0 && (
                  <div className="h-full flex items-center justify-center">
                    <p className="max-w-sm text-center text-xl">
                      Cliente n??o Encontrado
                    </p>
                  </div>
                )}

                {/** lista de Clientes */}
              </div>
            </div>

            <div className="w-full hidden md:block md:w-2/3">
              <h2 className="text-sm text-gray-500 my-3">DIVIDAS</h2>
              <div className="bg-white rounded shadow-md p-4 h-full">
                {(!isEmpty(selectUser) && <ListDebts />) || (
                  <div className="h-full flex items-center justify-center">
                    <p className="max-w-sm text-center text-xl">
                      Clique em um cliente para visualizar suas informa????es de
                      combran??a
                    </p>
                  </div>
                )}
              </div>
            </div>
            {!isEmpty(selectUser) && (
              <div className="fixed overflow-y-auto mx-2 inset-0 bg-gray-100 block md:hidden">
                <div className="flex items-center gap-2 mx-1">
                  <button
                    onClick={() => handleSelectUser({})}
                    type="button"
                    className="focus:outline-none p-3 rounded-full hover:bg-gray-100 text-xl"
                  >
                    <MdArrowBack />
                  </button>
                  <h2 className="text-sm text-gray-500 my-3">DIVIDAS</h2>
                </div>
                <div className="bg-white  rounded shadow-md p-4">
                  {(!isEmpty(selectUser) && <ListDebts />) || (
                    <div className="h-full flex items-center justify-center">
                      <p className="max-w-sm text-center text-xl">
                        Clique em um cliente para visualizar suas informa????es de
                        combran??a
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Modal users={props.users} />
    </>
  );
}

export async function getStaticProps() {
  const users = await fetcher(`/users`);

  return {
    props: {
      users: Array.isArray(users) ? users : [],
    },
  };
}

export default Home;
