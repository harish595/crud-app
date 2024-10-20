import React, { useState } from 'react'

const FormValidate = () => {

    const[formData , setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const[errors ,setErrors]=useState({});
    // console.log(formData);

    let handleChange=e=>{
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    let handleSubmit=e=>{
        e.preventDefault();
        const validationErrors ={};
        if(!formData.username.trim()){
            validationErrors.username = "username is required"
        }
        // console.log(validationErrors);
        if(!formData.email.trim()){
            validationErrors.email = "Email is required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = "email is not valid"
        }    

        if(!formData.password.trim()){
            validationErrors.password = "Password is required"
        }else if(formData.password.length < 6){
            validationErrors.password="Password should contain minimum 6 characters"
        }

        if(!formData.confirmPassword.trim()){
            validationErrors.confirmPassword = "Confirm Password is required"
        }
        else if(formData.confirmPassword != formData.password){
            validationErrors.confirmPassword ="Password not matched"
        }

        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            alert("Form submitted successfully")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <span>{errors.username}</span>}
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div className="field">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                   <input type="submit"  value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default FormValidate