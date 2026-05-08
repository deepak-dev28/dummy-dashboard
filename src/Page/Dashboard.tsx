import { useEffect, useState } from "react";
import { dashboardlabels } from "../Config/config";

function Dashboard() {

const[mob, setMob]= useState(0);
const[web, setWeb]=useState(0);

function Module(){
console.log("Hello Module");
}
useEffect(()=>{
Module();
},[mob])




  return (
    <div className="dashboard-container">
      <div className="dashboard-header p-3 text-black text-center">
        <h1 className="display-10 fw-bold">{dashboardlabels.DASHBOARD}</h1>
      </div>
      <h3>Wellcome to Dashboard</h3>
    
    <h5>Tuch on Mobile {mob} and {web}</h5>
    <button onClick={()=> setMob(mob+1)}>Mobile</button>
    <button onClick={()=> setWeb(web+4)}>Website</button>
    </div>
  );
}

export default Dashboard;
