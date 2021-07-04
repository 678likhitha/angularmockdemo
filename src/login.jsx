import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
const LoginForm = (props) => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
      const onSubmit = async (data) => {
            if(data.email === props.activeUser.username && data.password === props.activeUser.password){
                console.log(data)
                props.history.push('/dashbord');
            } else {
                alert('Please enter correct email and password' );
                console.log(data)
            }
      };
    useEffect(() => {
    }, [props]);
return (

    <form onSubmit={handleSubmit(onSubmit)}>
    <section>
      <h1>Login</h1>
      <label htmlFor="email">email</label>
      <input
        id="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
        placeholder="example@mail.com"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <label htmlFor="password">password</label>
      <input
        id="password"
        aria-invalid={errors.passward ? "true" : "false"}
        {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
    </section>
    <button type="submit">SUBMIT</button>
  </form>
);
}
function mapStateToProps(state) {
    return {
      activeUser: state.activeUser
    };
  }

  export default connect(mapStateToProps)(LoginForm);