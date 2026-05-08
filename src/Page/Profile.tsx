import { profilelabels } from "../Config/config";

function Profile() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header p-3 text-black text-center">
        <h1 className="display-10 fw-bold">{profilelabels.PROFILE}</h1>
      </div>

      <h3>Welcome to Profile Page</h3>
    </div>
  );
}

export default Profile;
