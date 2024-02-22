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
      <Input onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => handleSearch(input as string)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
