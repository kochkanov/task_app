import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import WeatherOfCity from "../component/WeatherOfCity";
import AddItem from "../component/AddItem";
import AddUser from "../component/AddUser";

const RouterOfTask = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="reactApp" element={<WeatherOfCity />} />
        <Route path="items" element={<AddItem />} />
        <Route path="users" element={<AddUser />} />
      </Route>{" "}
      Í
    </Routes>
  );
};

export default RouterOfTask;
