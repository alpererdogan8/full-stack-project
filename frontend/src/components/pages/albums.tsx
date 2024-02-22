/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAPI } from "../../hooks/useAPI";
import { Button } from "../atomic/button";
import Card from "../molecules/card";
import SkeletonCard from "../molecules/skeleton-card";

const Albums = () => {
  const { contextAPIState, getAlbums } = useAPI();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const page = queryParams.get("page");

  useEffect(() => {
    try {
      (async () => {
        return await getAlbums(Number(page));
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-11/12 my-10 h-auto gap-2 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-start items-center ">
      {contextAPIState && contextAPIState.loading ? (
        <>
          <SkeletonCard />
        </>
      ) : (
        Object(contextAPIState?.data?.results || []).map((items: any) => {
          return <Card key={items.id} title={items.title} href={`/albums/${items.id}`} />;
        })
      )}
      <div className=" w-full h-24 flex justify-center items-center">
        <div className=" w-full h-24 flex justify-center items-center">
          <Button
            href={`/?page=${
              contextAPIState.data.page === 1 ? contextAPIState.data.page : contextAPIState.data.page - 1
            }`}
            variantType={"link"}>
            Prev
          </Button>
          <Button
            href={`?page=${
              contextAPIState.data.page === contextAPIState.data.totalPages
                ? contextAPIState.data.page
                : contextAPIState.data.page + 1
            }`}
            variantType={"link"}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Albums;
