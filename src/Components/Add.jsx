import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allAPI';

function Add({setAddVideoResponse}) {

  const [VideoDetails,setVideoDetails]=useState({caption: "",imageUrl: "",youtubeUrl: "" })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[isInvalidUrl,setIsInvalidUrl]=useState(false)

 

  const getEmbedUrl = (link) => {
    
     if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...VideoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
      console.log(videoId);
      setIsInvalidUrl(false)
      
      

    }
   else{
    setVideoDetails({...VideoDetails, youtubeUrl: "" })
    setIsInvalidUrl(true)
   }
  }

  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=VideoDetails
    if(caption && imageUrl && youtubeUrl){

      try{
        const result=await addVideo(VideoDetails)
        setAddVideoResponse(result.data)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success(`${result.data.caption} added to your collection`)
          handleClose()
        }
        
        
      }
      catch(err){
        console.log(err);
        
      }
      

    }
    else{

      toast.warning("enter the field completely")
    }
  }
  
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='text-warning'>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'> +</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill following details..</p>

          <div className='border border-3 border-info rounded p-3'>
            {/* caption */}
            <FloatingLabel controlId="floatingInputcaption" label="video caption" className="mb-3">
              <Form.Control onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} type="text" placeholder="enter video caption" />
            </FloatingLabel>

            {/* image url */}

            <FloatingLabel controlId="floatingInputimage" label="Image Url" className="mb-3">
              <Form.Control  onChange={e=>setVideoDetails({...VideoDetails,imageUrl:e.target.value})} type="text" placeholder="enter image url" />
            </FloatingLabel>

            {/* utube url */}


            <FloatingLabel controlId="floatingInputurl" label="youtube Url" className="mb-3">
              <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="enter youtube url" />
            </FloatingLabel>

            {
              isInvalidUrl &&  <div className='text-danger fw-bold'>invalid Url</div>
            }


           





     </div>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      
    </>
  )
}

export default Add