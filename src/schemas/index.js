import * as Yup from 'yup';


export const signupSchema = Yup.object({
    firstName : Yup.string().min(2).max(20).required("Please Enter Your First Name"),
    lastName :Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/,
        "Password must contain 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ).required("Please Enter password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),
    checkbox: Yup.bool().required("You must accept the terms and conditions")
           
})


export const signinSchema = Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/,
        "Password must contain 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ).required("Please Enter password"),})
