import "./index.css";
import { useState } from "react";
// export function makeArray(event) {
//   event.preventDefault();

//   var txtArray = event.toString().split("\n");
//   for (var i = 0; i < txtArray.length; i++) {
//     alert(txtArray[i]);
//     console.log(txtArray[i]);
//   }
//   // console.log(txtArray);
// }

const Controller = ({ setMoves }) => {
  const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const horizontal = ["a", "b", "c", "d", "e", "f"];
  const [addFormMoveH, setAddFormMoveH] = useState(5);
  const [addFormMoveV, setAddFormMoveV] = useState(0);
  const handleFormChange = (event) => {
    // event.preventDefault();

    switch (event.target.value) {
      case "left": {
        if (addFormMoveH > 0) {
          setAddFormMoveH(addFormMoveH - 1);
        }
        break;
      }
      // console.log(addFormMove.h);
      // console.log(event.target.value);

      // console.log(addFormMoveV);
      case "right": {
        // console.log(event.target.value);
        if (addFormMoveH < 5) {
          setAddFormMoveH(addFormMoveH + 1);
        }
        break;
      }

      case "up": {
        if (addFormMoveV < 7) {
          console.log("true");
          setAddFormMoveV(addFormMoveV + 1);
        }
        break;
      }

      case "down": {
        if (addFormMoveV > 0) {
          setAddFormMoveV(addFormMoveV - 1);
        }
        break;
      }
    }
    // const fieldValue = event.target.value;

    // setAddFormMove(fieldValue);
  };
  // console.log(horizontal[addFormMove.h] + vertical[addFormMove.v]);
  const handleFormSubmit = (event) => {
    document.querySelector(".moves-input").value = "";
    event.preventDefault();

    // console.log(document.querySelector("textarea").innerHTML);
    // console.log(addFormMoveV);
    // console.log(vertical[addFormMoveV]);

    let move = horizontal[addFormMoveH] + vertical[addFormMoveV];
    setMoves(move);
    // console.log(move);
  };
  return (
    <div className="container">
      <form>
        <textarea
          rows="5"
          cols="60"
          name="moves"
          className="moves-input"
          placeholder="Enter move here ..."
          onChange={handleFormChange}
        ></textarea>

        <input
          type="submit"
          value="Run"
          className="run-button"
          onClick={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default Controller;
