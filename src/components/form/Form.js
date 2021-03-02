import React, { useState } from "react";
import { connect } from "react-redux";
import { setPopup } from "../../store/reducers/ui";
import { addUser, editUser } from "../../store/reducers/users";
import FormField from "./FormField";
import {
  Button,
  Box,
} from "@chakra-ui/react";

const userData = {
  name: "",
  username: "",
  city: "",
  email: "",
};

const Form = ({ editId, ...props }) => {
  const users = props.users;

  const formState = () => {
    let initialFormState;
    if (editId) {
      const filterUsers = users.filter((user) => user.id === editId);
      const userToEdit = filterUsers[0];
      initialFormState = {
        name: userToEdit.name,
        username: userToEdit.username,
        city: userToEdit.address.city,
        email: userToEdit.email,
      };
    } else {
      initialFormState = userData;
    }
    return initialFormState;
  };

  const [formValues, setFormValues] = useState(() => formState());

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formValues.name,
      username: formValues.username,
      address: {
        city: formValues.city,
      },
      email: formValues.email,
    };

    if (editId) {
      props.editUser(newUser, editId);
    } else {
      props.addUser(newUser);
    }
    setFormValues(userData);
    props.setPopup();
  };

  const handleCancel = () => {
    setFormValues(userData);
    props.setPopup();
  };

  return (
    <Box py="20px" px="50px">
      <form onSubmit={handleSubmit}>
        <FormField
          id="input-name"
          name="name"
          placeholder="Name"
          label="Name"
          type="text"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          id="input-username"
          name="username"
          placeholder="Username"
          label="Username"
          type="text"
          value={formValues.username}
          onChange={handleInputChange}
          required={false}
        />

        <FormField
          id="input-city"
          name="city"
          placeholder="City"
          label="City"
          type="text"
          value={formValues.city}
          onChange={handleInputChange}
          required={false}
        />

        <FormField
          id="input-email"
          name="email"
          placeholder="Email"
          label="Email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <Button
          colorScheme="red"
          mr={3}
          mt="20px"
          variant="outline"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </Button>
        <Button colorScheme="green" type="submit" mt="20px">
          Submit
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    showPopup: state.ui.showPopup,
  };
};

const mapDispatchToProps = {
  setPopup,
  addUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
