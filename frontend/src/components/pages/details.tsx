/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAPI } from "../../hooks/useAPI";
import Comments from "../molecules/comments";
import SkeletonCard from "../molecules/skeleton-card";

const Details = () => {
  const { getSingleAlbumDetails, details } = useAPI();
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
      {details.comments.length === 0 ? (
        <div className="w-full h-[100dvh] flex flex-wrap justify-center items-center">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="w-full  mt-10  flex flex-col items-center gap-20 ">
          <h2 className="font-semibold text-4xl">{details.title}</h2>
          <img src={details.url} className="w-[516px]" />
          <div className="flex w-11/12 md:w-8/12 flex-col ">
            <h2 className="text-2xl w-full text-center md:text-start font-semibold mb-8">Comments</h2>
            <div className="flex w-full  gap-5 flex-col items-center">
              {details &&
                details.comments &&
                details?.comments.map((comment: any) => {
                  return <Comments key={comment.id} author={comment.name} comment={comment.body} />;
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
