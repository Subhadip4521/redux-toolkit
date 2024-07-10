import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement } from "./redux/slices/counter";


function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{textAlign: "center", marginTop: "50px"}}>
      <div>Count is {count} </div>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
