import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import user1 from "../../Web_Assets/assets/blog/review-author-1.jpg"
import user2 from "../../Web_Assets/assets/blog/review-author-2.jpg"
import user3 from "../../Web_Assets/assets/blog/review-author-3.jpg"
import user4 from "../../Web_Assets/assets/blog/review-author-5.jpg"

function Section6() {
    return (

        <>
        <h1 className='reviewh1'>Happy Internee Reviews</h1>
        <section className='blog_section'>

            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>

                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user1} alt="user1" className='img-fluid' />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat dicta qui doloremque voluptatem magni vel velit, vitae nam optio.</p>
                                <div className="item_rating mb-2">
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                </div>
                                <h5>BY NELSON JOSH</h5>

                            </Carousel.Caption>
                        </Carousel.Item>




                        <Carousel.Item>

                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user2} alt="user2" className='img-fluid' />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat dicta qui doloremque voluptatem magni vel velit, vitae nam optio.</p>
                                <div className="item_rating mb-2">
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                </div>
                                <h5>BY NELSON JOSH</h5>

                            </Carousel.Caption>
                        </Carousel.Item>




                        <Carousel.Item>

                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user3} alt="user3" className='img-fluid' />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat dicta qui doloremque voluptatem magni vel velit, vitae nam optio.</p>
                                <div className="item_rating mb-2">
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                </div>
                                <h5>BY NELSON JOSH</h5>

                            </Carousel.Caption>
                        </Carousel.Item>





                        <Carousel.Item>

                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user4} alt="user4" className='img-fluid' />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat dicta qui doloremque voluptatem magni vel velit, vitae nam optio.</p>
                                <div className="item_rating mb-2">
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                    <i className=" bi bi-star-fill"></i>
                                </div>
                                <h5>BY NELSON JOSH</h5>

                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>


                </Row>
            </Container>

        </section>


        </>
    );
}

export default Section6;