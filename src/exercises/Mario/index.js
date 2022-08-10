import Board from "../../component/Board";
import Controller from "../../component/Controller";
import React from "react";
import "./index.css";

import { useState } from "react";

const Mario = () => {
  const [moves, setMoves] = useState("f1");
  return (
    <div className="game">
      <div className="game-board">
        <Board moves={moves} />
      </div>

      <div className="controller">
        <Controller setMoves={setMoves} />
      </div>
    </div>
  );
};
export default Mario;
