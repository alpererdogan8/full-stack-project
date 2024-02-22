import { Button } from "../atomic/button";
import { Image } from "../atomic/image";

type TypeCard = {
  src?: string;
  title: string;
  href: string;
};

const Card = ({ src, title, href }: TypeCard) => {
  if (src) {
    return (
      <div className="  w-[350px] h-[150px] m-2 flex rounded-md justify-between gap-2 p-3 border-border shadow-md   text-wrap whitespace-break-spaces border-2">
        <Image width="120px" height="120px" src={src} />
        <div className="flex flex-col  justify-between items-end ">
          <h2 className="text-lg font-semibold px-4 line-clamp-2">{title}</h2>
          <Button href={href} size={"icon"} className="w-full sm:w-auto" variantType={"link"}>
            Go to Details
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-56 h-32 m-2 flex rounded-md justify-between gap-2 px-1 py-2 border-border shadow-md hover:shadow-lg text-wrap whitespace-break-spaces border-2">
      <div className="flex flex-col w-full   justify-between items-end ">
        <h2 className="text-base w-full font-semibold">{title}</h2>
        <Button href={href} size={"icon"} className="w-full sm:w-auto" variantType={"link"}>
          Go to Details
        </Button>
      </div>
    </div>
  );
};

export default Card;
