import './App.css';

import Wrapper from "./Components/Wrapper";
import Display from "./Components/Display";
import Keypad from "./Components/Keypad";
import Button from "./Components/Button";


const buttonValues = 
[
["c", "ce", "%", "/"],
[7, 8, 9, "*"],
[4, 5, 6, "+"],
[1, 2, 3, "-"],
[0, ".", "="],
];


const methods = ["*","-","+","/"];



function App() {
  
  return (
    <div className="App">
      <Wrapper>
        <Display value="0"/>
        <Keypad>
        {
          buttonValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : methods.includes(btn) ? "methods" : ""} 
                //className={btn === "=" ? "equals" : btn in ["*","-","+","/"] ? "methods" : ""}
                //className={btn === "=" ? "equals" : btn === "*"||"-"||"+"||"/" ? "methods" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked`);
                }}
              />
            );
          })
        }
        </Keypad>
      </Wrapper>
    </div>
    
  );
}   

export default App;
