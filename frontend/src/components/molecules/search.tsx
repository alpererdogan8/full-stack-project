import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { Button } from "../atomic/button";
import { Input } from "../atomic/input";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const { handleSearch } = useAPI();
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Search album name for photos" onChange={(e) => setInput(e.target.value)} />
      <Button
        disabled={typeof input === "undefined" && input === "" ? true : false}
        onClick={() => handleSearch(input as string)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
