import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import type { AddUserModalProps } from "./types";
import { buttonlabels } from "../Config/config";

function AddUserModal({ show, onClose, onSave, editUser }: AddUserModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (editUser) {
      setFormData({
        name: editUser.name,
        age: editUser.age.toString(),
        gender: editUser.gender,
      });
    } else {
      setFormData({
        name: "",
        age: "",
        gender: "",
      });
    }
  }, [editUser]);

  const handleSave = () => {
    onSave({
      id: editUser ? editUser.id : Date.now(),
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
    });
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      className="custom-modal"
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>{editUser ? "Edit User" : "Add User"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Gender"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="secondary" onClick={onClose}>
        {buttonlabels.CLOSE}
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {buttonlabels.SAVE}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddUserModal;
