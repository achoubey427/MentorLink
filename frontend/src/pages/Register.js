import { useState } from "react";
import { Link } from "react-router-dom";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("student");
  const [skills,setSkills] = useState("");

  const handleRegister = (e)=>{
    e.preventDefault();

    // temporary register action
    alert("User registered successfully!");

    console.log({
      name,
      email,
      password,
      role,
      skills: skills.split(",")
    });
  };

  return(

    <div style={styles.container}>

      <div style={styles.card}>

        <h1>MentorLink</h1>
        <h3>Register</h3>

        <form onSubmit={handleRegister} style={styles.form}>

          <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={styles.input}
          />

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

          <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          style={styles.input}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </select>

          <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
          style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>

        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>

    </div>

  );
}

const styles = {

container:{
  height:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:"#f4f6fb"
},

card:{
  background:"white",
  padding:"40px",
  borderRadius:"10px",
  width:"320px",
  boxShadow:"0px 5px 15px rgba(0,0,0,0.1)",
  textAlign:"center"
},

form:{
  display:"flex",
  flexDirection:"column"
},

input:{
  padding:"10px",
  margin:"10px 0",
  fontSize:"16px"
},

button:{
  padding:"10px",
  background:"#4a6cf7",
  color:"white",
  border:"none",
  marginTop:"10px",
  cursor:"pointer"
}

};

export default Register;