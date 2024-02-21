import { FC } from "react";

type TypeComments = {
  author: string;
  comment: string;
};

const Comments: FC<TypeComments> = ({ author, comment }) => {
  return (
    <div className="w-full gap-5 p-4 h-auto border-2 border-border rounded-md flex flex-col ">
      <div className=" text-base md:text-lg font-bold">{author}</div>
      <div className="text-balance text-base "> {comment}dffdfdf </div>
    </div>
  );
};

export default Comments;
