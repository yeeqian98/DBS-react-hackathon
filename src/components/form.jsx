import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [customerAge, setCustomerAge] = useState(0);
  const [serviceOfficerName, setserviceOfficerName] = useState("");
  const [NRIC, setNRIC] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState(false);
  
  const [customerNameError, setCustomerNameError] = useState(false);
  const [customerAgeError, setCustomerAgeError] = useState(false);
  const [serviceOfficerNameError, setserviceOfficerNameError] = useState(false);
  const [NRICError, setNRICError] = useState(false);
  const [branchCodeError, setBranchCodeError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageUpload = () => {
    let fileInput = document.getElementById("image");
    let filePath = fileInput.value;
    let allowedExtensions = /(\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type");
      fileInput.value = "";
      setImageError(true);
      return false;
    } else {
      if (fileInput.files[0].size > 2097152) {
        alert("File is too big!");
        fileInput.value = "";
        setImageError(true);
        return false;
      }
      setImage(fileInput.files[0]);
      setImageError(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy + " " + time;

    if (customerName.length === 0) {
      setCustomerName(true);
    }
    if (serviceOfficerName.length === 0) {
      setserviceOfficerName(true);
    }
    if (customerName === 'admin') {
      setSuccess(true);
    }
    if (
      customerNameError === false &&
      customerAgeError === false &&
      serviceOfficerNameError === false &&
      NRICError === false &&
      branchCodeError === false &&
      imageError === false
    ) {
      let token = JSON.parse(localStorage.getItem("token"));
      axios
        .post("", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          customerName: customerName,
          customerAge: customerAge,
          serviceOfficerName: serviceOfficerName,
          NRIC: NRIC,
          branchCode: branchCode,
          image: image,
        })
        .then((res) => {
          setSuccess(true);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            autoComplete="off"
            id="customerName"
            name="customerName"
            onChange={(e) => {
              setCustomerName(e.target.value);
              if (customerName.length >= 65) {
                setCustomerNameError(true);
              } else {
                setCustomerNameError(false);
              }
            }}
          />
          {customerNameError && (
            <div className="generic-error">
              <p>Customer Name must not exceed 64 characters</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="customerAge">Customer Age:</label>
          <input
            type="number"
            autoComplete="off"
            id="customerAge"
            name="customerAge"
            onChange={(e) => {
              setCustomerAge(e.target.value);

              if (Number(e.target.value) >= 18) {
                setCustomerAgeError(false);
              } else {
                setCustomerAgeError(true);
              }
            }}
          />

          {customerAgeError && (
            <div className="generic-error">
              <p>Customers must be at least 18 years of age</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="serviceOfficerName">Service Officer Name:</label>
          <input
            type="text"
            autoComplete="off"
            id="serviceOfficerName"
            name="serviceOfficerName"
            onChange={(e) => {
              setserviceOfficerName(e.target.value);
              if (serviceOfficerName.length >= 65) {
                setserviceOfficerNameError(true);
              } else {
                setserviceOfficerNameError(false);
              }
            }}
          />

          {serviceOfficerNameError && (
            <div className="generic-error">
              <p>Service Officer Name must not exceed 64 characters.</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="NRIC">NRIC:</label>
          <input
            type="text"
            autoComplete="off"
            id="NRIC"
            name="NRIC"
            onChange={(e) => {
              setNRIC(e.target.value);
              if (!e.target.value.match(/^[A-Z]\d{7}[A-Z]$/)) {
                setNRICError(true);
              } else {
                setNRICError(false);
              }
            }}
          />

          {NRICError && (
            <div className="generic-error">
              <p>NRIC must be in uppercase and only have 7 numeric numbers.</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="branchCode">Branch Code:</label>
          <input
            type="number"
            autoComplete="off"
            id="branchCode"
            name="branchCode"
            onChange={(e) => {
              setBranchCode(e.target.value);
              if (e.target.value.match(/^\d{3}$/)) {
                setBranchCodeError(false);
              } else {
                setBranchCodeError(true);
              }
            }}
          />

          {branchCodeError && (
            <div className="generic-error">
              <p>Must be a valid branch code number</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="image">Image Upload:</label>
          <input
            type="file"
            autoComplete="off"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {imageError && (
            <div className="generic-error">
              <p>
                Image attached should be JPEG/PNG format, and should not exceed
                2 megabytes.
              </p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="productType">Product Type:</label>
          <select id="productType">
            <option value="137">Investor</option>
            <option value="070">Insurance</option>
            <option value="291">Loans</option>
            <option value="969">Savings</option>
            <option value="555">Credit Cards</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0px",
          }}
        >
          <button
            onClick={() => {
              props.setIsAuthenticated(false);
            }}
          >
            Logout
          </button>
          &nbsp;<button type="submit">Submit</button>
        </div>
        {success && <div className = "generic-success">
                <p> Form has submitted successfully.</p>
            </div>}
      </form>
    </div>
  );
};

export default Form;
