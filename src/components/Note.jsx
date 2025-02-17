import { Delete, FormatStrikethrough, Title } from "@mui/icons-material";

export const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="note">
        <h1
          style={{ textDecoration: props.stripped ? "line-through" : "none" }}
        >
          {props.title}
        </h1>
        <p style={{ textDecoration: props.stripped ? "line-through" : "none" }}>
          {props.content}
        </p>
        <div>
          <button onClick={() => props.onStrip(props.id)}>
            {props.stripped ? <Title /> : <FormatStrikethrough />}
          </button>

          <button onClick={handleClick}>
            <Delete />
          </button>
        </div>
      </div>
    </>
  );
};
