import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../../store/reducers/users";
import { setPopup } from "../../../store/reducers/ui";
import Button from "../../../components/button/Button";
import UsersTable from "../components/UsersTable";
import Popup from "../../../ui/popup/Popup";
import Form from "../../../components/form/Form";

const Users = (props) => {
  const fetchUsers = props.fetchUsers;
  const users = props.users;
  const [editedId, setEditedId] = useState("");

  useEffect(() => {
    if (users && !users.length) {
      fetchUsers();
    }
  }, [users, fetchUsers]);

  const handleDelete = (id) => {
    console.log(id);
    props.deleteUser(id);
  };

  const openEditPopup = (id) => {
    setEditedId(id);
    props.setPopup();
  };

  const openAddUserPopup = () => {
    props.setPopup();
  };

  return (
    <div>
      <h1>User List</h1>
      <Button variant="add" label="Add new" onClick={openAddUserPopup} />
      <Popup>
        <Form editId={editedId} />
      </Popup>
      {props.isError && <p>an error has occurred</p>}
      {props.isLoading ? (
        <p>loading...</p>
      ) : (
        <UsersTable deleteUser={handleDelete} editUser={openEditPopup} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
    showPopup: state.ui.showPopup,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  setPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
