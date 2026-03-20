import { useState } from "react";
import API from "../services/api";

function FindMentors() {

  const [search, setSearch] = useState("");

  const mentors = [
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      skills: ["Java", "DSA", "Spring Boot"]
    },
    {
      name: "Priya Singh",
      email: "priya@gmail.com",
      skills: ["React", "NodeJS", "MongoDB"]
    },
    {
      name: "Amit Verma",
      email: "amit@gmail.com",
      skills: ["Python", "Machine Learning", "AI"]
    }
  ];

  const handleRequest = async (mentorEmail) => {

    try {

      await API.post("/send-request", {

        studentEmail: "student@gmail.com",
        mentorEmail: mentorEmail,
        skill: "Mentorship",
        status: "pending"

      });

      alert("Request sent successfully 🚀");

    } catch (error) {

      console.log(error);
      alert("Error sending request");

    }

  };

  const filteredMentors = mentors.filter((mentor) =>
    mentor.skills.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div style={styles.container}>

      <h1>Find Mentors</h1>

      <input
        type="text"
        placeholder="Search by skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>

        {filteredMentors.map((mentor, index) => (

          <div key={index} style={styles.card}>

            <h3>{mentor.name}</h3>

            <p>{mentor.skills.join(", ")}</p>

            <button
              style={styles.button}
              onClick={() => handleRequest(mentor.email)}
            >
              Send Request
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

const styles = {

  container: {
    padding: "40px",
    textAlign: "center",
    background: "#f4f6fb",
    minHeight: "100vh"
  },

  search: {
    padding: "10px",
    width: "300px",
    margin: "20px",
    fontSize: "16px"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  card: {
    background: "white",
    padding: "20px",
    width: "220px",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "#4a6cf7",
    color: "white",
    border: "none",
    cursor: "pointer"
  }

};

export default FindMentors;