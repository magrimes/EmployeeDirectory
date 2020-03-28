import React, { useState, useEffect } from "react";
import EmpTable from "./EmpTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/EmpArea.css";
import DataAreaContext from "../utils/DataAreaContext";

const EmpArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Image"},
      { name: "name" },
      { name: "cell"},
      { name: "phone"},
      { name: "email"},
      { name: "dob"}
    ]
  });