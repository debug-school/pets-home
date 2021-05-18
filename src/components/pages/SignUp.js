import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../css/signInUp.css";
import Typed from "react-typed";

const SignUp = ()=> {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [hasAgreed, setHasAgreed] = useState(false);



	const handleChange =(event)=> {
		let target = event.target;
		let value = target.type === "checkbox" ? target.checked : target.value;

		if (target.name=="name"){
			setName(value);
		}
		else if(target.name=="email"){
			setEmail(value);
		}
		else if(target.name=="password"){
			setPassword(value);
		}
		else{
			setHasAgreed(value);
		}

	}

  const handleSubmit =(e)=> {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(name,email,password,hasAgreed);
  }

    return (
    <div className="main-wrapper">
      <Typed 
            className="typed-text"
            strings={["Welcome To Pet's Home!","One stop Service for your all kinds of Pets"]}
            typeSpeed={40}
            backSpeed={60}
            loop
      />
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={hasAgreed}
                onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="#" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    </div>
    );
}

export default SignUp;
