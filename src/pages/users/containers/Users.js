import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../store/reducers/users";
import UsersTable from "../components/UsersTable";

const Users = (props) => {
  const fetchUsers = props.fetchUsers;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Users List</h1>
      {props.isLoading && <p>loading...</p>}
      {props.isError && <p>an error has occurred</p>}
      <UsersTable />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
