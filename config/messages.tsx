// =================
// Table of Contents
// =================
// @Password Field
// -- @Case Issues
// -- @Length Issues
// -- @Match Error
// -- @Success
// -- @Logout
// =================

export const messages = {
  // @Authentication
  auth: {
    // -- @Case Issues
    passwordOneUppercase: `The Password must contain at least one uppercase character`,
    passwordOneLowercase: `The Password must contain at least one lowercase character`,
    passwordOneNumeric: `The password must contain at least one numerical character.`,
    passwordRequired: "Password is required",

    passwordMinChars: "Have at least 8 characters",
    passwordOneNumber: "Have at least 1 number (1, 2, 3, ...)",
    passwordOneCharacter: "Have at least 1 letter (a, b, c, ...)",
    passwordBothCase: "Include both Uppercase and Lowercase letters",

    // -- @Length Issues
    passwordLengthMin: {
      title: "Invalid Password",
      description: "Password must be at least 8 characters",
    },
    passwordLengthMax: `Password can't be more than 32 characters`,
    newPasswordRequired: "New Password is required",
    newPasswordLength: "New Password must be at least 6 characters",

    // -- @Match Error
    confirmPasswordRequired: "Confirm Password is required",
    passwordsDidNotMatch: {
      title: "Passwords do not match",
      description: "Please check if your passwords are the same",
    },
    emailExists: {
      title: "This email is already registered",
      description: "Please Enter another email",
    },
    otherError: {
      title: "Error",
      description: "Please try again",
    },

    // -- @Success
    loginSuccess: "Logged in successfully",
    signupSuccess: "Signed up successfully",
    registerSuccess: {
      title: "Success",
      description: "Registered Successful!",
    },

    // -- @Logout
    logout: {
      title: "Logged out",
      description: "You have been logged out successfully.",
    },
  },
};
