import useSWR from "swr";

import apiDebt from "../services/apiDebt";
import useDebt from "../hooks/useDebt";

import DebtItem from "./DebtItem";
import DetailsDebt from "./DetailsDebt";
import { useEffect } from "react";

export default function ListDebts() {
  const {
    dividas,
    setDividas,
    setDividasData,
    selectUser,
    handleIntoDebtUser,
    isOpenDetailsDebt,
    setIsOpenDetailsDebt,
    setIsOpenModal,
  } = useDebt();

  // realiza um get das dividas existentes
  const fetcher = (url) => apiDebt.get(url).then((res) => res.data.result);

  //usando o swr na requisição
  const { data, error } = useSWR(
    `divida/?uuid=a8fcf925-ca07-44ba-9745-3c1a2ba48c32`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  //filtra dos dados de acordo com o id do usuario e adiciona e novo estado
  useEffect(() => {
    if (data) {
      const resultDivida = data?.filter((d) => d.idUsuario === selectUser.id);
      setDividas(resultDivida);
      setDividasData(data);
      setIsOpenDetailsDebt();
    }
  }, [selectUser, data]);

  if (error) return <div>falha no carregamento</div>;
  if (!data) return <div>aguarde...</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-gray-800">{selectUser.name}</h2>
        <button
          onClick={() => {
            setIsOpenModal(true);
            handleIntoDebtUser();
          }}
          type="button"
          className="flex items-center justify-center gap-2 text-purple-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none"
        >
          <span className="text-xl">+</span>
          <span className="hidden sm:block">Divida ao Cliente</span>
        </button>
      </div>
      <div className="h-full md:h-96 relative mt-5 mb-4 md:-mb-6">
        <div className="flex flex-col h-full min-h-80 overflow-y-auto m-1">
          {/**lista de Dividas do Cliente */}

          {dividas?.map((divida, index) => (
            <DebtItem key={index} data={divida} />
          ))}
          {dividas?.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <p className="text-center">Não possue dividas</p>
            </div>
          )}

          {/**lista de Dividas do Cliente */}
        </div>

        {isOpenDetailsDebt && dividas?.length !== 0 && <DetailsDebt />}
      </div>
    </>
  );
}
