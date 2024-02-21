import { Button } from "../atomic/button";
import { Image } from "../atomic/image";

type TypeCard = {
  src?: string;
  title: string;
  href: string;
};

const Card = ({ src, title, href }: TypeCard) => {
  return (
    <div className=" m-2 flex rounded-md justify-between gap-2 p-3 border-border shadow-md  h-auto text-wrap whitespace-break-spaces border-2">
      {typeof src !== "undefined" ? <Image width="120px" src={src} /> : null}
      <div className="flex flex-col  justify-between items-end ">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Button href={href} size={"icon"} className="w-full sm:w-auto" variantType={"link"}>
          Go to Details
        </Button>
      </div>
    </div>
  );
};

export default Card;
