/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { useAPI } from "../../hooks/useAPI";
import Comments from "../molecules/comments";
import SkeletonCard from "../molecules/skeleton-card";

const Details = () => {
  const { getSingleAlbumDetails, contextAPIState } = useAPI();
  const { albumId, detailId } = useParams();
  useEffect(() => {
    try {
      (async () => {
        return await getSingleAlbumDetails(Number(albumId), Number(detailId));
      })();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contextAPIState && contextAPIState.loading ? (
        <>
          <div className="w-full h-[100dvh] flex flex-wrap justify-center items-center">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </>
      ) : (
        <div className="w-full  mt-10  flex flex-col items-center gap-20 ">
          <h2 className="font-semibold text-4xl">{contextAPIState.data.results?.title as ReactNode}</h2>
          <img src={contextAPIState.data.results?.url as ReactNode as string | undefined} className="w-[516px]" />
          <div className="flex w-11/12 md:w-8/12 flex-col ">
            <h2 className="text-2xl w-full text-center md:text-start font-semibold mb-8">Comments</h2>
            <div className="flex w-full  gap-5 flex-col items-center">
              {contextAPIState.data.results.comments ? (
                (contextAPIState.data.results.comments as []).map(
                  (comment: { id: number; name: string; body: string }) => {
                    return <Comments key={comment.id} author={comment.name} comment={comment.body} />;
                  },
                )
              ) : (
                <Navigate to={"/error"} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
