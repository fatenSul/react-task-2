import About from "./About/About.jsx";
import { useState } from "react";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";

function App() {
  
  let [count , setCount ] = useState(0)
  const incrementCounter =()=>{
    setCount(count+1);
    console.log(count);
  }
  return (
    <>
      <button onClick ={incrementCounter}> Faten Sultan  {count}</button>
    </>
  );
}

export default App;