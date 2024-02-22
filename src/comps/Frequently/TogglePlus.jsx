import { useState } from "react";

function TogglePlus() {
  const [times, setTimes] = useState(true);

  const handlePlus = () => {
    setTimes(!times);
  };
  return (
    <>
      {times === true ? (
        <p
          onClick={handlePlus}
          className="text-white text-6xl font-thin cursor-pointer"
        >
          +
        </p>
      ) : (
        <p
          onClick={handlePlus}
          className="text-white text-6xl font-thin cursor-pointer"
        >
          x
        </p>
      )}
    </>
  );
}

export default TogglePlus;
