import React, { useState } from "react";
import "./Tabs.css";
import Logo from "../Logo/Logo"; // Importing the Logo component

/**
 * Tabs Component:
 * Dynamically renders tab buttons and their corresponding content
 * based on a predefined list of tabs.
 */
function Tabs() {
  // State to keep track of the currently active tab (default: "Wellcome")
  const [activeTab, setActiveTab] = useState("Welcome");

  // Array of tabs: Each tab has a name and corresponding content
  const tabs = [
    { name: "Gas level", content: "Content for Gas level" },
    { name: "params2", content: "Content for Params_2" },
    { name: "params3", content: "Content for Params_3" },
    {
      name: "Welcome",
      content: (
        <div>
          <h2>Welcome to Fire & Gas Detection Technologies Inc.</h2>

          <p>
            We are committed to respond to the market requirements for improved
            performance and more reliable flame & gas detection products.
          </p>
          <p>
            That includes:
            <br /> <br />
            <li>Fastest speed of response</li>
            <li>Highest immunity to false alarms</li>
            <li>Operation in all weather conditions</li>
            <li>Reduced cost of ownership</li>
            <li>Expert technical & application support</li>
          </p>

          {/* Include the Logo component */}
          <Logo />
        </div>
      ),
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the clicked tab as the active tab
  };

  return (
    <div className="tabs">
      {/* Tab buttons: Dynamically render buttons for each tab */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.name} // Unique key for each button (required in lists)
            className={`tab-button ${activeTab === tab.name ? "active" : ""}`} // * if true : tab-button beacame tab-button.active
            onClick={() => handleTabClick(tab.name)} // Change active tab
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content: Dynamically render content for the active tab */}
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name}>{tab.content}</div> // Render content if tab is active
            )
        )}
      </div>
    </div>
  );
}

export default Tabs;

//* The regular code (less dynmic):
/////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import "./Tabs.css";
// import Logo from "../Logo/Logo"; // Importing the Logo component

// /**
//  * Tabs Component:
//  * Manages dynamic content switching between different tabs.
//  * Each tab has a button that displays specific content when clicked.
//  */

// function Tabs() {

//   const [activeTab, setActiveTab] = useState("Wellcome");

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName); // Set the clicked tab as the active tab
//   };

//   return (
//     <div className="tabs">
//       {/* Tab buttons: Render one button per tab */}
//       <div className="tab-buttons">
//         {/* Tab button for Params_1 */}
//         <button
//           className={`tab-button ${activeTab === "params1" ? "active" : ""}`} // Highlight active tab
//           onClick={() => handleTabClick("params1")} // Change active tab to Params_1
//         >
//           Params_1
//         </button>

//         {/* Tab button for Params_2 */}
//         <button
//           className={`tab-button ${activeTab === "params2" ? "active" : ""}`} // Highlight active tab
//           onClick={() => handleTabClick("params2")} // Change active tab to Params_2
//         >
//           Params_2
//         </button>

//         {/* Tab button for Params_3 */}
//         <button
//           className={`tab-button ${activeTab === "params3" ? "active" : ""}`} // Highlight active tab
//           onClick={() => handleTabClick("params3")} // Change active tab to Params_3
//         >
//           Params_3
//         </button>

//         {/* Tab button for Wellcome */}
//         <button
//           className={`tab-button ${activeTab === "Wellcome" ? "active" : ""}`} // Highlight active tab
//           onClick={() => handleTabClick("Wellcome")} // Change active tab to Wellcome
//         >
//           Wellcome
//         </button>
//       </div>

//       {/* Tab content: Render the content based on the active tab */}
//       <div className="tab-content">
//         {/* Content for Params_1 */}
//         {activeTab === "params1" && <div>Content for Params_1</div>}

//         {/* Content for Params_2 */}
//         {activeTab === "params2" && <div>Content for Params_2</div>}

//         {/* Content for Params_3 */}
//         {activeTab === "params3" && <div>Content for Params_3</div>}

//         {/* Content for Wellcome */}
//         {activeTab === "Wellcome" && (
//           <div>
//             {/* Welcome message */}
//             Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Vero ipsam voluptate non cumque amet corporis repellat. Similique
//             alias, vel eaque, ut, soluta earum eius voluptatem quis commodi quam
//             fuga excepturi?
//             {/* Include the Logo component */}
//             <Logo />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Tabs;
