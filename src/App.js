import React,{useState} from "react";
import './App.css';

import SecondComponent from './Components/SecondComponent';
import FirstComponents from "./Components/FirstComponent";
//import ShowTodo from "./Components/ShowTodo";


import { BrowserRouter as Router, Switch , Route , Link} from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (







    <Router>
      <div>
      <header>
        <h1 className="he">Wellcome Todo</h1>
       
        <Link to="/" > <h4 className="he1">--Go First Page</h4>   <p/></Link>
     </header>
     











        <Switch>
          <Route path="/secondcomponents" component>
            <FirstComponents  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
            <SecondComponent todos={todos} setTodos={setTodos} />
          </Route>
          <Route path="/ShowTodo">
          <SecondComponent todos={todos} setTodos={setTodos} />
          </Route>
         
          <Route path="/">
            <Home  />          
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}






function Home() {
  return(
    <div>
     <div className="da">
         <h2 >
             Add Item
         </h2><p/>
         <Link to="/secondcomponents" ><button className="bu">click</button>   <p/></Link><br/>
         <h2 >
             Show Items
         </h2><p/>
         <Link to="/ShowTodo" ><button className="bu">click</button>   <p/></Link>
           
        
    </div>
    </div>
);
}





/*

function About({ setInputText, todos, setTodos, inputText}) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
};

const submitTodoHandler =(e) => {
    e.preventDefault();//not refreash
    setTodos([
        ...todos,
        {text: inputText, completed: false, id : Math.random() * 1000 },
    ]);
    setInputText("");
};
 return <div>
  <div className="da">
      <h2>
          Add Items
      </h2><p/>
      <div className="inp">
              <h5 className="lb">
                  Add item succesfully
              </h5><p/>
      <form>
      <input type="text" value={inputText} onChange={inputTextHandler} type="text"  name="fname"></input>
         
      <button className="b1" onClick={submitTodoHandler}  type="submit">Submit</button> <p/>
      </form>
      </div>
      <div className="inp">
      </div>      
 </div>
 </div>;
}
*/




/*

function Users() {
  return <div>
 <div className="da">
       <h2>
           Add Items
       </h2>   <p/>
         <div className="inp">
             <h5>
              Update item succesfully
             </h5><p/>
             <input type="text" id="fname" name="fname"></input>
             <button className="b1">Submit</button>
             <Link to="/secondcomponents" ><button className="b1">Add</button>   <p/></Link>
         </div>
         <div className="inp">
           <b>Show Data</b><p/>
           <table className="t1">
                <tr>
                     <td>Mohd Aqib</td>
                     <td>     
                       <button className="b2e" >   <img src={logo1} className="b2ed"/>  </button> 
                        <button className="b2d">    <img src={logo2}  className="b2ed"/> </button> 
                              </td>
                 </tr>
            </table>
         </div>      
</div>
</div>;
}*/