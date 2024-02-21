import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/utils";

const variantButton = cva("inline-flex items-center justify-center button rounded-md transition-all duration-75", {
  variants: {
    variantType: {
      default:
        "bg-primary hover:bg-primary/75  active:ring-2 active:ring-offset-2 ring-primary text-primary-foreground ",
      link: "bg-none text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      small: " h-9 px-4 py-2",
      icon: "h-[43px] w-[48px]",
    },
  },
  defaultVariants: { variantType: "default", size: "default" },
});
interface ButtonProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof variantButton> {
  children: ReactNode;
  href?: string;
}
export const Button: FC<ButtonProps> = ({ className, href, size, variantType, children, ...props }) => {
  if (variantType === "link") {
    return (
      <a href={href} className={cn(variantButton({ className, size, variantType }))} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(variantButton({ className, size, variantType }))} {...props}>
      {children}
    </button>
  );
};
