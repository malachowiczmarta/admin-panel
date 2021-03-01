import React, { useState } from "react";
import { connect } from "react-redux";
import { setPopup } from "../../store/reducers/ui";
import { addUser } from "../../store/reducers/users";
import FormField from "./FormField";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const initialFormState = {
  name: "",
  userName: "",
  city: "",
  email: "",
};

const Form = (props) => {
  const [formValues, setFormValues] = useState(initialFormState);

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
      userName: formValues.userName,
      city: formValues.city,
      email: formValues.email,
    };

    props.addUser(newUser);

    props.setPopup();
  };

  const handleCancel = () => {
    console.log("cancel");
    props.setPopup();
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
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
          id="input-userName"
          name="userName"
          placeholder="Username"
          label="Username"
          type="text"
          value={formValues.userName}
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
        <Button colorScheme="green" type="submit">Submit</Button>
      </FormControl>
      <Button
        colorScheme="red"
        mr={3}
        variant="outline"
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showPopup: state.ui.showPopup,
  };
};

const mapDispatchToProps = {
  setPopup,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
