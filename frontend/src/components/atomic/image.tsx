import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";
import { cn } from "../../utils/utils";

const inputVariants = cva("rounded-md");

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof inputVariants> {}
export const Image: FC<ImgProps> = ({ className, src, width, height, ...props }) => {
  return (
    <>
      <img src={src} width={width} height={height} className={cn(inputVariants({ className }))} {...props} />
    </>
  );
};
