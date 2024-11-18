import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './VideoCard'
import { getAllVideos } from '../service/allAPI'




function View({addVideoResponse}) {


  const [allVideos, setAllVideos] = useState([])

  const[deleteResponse,setDeleteResponse]=useState("")
  useEffect(() => {

    getVideos()


  }, [addVideoResponse,deleteResponse])


  console.log(allVideos);

  const getVideos = async () => {
    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }


  return (
    <>


      <Row className='border border-3 p-3'>
        {
          allVideos.length > 0 ?

            allVideos?.map(video => (
              <Col key={video?.id} lg={4} md={6} sm={12} className='mb-3'>

                <Videocard displayData={video} setDeleteResponse={setDeleteResponse} />


              </Col>
            ))
            :
            <div className='text-danger fs-3 fw-bold'>Nothing to display</div>
        }
      </Row>






    </>
  )
}

export default View