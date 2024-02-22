/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useAPI } from "../../hooks/useAPI";
import { Button } from "../atomic/button";
import Card from "../molecules/card";
import SkeletonCard from "../molecules/skeleton-card";

const Album = () => {
  const { albumId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get("page");
  const { contextAPIState, getSingleAlbum } = useAPI();
  useEffect(() => {
    try {
      (async () => {
        return await getSingleAlbum(Number(albumId), Number(page));
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-11/12 mt-10 h-auto gap-2 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-start items-center ">
      <header aria-label="A Header" className="w-full flex justify-center items-center h-auto">
        <h1 aria-label="Photos" className="text-3xl font-semibold">
          Photos
        </h1>
      </header>
      {contextAPIState && contextAPIState.loading ? (
        <>
          <SkeletonCard />
        </>
      ) : (
        Object(contextAPIState?.data?.results || []).map((items: any) => {
          return (
            <Card
              key={items.id}
              title={items.title}
              href={`/albums/${items.albumId}/details/${items.id}`}
              src={items.url}
            />
          );
        })
      )}
      <div className=" w-full h-24 flex justify-center items-center">
        <Button
          href={`/albums/${albumId}?page=${
            contextAPIState.data.page === 1 ? contextAPIState.data.page : contextAPIState.data.page - 1
          }`}
          variantType={"link"}>
          Prev
        </Button>
        <Button
          href={`/albums/${albumId}?page=${
            contextAPIState.data.page === contextAPIState.data.totalPages
              ? contextAPIState.data.page
              : contextAPIState.data.page + 1
          }`}
          variantType={"link"}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Album;
