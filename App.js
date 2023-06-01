import { useState } from 'react';
import './theme.scss';
import './App.css';

function App() {
  // const [newitem,setnewitem] = useState("");

  // function handlesubmit(e) {
  //   e.preventDefault();
  // }
 
  // return (
  //   <>
  //     <form className="todo-form App">
  //       <label htmlFor='input-box'>text area to fill</label>
  //       <input type="text" className="inp-box" id="input-box" value = {newitem} onChange={ e => setnewitem(e.target.value) }></input>
  //       <button type="button" className="btn btn-primary" onClick = {() => {
  //        setnewitem(newitem)
  //       }} >Add</button>
  //     </form >
  //     <ul className='input-area'>
  //       <li>
  //         <label>
  //           <input type="checkbox"></input>
  //            item 1
  //         </label>
  //         <button type="button" id='delete-btn'>delete</button>
  //       </li>
  //       <li>
  //         <label>
  //           <input type="checkbox"></input>
  //            item 2 
  //         </label>
  //         <button type="button" id='delete-btn'>delete</button>
  //       </li>
  //     </ul>
  //   </>
 
  // );
  const [theme , settheme] = useState("white");
  if(theme === "black")
  {
   var p_color = "white";
  }
  return (
    // button for increment and decrement
    // <>
    // <button onClick={() =>{
    //   setcount(count - 1);
    // }}>-</button>
    // <span> {count === 0 ? "null element" : `supported ${count} times`}</span>
    // <button onClick={ () => {
    //   setcount(count + 1);
    // }}>+</button>
    
    // </>
    <div className='wrapper' style={{ background : theme}}>
      <p style = {{color : p_color }} >Just click on the below buttons to switch to Light / Dark theme.</p>
      
      <button style={{ color: p_color , background : theme}} className="light-btn" onClick={() => {
        settheme("white");
      }}>Light </button>
      <button style={{ color : p_color , background : theme}}   className="dark-btn" onClick={() => {
        settheme("black");
      }}> Dark </button>
  
    </div>
  );
}

export default App;
