import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Price from '../../components/Price';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from '../../components/Slider';


const Car = ({ vehicle }) => {

    let images = JSON.parse(vehicle.data.images)
    // console.log(images)    

    return (
       
        <main className="main-car">

            <div className="return-comprar">
                <Link className="btn-return-comprar" href={'/vehicles'}>
                    <svg className="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg> <p>Back</p>
                </Link>
            </div>

            <section className="car-section" >
                <Slider images={images}/>

                <section className="car-info">
                    <div className="car-brand-model">
                        {/* <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/comprar-home/volkswagen-logo.webp"} alt="Logo Volkswagen" /> */}
                        <h3>{vehicle.data.brand} {vehicle.data.model}</h3>
                    </div>
                    <div className="year-km">
                        <p>Year: <span>{vehicle.data.year}</span></p>
                        <p>Kilometers: <span>{vehicle.data.mileage}</span></p>
                    </div>
                    {/* <h4 className="car-price normal_text">Rs. <span>{vehicle.data.price}</span></h4> */}
                    <h4 className="car-price normal_text"><Price type='Rs.' price={vehicle.data.price}></Price></h4>
                </section>

                <section className="car-technical-data">
                    <h3>Data sheet:</h3>
                    <div className="technical-data">
                        <p>Brand: <span>{vehicle.data.brand}</span></p>
                        <p>Model: <span>{vehicle.data.model}</span></p>
                        <p>Year: <span>{vehicle.data.year}</span></p>
                        <p>Mileage: <span>{vehicle.data.mileages}</span></p>
                        <p>Color: <span>{vehicle.data.color}</span></p>
                        <p>Engine: <span>{vehicle.data.engine}</span></p>
                        {/* <p>Transmission: <span>6</span> velocidades</p> */}
                    </div>
                </section>

                <section className="car-seller-info">
                    <h3>Seller Information</h3>
                    <div className="seller-info">
                        <p>Name: <span>First Last</span></p>
                        <p>Email: <span>example@gmail.com</span></p>
                        <p>Phone Number: <span>000 000 000</span></p>
                    </div>
                    <a className="btn-seller-contact" href="#">Contact</a>
                </section>

                <section className="car-description">
                    <h3>Description</h3>
                    <p>
                        {vehicle.data.description}
                    </p>
                </section>

                <section className="car-location">
                    <h3>Vehicle Location</h3>
                    <div className="location">
                        <p>City: <span>{vehicle.data.city}</span></p>
                    </div>
                </section>

                <section className="car-questions">
                    <div className="question">
                        <form className="question-form">
                            <h3>Do you want to ask the seller something?</h3>
                            <textarea name="question" cols="30" rows="10" placeholder="Write your question" minLength="5" maxLength="2500" required></textarea>
                            <input className="btn-preguntar" type="submit" value="Ask" />
                        </form>
                    </div>
                    <div className="previous-questions">
                        <h3>Previous Questions</h3>
                        <div className="previous-question">
                            <h4>What use was given to the car?</h4>
                            <div className="answer">
                                <p>
                                    The greatest use of the car was in the city, for daily trips, be it going to work, going out to eat, etc. It has a few road trips as well. Regard
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* <section className="similar-cars">
                <h3>Similar vehicles</h3>
                <div className="list-similar-cars">
                    <a className="card-car" href="./car.html"> 
                        <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar/nissan-kicks.webp"} alt="imagen auto nissan" />
                        <div className="info-car">
                            <div className="car-brand">
                                <Image className='nextimg' width={30} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar-home/nissan-logo.webp"} alt="logo nissan" />
                                <h3>Nissan Kicks</h3>
                            </div>
                            <div className="car-data">
                                <p>Año: 2021</p>
                                <p>Kilometros: 23500</p>
                                <p>USD 29700</p>
                            </div>
                        </div>
                    </a>
                    <a className="card-car" href="./car.html"> 
                        <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar/clio.webp"} alt="imagen auto renault" />
                        <div> 
                            <div className="car-brand">
                                <Image className='nextimg' width={50} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar-home/renault-logo.webp"} alt="logo renault" />
                                <h3>Renault Clio</h3>
                            </div>
                            <div>
                                <p>Año: 2018</p>
                                <p>Kilometros: 46900</p>
                                <p>USD 17600</p>
                            </div>
                        </div>
                    </a>
                    <a className="card-car" href="./car.html"> 
                        <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar/swift.webp"} alt="imagen auto suzuki" />
                        <div> 
                            <div className="car-brand">
                                <Image className='nextimg' width={30} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar-home/suzuki_logo.webp"} alt="logo suzuki" />
                                <h3>Suzuki Swift</h3>
                            </div>
                            <div>
                                <p>Año: 2017</p>
                                <p>Kilometros: 90600</p>
                                <p>USD 14600</p>
                            </div>
                        </div>
                    </a>
                    <a className="card-car" href="./car.html">
                        <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar/accent.webp"} alt="imagen auto hyundai" />
                        <div> 
                            <div className="car-brand">
                                <Image className='nextimg' width={40} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar-home/hyundai-logo.webp"} alt="logo hyundai" />
                                <h3>Hyundai Accent</h3>
                            </div>
                            <div>
                                <p>Año: 2018</p>
                                <p>Kilometros: 108500</p>
                                <p>USD 21800</p>
                            </div>
                        </div>
                    </a>
                    <div className="left-arrow">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="right-arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </section> */}
        </main>

    )
}

Car.layout = "AdminLayout";
export default Car

// params: { slug } comes from url
export const getStaticProps = async ({ params: { slug } }) => {

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/vehicles/' + slug, {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.API_KEY,
        })
    })

    const vehicle = await res.json()
    // console.log(vehicle)

   
    if (!vehicle.data) {
        return {
            redirect: { destination: "/404" },
        };
    }


    return {
        props: { vehicle }
    }
}

export const getStaticPaths = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/approved_vehicles', {
        method: 'get',
        // headers: new Headers({
        //     'Authorization': 'Bearer ' + process.env.API_KEY,
        // })
    })

    const vehiclesitems = await res.json()
    // console.log(vehiclesitems)

    // const vehicles = [
    //     { "id": 2, "name": "John", "age": 30, "car": null },
    //     { "id": 31, "name": "John 2", "age": 32, "car": null },
    //     { "id": 32, "name": "John 2", "age": 32, "car": null },
    //     { "id": 33, "name": "John 2", "age": 32, "car": null },
    //     { "id": 34, "name": "John 2", "age": 32, "car": null },
    //     { "id": 35, "name": "John 2", "age": 32, "car": null },
    //     { "id": 36, "name": "John 2", "age": 32, "car": null },
    //     { "id": 37, "name": "John 2", "age": 32, "car": null },
    //     { "id": 38, "name": "John 2", "age": 32, "car": null },
    // ]



    const paths = vehiclesitems.data.map((vehicle) => ({
        params: {
            slug: vehicle.slug.toString()
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}