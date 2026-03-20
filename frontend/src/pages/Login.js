import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/login", {
        email,
        password
      });

      const user = res.data;

      if(user.role === "student"){
        navigate("/student-dashboard");
      }
      else{
        navigate("/mentor-dashboard");
      }

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>

      <h1>MentorLink</h1>
      <h3>Login</h3>

      <form onSubmit={handleLogin} style={styles.form}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>
          Login
        </button>

      </form>

      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>

    </div>
  );
}

const styles = {

  container:{
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"#f5f7fb"
  },

  form:{
    display:"flex",
    flexDirection:"column",
    width:"300px"
  },

  input:{
    margin:"10px 0",
    padding:"10px",
    fontSize:"16px"
  },

  button:{
    padding:"10px",
    background:"#4a6cf7",
    color:"white",
    border:"none",
    cursor:"pointer"
  }

};

export default Login;