import React, { useState } from "react";
import { connect } from "react-redux";
import { setPopup } from "../../store/reducers/ui";
import { addUser } from "../../store/reducers/users";
import FormField from "./FormField";
import { FormErrorMessage, FormHelperText, Button } from "@chakra-ui/react";

//nazwać inaczej
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
    console.log("submit");

    const newUser = {
      name: formValues.name,
      username: formValues.username,
      address: {
        city: formValues.city,
      },
      email: formValues.email,
    };
    props.addUser(newUser);
    setFormValues(userData);

    props.setPopup();
  };

  const handleCancel = () => {
    console.log("cancel");
    setFormValues(userData);
    console.log(formValues)
    props.setPopup();
  };

  return (
    <>
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
        />

        <FormField
          id="input-city"
          name="city"
          placeholder="City"
          label="City"
          type="text"
          value={formValues.city}
          onChange={handleInputChange}
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
        <Button colorScheme="green" type="submit">
          Submit
        </Button>
        <Button
          colorScheme="red"
          mr={3}
          variant="outline"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </Button>
      </form>
    </>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
