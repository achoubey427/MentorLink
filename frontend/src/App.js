import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import FindMentors from "./pages/FindMentors";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import Chat from "./pages/Chat";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/mentor-dashboard" element={<MentorDashboard />} />

        <Route path="/find-mentors" element={<FindMentors />} />

        <Route path="/chat/:receiverId" element={<Chat />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;