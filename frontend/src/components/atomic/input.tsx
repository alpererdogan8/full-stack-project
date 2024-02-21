import { cva, type VariantProps } from "class-variance-authority";
import { FC, ForwardedRef, forwardRef } from "react";
import { cn } from "../../utils/utils";

const inputVariants = cva(
  "h-10  md:min-w-[14rem] min-h-[2.5rem] rounded-lg border-2 border-input bg-background md:px-3 md:py-2 text-base ring-offset-background placeholder:text-muted-foreground selection:bg-black selection:text-white",
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  ref?: ForwardedRef<HTMLInputElement>;
}
export const Input: FC<InputProps> = forwardRef(({ className, ...props }, ref) => {
  return (
    <>
      <input ref={ref} className={cn(inputVariants({ className }), "peer")} {...props} />
    </>
  );
});
