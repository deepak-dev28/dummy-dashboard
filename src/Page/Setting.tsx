import { settinglabels } from "../Config/config";

function Setting() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header p-3 text-black text-center">
        <h1 className="display-10 fw-bold">{settinglabels.SETTINGS}</h1>
      </div>

      <h3>Wellcome to Setting Page</h3>
    </div>
  );
}

export default Setting;
