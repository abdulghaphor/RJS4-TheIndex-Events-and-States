import React from "react";

function Sidebar(props) {
  let toggle = props.toggle;
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button onClick={() => toggle()}>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
