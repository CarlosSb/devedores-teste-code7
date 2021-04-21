import { MdSearch } from "react-icons/md";

export default function Search({ value = "", setValue = () => {} }) {
  return (
    <form className="flex my-2 mr-1 relative">
      <span className="absolute left-0 top-0 bottom-0 text-purple-800 text-lg p-3 rounded-r-md ">
        <MdSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar Cliente"
        className="w-full pl-10 py-2 pr-3 border border-purple-600 focus:border-purple-800 rounded-md focus:outline-none"
      />
    </form>
  );
}
