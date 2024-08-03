import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { count_primes_wasm } from "wasm-example";
import "./App.css";

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function countPrimes(limit: number): number {
  let count = 0;
  for (let n = 2; n <= limit; n++) {
    if (isPrime(n)) {
      count += 1;
    }
  }
  return count;
}

function App() {
  const [timeTakenNative, setTimeTakenNative] = useState(0);
  const [timeTakenWasm, setTimeTakenWasm] = useState(0);

  const handleClickNative = () => {
    const startTime = performance.now();
    console.log(countPrimes(80000000));
    const endTime = performance.now();
    const timeTaken = (endTime - startTime) / 1000;
    setTimeTakenNative(timeTaken);
  };
  const handleClickWasm = () => {
    const startTime = performance.now();
    console.log(count_primes_wasm(80000000));
    const endTime = performance.now();
    const timeTaken = (endTime - startTime) / 1000;
    setTimeTakenWasm(timeTaken);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        Native:{" "}
        <button onClick={handleClickNative}>Time is {timeTakenNative} s</button>
      </div>
      <div className="card">
        Wasm:{" "}
        <button onClick={handleClickWasm}>Time is {timeTakenWasm} s</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
