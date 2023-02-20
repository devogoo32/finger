import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Finger</h1>
      </div>
      <div className="sidebar__subheader">
        <h3>Matches</h3>
        <div className="sidebar__counter">3</div>
      </div>
      
    </div>
  );
}

export default Sidebar;
