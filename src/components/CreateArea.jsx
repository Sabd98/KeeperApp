import { AddRounded, KeyboardArrowUp } from "@mui/icons-material";
import { Collapse, Fab, Zoom } from "@mui/material";
import { useState } from "react";

export const CreateArea = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    note: "",
  });
  const [isExpand, setIsExpand] = useState(false);
  function onChange(e) {
    const { name, value } = e.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submit(e) {
    props.addItem(inputText);
    setInputText({
      title: "",
      note: "",
    });
    e.preventDefault();
  }
  function expand() {
    setIsExpand((isExpanded) => !isExpanded);
  }

  function unExpand(e) {
    e.preventDefault();
    setIsExpand((isExpanded) => !isExpanded);
  }
  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <Collapse unmountOnExit in={isExpand}>
            <input
              name="title"
              onChange={onChange}
              placeholder="Tulis Judul"
              value={inputText.title}
            />
          </Collapse>
        )}

        <textarea
          value={inputText.note}
          onClick={expand}
          onChange={onChange}
          name="note"
          placeholder="Catatan Kegiatan...."
          rows={isExpand ? 3 : 1}
        />
        <div className="button_bar">
          <div>
            <Zoom in={isExpand}>
              <button onClick={unExpand} className="minimize">
                <KeyboardArrowUp />
              </button>
            </Zoom>
          </div>

          <Zoom in={isExpand}>
            <Fab
              className="addButton"
              size="medium"
              variant="extended"
              onClick={submit}
            >
              <AddRounded />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
};
