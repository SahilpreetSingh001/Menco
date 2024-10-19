import React from "react";
import Card from "./Card"; // Assuming the Card component is created in the same directory.
import './CardContainer.css';
import { NavLink } from "react-router-dom";
const CardContainer = () => {
  return (
    <div className="relative flex space-x-6 overflow-x-auto p-4 scrollbar-hide scroll-smooth snap-x object-fit snap-mandatory">
      <NavLink to='/parmindersingh'><Card name="parminder singh" field="IT" review=" " image="./ParminderSingh.jpg"/></NavLink>
      <NavLink to='/daljeetsingh'><Card name="Daljeet Singh" field="Mechanical" review="" image="./PHOTO.jpg"/></NavLink>
      <Card name="Kiran Jyoti" field="CSE" review="" image="./MyPic.jpeg"/>
      <Card name="jasbir singh " field="CSE" review="" image="./saini.jpg"/>
      <Card name="Amandeep Kaur" field="Field5" review="" image="./AKS.jpeg"/>
      <Card name="Kapil Sharma" field="Field6" review="" image="./KapilSharma.jpg"/>
      <Card name="Priyanka Arora" field="Field7" review="" image="./priyankaarora.jpg"/>
      <Card name="Manpreet Kaur" field="Field8" review="" image="./manpreetkaurmand.jpg" />
      {/* Add more <Card /> components as needed */}
    </div>
  );
};

export default CardContainer;

