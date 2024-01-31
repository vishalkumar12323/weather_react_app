const SearchResultList = ({ searchResult }) => {
  return (
    <>
      <div className="w-full py-1 px-1 sm:py-2 hover:bg-[#ddd] transition cursor-pointer rounded-sm">
        {searchResult}
      </div>
    </>
  );
};

export { SearchResultList };
