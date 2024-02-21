import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  // console.log("I run all the time", counter);
  const runOnlyOnce = () => console.log("I run only once .");
  // component가 처음 생성될때만 실행
  useEffect(runOnlyOnce, [])
  // component가 처음 생성될때(keyword에 값이 있을 때)랑 
  // keyword가 변경될떄만 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search movie for ", keyword)
    }
  }
  , [keyword]);
  // component가 처음 생성될때랑 
  // counter가 변경될떄만 실행
  useEffect(() => {
      console.log("Conter changed: ", counter)
  }
  , [counter]);

  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((current) => !current)
  
  function Hello({param}) {
    // function destroyFn() {
    //   console.log(`destroyed!!!`);
    // }
    // // component가 처음 생성될때만 실행
    // function effectFn() {
    //   console.log("created!!!");
    //   // Cleanup funtion
    //   // component가 destroyed될때만 실행
    //   return destroyFn;
    // }
    // useEffect(effectFn
    // , []);
    useEffect(() => {
      // component가 처음 생성될때만 실행
      console.log(`created!!!`);
      // Cleanup funtion
      // component가 destroyed될때만 실행
      return () => console.log(`destroyed` );
    }
    , []);
    return <h1>Hello, {param}</h1>
  }
  
  return (
    <div>
      <input type="text" placeholder="Search here" 
        value={keyword} onChange={onChange}/>
      <h3 className={styles.title}>{counter}</h3>
      <button onClick={onClick}>count up</button>
      <Button text={"continue!!!"} />
      <hr />
      {showing ? <Hello param={keyword}/> : null}
      <button onClick={onClickShowing}>
        {showing ? "Hide" : "Show"}
      </button>
      </div>
  );
}

export default App;
