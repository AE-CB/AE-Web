import React, { useContext, useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppContext from '../context/AppContext'
import Image from 'next/image';
import Router from 'next/router';
import { getProviders, getSession, useSession } from "next-auth/react"
import { getCookie, hasCookie } from 'cookies-next';


const NativeSelectBox = styled(Box)(({ theme }) => ({
    '.MuiInputBase-root': {
        marginTop: '10px !important',
        width: '100%'
    },
    '.MuiInput-root:before': {
        borderBottom: '3px solid'
    },
    '.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: '3px solid'
    },
    '.MuiInput-input:focus': {
        backgroundColor: 'none !important'
    }

}));

const preview = (file) => {
    const fr = new FileReader();
    document.querySelectorAll("#preview img")
        .forEach(img => img.remove());
    fr.onload = () => {
        const img = document.createElement("img");
        img.src = fr.result;  // String Base64 
        img.alt = file.name;
        document.querySelector('#preview').append(img);
    };
    fr.readAsDataURL(file);
};



const AddItem = ({ session }) => {

    // console.log(getCookie('accessToken'))
    // console.log(session.accessToken[0])

    var ranonce = false;
    useEffect(() => {
        if (!ranonce) {
            document.querySelector("#upload-image").addEventListener("change", (ev) => {
                if (!ev.target.files) return; // Do nothing.
                [...ev.target.files].forEach(preview);
            });
            ranonce = true
        }
    }, [])

    const context = useContext(AppContext)

    const ref_error_div = useRef(null);
    const img_upload = useRef(null);
    const img_upload_error = useRef(null);
    const [showUpError, setShowUpError] = useState(false);
    const imgCount = 4


    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [mileage, setMileage] = useState("");
    const [engine, setEngine] = useState("");
    // const [departament, setDepartament] = useState("");
    const [city, setCity] = useState("");
    // const [owner, setOwner] = useState("");
    const [price, setPrice] = useState("");
    const [condition, setCondition] = useState("");

    var terrors = [];
    const [errors, setErrors] = useState([]);

    const submitPublication = async (e) => {
        e.preventDefault()
        setErrors([])

        let formData = new FormData();
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('year', year);
        formData.append('category', category);
        formData.append('color', color);
        formData.append('description', description);
        formData.append('mileage', mileage);
        formData.append('engine', engine);
        // formData.append('departament', departament);
        formData.append('city', city);
        // formData.append('owner', owner);
        formData.append('price', price);
        formData.append('condition', condition);



        var ins = img_upload.current.files.length;

        for (var x = 0; x < ins; x++) {
            // formData.append("fileToUpload[]", img_upload.current.files[x]);
            formData.append('files' + x, img_upload.current.files[x]);
        }

        formData.append('TotalFiles', ins);

        // check if images not added.
        if (ins < imgCount) {
            setShowUpError(true)
            img_upload_error.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            // if (session.accessToken) {
            if (hasCookie('accessToken')) {
                const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/vehicles', {
                    method: 'POST',
                    body: formData,
                    headers: new Headers({
                        'Authorization': 'Bearer ' + getCookie('accessToken'),
                    })
                })

                if (res.status == 422) {
                    terrors = await res.json();
                    await setErrors(terrors.errors)
                    window.location.hash = '#display_errors';
                }

                if (res.status == 201) {
                    Router.push('/vehicles?message=item_added')
                }
            } else {
                await setErrors(['Error occured please contact admin']);
                window.location.hash = '#display_errors';
            }
        }





    }

    return (
        <>
            <section className="vender-banner">
                <div className="gradient-div"></div>
                <h1>Sell ​​your car <br /><b>quickly and safely</b></h1>
            </section>
            <main className="main-vender">
                <div id="display_errors" className="display_errors" ref={ref_error_div}>
                    <ul>
                        {errors.map((item, key) => {
                            return (
                                <li key={key}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <form className="form-vender" onSubmit={submitPublication} encType="multipart/form-data">
                    <section className="brand-section"> {/* Marca, Modelo y Ano */}
                        <div>
                            <h2>1. Indicates Make, Model and Year of the Vehicle</h2>
                            <div className="sign-up-field">
                                <h3>Brand</h3>
                                <select defaultValue={''} name="brand" id="" onChange={(e) => setBrand(e.target.value)} required>
                                    <option value="" disabled>Select a brand</option>
                                    <option value="Acura">Acura</option>
                                    <option value="Alfa-Romeo">Alfa-Romeo</option>
                                    <option value="Aprilia">Aprilia</option>
                                    <option value="Ashok-Leyland">Ashok-Leyland</option>
                                    <option value="Aston">Aston</option>
                                    <option value="Atco">Atco</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Austin">Austin</option>
                                    <option value="Bajaj">Bajaj</option>
                                    <option value="Bentley">Bentley</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Cadillac">Cadillac</option>
                                    <option value="Cal">Cal</option>
                                    <option value="CAT">CAT</option>
                                    <option value="Ceygra">Ceygra</option>
                                    <option value="Changan">Changan</option>
                                    <option value="Chery">Chery</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Citroen">Citroen</option>
                                    <option value="Corvette">Corvette</option>
                                    <option value="Daewoo">Daewoo</option>
                                    <option value="Daido">Daido</option>
                                    <option value="Daihatsu">Daihatsu</option>
                                    <option value="Datsun">Datsun</option>
                                    <option value="Demak">Demak</option>
                                    <option value="Dfac">Dfac</option>
                                    <option value="DFSK">DFSK</option>
                                    <option value="Ducati">Ducati</option>
                                    <option value="Eicher">Eicher</option>
                                    <option value="FAW">FAW</option>
                                    <option value="Ferrari">Ferrari</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="Force">Force</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Foton">Foton</option>
                                    <option value="Hero">Hero</option>
                                    <option value="Hero-Honda">Hero-Honda</option>
                                    <option value="Higer">Higer</option>
                                    <option value="Hillman">Hillman</option>
                                    <option value="HINO">HINO</option>
                                    <option value="Hitachi">Hitachi</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Hummer">Hummer</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="IHI">IHI</option>
                                    <option value="Isuzu">Isuzu</option>
                                    <option value="Iveco">Iveco</option>
                                    <option value="JAC">JAC</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="JCB">JCB</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="JiaLing">JiaLing</option>
                                    <option value="JMC">JMC</option>
                                    <option value="John-Deere">John-Deere</option>
                                    <option value="Jonway">Jonway</option>
                                    <option value="KAPLA">KAPLA</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Kinetic">Kinetic</option>
                                    <option value="KMC">KMC</option>
                                    <option value="Kobelco">Kobelco</option>
                                    <option value="Komatsu">Komatsu</option>
                                    <option value="KTM">KTM</option>
                                    <option value="Kubota">Kubota</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="Land-Rover">Land-Rover</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Loncin">Loncin</option>
                                    <option value="Longjia">Longjia</option>
                                    <option value="Lotus">Lotus</option>
                                    <option value="Lti">Lti</option>
                                    <option value="Mahindra">Mahindra</option>
                                    <option value="Maserati">Maserati</option>
                                    <option value="Massey-Ferguson">Massey-Ferguson</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Metrocab">Metrocab</option>
                                    <option value="MG">MG</option>
                                    <option value="Mg-Rover">Mg-Rover</option>
                                    <option value="Micro">Micro</option>
                                    <option value="Mini">Mini</option>
                                    <option value="Minnelli">Minnelli</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Morgan">Morgan</option>
                                    <option value="Morris">Morris</option>
                                    <option value="New-Holland">New-Holland</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Opel">Opel</option>
                                    <option value="Other">Other</option>
                                    <option value="Perodua">Perodua</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Piaggio">Piaggio</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="Powertrac">Powertrac</option>
                                    <option value="Proton">Proton</option>
                                    <option value="Range-Rover">Range-Rover</option>
                                    <option value="Ranomoto">Ranomoto</option>
                                    <option value="Renault">Renault</option>
                                    <option value="Reva">Reva</option>
                                    <option value="Rolls-Royce">Rolls-Royce</option>
                                    <option value="Saab">Saab</option>
                                    <option value="Sakai">Sakai</option>
                                    <option value="Seat">Seat</option>
                                    <option value="Singer">Singer</option>
                                    <option value="Skoda">Skoda</option>
                                    <option value="Smart">Smart</option>
                                    <option value="Sonalika">Sonalika</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Swaraj">Swaraj</option>
                                    <option value="Syuk">Syuk</option>
                                    <option value="TAFE">TAFE</option>
                                    <option value="Tata">Tata</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Triumph">Triumph</option>
                                    <option value="TVS">TVS</option>
                                    <option value="Vauxhall">Vauxhall</option>
                                    <option value="Vespa">Vespa</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Wave">Wave</option>
                                    <option value="Willys">Willys</option>
                                    <option value="Yamaha">Yamaha</option>
                                    <option value="Yanmar">Yanmar</option>
                                    <option value="Yuejin">Yuejin</option>
                                    <option value="Zongshen">Zongshen</option>
                                    <option value="Zotye">Zotye</option>
                                </select>
                                {/* <NativeSelectBox>
                                    <NativeSelect
                                        defaultValue={'all'}
                                        inputProps={{
                                            name: 'brand',
                                        }}
                                    // onChange={handleFilters("condition")}
                                    >
                                        <option value={''}>Select a brand</option>
                                        <option value={'Suzuki'}>Suzuki</option>
                                        <option value={'Volkswagen'}>Volkswagen</option>
                                        <option value={'Fiat'}>Fiat</option>
                                    </NativeSelect>
                                </NativeSelectBox> */}

                                {/* <input type="text" name="brand" placeholder="¿Cuál es la marca de tu vehículo?" autoComplete="off" required /> */}
                            </div>
                            <div className="sign-up-field">
                                <h3>Model</h3>
                                <input type="text" name="model" onChange={(e) => setModel(e.target.value)} placeholder="What is the model of your vehicle?" autoComplete="off" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Year</h3>
                                <input type="number" name="year" onChange={(e) => setYear(e.target.value)} placeholder="What is the year of your vehicle?" min="1960" max="2022" required />
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-1.webp"} alt="imagen auto" />
                    </section>
                    <section className="cat-section"> {/* Categoria, Color y Descripcion */}
                        <div>
                            <h2>2. Indicates Category, Color and a Description of the Vehicle</h2>
                            <div className="sign-up-field">
                                <h3>Category</h3>
                                <select defaultValue={''} name="category" id="" onChange={(e) => setCategory(e.target.value)} >
                                    <option value="" disabled>Select a Category</option>
                                    <option value="cars">Car</option>
                                    <option value="vans">Van</option>
                                    <option value="suvs">SUV / Jeep</option>
                                    <option value="motorcycles">Motorcycle</option>
                                    <option value="crew-cabs">Crew Cab</option>
                                    <option value="pickups">Pickup / Double Cab</option>
                                    <option value="buses">Bus</option>
                                    <option value="lorries">Lorry</option>
                                    <option value="three-wheels">Three Wheel</option>
                                    <option value="others">Other</option>
                                    <option value="tractors">Tractor</option>
                                    <option value="heavy-duties">Heavy-Duty</option>
                                    <option value="bicycles">Bicycle</option>
                                </select>
                            </div>
                            <div className="sign-up-field">
                                <h3>Color</h3>
                                <input type="text" name="color" onChange={(e) => setColor(e.target.value)}
                                    placeholder="What color is your vehicle?" autoComplete="off" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Description</h3>
                                <textarea name="description" onChange={(e) => setDescription(e.target.value)}
                                    id="" cols="30" rows="10" placeholder="Write a description of your vehicle" minLength="25" maxLength="2500" required></textarea>
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-2.webp"} alt="imagen auto" />
                    </section>
                    <section className="tec-section"> {/* Datos Tecnicos */}
                        <div>
                            <h2>3. Technical Data of the Vehicle</h2>
                            <div className="sign-up-field">
                                <h3>Mileage</h3>
                                <input type="number" name="kilometers" onChange={(e) => setMileage(e.target.value)}
                                    placeholder="How many kilometers does your vehicle have?" min="0" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Engine</h3>
                                <input type="text" name="motor" onChange={(e) => setEngine(e.target.value)}
                                    placeholder="What size is the engine of your vehicle?" autoComplete="off" required />
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-3.webp"} alt="imagen auto" />
                    </section>
                    <section className="pictures-section"> {/* Fotos */}
                        <div>
                            <h2>4. Upload Vehicle Quality Photos</h2>
                            <p>(Minimum 4 photos, one per side of the vehicle)</p>
                            <span ref={img_upload_error}>
                                {showUpError && <p className='img_up_errors' >Please add at least {imgCount} images</p>}
                            </span>
                            <div className="upload-image-box">
                                <input type="file" name="images" ref={img_upload} id="upload-image" accept="image/*" multiple />
                                <label htmlFor="upload-image">
                                    <img src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/camara-fotografica.png"} alt="Imagen de Camara" />
                                    <p>Add Photos</p>
                                </label>
                                <div id="preview"></div>
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-4.webp"} alt="imagen auto" />
                    </section>
                    <section className="location-section"> {/* Ubicacion */}
                        <div>
                            <h2>5. Where is the Vehicle Located?</h2>
                            {/* <div className="sign-up-field">
                                <h3>Department</h3>
                                <select name="departamento" id="" onChange={(e) => setDepartament(e.target.value)}>
                                    <option value="default" selected disabled>Where is the vehicle located?</option>
                                    <option value="artigas">Artigas</option>
                                    <option value="canelones">Canelones</option>
                                    <option value="cerro largo">Cerro Largo</option>
                                    <option value="colonia">Colonia</option>
                                    <option value="durazno">Durazno</option>
                                    <option value="flores">Flores</option>
                                    <option value="florida">Florida</option>
                                    <option value="lavalleja">Lavalleja</option>
                                    <option value="maldonado">Maldonado</option>
                                    <option value="montevideo">Montevideo</option>
                                    <option value="paysandu">Paysandu</option>
                                    <option value="rio negro">Rio Negro</option>
                                    <option value="rivera">Rivera</option>
                                    <option value="rocha">Rocha</option>
                                    <option value="salto">Salto</option>
                                    <option value="san jose">San Jose</option>
                                    <option value="soriano">Soriano</option>
                                    <option value="tacuarembo">Tacuarembo</option>
                                    <option value="treinta y tres">Treinta y Tres</option>
                                </select>
                            </div> */}
                            <div className="sign-up-field">
                                <h3>City</h3>
                                <select defaultValue={''} name="localidad" id="" onChange={(e) => setCity(e.target.value)}>
                                    <option value="" disabled>In what town is the vehicle?</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Dehiwala-Mount-Lavinia">Dehiwala-Mount-Lavinia</option>
                                    <option value="Moratuwa">Moratuwa</option>
                                    <option value="Kotte">Kotte</option>
                                    <option value="Battaramulla">Battaramulla</option>
                                    <option value="Maharagama">Maharagama</option>
                                    <option value="Kotikawatta">Kotikawatta</option>
                                    <option value="Kolonnawa">Kolonnawa</option>
                                    <option value="Keselwatta">Keselwatta</option>
                                    <option value="Homagama">Homagama</option>
                                    <option value="Mulleriyawa">Mulleriyawa</option>
                                    <option value="Kesbewa">Kesbewa</option>
                                    <option value="Avissawella">Avissawella</option>
                                    <option value="Kaduwela">Kaduwela</option>
                                    <option value="Boralesgamuwa">Boralesgamuwa</option>
                                    <option value="Piliyandala">Piliyandala</option>
                                    <option value="Nugegoda">Nugegoda</option>
                                    <option value="Nawala">Nawala</option>
                                    <option value="Padukka">Padukka</option>
                                    <option value="Kottawa">Kottawa</option>
                                    <option value="Pannipitiya">Pannipitiya</option>
                                    <option value="Malabe">Malabe</option>
                                    <option value="Hanwella">Hanwella</option>
                                    <option value="Gampaha">Gampaha</option><option value="Negombo">Negombo</option><option value="Katunayake">Katunayake</option><option value="Hendala">Hendala</option><option value="Welisara">Welisara</option><option value="Ragama">Ragama</option><option value="Kandana">Kandana</option><option value="Ja-Ela">Ja-Ela</option><option value="Wattala">Wattala</option><option value="Kelaniya">Kelaniya</option><option value="Peliyagoda">Peliyagoda</option><option value="Minuwangoda">Minuwangoda</option><option value="Kadawatha">Kadawatha</option><option value="Dompe">Dompe</option><option value="Divulapitiya">Divulapitiya</option><option value="Nittambuwa">Nittambuwa</option><option value="Mirigama">Mirigama</option><option value="Kiribathgoda">Kiribathgoda</option><option value="Veyangoda">Veyangoda</option><option value="Ganemulla">Ganemulla</option>
                                    <option value="Kandy">Kandy</option><option value="Gampola">Gampola</option><option value="Nawalapitiya">Nawalapitiya</option><option value="Wattegama">Wattegama</option><option value="Harispattuwa">Harispattuwa</option><option value="Kadugannawa">Kadugannawa</option>
                                    <option value="Kurunegala">Kurunegala</option><option value="Kuliyapitiya">Kuliyapitiya</option><option value="Polgahawela">Polgahawela</option><option value="Pannala">Pannala</option>
                                    <option value="Ratnapura">Ratnapura</option><option value="Balangoda">Balangoda</option><option value="Eheliyagoda">Eheliyagoda</option><option value="Kalawana">Kalawana</option><option value="Embilipitiya">Embilipitiya</option>
                                    <option value="Kalutara">Kalutara</option><option value="Beruwala">Beruwala</option><option value="Panadura">Panadura</option><option value="Horana">Horana</option><option value="Matugama">Matugama</option><option value="Bandaragama">Bandaragama</option><option value="Puttalam">Puttalam</option><option value="Chilaw">Chilaw</option><option value="Nattandiya">Nattandiya</option><option value="Wennappuwa">Wennappuwa</option><option value="Marawila">Marawila</option><option value="Dankotuwa">Dankotuwa</option><option value="Kegalle">Kegalle</option><option value="Mawanella">Mawanella</option><option value="Warakapola">Warakapola</option>
                                    <option value="Matale">Matale</option><option value="Dambulla">Dambulla</option><option value="Sigiriya">Sigiriya</option>
                                    <option value="Badulla">Badulla</option><option value="Bandarawela">Bandarawela</option><option value="Haputale">Haputale</option><option value="Welimada">Welimada</option><option value="Mahiyanganaya">Mahiyanganaya</option>
                                    <option value="Nuwara-Eliya">Nuwara-Eliya</option><option value="Hatton">Hatton</option><option value="Talawakele">Talawakele</option>
                                    <option value="Galle">Galle</option><option value="Ambalangoda">Ambalangoda</option>
                                    <option value="Matara">Matara</option><option value="Weligama">Weligama</option>
                                    <option value="Hambantota">Hambantota</option><option value="Tangalle">Tangalle</option>
                                    <option value="Batticaloa">Batticaloa</option><option value="Kattankudy">Kattankudy</option><option value="Eravur">Eravur</option>
                                    <option value="Ampara">Ampara</option><option value="Kalmunai">Kalmunai</option>
                                    <option value="Jaffna">Jaffna</option><option value="Chavakacheri">Chavakacheri</option><option value="Valvettithurai">Valvettithurai</option>
                                    <option value="Anuradapura">Anuradapura</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Moneragala">Moneragala</option>
                                    <option value="Trincomalee">Trincomalee</option>
                                    <option value="Mannar">Mannar</option>
                                    <option value="Vavuniya">Vavuniya</option>
                                    <option value="Kilinochchi">Kilinochchi</option>
                                    <option value="Mullaitivu">Mullaitivu</option>
                                </select>
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-6.webp"} alt="imagen auto" />
                    </section>
                    <section className="end-section"> {/* Finalizar Publicacion */}
                        <div>
                            <h2>6. Finish Publishing</h2>
                            {/* <div className="sign-up-field">
                                <h3>Owner&apos;s Name</h3>
                                <input type="text" name="owner" onChange={(e) => setOwner(e.target.value)}
                                    placeholder="Whose name is the vehicle in?" autoComplete="off" required />
                            </div> */}
                            <div className="sign-up-field">
                                <h3>Price</h3>
                                <div className="field-price">
                                    <h4>Rs.</h4>
                                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)}
                                        placeholder="How much do you want to sell your vehicle for?" required />
                                </div>
                            </div>
                            <div className="sign-up-field">
                                <h3>Condition</h3>
                                <select name="condition" id="" onChange={(e) => setCondition(e.target.value)} >
                                    <option value={"antique"}>Antique</option>
                                    <option value={"brand_new"}>Brand New</option>
                                    <option value={"registered"}>Registered</option>
                                    <option value={"unregistered"}>Unregistered</option>
                                </select>
                            </div>
                            {/* <Image width={1000} height={1000} className="nextimg logo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" /> */}
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/images/vender/car-aside-5.webp"} alt="imagen auto" />
                    </section>
                    <input className="btn-publish" type="submit" value="Publish" />
                </form>
            </main>

        </>
    )
}

AddItem.layout = "AdminLayout";
export default AddItem

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: { destination: "/" },
        };
    }

    const providers = await getProviders()
    return {
        props: { providers, session },
    }
}