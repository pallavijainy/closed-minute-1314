import React from "react";

type ControlsProps = {
  balance: number;
  gameState: number;
  buttonState: any;
  betEvent: any;
  hitEvent: any;
  standEvent: any;
  resetEvent: any;
};

const Controls = () => {
  return (
    <div>
      <button>Hit</button>
      <button>Stand</button>
      <button>Reset</button>
    </div>
  );
};

export default Controls;
