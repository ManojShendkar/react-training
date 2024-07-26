import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/todo-list" element={<Todo />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
