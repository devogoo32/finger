import Cards from "../../components/Cards/Cards";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <Cards />
      </div>
    </div>
  );
}

export default Dashboard;
