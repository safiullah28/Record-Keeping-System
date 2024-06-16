import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import Datas from "./source/datas";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        name: name,
        email: email,
      },
    ]);
    setName("");
    setEmail("");
  };

  function DLTdata(i) {
    let total = [...data];
    total.splice(i, 1);
    setData(total);
  }

  return (
    <div>
      <Stack>
        <h1 className="Record">Record Keeping</h1>
        <div className="container">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" color="success" onClick={addData}>
            <AddIcon />
          </Button>
        </div>
      </Stack>

      <div className="data_val">
        <div className="data">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {/*
        <div className="data2">
        {
          data.map((element, index) => {
            return (
              <div key={index}>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Button variant="contained" color="error" onClick={() => DLTdata(index)}><DeleteIcon /></Button>
              </div>
            )
          })
        }*/}
        {data.map((element, index) => {
          return (
            <div key={index}>
              <Datas
                name={element.name}
                email={element.email}
                DLTdata={() => DLTdata(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
