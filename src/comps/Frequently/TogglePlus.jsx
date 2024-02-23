import { useState } from "react";
function TogglePlus() {
  const [times, setTimes] = useState(true);

  const handlePlus = () => {
    setTimes(!times);
  };
  return (
    <>
      {times === true ? (
        <div>
          <p
            onClick={handlePlus}
            className="text-white text-6xl font-thin cursor-pointer"
          >
            +
          </p>
        </div>
      ) : (
        <div>
          <p
            onClick={handlePlus}
            className="text-white text-6xl font-thin cursor-pointer"
          >
            x
          </p>
        </div>
      )}
    </>
  );
}

export default TogglePlus;
