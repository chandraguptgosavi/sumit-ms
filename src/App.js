import "./App.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Items } from "./Items";

function App() {
  const [billTo, setbillTo] = useState("");
  const [shipTo, setshipTo] = useState("");
  const [supplyPlace, setsupplyPlace] = useState("");
  const [pan, setPan] = useState("");
  const [gstIn, setgstIn] = useState("");
  const [billDate, setBillDate] = useState("");
  const [rowCount, setRowCount] = useState(1);

  const handlebillChange = (e) => {
    setbillTo(e.target.value);
  };
  const handleshipChange = (e) => {
    setshipTo(e.target.value);
  };
  const handleplaceChange = (e) => {
    setsupplyPlace(e.target.value);
  };
  const handlepanChange = (e) => {
    setPan(e.target.value);
  };
  const handlegstInChange = (e) => {
    setgstIn(e.target.value);
  };

  const handlebillDate = (e) => {
    setBillDate(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("Details  Submitted Successfully");

    e.preventDefault();
  };

  const handleAddMore = (e) => {
    setRowCount(rowCount + 1);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2> Rare Concepts </h2>
          <h3> Details Form </h3>
          <form
            className="flex w-full justify-around"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="w-2/5">
              <label align="left">Bill To</label>
              <br />
              <input
                type="text"
                value={billTo}
                required
                onChange={(e) => {
                  handlebillChange(e);
                }}
              />
              <br />

              <label>Ship To</label>
              <br />
              <input
                type="text"
                value={shipTo}
                required
                onChange={(e) => {
                  handleshipChange(e);
                }}
              />
              <br />
              <label>Supply Place</label>
              <br />
              <input
                type="text"
                value={supplyPlace}
                required
                onChange={(e) => {
                  handleplaceChange(e);
                }}
              />
              <br />
              <label>Pan</label>
              <br />
              <input
                type="text"
                value={pan}
                required
                onChange={(e) => {
                  handlepanChange(e);
                }}
              />
              <br />
              <label>GSTIN No.</label>
              <br />
              <input
                type="text"
                value={gstIn}
                required
                onChange={(e) => {
                  handlegstInChange(e);
                }}
              />
              <br />
            </div>
            <div className="w-2/5">
              <label>Label 1</label>
              <br />
              <input type="text" required />
              <br />
              <label>Label 2</label>
              <br />
              <input type="text" required />
              <br />
            </div>
          </form>
        </header>
      </div>
      <br />
      <div className="px-4 mb-4 overflow-hidden ">
        <h3>Items Details</h3>
        <Items rowCount={rowCount}></Items>
        <div className="relative h-8">
          <button className="absolute left-0 bottom-0 " onClick={handleAddMore}>
            Add More
          </button>
          <button className="absolute right-0 bottom-0"> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
