import { useState } from "react";

const ResetPwd = () => {
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className="form-group">
        <label for="email" className="form-label">
          Enter your email{" "}
        </label>
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={handleEmail}
        />
      </div>
      <div className="form-group">&nbsp;</div>
      <div className="form-group">
        <button type="submit" value="Submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
};

export default ResetPwd;
