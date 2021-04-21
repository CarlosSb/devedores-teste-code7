import useDebt from "../hooks/useDebt";

export default function ClientItem({ data = {} }) {
  const { handleSelectUser } = useDebt();

  return (
    <button
      key={data.id.toString()}
      onClick={() => handleSelectUser(data)}
      type="button"
      className="text-left p-4 bg-white rounded shadow-md focus:outline-none focus:bg-gray-50 hover:opacity-80"
    >
      <p className="text-lg text-gray-700 font-medium truncate">{data?.name}</p>
      <p className="text-xs text-gray-400 font-light">{data?.username}</p>
    </button>
  );
}
