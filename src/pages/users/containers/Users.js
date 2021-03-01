import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../../store/reducers/users";
import UsersTable from "../components/UsersTable";

const Users = (props) => {
  const fetchUsers = props.fetchUsers;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = (id) => {
    console.log(id);
    props.deleteUser(id);
  };

  return (
    <div>
      <h1>Users List</h1>
      {props.isError && <p>an error has occurred</p>}
      {props.isLoading ? <p>loading...</p> : <UsersTable deleteUser={handleDelete}/>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
