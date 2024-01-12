import React, { useCallback, useState } from "react";
import * as Style from "./index.styled";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

const SearchBar: React.FC = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  type QueryParameter = {
    name: string;
    value: string;
  };
  const createQueryString = useCallback(
    (params: Object) => {
      const oldParams = new URLSearchParams(searchParams);
      for (const [name, value] of Object.entries(params)) {
        oldParams.set(name, value);
      }

      return oldParams.toString();
    },
    [searchParams],
  );

  return (
    <Style.SearchBar
      placeholder="Search..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log(searchQuery);
          router.push(
            "/catalog?" + createQueryString({ query: searchQuery, page: "1" }),
          );
        }
      }}
    />
  );
};

export default SearchBar;
