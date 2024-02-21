import { FC, ReactNode } from "react";
import Footer from "../organisms/footer";
import Navbar from "../organisms/navbar";

const MainTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="m-0 p-0 w-full flex flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
