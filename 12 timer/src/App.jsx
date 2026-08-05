// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [time, settime] = useState(0);
//   const [inp, setinp] = useState("");

//   useEffect(() => {
//     if (time == 0) return;
//     const timer = setTimeout(() => {
//       settime((prev) => prev - 1);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [time]);

//   return (
//     <div>
//       <h1>{time}</h1>
//       <input
//         placeholder="enter the number"
//         value={inp}
//         type="text"
//         name=""
//         id=""
//         onChange={(e) => setinp(e.target.value)}
//       />
//       <button onClick={() => {settime(Number(inp)),
//         setinp("")}
//       }>Start</button>
//       {time == 0 && <h1>Time Up.....</h1>}
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [time, settime] = useState(10);
  useEffect(() => {
    if (time == 0) return;
    const timer = setTimeout(() => {
      settime((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
      {time == 0 && <h1>Time Up.....</h1>}
    </div>
  );
};

export default App;
