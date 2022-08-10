import React, { useState } from "react";
import "./index.css";
import data from "../../dummy-data.json";
// import { nanoid } from "nanoid";

const TableInput = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    studentID: "",
    fullName: "",
    dob: "",
    email: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      // id: nanoid(),
      studentID: addFormData.studentID,
      fullName: addFormData.fullName,
      dob: addFormData.dob,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contacId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contacId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div className="container">
      <form className="input-form" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="studentID"
          required="required"
          placeholder="Enter a ID..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="dob"
          required="required"
          placeholder="Enter a date of birth..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a Email address..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            {/* <th>STT</th> */}
            <th>MSSV</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              {/* <td>{contact.id}</td> */}
              <td>{contact.studentID}</td>
              <td>{contact.fullName}</td>
              <td>{contact.dob}</td>
              <td>{contact.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInput;
