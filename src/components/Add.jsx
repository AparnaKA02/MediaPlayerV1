import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allApi'

const Add = ({setVideoUploadResponse}) => {
  const [isInvalidLink, setIsInvalidLink] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption:"", url:"", link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(videoDetails);

  const getEmbedLink = (YouTubeLink) => {
    if (YouTubeLink.includes("v=")) {
      const videoId = YouTubeLink.split("v=")[1].slice(0, 11)
      // console.log(videoId);
      setVideoDetails({ ...videoDetails, link: `https://www.youtube.com/embed/${videoId}` })
      setIsInvalidLink(false)
    } else {
      setIsInvalidLink(true)
      // console.log("Invalid Youtube Link");
      setVideoDetails({...videoDetails, link: "" })
    }
  }

  const handleUploadVideo = async () => {
    const {caption,url,link } = videoDetails
    if (caption && url && link) {
      // alert("call API")
      try {
        const response = await uploadVideoAPI(videoDetails)
        console.log(response);
        if (response.status>=200 && response.status<300) {
          handleClose()
          setVideoDetails({...videoDetails,caption:"",url:"",link:""})
          setVideoUploadResponse(response.data)
          alert("Video Uploaded successfully!!!")
        }
      } catch (err){
        console.log(err);

      }
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5 fw-bolder'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputURL" label="Image URL" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, url: e.target.value })} type="text" placeholder="Image URl" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputLink" label="Youtube link" className="mb-3">
              <Form.Control onChange={e => getEmbedLink(e.target.value)} type="text" placeholder="Youtube link" />
            </FloatingLabel>
            {isInvalidLink &&
              <div className="mt-3 text-danger fw-bolder">
                Invalid Youtube Link
              </div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info' >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
