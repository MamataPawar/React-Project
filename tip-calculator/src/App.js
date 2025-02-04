import { useState } from "react";
import Calculate from "./Calculate";
import Service from "./Service";
import Bill from "./Bill";

function App() {
  const [bill, setBill] = useState(0);
  const [servicePer, setServicePer] = useState(0);
  const [frndServicePer, setFrndServicePer] = useState(0);

  function handleReset() {
    setServicePer(0);
    setFrndServicePer(0);
    setBill(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <Service serPercentage={servicePer} onService={setServicePer}>
        How did you like the service?
      </Service>

      <Service serPercentage={frndServicePer} onService={setFrndServicePer}>
        How did your friend like the service?
      </Service>
      {bill === 0 ? null : (
        <div>
          <Calculate
            bill={bill}
            servicePer={servicePer}
            frndServicePer={frndServicePer}
          />
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
