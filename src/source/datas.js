import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./datas.css";

function Datas({ name, email, index, DLTdata }) {
  return (
    <div className="data2">
      <h4>{name}</h4>

      <h4>{email}</h4>

      <Button variant="contained" color="error" onClick={() => DLTdata(index)}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Datas;
