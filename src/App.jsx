
import { useState } from "react";

function App() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    function add() {
        let answer = Number(number1) + Number(number2);
        setResult(answer);
    }

    function subtract() {
        let answer = Number(number1) - Number(number2);
        setResult(answer);
    }

    function multiply() {
        let answer = Number(number1) * Number(number2);
        setResult(answer);
    }

    function divide() {
        if (Number(number2) === 0) {
            setResult("Cannot divide by zero");
        } else {
            let answer = Number(number1) / Number(number2);
            setResult(answer);
        }
    }

    return (
        <div>
            <h1>Simple Calculator</h1>

            <input
                type="number"
                placeholder="Enter first number"
                value={number1}
                onChange={(event) => {
                    setNumber1(event.target.value);
                }}
            />

            <br />
            <br />

            <input
                type="number"
                placeholder="Enter second number"
                value={number2}
                onChange={(event) => {
                    setNumber2(event.target.value);
                }}
            />

            <br />
            <br />

            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>

            <h2>Result: {result}</h2>
        </div>
    );
}

export default App;
