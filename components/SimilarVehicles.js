import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Price from '../components/Price';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const SimilarVehicles = ({ city }) => {

    const [similarVehicles, setSimilarVehicles] = useState([]);

    const getSimilarVehicles = async () => {
        let formData = new FormData();
        formData.append('city', city);
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/similar_vehicles', {
            method: 'POST',
            body: formData,
        })

        if (res.status == 200) {
            const similar = await res.json()
            setSimilarVehicles(similar.data)
        }
    }

    var notran = true;
    useEffect(() => {
        if (notran) {
            getSimilarVehicles()

            notran = false
        }
    }, [])

    return (
        <section className="similar-cars">
            <h3>Similar vehicles</h3>

            <OwlCarousel className="list-similar-cars similar_cars"
                autoWidth={false} margin={20} items={4} autoplay={true} width={'80%'}
                // navText={['<i class="fa fa-angle-left" aria-hidden="true"><</i>','<i class="fa fa-angle-right" aria-hidden="true">></i>']} 
                nav>
                {similarVehicles.map((item, i) => {

                    let images = JSON.parse(item.images)

                    return (
                        <a className="card-car" href={`/vehicles/${item.slug}`} key={i}>
                            <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_IMAGE_HOST + images[0].replace(/\\/g, "/")} alt="imagen auto nissan" />
                            <div className="info-car">
                                <div className="car-brand">
                                    {/* <Image className='nextimg' width={30} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/comprar-home/nissan-logo.webp"} alt="logo nissan" /> */}
                                    <h3>{item.brand} {item.model}</h3>
                                </div>
                                <div className="car-data">
                                    <p>Manufactured Year: {item.year}</p>
                                    <p>Kilometers: {item.mileage} Km</p>
                                    <p><Price type='Rs.' price={item.price}></Price></p>
                                </div>
                            </div>
                        </a>
                    )
                })}

                {/* <a className="card-car" href="./car.html">
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
                </a> */}

            </OwlCarousel>
        </section>
    )
}

export default SimilarVehicles