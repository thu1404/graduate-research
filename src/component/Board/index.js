// import React from "react";
import "./index.css";
import marioIcon from "../../assert/mario-icon.png";
import treasureIcon from "../../assert/treasure.png";
import { useState } from "react";

const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontal = ["a", "b", "c", "d", "e", "f"];
const wall = [
  "f2",
  "f4",
  "d2",
  "c2",
  "c3",
  "c4",
  "c5",
  "a7",
  "b7",
  "c7",
  "e7",

  "e5",
  "e4",
  "e8",
];
const defaultPosition = "f1";
// const marioPosition = defaultPosition;
const treasurePosition = "f8";

export const check = (Array, boardid) => {
  for (let i = 0; i < Array.length; i++) {
    if (boardid === Array[i]) {
      return true;
    }
  }
  return false;
};

const Board = ({ moves }) => {
  // console.log(moves);
  let board = [];
  if (moves == treasurePosition) {
    alert("Chúc Mừng bạn đã thắng");
  }
  if (check(wall, moves)) {
    alert("invalid move");
    window.location.reload();
  }
  for (let i = vertical.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontal.length; j++) {
      let boardid = horizontal[j] + vertical[i];
      if (check(wall, boardid)) {
        board.push(
          <div className="tile wall">
            {horizontal[j]}
            {vertical[i]}
          </div>
        );
      } else if (boardid === moves) {
        board.push(
          <div className="tile current-position">
            {horizontal[j]}
            {vertical[i]}
            <img src={marioIcon} className="marioIcon" />
          </div>
        );
      } else if (boardid === treasurePosition) {
        board.push(
          <div className="tile current-position">
            {horizontal[j]}
            {vertical[i]}
            <img src={treasureIcon} className="marioIcon" />
          </div>
        );
      } else {
        board.push(
          <div className="tile">
            {horizontal[j]}
            {vertical[i]}
          </div>
        );
      }
    }
    // var prev = moves;
  }

  return <div id="gameboard">{board}</div>;
};

export default Board;
