import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(4, "Password must have at least 4 characters "),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/buy.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  container: {
    padding: 10,
  },
});
