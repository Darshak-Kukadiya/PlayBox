import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Deshboard from "../components/Deshboard";
import MoviePage from "../components/MoviePage";
import AdminNavbar from "../components/AdminNavbar";

function AdminDeshboard() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [text, setText] = useState("Hello, Tony Stark");
  const [MailIcon, setMailIcon] = useState(true);
  const [NotificationsIcon, setNotificationsIcon] = useState(true);
  const [AccountCircle, setAccountCircle] = useState(true);

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar onPageChange={handlePageChange} />{" "}
        <Box sx={{ display: "flex",flexDirection:"column",width:"100%" }}>
          <AdminNavbar text={text} MailIcon={MailIcon} NotificationsIcon={NotificationsIcon} AccountCircle={AccountCircle} />

          {/* Pass handlePageChange as prop */}
          {/* Conditionally render the Dashboard or MoviesPage component */}
          <Box sx={{ flexGrow: 1 }}>
            {selectedPage === "Dashboard" && <Deshboard />}
            {selectedPage === "Movies" && <MoviePage />}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AdminDeshboard;