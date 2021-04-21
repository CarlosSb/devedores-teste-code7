import { useEffect, useState } from "react";
import useSWR from "swr";

import useDebt from "../hooks/useDebt";
import apiDebt from "../services/apiDebt";

import DebtItem from "./DebtItem";
import DetailsDebt from "./DetailsDebt";

export default function ListDebts() {
  const { selectUser, isOpenDetailsDebt, handleToggleModal } = useDebt();

  const fetcher = (url) => apiDebt.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `divida/?uuid=a8fcf925-ca07-44ba-9745-3c1a2ba48c32`,
    fetcher
  );

  const [dividas, setDividas] = useState([]);
  //filtra dos dados de acordo com o id do usuario e adiciona e novo estado
  useEffect(() => {
    const resultDivida = data?.result?.filter(
      (d) => d.idUsuario === selectUser.id
    );
    setDividas(resultDivida);
  }, [selectUser, data]);

  if (error) return <div>falha no carregamento</div>;
  if (!data) return <div>aguarde...</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-gray-800">{selectUser.name}</h2>
        <button
          onClick={handleToggleModal}
          type="button"
          className="text-purple-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none"
        >
          + Divida ao Cliente
        </button>
      </div>
      <div className="h-96 relative mt-5 mb-4 ">
        <div className="flex flex-col h-full overflow-y-auto m-1">
          {/**lista de Dividas do Cliente */}

          {dividas?.map((divida) => (
            <DebtItem data={divida} />
          ))}

          {/**lista de Dividas do Cliente */}
        </div>

        {isOpenDetailsDebt || (dividas?.length !== 0 && <DetailsDebt />)}
      </div>
    </>
  );
}
