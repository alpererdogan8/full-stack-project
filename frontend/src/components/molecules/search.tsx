import { SearchIcon } from "lucide-react";
import { Button } from "../atomic/button";
import { Input } from "../atomic/input";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
