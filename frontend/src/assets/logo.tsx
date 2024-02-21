import { FC, SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  fill?: string;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ fill, ...props }) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" r="32" fill={fill} />
    </svg>
  );
};
