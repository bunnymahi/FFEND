import React, { useState } from "react";
import axios from "axios";
import "./Tg.css";

const Tg = () => {
  const [Pn, setPn] = useState("");
  const [Rn, setRn] = useState("");
  const [image, setImage] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("Pn", Pn);
    formData.append("Rn", Rn);
    console.log(formData);
    console.log("Phone Number:", Pn);
    console.log("Registration Number:", Rn);
    try {
      const response = await axios.post(
        "https://fbend-ir1f.onrender.com/uploads",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from server:", response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };  
  const PnumUpdate = (e) => {
    console.log(e.target.value);
    setPn(e.target.value);
  };

  const RnumUpdate = (e) => {
    console.log(e.target.value);
    setRn(e.target.value);
  };
  const [imageSelected, setImageSelected] = useState(false);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setImageSelected(true);
    }
  };
  return (
    <div className="hero">
      <div className="card1">
        <form onSubmit={submitForm}>
          {/* phone-number */}
          <input
            type="text"
            placeholder="Enter reg number"
            id="ph-no"
            className="form-control"
            onChange={RnumUpdate}
          />
          <label htmlFor="ph-no">{/* <p>registration-number </p> */}</label>
          {/* reg-no */}
          <input
            type="text"
            placeholder="Enter phone number"
            id="reg-no"
            className="form-control"
            onChange={PnumUpdate}
          />
          <label htmlFor="reg-no">{/* <p>phone-number </p> */}</label>

          {/* image */}
          {/* <input type="file" accept='image/*' onChange={uploadImage}/>
            <button>submit</button> */}
          <div>
            <div className="upload">
              <label htmlFor="input-file" className="upload-label">
                Upload Image
              </label>
              <input
                type="file"
                id="input-file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            {imageSelected && (
              <button type="submit" id="btn">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tg;
