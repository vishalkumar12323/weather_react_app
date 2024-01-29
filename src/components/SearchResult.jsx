import { SearchResultList } from "./SearchResultList";

const SearchResult = () => {
  return (
    <>
      <div className="search flex relative justify-between">
        <div className="w-[75%] flex gap-1 sm:gap-4 absolute text-black">
          <div className="flex flex-col  gap-1 w-full bg-white max-h-20 overflow-y-auto">
            <SearchResultList />
          </div>
          <div className="text-blue-500 pointer-events-none ">GB</div>
          <div className="text-blue-500 pointer-events-none text-xl">IN</div>
        </div>
      </div>
    </>
  );
};

export { SearchResult };
