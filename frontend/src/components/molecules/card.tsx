import { Button } from "../atomic/button";
import { Image } from "../atomic/image";

const Card = () => {
  return (
    <div className="p-4 border-border border-2 shadow-md gap-3 min-h-[167px] flex rounded-xl">
      <Image className="hidden sm:block" width="150px" src={"https://via.placeholder.com/150/92c952"} />
      <div className="flex flex-col justify-between items-end min-h-[90px]">
        <h2 className="text-lg font-semibold">quidem molestiae enim</h2>
        <Button size={"small"} className="w-full sm:w-auto" href="#" variantType={"default"}>
          Go to Details
        </Button>
      </div>
    </div>
  );
};

export default Card;
