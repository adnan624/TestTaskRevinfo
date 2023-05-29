import * as Yup from 'yup';


export const signupSchema = Yup.object({
    firstName : Yup.string().min(2).max(20).required("Please Enter Your First Name"),
    lastName :Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Please Enter password")
})

export const signinSchema = Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Please Enter password")
})