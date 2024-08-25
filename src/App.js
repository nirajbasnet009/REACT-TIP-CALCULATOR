import "./App.css";
import React, { useState } from "react";

function App() {
  const [Bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const avgTip = (Bill * (tip1 + tip2)) / 200;

  function resetItems() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <>
      <BillForm bill={Bill} setBill={setBill} />
      <CustomerSat
        label="How did you like the service"
        tip={tip1}
        setTip={setTip1}
      />
      <CustomerSat
        label="How did your friend like the service"
        tip={tip2}
        setTip={setTip2}
      />
      {Bill > 0 && (
        <>
          <Stats Bill={Bill} avgTip={avgTip} />
          <Reset resetItems={resetItems} />
        </>
      )}
    </>
  );
}

function BillForm({ bill, setBill }) {
  return (
    <form>
      <h3>
        How Much Was The Bill?
        <input
          type="number"
          placeholder="Bill Value"
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value));
          }}
        ></input>
      </h3>
    </form>
  );
}

function CustomerSat({ label, tip, setTip }) {
  return (
    <div>
      <h3>
        {label}?
        <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>Satisfied (5%)</option>
          <option value={10}>Very Satisfied (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </h3>
    </div>
  );
}

function Stats({ Bill, avgTip }) {
  return (
    <div>
      <h2>
        You pay ${Bill}+${avgTip} tip =${+Bill + +avgTip}
      </h2>
    </div>
  );
}
function Reset({ resetItems }) {
  return <button onClick={resetItems}>RESET</button>;
}

export default App;
