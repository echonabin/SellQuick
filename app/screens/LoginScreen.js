import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({ errors, handleChange, handleSubmit, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onChangeText={handleChange("email")}
              placeholder='Email'
              textContentType='emailAddress'
              onBlur={() => setFieldTouched("email")}
            />
            {console.log(errors.email)}
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onBlur={() => setFieldTouched("password")}
              placeholder='Password'
              onChangeText={handleChange("password")}
              secureTextEntry
              textContentType='password'
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
