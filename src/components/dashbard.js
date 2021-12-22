import { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";
import DashBoardItem from "./dashboardItem";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let flag = false;
    const fetchProducts = async () => {
      const response = await fetch("https://pizzaapi.herokuapp.com/Pizza/");
      const json = await response.json();

      if (!flag) setData(json.data);
    };

    fetchProducts();
  }, [setData]);

  return data.map((x) => <DashBoardItem data={x} />);
};
export default Dashboard;
