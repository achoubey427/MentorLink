import { useState } from "react";

function MentorDashboard() {

  const [requests, setRequests] = useState([
    { student: "Rahul", skill: "Java" },
    { student: "Ankit", skill: "React" }
  ]);

  const handleAccept = (index) => {
    alert("Request Accepted");

    const updated = [...requests];
    updated.splice(index, 1);
    setRequests(updated);
  };

  const handleReject = (index) => {
    alert("Request Rejected");

    const updated = [...requests];
    updated.splice(index, 1);
    setRequests(updated);
  };

  return (
    <div style={styles.container}>

      <h1>Mentor Dashboard</h1>

      <div style={styles.grid}>

        {requests.map((req, index) => (

          <div key={index} style={styles.card}>

            <h3>{req.student}</h3>

            <p>Requested help in <b>{req.skill}</b></p>

            <button style={styles.accept} onClick={() => handleAccept(index)}>
              Accept
            </button>

            <button style={styles.reject} onClick={() => handleReject(index)}>
              Reject
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

const styles = {

container:{
  padding:"40px",
  textAlign:"center",
  background:"#f4f6fb",
  minHeight:"100vh"
},

grid:{
  display:"flex",
  justifyContent:"center",
  gap:"20px",
  flexWrap:"wrap"
},

card:{
  background:"white",
  padding:"20px",
  width:"220px",
  borderRadius:"10px",
  boxShadow:"0px 5px 15px rgba(0,0,0,0.1)"
},

accept:{
  marginTop:"10px",
  padding:"10px",
  width:"100%",
  background:"#1abc9c",
  color:"white",
  border:"none",
  cursor:"pointer"
},

reject:{
  marginTop:"5px",
  padding:"10px",
  width:"100%",
  background:"#e74c3c",
  color:"white",
  border:"none",
  cursor:"pointer"
}

};

export default MentorDashboard;