import React from "react";
import { useState } from "react";

export default function App() {

  const [formValues,setFormValues] = useState({userName:"",email:"",password:""})
  const [formErrors,setformErrors] = useState({userName:"",email:"",password:""})

  const handleValueChange = (e)=>{
    const {value,name} = e.target;
    setFormValues({...formValues,[name]:value})
    if (formErrors[name]) {
      setformErrors({ ...formErrors, [name]: "" });
    }
  }

  const submitForm = (e)=>{
    e.preventDefault()
    validateForm(formValues);
    setFormValues({userName:"",email:"",password:""})
  }
  const validateForm = () => {
    const newErrors = { userName: "", email: "", password: "" };

    if (!formValues.userName.trim()) {
      newErrors.userName = "Username is required";
    }

    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setformErrors(newErrors);
    return formErrors;
  };

  return (
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "80vh",
            }}
        >
            <div style={{ width: "20rem" }}>
                <form style={{ display: "flex", flexDirection: "column", gap:"0.3rem" }} onSubmit={submitForm}>
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" className="UserName" value={formValues.userName} name="userName" onChange={handleValueChange}/>
                    {(formErrors)?<span>{formErrors.userName}</span>:""}
                    <label htmlFor="UserEmail">Email</label>
                    <input type="email" className="UserEmail" value={formValues.email} name="email" onChange={handleValueChange}/>
                    {(formErrors)?<span>{formErrors.email}</span>:""}
                    <label htmlFor="UserPassword">Password</label>
                    <input type="password" className="UserPassword" value={formValues.password} name="password" onChange={handleValueChange} />
                    {(formErrors)?<span>{formErrors.password}</span>:""}
                    <input type="submit" value="Submit" style={{cursor:"pointer"}}/>
                </form>
            </div>
        </div>
    );
}
