import './Carousel.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Testimonial() {

    return (
        <div>
            <div className='body'>

                <div className='head'>
                    <h4>TESTIMONIALS</h4>
                    <h1>Our Customer Reviews</h1>
                </div>

                <div className='text'>
                    <Carousel>

                    <Carousel.Item interval={3000}>
                        <Card style={{ height: '300px', width: '700px' }}>

                            <Card.Title> Sivashanmugam, Muniappan (Siva)</Card.Title>

                            <Card.Body>

                               
                                    <p>"Thiru was totally professional in his approach right from day one. 
                                        He understood the clients' priorities and displayed a great sense of dedication and timing to file the visa application, 
                                        communicate with the client, submit documents and answered questions in a highly professional and up-to-the-point manner.
                                         Very meticulous and detailed in his work. No fuss whatsoever. Top class service.
                                         I would certainly recommend Thiru for any prospective migrant. Thiru, please accept our sincere thanks."</p>
                                
                            </Card.Body>
                        </Card>
                        </Carousel.Item>



                        <Carousel.Item interval={3000}>
                        <Card style={{ height: '300px', width: '700px' }}>

                            <Card.Title> Mr & Mrs Lakshmikandan</Card.Title>

                            <Card.Body>

                        
                                    <p>First of all we would like to thank you very much for getting positive visa result.
                                         We have achieved this visa grant only because of your keen follow ups. The first achievement was the Successful TRA Result. 
                                        This was because of your guidance. Next was Main application launching.
                                         In this stage, the effort you put was very amazing. Because of your sincere effort all have got succeeded. 
                                        We will be enjoying our life in Australia and celebrate our friendship throughout our life. 
                                        Once again we all from my family thank you very much?</p>
                               
                            </Card.Body>
                        </Card>
                        </Carousel.Item>


                        <Carousel.Item interval={3000}>
                        <Card style={{ height: '300px', width: '700px' }}>

                            <Card.Title> Mary Jones Maxime</Card.Title>

                            <Card.Body>

                               
                                    <p>Wish you a happy and prosperous new year!!!! 
                                        I would like to thank you for the help that you have done for Maxime and myself in getting the visa process done so fast.
                                         I am sure that without your suggestions and timely support we would not have made it possible. 
                                         Wish you a harmonious and successful year!!!! 
                                        May this year add even more happiness to you and your family!!!!</p>
                               
                            </Card.Body>
                        </Card>
                        </Carousel.Item>
                    </Carousel>


                    <Carousel.Item interval={3000}>
                        <Card style={{ height: '300px', width: '700px' }}>

                            <Card.Title>Seetharaman, Sivagami, Sandhiya</Card.Title>

                            <Card.Body>

                        
                                    <p>You were really patient in answering our queries and your thorough guidance helped us reach success at ease. 
                                        You gave us the visibility and made us be sure of what was happening with our application and be sure of what to expect next. 
                                        There have been times when we nearly gave up, but you motivated us to keep going. 
                                        Thank you for all the efforts and dedication you have to put on our application to make this move possible. 
                                        We would love to recommend you to our friends just like the way we got introduced to you.</p>
                               
                            </Card.Body>
                        </Card>
                        </Carousel.Item>

                </div>


            </div>

        </div>


    )
}

export default Testimonial