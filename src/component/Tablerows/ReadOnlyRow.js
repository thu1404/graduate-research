import React from "react";
import "./tablestyle.css";

const ReadOnlyRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.studentID}</td>
      <td>{contact.fullName}</td>
      <td>{contact.dob}</td>
      <td>{contact.email}</td>
      <td>Delete</td>
    </tr>
  );
};

export default ReadOnlyRow;
