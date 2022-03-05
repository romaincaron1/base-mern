import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    const data = await window.fetch("/api/test");
    const json = await data.json();
    setMsg(json.msg);
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <button onClick={handleClick}>Test</button>
        <p>{msg}</p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
