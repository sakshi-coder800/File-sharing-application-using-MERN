import React, { useEffect, useRef, useState } from 'react'
import { uploadImg } from './services/api';


const Home = () => {
  const [file, setFile] = useState("")
  const btnLink = useRef();
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name)
        data.append("file", file)
        let response = await uploadImg(data);

        // console.log(file)
        // const response = await getImage(file)
        // console.log(response);
      }
    }
    getImage();
  }, [file])
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
