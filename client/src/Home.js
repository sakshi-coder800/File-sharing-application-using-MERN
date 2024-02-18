import React, { useEffect, useRef, useState } from 'react'
import { uploadImg } from './services/api';


const Home = () => {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const btnLink = useRef(); // here declaring a useRef  // initialize useRef in fileInputRef const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  useEffect(() => {
    // this effect function we don't want to call componentDidMount it was call componentDidUpdate
    // u never create use effect as a async function//with this we can get image 
    const getImage = async () => {
      if (file) {// if file is present then work start 
        // here create  a formData object 
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);// send complete file

        // call api == api function name is uploadFile
        const response = await uploadImg(data); // data means user selected data
        // so path in the screen by using a tag
        setResult(response.path);
      }
    }
    getImage();
  }, [file]) // empty array work when your file  load // but we want this when our file is select so 'we are pass file inside the array '


  const onUploadClick = () => {
    btnLink.current.click();
  }

  // console.log(file) // return files value in the conoles
  const img_url = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww"
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={img_url} alt="" />
        </div>
        <div className="right">
          <div className="right-container">
            <h2> Simple file sharing! </h2>
            <p>Upload and share the download link. </p>
            <button className="upload_btn" onClick={() => onUploadClick()}>Upload </button>
            <input type="file" name=""
              file={file} onChange={(e) => setFile(e.target.files[0])}
              id="" ref={btnLink} style={{ display: "none" }} />
            <a href={result} target='_blank'> {result}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
