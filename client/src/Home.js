import React, { useRef } from 'react'


const Home = () => {
  const btnLink = useRef();
  const uploadImg = () => {
    btnLink.current.click()
  }
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
            <button className="upload_btn" onClick={() => uploadImg()}>Upload </button>
            <input type="file" name="" id="" ref={btnLink} style={{ display: "none" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
