import React from 'react'; 
 
 
 
 
 
 
 const FirstComponents = ({setInputText, todos, setTodos, inputText}) => { 
     
     const inputTextHandler = (e) => { 
         console.log(e.target.value); 
         setInputText(e.target.value); 
     }; 
 
 
     const submitTidiHandler=(e)=>{ 
         e.preventDefault(); 
         setTodos([ 
             ...todos,  
             {text: inputText, completed: false, id:Math.random() *1000} 
         ]); 
         setInputText(""); 
     }; 
     return ( <div>
         <form className="frm"> 
           <input value={inputText} onChange={inputTextHandler} type="text" a  className='input'/> 
             <button onClick={submitTidiHandler}  type="submit" className="b1"> 
                 Add 
             </button> 
         </form>   
         <h3 className="frm">Show Data</h3>
         </div>   ); 
 }; 
 
 
 export default FirstComponents; 


