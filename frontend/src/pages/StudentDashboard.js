import { useNavigate } from "react-router-dom";

function StudentDashboard(){

  const navigate = useNavigate();

  return(

    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Student Dashboard</h1>

        <p>Welcome to MentorLink 🚀</p>

        <button 
        style={styles.button}
        onClick={()=>navigate("/find-mentors")}
        >
          Find Mentors
        </button>

        <button 
        style={styles.button2}
        onClick={()=>navigate("/my-requests")}
        >
          My Requests
        </button>

      </div>

    </div>

  )
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
  width:"350px",
  textAlign:"center",
  boxShadow:"0px 5px 15px rgba(0,0,0,0.1)"
},

button:{
  width:"100%",
  padding:"12px",
  marginTop:"20px",
  background:"#4a6cf7",
  color:"white",
  border:"none",
  cursor:"pointer",
  fontSize:"16px"
},

button2:{
  width:"100%",
  padding:"12px",
  marginTop:"10px",
  background:"#1abc9c",
  color:"white",
  border:"none",
  cursor:"pointer",
  fontSize:"16px"
}

};

export default StudentDashboard;