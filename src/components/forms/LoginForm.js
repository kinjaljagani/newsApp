import React, {useState} from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) =>{
      e.preventDefault();
      const newEntry = {email:email, password:password};
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
  }
  return (
    <div>
      <form className="px-4 py-3" onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {/* <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <div>
        {
          allEntry.map((curElem)=>{
            return(
              <div className="container w-50">
                <div className="row">
              <div className="col d-flex shadow bg-primary px-5 py-2 align-items-center justify-content-between m-auto">
                <p className="m-0">{curElem.email}</p>
                <p className="m-0">{curElem.password}</p>
              </div>
              </div>
              </div>
            )
          })
        }
      </div>
      {/* <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="/">New around here? Sign up</a>
  <a className="dropdown-item" href="/">Forgot password?</a> */}
    </div>
  );
};

export default LoginForm;
