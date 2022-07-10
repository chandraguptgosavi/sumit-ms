import "./Items.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { TextField } from "@react-ui-org/react-ui";

function Row() {
  return (
    <div className="flex w-full my-2">
      <div className="w-1/3 flex-shrink-0 flex-grow-0 ">
        <span className="mr-4 ">Item Name: : </span>
        <input type="text" placeholder="Enter Item Name" required />
      </div>
      <div className="w-1/3 flex-shrink-0 flex-grow-0">
        <span className="mr-4">HSNorSACCode: </span>
        <input type="text" placeholder="Enter HSN or SAC Code" required />
      </div>
      <div className="w-1/3 flex-shrink-0 flex-grow-0">
        <span className="mr-4">Units: </span>
        <input type="text" placeholder="Enter Units" required />
      </div>
      <div className="w-1/3 flex-shrink-0 flex-grow-0">
        <span className="mr-4">Cost: </span>
        <input type="text" placeholder="Enter Item Cost" required />
      </div>
      <div className="w-1/3 flex-shrink-0 flex-grow-0">
        <span className="mr-4">GST Rate: </span>
        <input type="text" placeholder="Enter GST Rate" required />
      </div>
    </div>
  );
}

export const Items = (props) => {
  const [name, setName] = useState("");
  const [hsnorSacCode, sethsnorSacCode] = useState("");
  const [unit, setUnit] = useState("");
  const [cost, setCost] = useState("");
  const [gstRate, setgstRate] = useState("");

  

  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const handlehsnorsacChange = (e) => {
    sethsnorSacCode(e.target.value);
  };
  const handleunitChange = (e) => {
    setUnit(e.target.value);
  };
  const handlecostChange = (e) => {
    setCost(e.target.value);
  };
  const handlegstChange = (e) => {
    setgstRate(e.target.value);
  };

  return (
    <div className="overflow-x-scroll ">
      {/* <TextField label =' Item Name'  placeholder='Enter Item Name' required={true} type='text' onChange={(e)=>handlenameChange(e)}></TextField>
        <TextField  label ='HSNorSACCode'  placeholder='Enter HSN or SAC Code' required={true} type='text' onChange={(e)=>handlehsnorsacChange(e)}></TextField>
        <TextField label ='Units'  placeholder='Enter Units' required={true} type='text' onChange={(e)=>handleunitChange(e)}></TextField>
        <TextField label ='Cost'  placeholder='Enter Item Cost' required={true} type='text' onChange={(e)=>handleunitChange(e)}></TextField>
        <TextField id='GST' label =' GST Rate' placeholder='Enter GST Rate' required={true} type='text' onChange={(e)=>handlegstChange(e)}></TextField> */}
      {[...Array(props.rowCount)].map((_) => (
        <Row />
      ))}
    </div>
  );
};
