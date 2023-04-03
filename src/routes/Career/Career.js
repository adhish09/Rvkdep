import React, { useState } from "react";
import styled from "styled-components";
import careerRvk from "./careerRvk.png";
import "./Career.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from 'axios';


const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const Div = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 30px;
  margin-left: 20%;
  color: #da9532;
  padding: 2px 5px;
  margin-top: 7px;
`;

const Textarea = styled.textarea`
  width: 75%;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
  outline: blue;
  margin-bottom: 15px;
`;
const Input1 = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 2px 5px;
  margin-top: 2px;
  margin-left: 20%;
  margin-right: 5%;
  font-size: 14px;
  outline: blue;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Button = styled.button`
  padding: 7px 15px;
  margin-bottom: 24px;
  margin-left: 20%;
  background-color: #da9532;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #da9532;
    font-size:22px;
  }
  width: 75%;
  height: 50px;
  border-radius: 25px;
`;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const ContactSectionStyle = styled.div`
  .contactSection__wrapper {
    display: flex;
    gap: 1rem;
    background-color: #f1f1f1;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 100%;
  }
  .right {
    max-width: 100%;
    padding: 40px 40px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 2rem 2rem 2rem 2rem;
    }
  }
`;

const Detail = styled.div`
  display: flex;
  height: 80px;
  align-item: center;
  justify-content: center;
  color: black;
`;

const Div0 = styled.div`
  padding: 0px 70px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-right: 10px;
  &:hover {
    background-color: orange;
  }
`;

const Div1 = styled.div`
  color: #da9532;
`;
const Div5 = styled.div`
  color: #da9532;
`;

const Div2 = styled.div`
  font-size: 15px;
`;

const Div3 = styled.div`
  font-size: 15px;
  color: grey;
`;
const Div4 = styled.div`
  margin-right: 15%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  word-spacing: 0.8px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.1em;
`;
const Label = styled.label`
  margin-left: 20%;
  font-weight: 500;
  font-size: 16px;
`;

function Career() {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Do something with the accepted files
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES.join(","),
    maxSize: MAX_FILE_SIZE,
  });

  const fileError =
    fileRejections.length > 0 &&
    (fileRejections[0].errors[0].code === "file-too-large" ||
      !ACCEPTED_FILE_TYPES.includes(fileRejections[0].file.type));


      const [formData, setFormData] = useState({
      });
    
      const [selectedOption, setSelectedOption] = useState("");
      const [selectedFile, setSelectedFile] = useState(null);
    
      
      function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData()
    
        data.append("name", formData['name'])
        data.append("email", formData['email'])
        data.append("phone", formData['phone'])
        data.append("oppotunities", formData['oppotunities'])
        data.append("qualification", formData['qualification'])
        data.append("address", formData['address'])
        data.append("cv",selectedFile )
    
        // Submit form data to server
         axios.post('/api/careers/', data)
        .then((response) => {
          alert("You have successfully registered")
        })
        .catch((error) => {
         alert(error)
        });
      }
    
    
    
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      }
    
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   // do something with the uploaded file
  // };
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // Submit form data to server
  // }

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  return (
    <div>
    <div className="eventallimage">
    <Image src={careerRvk} />
  </div>
  <div className="gallery097">
  <ContactSectionStyle>
        <div className="container967">
          <div className="contactSection__wrapper">
          <form className="left" onSubmit={handleSubmit}>
              <Div>Start your Career</Div>
              <Label>Name</Label>
              <br />
              <Input1
                type="text"
                id="name"
                onChange={handleInputChange}
                name = "name"
                placeholder="Enter Your Name"
                required
              />
              <br />
              <Label>Email</Label>
              <Input type="email" id="email" placeholder="Email" required   onChange={handleInputChange}
                name = "email" />
              <br />
              <Label>Mobile Number</Label>
              <Input
                type="text"
                id="name"
                onChange={handleInputChange}
                name = "phone"
                placeholder="Mobile Number"
                required
              />
              <br />
              <Label>Qualification</Label>
              <Input
                type="text"
                id="qualification"
                onChange={handleInputChange}
                name = "qualification"
                placeholder="Qualification"
                required
              />

              <Label>List of Opportunities</Label>
              <div className="dropdownvol01">
                <select
                  value={selectedOption}
                  onChange={handleInputChange}
                  name = "opportunities"
                  className="dropdownselect01"
                >
                  <option value="">-- Select an option --</option>
                  <option value="option1">Accountant</option>
                  <option value="option2">Content Writer</option>
                  <option value="option3">IT Manager</option>
                  <option value="option4">Operational Manager</option>
                </select>
              </div>
              <Label>Address</Label>
              <textarea
                placeholder="Your Address"
                rows="5"
                onChange={handleInputChange}
                name = "address"
                className="caraddress"
              />

              <div className="uploadbut45">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Upload your CV{" "} <MdCloudUpload size={20} />
                    </p>
                  )}
                  {fileError && (
                    <p>Invalid file type or file size exceeds 2MB</p>
                  )}
                  {isDragReject && <p>Unsupported file type</p>}


                {selectedFile && <p>{selectedFile.name} selected</p>}
                </div> </div>
                <div className="uploadcvbut">Doc, DocX, PDF | Max: 2 MB</div>
              <br />
              <Button type="submit">Submit</Button>
              <br />
              </form>
            <div className="right">
              <Div4>
                We are continuously looking for like-minded folks who have the
                passion to create something amazing. Begin your journey with a
                place where you can give your ideas a stage, create waves of
                change and empower the next-generation. The time is now, the
                revolution is here! Join Us. We’re looking for smart and
                talented professionals who can bring new energy, innovative
                ideas and positive attitude to our growing teams. We value your
                knowledge, passion and desire to learn and help you become a
                successful professional.
              </Div4>
            </div>
          </div>
        </div>
      </ContactSectionStyle></div>
    </div>
  );
}

export default Career;
