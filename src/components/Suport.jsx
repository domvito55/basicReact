//Import useState hook, to manage state (meomory)
//       useEffect hook, to manage sideEffects (lifecycle)
import { useState, useEffect } from "react";
const pageTitle = document.title;

export default () => {
  // useState is a function that returns an array with a memory position (variable)
  // and a setter for that variable. The argument is the initial value for
  // the variable.
  const [count, setCount] = useState(0)

  //The useEffect Hook takes two arguments:
  // Callback Function: the side effect code you want to run; can optionally return a cleanup function that will be executed when the component unmounts or before the effect runs again.
  // Dependency Array (optional): specifies the dependencies that the effect depends on. The effect will only re-run if one of these dependencies changes.
  useEffect(() => {
    //switch alternative:  uses JavaScript's logical AND (&&) operator for conditional execution. This is a common pattern for concise conditional statements.

    // In JavaScript, the && operator works as follows:
    // It evaluates the left-hand side expression (count in this case).
    // If the left-hand side expression is falsey (e.g., 0, null, undefined, false, NaN, or an empty string), it immediately returns that falsey value without evaluating the right-hand side.
    // If the left-hand side expression is truthy, it evaluates and returns the right-hand side expression.
    count && (document.title = `${pageTitle} - ${count}`)
    //if alternative
    // if(count > 0){
    //   document.title = `${pageTitle} - ${count}`
    // }
  })

  return(
    <button  className="outline" onClick={()=>setCount(count + 1)} style={{width: "100%"}}>
      {
        //Ternaty alternative
        count === 0 ? "Click to support" : `Supported ${count} times`
        //IIFE alternative
        // (()=>{
        //   if (count === 0){
        //     return "Click to support"
        //   } else {
        //     return `Supported ${count} times`
        //   }
        // })()
      }
    </button>
  )
}

