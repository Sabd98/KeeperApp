import { colors } from "@mui/material";

export const Footer = () => {
 const getYear = new Date().getFullYear();
  return (
    <footer>
      <h3>By: Sabda Avicenna  ⓒ {getYear} </h3>
    </footer>
  )
}
