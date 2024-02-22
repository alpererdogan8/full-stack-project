import { Route, Routes } from "react-router";
import Album from "./components/pages/album";
import Albums from "./components/pages/albums";
import Details from "./components/pages/details";
import MainTemplate from "./components/templates/main-template";

function App() {
  const NotFound = () => (
    <div className="h-[80dvh] flex items-center justify-center">
      <h1 className=" text-9xl font-black from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ">
        Not Found Page
      </h1>
    </div>
  );
  return (
    <MainTemplate>
      <div className="flex flex-col items-center flex-wrap h-auto">
        <Routes>
          <Route path="/" index element={<Albums />} />
          <Route path="/albums/:albumId" element={<Album />} />
          <Route path="/albums/:albumId/details/:detailId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MainTemplate>
  );
}

export default App;
