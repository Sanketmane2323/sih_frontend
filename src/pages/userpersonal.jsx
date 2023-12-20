import React, { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      console.log("Previous Data:", prevData);
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the token from local storage
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("id");

    console.log("Token:", token);
    console.log("UserID:", userid);
    console.log("Form Data:", formData);
    // Check if token is available
    if (!token) {
      console.error("Token not found in local storage");
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/profile/personal/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Profile data submitted successfully");
      } else {
        console.error("Failed to submit profile data");
      }
    } catch (error) {
      console.error("Error submitting profile data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        About:
        <input
          type="text"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
