import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/manvideo.jpg'
import feature2 from '../assets/catvideo.jpg'
import feature3 from '../assets/video.jpg'


const Landing = () => {
    return (
        <div style={{ paddingTop: '80px' }} className='container'>
            {/* landing head */}
            <div className="row align-items-center">
                <div className='col-lg-5'>
                    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p style={{ textAlign: 'justify' }} className='mt-3'>
                        Media Player App will allow users to add or remove their uploaded viedos from youTube and also allow them to arrange it in different catagories by drag and drop.
                        User can also have the provision to manage their watch history as well.
                        What are you waiting for, let start exploring our site!!
                    </p>
                    <Link to={'/home'} className='btn btn-info'>
                        Get Started!!
                    </Link>
                </div>
                <div className='col'></div>
                <div className='col-lg-6'>
                    <img className='img-fluid ms-5' src={landingImg} alt="" />
                </div>
            </div>
            {/* features */}
            <div className="my-5">
                <h3 className='text-center'>Features</h3>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={'250px'} variant="top" src={feature1} />
                            <Card.Body>
                                <Card.Title>Managing Video</Card.Title>
                                <Card.Text>
                                    Users can upload, view and remove the videos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={'250px'} variant="top" src={feature2} />
                            <Card.Body>
                                <Card.Title>Categorising Videos</Card.Title>
                                <Card.Text>
                                    Users can categorise the videos by deag and drop feature.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={'250px'} variant="top" src={feature3} />
                            <Card.Body>
                                <Card.Title>Managing History</Card.Title>
                                <Card.Text>
                                    Users can manage the watch history of all videos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            {/* youtube */}
            <div className='my-5 row align-items-center border rounded p-5'>
                <div className='col-lg-5'>
                    <h3 className='text-warning'>Simple, Fast and Powerful</h3>
                    <p style={{ textAlign: 'justify' }}>
                        <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti accusantium sit, beatae omnis illum modi velit recusandae provident quod officiis doloremque quos perspiciatis eveniet distinctio sapiente saepe impedit quis dolorem!
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span className='fs-5'>Categorise Videos :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti accusantium sit, beatae omnis illum modi velit recusandae provident quod officiis doloremque quos perspiciatis eveniet distinctio sapiente saepe impedit quis dolorem!
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        <span className='fs-5'>Managing History:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti accusantium sit, beatae omnis illum modi velit recusandae provident quod officiis doloremque quos perspiciatis eveniet distinctio sapiente saepe impedit quis dolorem!
                    </p>
                </div>
                <div className='col'></div>
                <div className='col-lg-6'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=0lQnpUNbkXzsG3bc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Landing
