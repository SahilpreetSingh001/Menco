import React from "react";
import Card from "./Card"; // Assuming the Card component is created in the same directory.
import './CardContainer1.css';
import { NavLink } from "react-router-dom";
const CardContainer1 = () => {
  return (
    <div className="relative flex space-x-6 overflow-x-auto p-4 scrollbar-hide scroll-smooth snap-x object-fit snap-mandatory">
      <NavLink to='/randhirsingh'><Card name="Randhir  singh" field="applied science" review=" " image="./randhirsingh.jpg"/></NavLink>
      <NavLink to='/harpreetkaur'><Card name="harpreet kaur" field="applied science" review="" image="./harpreetkaur.jpg"/></NavLink>
      <Card name="Rajvir kaur" field="applied science" review="" image="./rajvirkaur.jpg"/>
      <Card name="Manjot kaur " field="english" review="" image="./manjotkaur.jpg"/>
      <Card name="sandeep kaur" field="maths" review="" image="./sandeepkaur.jpg"/>
      <Card name="jasmine kaur" field="economics" review="" image="./jasminekaur.jpg"/>
      <Card name="Neeraj Kumar" field="Field7" review="" image="./neerajkumar.jpg"/>
      <Card name="sanchit mehra" field="Field8" review="" image="./sanchitmehra.jpg" />
      {/* Add more <Card /> components as needed */}
    </div>
  );
};

export default CardContainer1;

