import { useState } from "react";

export const CreateArea = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    note: "",
  });
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
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={onChange}
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          value={inputText.note}
          onChange={onChange}
          name="note"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={submit}
          //   onClick={() => {
          //     props.addItem(inputText);
          //     setInputText("");
          //   }}
        >
          Add
        </button>
      </form>
    </div>
  );
};