import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Body from "./Body";

function Login() {
  const [email, setEmailLog] = useState("");
  const [senha, setSenhaLog] = useState("");
  const [flag, setFlag] = useState(false);
  const [Body, setBody] = useState(true);

  function handleLogin() {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Senha").replace(/"/g, "");

    if (!emaillog || !senhalog) {
      setFlag(true);
      console.log("Empty");
    } else if (senhalog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setBody(!Body);
      setFlag(false);
    }
  }

  return (
    <div>
      {Body ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="email@gmail.com"
              className="form-control"
              onChange={(event) => setEmailLog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Sua Senha"
              className="form-control"
              onChange={(event) => setSenhaLog(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="danger">
              Preencha todos os forms
            </Alert>
          )}
        </form>
      ) : (
        <Body />
      )}
    </div>
  );
}

export default Login;
