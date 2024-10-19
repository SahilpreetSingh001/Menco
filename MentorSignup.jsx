// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; 
// import Card from "./Card"; // Import the Card component

// const MentorSignup = () => {
//   const [info, setInfo] = useState({});
//   const [serverError, setServerError] = useState("");
//   const [mentorData, setMentorData] = useState(null); // State to store mentor data
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate(); 
  
//   const onSubmit = async (data) => {
//     setServerError("");  
    
//     try {
//       const response = await fetch("http://localhost:5000/mentorsignup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
      
//       if (response.ok) {
//         // Store the form data for the Card component
//         setMentorData({
//           name: data.name,
//           field: data.category,
//           review: data.description || "No review provided.",
//         });
        
//         setInfo(data);

//         // Navigate to MentorHome with state
//         navigate("/home", { state: { info: data } });
//       } else if (result.message === "Mentor already exists") {
//         setServerError("This mentor already exists. Please log in or use a different email.");
//       } else {
//         setServerError("An error occurred. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       setServerError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-8 shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[50%]"
//       >
//         <h2 className="text-center text-2xl font-bold mb-4">Mentor Sign up</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               placeholder="Name"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.name ? "border-red-500" : ""}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                   message: "Email is not valid",
//                 },
//               })}
//               placeholder="Email Id"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.email ? "border-red-500" : ""}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
          
//           <div>
//             <select
//               {...register("qualification", { required: "Qualification is required" })}
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.qualification ? "border-red-500" : ""}`}
//             >
//               <option value="">Qualification</option>
//               <option value="Bachelors">Bachelors</option>
//               <option value="Masters">Masters</option>
//               <option value="PhD">PhD</option>
//             </select>
//             {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification.message}</p>}
//           </div>
          
//           <div>
//             <select
//               {...register("category", { required: "Category is required" })}
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.category ? "border-red-500" : ""}`}
//             >
//               <option value="">Category</option>
//               <option value="Technical">Technical</option>
//               <option value="Non-Technical">Non-Technical</option>
//             </select>
//             {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               placeholder="Password"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.password ? "border-red-500" : ""}`}
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="password"
//               {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: (value) => value === document.getElementsByName("password")[0].value || "Passwords do not match",
//               })}
//               placeholder="Confirm Password"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.confirmPassword ? "border-red-500" : ""}`}
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
//           </div>
//         </div>
        
//         <div className="mt-4">
//           <textarea
//             {...register("description")}
//             placeholder="Add Description"
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//             rows="5"
//           />
//         </div>
        
//         {serverError && <p className="text-red-500 text-sm mb-3">{serverError}</p>}
        
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
//         >
//           Sign up
//         </button>
//       </form>

//       {/* Conditionally render the Card component if mentorData is available */}
//       {mentorData && (
//         <div className="mt-8">
//           <Card name={mentorData.name} field={mentorData.field} review={mentorData.review} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MentorSignup;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; 

// const MentorSignup = ({ addMentor }) => {
//   const [serverError, setServerError] = useState("");
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate(); 
  
//   const onSubmit = async (data) => {
//     setServerError("");  
    
//     try {
//       const response = await fetch("http://localhost:5000/mentorsignup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
      
//       if (response.ok) {
//         // Add the mentor data to the parent component's state
//         addMentor({
//           name: data.name,
//           field: data.category,
//           review: data.description || "No review provided.",
//         });
        
//         // Navigate to the page where mentors will be displayed
//         navigate('/mentors');
//       } else if (result.message === "Mentor already exists") {
//         setServerError("This mentor already exists. Please log in or use a different email.");
//       } else {
//         setServerError("An error occurred. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       setServerError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-8 shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[50%]"
//       >
//         <h2 className="text-center text-2xl font-bold mb-4">Mentor Sign up</h2>
        
//         {/* Form Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               placeholder="Name"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.name ? "border-red-500" : ""}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                   message: "Email is not valid",
//                 },
//               })}
//               placeholder="Email Id"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.email ? "border-red-500" : ""}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
          
//           <div>
//             <select
//               {...register("qualification", { required: "Qualification is required" })}
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.qualification ? "border-red-500" : ""}`}
//             >
//               <option value="">Qualification</option>
//               <option value="Bachelors">Bachelors</option>
//               <option value="Masters">Masters</option>
//               <option value="PhD">PhD</option>
//             </select>
//             {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification.message}</p>}
//           </div>
          
//           <div>
//             <select
//               {...register("category", { required: "Category is required" })}
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.category ? "border-red-500" : ""}`}
//             >
//               <option value="">Category</option>
//               <option value="Technical">Technical</option>
//               <option value="Non-Technical">Non-Technical</option>
//             </select>
//             {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               placeholder="Password"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.password ? "border-red-500" : ""}`}
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
          
//           <div>
//             <input
//               type="password"
//               {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: (value) => value === document.getElementsByName("password")[0].value || "Passwords do not match",
//               })}
//               placeholder="Confirm Password"
//               className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.confirmPassword ? "border-red-500" : ""}`}
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
//           </div>
//         </div>
        
//         <div className="mt-4">
//           <textarea
//             {...register("description")}
//             placeholder="Add Description"
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//             rows="5"
//           />
//         </div>
        
//         {serverError && <p className="text-red-500 text-sm mb-3">{serverError}</p>}
        
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
//         >
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MentorSignup;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MentorSignup = () => {
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    setServerError("");  
    
    try {
      const response = await fetch("http://localhost:5000/mentorsignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {

        navigate("/home", { state: { newMentor: data } });
        
      } else if (result.message === "Mentor already exists") {
        setServerError("This mentor already exists. Please log in or use a different email.");
      } else {
        setServerError("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setServerError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[50%]"
      >
        <h2 className="text-center text-2xl font-bold mb-4">Mentor Sign up</h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              placeholder="Email Id"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          
          <div>
            <select
              {...register("qualification", { required: "Qualification is required" })}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.qualification ? "border-red-500" : ""}`}
            >
              <option value="">Qualification</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification.message}</p>}
          </div>
          
          <div>
            <select
              {...register("category", { required: "Category is required" })}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.category ? "border-red-500" : ""}`}
            >
              <option value="">Category</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>
          
          <div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          
          <div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === document.getElementsByName("password")[0].value || "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${errors.confirmPassword ? "border-red-500" : ""}`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        </div>
        
        <div className="mt-4">
          <textarea
            {...register("description")}
            placeholder="Add Description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            rows="5"
          />
        </div>
        
        {serverError && <p className="text-red-500 text-sm mb-3">{serverError}</p>}
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default MentorSignup;
