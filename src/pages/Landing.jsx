import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/music.giff.jpg'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.jpg'
import category from '../assets/category.jpg'
import history from '../assets/notes.png'




function Landing() {
  return (
    <>
      {/*landing section */}
      <div className='container landingsection'>
        <div className='row align-items-center my-5'>
          <div className='col-lg-5'>

            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ea distinctio minima molestias assumenda sed voluptatibus cumque vel perferendis earum, quae, id quo magni veritatis delectus, voluptatum quod consequatur recusandae.</p>
            <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>

          </div>

          <div className='col'></div>
          <div className='col-lg-6'>
            <img src={landingImage} alt="" />
          </div>

        </div>

      </div>

      {/*features */}

      <div className='container my-5'>
        <h5 className='text-center text-warning fw-bold'>Features</h5>
        <div className='row mt-5'>
          <div className='col-lg-4'>
            {/* card 1*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  User can upload,view and remove the videos
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            {/* card 2*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={category} />
              <Card.Body>
                <Card.Title>Categorize  videos</Card.Title>
                <Card.Text>
                  User can categorize the video by drag and drop feautures
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            {/* card 3*/}
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={history} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  User can manage the watch history of all videos
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>

          

        </div>



      </div>

      {/* landing footer */}

      <div className='container my-5 p-5 border border-white border-3 rounded'>
        <div className='row'>
          <div className='col-lg-6'>

            <h3 className='text-warning'>Simple,fast and powerfull</h3>

            <div className='mt-5 text-white'>
              <p><span className='fs-5 fw-bold'>Play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias numquam, impedit laudantium corrupti id cumque nulla vitae voluptatibus sed laboriosam distinctio error a nisi adipisci repellat veniam nam! Minima.</p>
              <p><span className='fs-5 fw-bold'>Manage videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias numquam, impedit laudantium corrupti id cumque nulla vitae voluptatibus sed laboriosam distinctio error a nisi adipisci repellat veniam nam! Minima.</p>
              <p><span className='fs-5 fw-bold'>Watch history:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias numquam, impedit laudantium corrupti id cumque nulla vitae voluptatibus sed laboriosam distinctio error a nisi adipisci repellat veniam nam! Minima.</p>
            </div>

          </div>
          <div className='col-lg-6 p-5'>
          <iframe width="460" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=B5zqwoAHDjU52emJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default Landing