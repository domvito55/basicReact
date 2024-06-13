import { useState } from "react"
import Welcome from "./components/Welcome"
import WelcomeClass from "./components/WelcomeClass"
import Suport from "./components/Suport"
import ListCast from "./components/ListCast"

function App() {
  const name = 'StarGazers'
  let [memberInfo, setMemberInfo] = useState(null);
  const customStyle = {color:"steelblue"}
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group"/>
          <WelcomeClass name="StarAliens"/>
          <Welcome nome="Ramiro"/>
          <h1>Meet the <i style={customStyle}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast/>
          <Suport/>
        </hgroup>
      </article>
    </div>
  )
}
export default App
