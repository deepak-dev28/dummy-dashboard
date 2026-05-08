import { useState } from "react";
import AddUserModal from "./AddUserModal";
import type { User } from "./types";
import { buttonlabels, usermanagementlabel } from "../Config/config";

function Usermanagement() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Lucky", age: 21, gender: "Male" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  const addUser = (newUser: User) => {
    if (editUser) {
      setUsers(users.map((u) => (u.id === newUser.id ? newUser : u)));
      setEditUser(null);
    } else {
      setUsers([...users, newUser]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user: User) => {
    setEditUser(user);
    setShowModal(true);
  };
  return (
    <div className="usermanagement-container">
      <div className="usermanagement-header p-3 text-black text-center">
        <h1 className="display-10 fw-bold">
          {usermanagementlabel.USER_MANAGEMENT}
        </h1>
      </div>
      <div className="container mt-5">
        <h3 className="user-container display-10 fw-bold text-center">
          {usermanagementlabel.USER_MANAGEMENT}
        </h3>
        <div className="button-container mt-3">
          <button
            className="bg-dark text-white"
            onClick={() => {
              setEditUser(null);
              setShowModal(true);
            }}
          >
            {usermanagementlabel.ADD_USER}
          </button>
        </div>
        <AddUserModal
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setEditUser(null);
          }}
          onSave={addUser}
          editUser={editUser}
        />
        <table className="table table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>{usermanagementlabel.ID}</th>
              <th>{usermanagementlabel.NAME}</th>
              <th>{usermanagementlabel.AGE}</th>
              <th>{usermanagementlabel.GENDER}</th>
              <th>{usermanagementlabel.ACTION}</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.gender}</td>
                <td>
                  <button
                    className="edit btn"
                    onClick={() => handleEdit(u)}
                  >
                    {buttonlabels.EDIT}
                  </button>
                  <button
                    className="delete btn"
                    onClick={() => handleDelete(u.id)}
                  >
                    {buttonlabels.DELETE}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Usermanagement;
