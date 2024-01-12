import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filmListQuery } from "@/lib/api";

export const useFilmList = (
  query: string,
  genre: string,
  currentPage: string,
  pageSize: string,
) => {
  const queryClient = useQueryClient();
  console.log("useFilmLise is used with query: " + query);

  const {
    data: filmList,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmList", query, genre, currentPage, pageSize],
    queryFn: () => filmListQuery(query, genre, currentPage, pageSize),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const updateFilmList = () => {
    return queryClient.invalidateQueries({ queryKey: ["getFilmList"] });
  };

  return {
    filmList,
    updateFilmList,
    isSuccess,
    isLoading,
    isError,
  };
};
