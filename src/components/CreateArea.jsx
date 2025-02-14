import { AddRounded, KeyboardArrowUp, ZoomIn } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

export const CreateArea = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    note: "",
  });
  const [isExpand, setIsExpand] = useState(false)
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
    setIsExpand(isExpanded => 
      isExpanded =   true);
  }

  function unExpand(e) {
    e.preventDefault();
    setIsExpand(isExpanded => 
      isExpanded =   false);
  }
  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
          name="title"
          onChange={onChange}
          placeholder="Title"
          value={inputText.title}
        />
        )}
        
        <textarea
          value={inputText.note}
          onClick={expand}
          onChange={onChange}
          name="note"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <div className="button_bar">
        <Zoom in={isExpand} >
        <button onClick={unExpand} className="minimize">
          <KeyboardArrowUp/>
        </button>

        </Zoom>
        <Zoom in={isExpand} >
        <Fab className="addButton" size="medium" variant="extended" 
          onClick={submit}
        >
          <AddRounded/>
        </Fab>
        </Zoom>

        
        
        </div>
       
        
      </form>
    </div>
  );
};