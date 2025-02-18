import { Delete, FormatStrikethrough, Title } from "@mui/icons-material";

export const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="note">
        <h1
          style={{
            textDecoration: props.data.stripped ? "line-through" : "none",
          }}
        >
          {props.data.title}
        </h1>
        <p
          style={{
            textDecoration: props.data.stripped ? "line-through" : "none",
          }}
        >
          {props.data.note}
        </p>
        <div>
          <small className="note-date">{props.data.dateTime}</small>
          <button onClick={() => props.onStrip(props.id)}>
            {props.data.stripped ? <Title /> : <FormatStrikethrough />}
          </button>

          <button onClick={handleClick}>
            <Delete />
          </button>
        </div>
      </div>
    </>
  );
};
