import React from "react";
function Reviews() {
return (
    <div className="form-div">
      <form className="review-form">
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
        />

        <label>Email</label>
        <input
          placeholder="email"
          type="text"
        />
        <input
          type="submit"
          value="submit data"
        />
      </form>
    </div>
  );
}

export default Reviews;
