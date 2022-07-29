import React, { useState } from "react";
import axios from "axios";

function Reviews() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name);
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(" http://localhost:5000/subscribe", {
        name: name,
        email: email,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form className="review-form" >
      <label>Name</label>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="submit data" className="btn" onSubmit={handleSubmit} />
    </form>
  );
}

export default Reviews;
