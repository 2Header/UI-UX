import { useFilmList } from "@/lib/hooks/useFilmList";
import { useCallback, useEffect, useState } from "react";
import Film from "./Film";
import { useRouter } from "next/router";
import * as Styled from "./index.styled";
import Pagination from "@/components/common/Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { create } from "domain";
import Loader from "@/components/common/Loader";
import { MdClose } from "react-icons/md";

const Films = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page"));
 
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setPage(router.query.page || "");
    }
  }, [router.isReady]);

  useEffect(() => {
    setPage("1");
  }, [searchParams.get("query")]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const pageSize = 18;
  const { filmList, isLoading } = useFilmList(
    searchParams.get("query") ?? "",
    searchParams.get("genre") ?? "",
    String(page),
    String(pageSize),
  );

  if (!isLoading && !filmList?.data.movies) {
    return (
      <Styled.NoMoviesFoundCaption>
        Sorry, no movies found :[
      </Styled.NoMoviesFoundCaption>
    );
  }

  console.log("filmList: ");
  console.log(filmList?.data);

  const films = filmList?.data.movies?.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  return (
    <Styled.Container>
      {searchParams.get("genre") ? (
        <Styled.GenreChip>
          {searchParams.get("genre")}
          <Styled.DeleteGenre
            onClick={() => {
              router.push("/catalog?" + createQueryString("genre", ""));
            }}
          >
            <MdClose />
          </Styled.DeleteGenre>
        </Styled.GenreChip>
      ) : (
        ""
      )}
      {!isLoading ? <Styled.Grid>{films}</Styled.Grid> : <Loader />}
      <Pagination
        pageSize={pageSize}
        currentPage={filmList?.data.page_number}
        totalMovieCount={filmList?.data.movie_count}
        onPageChange={(page) => {
          setPage(page);
          router.push("/catalog?" + createQueryString("page", page));
        }}
      />
    </Styled.Container>
  );
};

export default Films;
