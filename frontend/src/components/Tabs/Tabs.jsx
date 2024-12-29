import React, { useState } from "react";
import "./Tabs.css";
import Logo from "../Logo/Logo";

function Tabs() {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState("Wellcome");

  // Function to switch tabs when a button is clicked
  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab state
  };

  return (
    <div className="tabs">
      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "params1" ? "active" : ""}`}
          onClick={() => handleTabClick("params1")}
        >
          Params_1
        </button>
        <button
          className={`tab-button ${activeTab === "params2" ? "active" : ""}`}
          onClick={() => handleTabClick("params2")}
        >
          Params_2
        </button>
        <button
          className={`tab-button ${activeTab === "params3" ? "active" : ""}`}
          onClick={() => handleTabClick("params3")}
        >
          Params_3
        </button>
        <button
          className={`tab-button ${activeTab === "Wellcome" ? "active" : ""}`}
          onClick={() => handleTabClick("Wellcome")}
        >
          Wellcome
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === "params1" && <div>Content for Params_1</div>}
        {activeTab === "params2" && <div>Content for Params_2</div>}
        {activeTab === "params3" && <div>Content for Params_3</div>}
        {activeTab === "Wellcome" && (
          <div>
            Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero ipsam voluptate non cumque amet corporis repellat. Similique
            alias, vel eaque, ut, soluta earum eius voluptatem quis commodi quam
            fuga excepturi?
            <Logo />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
