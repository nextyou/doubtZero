"use client";
import { memo, useCallback } from "react";
import Select from "../form/Select";
const boards = [
    { value: "CBSE", label: "CBSE" },
    { value: "ICSE", label: "ICSE" },
    { value: "State Boards", label: "State Boards" },
    { value: "IB", label: "IB" },
    { value: 'BSEB', label: 'BSEB'},
    { value: "Cambridge International ", label: "Cambridge International " },
  ];
const SchoolBoards = ()=> {
    const board = window.localStorage.getItem("board") || "BSEB";
   const setBoard= useCallback((str: string) => {
     window.localStorage.setItem("board", str);
      window.location.reload()
    
   }, []);
    return (<div>
          <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Select School/Board
              </p>
            <Select
              options={boards}
              placeholder="Select Board"
              onChange={setBoard}
              className="dark:bg-dark-900"
              defaultValue={board}
            />
          </div>
    )
}
export default memo(SchoolBoards);