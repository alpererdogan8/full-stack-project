/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useAPI } from "../../hooks/useAPI";
import Card from "../molecules/card";

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
      {contextAPIState && contextAPIState.loading
        ? "loading"
        : Object(contextAPIState?.data?.results || []).map((items: any) => {
            return (
              <Card
                key={items.id}
                title={items.title}
                href={`/albums/${items.albumId}/details/${items.id}`}
                src={items.url}
              />
            );
          })}
    </div>
  );
};

export default Album;
