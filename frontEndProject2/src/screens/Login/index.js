import React from "react";

function Login() {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  
  const firstNameFieldHandler = (event) => {
    setFirstName(event.target.value);
  }

  const lastNameFieldHandler = (event) => {
    setLastName(event.target.value);
  }

  const emailFieldHandler = (event) => {
    setEmail(event.target.value);
  }

  const phoneFieldHandler = (event) => {
    setPhone(event.target.value);
  }

  const passwordFieldHandler = (event) => {
    setPassword(event.target.value);
  }

  const repeatPasswordFieldHandler = (event) => {
    setRepeatPassword(event.target.value);
  }

  const createAccount = async () => {
    await fetch('http://localhost:8000/scheduler/login/', {
    method: 'POST',
    body: JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "phone": phone,
      "password": password,
      "rePassword": repeatPassword
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
    })
    .then((response) => response.json())
    .then((data) => {
       console.log(`The data is ${data}`);
    })
    .catch((err) => {
       console.log(err.message);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
 };

  // const createAccount = () => {
  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw = JSON.stringify({

  //   });

  //   let requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://localhost:8000/scheduler/login/", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }

  return (
    <>
      <section>
        <div className="w-100 pt-180 pb-110 black-layer opc45 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/pg-tp-bg.jpg)" }}
          ></div>
          <div className="container">
            <div className="pg-tp-wrp text-center w-100">
              <h1 className="mb-0">Login & Register</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="Home">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Login & Register</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 gray-bg position-relative">
          <div className="login-register-wrap w-100">
            <div className="row mrg align-items-center">
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div
                  className="login-wrap w-100 position-relative"
                  style={{ backgroundImage: "url(assets/images/login-bg.jpg)" }}
                >
                  <div className="login-inner">
                    <div className="title2 w-100">
                      <h2 className="mb-0">Login your Account</h2>
                      <p className="mb-0">
                        Login to your account to discovery all great features in
                        this template.
                      </p>
                    </div>
                    <form className="w-100">
                      <input
                        className="rounded-pill"
                        type="text"
                        placeholder="Your Name"
                      />
                      <input
                        className="rounded-pill"
                        type="password"
                        placeholder="Password"
                      />
                      <div className="kep-forget-pas d-flex flex-wrap justify-content-between align-items-center">
                        <span className="check-box">
                          <input type="checkbox" id="keep-login" />
                          <label for="keep-login">Keep me logged in</label>
                        </span>
                        <a href="/" title="">
                          Forgot your Password?
                        </a>
                      </div>
                      <button
                        className="thm-btn brd-btn rounded-pill"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-7">
                <div className="register-wrap w-100">
                  <div className="register-inner">
                    <div className="title2 w-100">
                      <h2 className="mb-0">
                        Don't have an Account? Register Now
                      </h2>
                      <p className="mb-0">
                        By creating an account with our store, you will be able
                        to move through the checkout process faster,store
                        multiple shipping addresses.
                      </p>
                    </div>
                    <form className="w-100">
                      <div className="row mrg20">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="text"
                            onChange={firstNameFieldHandler}
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="email"
                            onChange={emailFieldHandler}
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="text"
                            onChange={lastNameFieldHandler}
                            placeholder="Lastname"
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="tel"
                            onChange={phoneFieldHandler}
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="password"
                            onChange={passwordFieldHandler}
                            placeholder="Password"
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="rounded-pill"
                            type="password"
                            onChange={repeatPasswordFieldHandler}
                            placeholder="Re - Password"
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <button
                            className="thm-btn rounded-pill"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Register Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
