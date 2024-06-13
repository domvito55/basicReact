import React, { useState } from "react";
import Welcome from "./components/Welcome";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";

function App() {
  const name = "StarGazers";
  const [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <Welcome name="StarGazers" />
        <p>
          Members of an <b>intergalactic alliance</b>
          <br />
          paving the way for peace and benevolence among all species. They are
          known for their enthusiasm for science, for their love of fun, and
          their dedication to education.
        </p>
        <ListCast
          onChoice={(info) => {
            setMemberInfo(info);
          }}
        />
        {memberInfo && (
          <Modals
            member={memberInfo}
            //You cannot simple use setMemberInfo(null) here because it will not work
            //The reason is that the function is called in the child component and the state is in the parent component
            //So, you need to pass a function to the child component to change the state in the parent component
            handleClose={() => {
              setMemberInfo(null);
            }}
          />
        )}
      </hgroup>
    </div>
  );
}
export default App;
