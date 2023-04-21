import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        margin: 3,
        backgroundImage: `url(${"https://media.istockphoto.com/id/1089173146/vector/vector-illustrations-of-lined-paper-with-texture.jpg?s=612x612&w=0&k=20&c=hMVl6Od5CsR8fhoydD9i48BdMiVQdZvVOPs1JDw5mKQ="})`,
      }}
    >
      <TextField multiline rows={6} fullWidth label="Body" id="Body" />
    </Card>
  );
}
