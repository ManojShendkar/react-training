import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React Training</h1>
      <Button variant="contained" onClick={() => navigate("todo-list")}>
        ToDo List
      </Button>
    </div>
  );
};

export default Home;
