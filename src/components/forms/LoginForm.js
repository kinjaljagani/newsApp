import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const EntriesPerPage = 5;
const LoginForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [updateId, setUpdateId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const updatedEntries = allEntry.filter((entry) => entry.id !== id);

    // Renumber entries based on their index in the array
    const renumberedEntries = updatedEntries.map((entry, index) => ({
      ...entry,
      id: index + 1,
    }));

    setAllEntry(renumberedEntries);
    localStorage.setItem("entries", JSON.stringify(renumberedEntries));
    toast.success("Entry deleted successfully");
  };

  const handleUpdate = (id) => {
    const entryToUpdate = allEntry.find((entry) => entry.id === id);
    setFname(entryToUpdate.fname);
    setLname(entryToUpdate.lname);
    setEmail(entryToUpdate.email);
    setPassword(entryToUpdate.password);
    setUpdateId(id);
  };
  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setAllEntry(storedEntries);

    // Determine the next available ID based on the existing entries
    const maxId = storedEntries.reduce(
      (max, entry) => (entry.id > max ? entry.id : max),
      0
    );
    setIdCounter(maxId + 1);
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    if (fname === "") {
      toast.error("First Name is required");
    } else if (lname === "") {
      toast.error("Last Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (password === "") {
      toast.error("Password is required");
    } else {
      const newEntry = {
        id: updateId || idCounter, // If updateId is set, use it as ID, otherwise use idCounter
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      };

      // Check if it's an update or a new entry
      if (updateId) {
        // If it's an update, replace the existing entry with the updated one
        const updatedEntries = allEntry.map((entry) =>
          entry.id === updateId ? newEntry : entry
        );
        setAllEntry(updatedEntries);
        localStorage.setItem("entries", JSON.stringify(updatedEntries));
        toast.success("Entry updated successfully");
        setUpdateId(null); // Reset updateId after updating
      } else {
        const updatedEntries = [...allEntry, newEntry];

    // Renumber entries based on their index in the array
    const renumberedEntries = updatedEntries.map((entry, index) => ({ 
      ...entry,
      id: index + 1,
    }));

    localStorage.setItem("entries", JSON.stringify(renumberedEntries));
    setAllEntry(renumberedEntries);
    toast.success("Entry added successfully");
    setIdCounter(idCounter + 1);
      }

      // Clear the form fields
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
    }
  };

  const totalPages = Math.ceil(allEntry.length / EntriesPerPage);
  const paginatedEntries = allEntry.slice(
    (currentPage - 1) * EntriesPerPage,
    currentPage * EntriesPerPage
  );
  
  return (
    <div>
      <form className="px-4 py-5 my-4" onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className="form-control"
            id="fname"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            className="form-control"
            id="lname"
            placeholder="Enter your Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          Submit
        </button>
      </form>
      <div>
        {paginatedEntries.map((curElem) => {
          return (
            <div key={curElem.id} className="container w-50">
              <div className="row">
                <div className="col d-flex shadow bg-primary px-5 py-2 align-items-center justify-content-between m-auto">
                  <p className="m-0">{curElem.id}</p>
                  <p className="m-0">{curElem.fname}</p>
                  <p className="m-0">{curElem.lname}</p>
                  <p className="m-0">{curElem.email}</p>
                  <p className="m-0">{curElem.password}</p>
                  <div>
                    <button onClick={() => handleDelete(curElem.id)}>
                      Delete
                    </button>
                    &nbsp;
                    <button onClick={() => handleUpdate(curElem.id)}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center m-2 gap-2">
        {/* Pagination controls */}
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
          Next
        </button>
      </div>
      </div>
      {/* <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="/">New around here? Sign up</a>
  <a className="dropdown-item" href="/">Forgot password?</a> */}
    </div>
  );
};
export default LoginForm;
