import React, { useContext, useRef, useState } from 'react'
import Footer from '../components/Footer'
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppContext from '../context/AppContext'
import Image from 'next/image';

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

const Vender = () => {
    const context = useContext(AppContext)

    const ref_error_div = useRef(null);
    const img_upload = useRef(null);

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [mileage, setMileage] = useState("");
    const [engine, setEngine] = useState("");
    const [departament, setDepartament] = useState("");
    const [location, setLocation] = useState("");
    const [owner, setOwner] = useState("");
    const [price, setPrice] = useState("");
    const [condition, setCondition] = useState("");

    var terrors = [];
    const [errors, setErrors] = useState([]);

    const submitPublication = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('year', year);
        formData.append('category', category);
        formData.append('color', color);
        formData.append('description', description);
        formData.append('mileage', mileage);
        formData.append('engine', engine);
        formData.append('departament', departament);
        formData.append('location', location);
        formData.append('owner', owner);
        formData.append('price', price);
        formData.append('condition', condition);



        var ins = img_upload.current.files.length;
        for (var x = 0; x < ins; x++) {
            // formData.append("fileToUpload[]", img_upload.current.files[x]);
            formData.append('files' + x, img_upload.current.files[x]);
        }

        formData.append('TotalFiles', ins);
        setErrors([])

        if (context.apikey) {
            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/vehicles', {
                method: 'POST',
                body: formData,
                headers: new Headers({
                    'Authorization': 'Bearer ' + context.apikey,
                })
            })

            if (res.status == 422) {
                terrors = await res.json();
                await setErrors(terrors.errors)
                window.location.hash = '#display_errors';
            }

            if (res.status == 200) {
                // Router.push('/sign-in')
            }
        } else {
            await setErrors(['Please sign in before create vehicles']);
            window.location.hash = '#display_errors';
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
                                <select name="brand" id="" onChange={(e) => setBrand(e.target.value)} required>
                                    <option value="" selected disabled>Select a brand</option>
                                    <option value={'Suzuki'}>Suzuki</option>
                                    <option value={'Volkswagen'}>Volkswagen</option>
                                    <option value={'Fiat'}>Fiat</option>
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

                                {/* <input type="text" name="brand" placeholder="¿Cuál es la marca de tu vehículo?" autocomplete="off" required /> */}
                            </div>
                            <div className="sign-up-field">
                                <h3>Model</h3>
                                <input type="text" name="model" onChange={(e) => setModel(e.target.value)} placeholder="What is the model of your vehicle?" autocomplete="off" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Year</h3>
                                <input type="number" name="year" onChange={(e) => setYear(e.target.value)} placeholder="What is the year of your vehicle?" min="1960" max="2022" required />
                            </div>
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-1.webp"} alt="imagen auto" />
                    </section>
                    <section className="cat-section"> {/* Categoria, Color y Descripcion */}
                        <div>
                            <h2>2. Indicates Category, Color and a Description of the Vehicle</h2>
                            <div className="sign-up-field">
                                <h3>Category</h3>
                                <select name="category" id="" onChange={(e) => setCategory(e.target.value)} >
                                    <option value="" selected disabled>Select a Category</option>
                                    <option value="car_and_trucks">Cars and Trucks</option>
                                    <option value="motorcycles">Motorcycles</option>
                                    <option value="trucks">Trucks</option>
                                </select>
                            </div>
                            <div className="sign-up-field">
                                <h3>Color</h3>
                                <input type="text" name="color" onChange={(e) => setColor(e.target.value)}
                                    placeholder="What color is your vehicle?" autocomplete="off" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Descripción</h3>
                                <textarea name="description" onChange={(e) => setDescription(e.target.value)}
                                    id="" cols="30" rows="10" placeholder="Write a description of your vehicle" minlength="25" maxlength="2500" required></textarea>
                            </div>
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-2.webp"} alt="imagen auto" />
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
                                    placeholder="What size is the engine of your vehicle?" autocomplete="off" required />
                            </div>
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-3.webp"} alt="imagen auto" />
                    </section>
                    <section className="pictures-section"> {/* Fotos */}
                        <div>
                            <h2>4. Upload Vehicle Quality Photos</h2>
                            <p>(Minimum 4 photos, one per side of the vehicle)</p>
                            <div className="upload-image-box">
                                <input type="file" name="images" ref={img_upload} id="upload-image" accept="image/*" multiple />
                                <label for="upload-image">
                                    <img src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/icons/camara-fotografica.png"} alt="Imagen de Camara" />
                                    <p>Add Photos</p>
                                </label>
                            </div>
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-4.webp"} alt="imagen auto" />
                    </section>
                    <section className="location-section"> {/* Ubicacion */}
                        <div>
                            <h2>5. Where is the Vehicle Located?</h2>
                            <div className="sign-up-field">
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
                            </div>
                            <div className="sign-up-field">
                                <h3>Location</h3>
                                <select name="localidad" id="" onChange={(e) => setLocation(e.target.value)}>
                                    <option value="" selected disabled>In what town is the vehicle?</option>
                                    <option value="">Aguada</option>
                                    <option value="">Aires Puros</option>
                                    <option value="">Barra de Carrasco</option>
                                    <option value="">Barrio Sur</option>
                                    <option value="">Paso Molino</option>
                                    <option value="">Brazo Oriental</option>
                                    <option value="">Buceo</option>
                                    <option value="">Capurro</option>
                                    <option value="">Carrasco Norte</option>
                                    <option value="">Casabo</option>
                                    <option value="">Casavalle</option>
                                    <option value="">Centro</option>
                                    <option value="">Cerrito</option>
                                    <option value="">Ciudad Vieja</option>
                                    <option value="">Colon</option>
                                    <option value="">Conciliacion</option>
                                    <option value="">Cordon</option>
                                    <option value="">Flor de Maroñas</option>
                                    <option value="">Jacinto Vera</option>
                                    <option value="">Jardines del Hipodromo</option>
                                    <option value="">La Blanqueada</option>
                                </select>
                            </div>
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-6.webp"} alt="imagen auto" />
                    </section>
                    <section className="end-section"> {/* Finalizar Publicacion */}
                        <div>
                            <h2>6. Finish Publishing</h2>
                            <div className="sign-up-field">
                                <h3>Owner&apos;s Name</h3>
                                <input type="text" name="owner" onChange={(e) => setOwner(e.target.value)}
                                    placeholder="Whose name is the vehicle in?" autocomplete="off" required />
                            </div>
                            <div className="sign-up-field">
                                <h3>Price</h3>
                                <div className="field-price">
                                    <h4>USD</h4>
                                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)}
                                        min="1500" max="1000000"
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
                            <Image width={1000} height={1000} className="nextimglogo-ch-vender" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/logo/carhouse-logo.png"} alt="logo CarHouse" />
                        </div>
                        <Image width={1000} height={1000} className="nextimgaside-img" src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/vender/car-aside-5.webp"} alt="imagen auto" />
                    </section>
                    <input className="btn-publish" type="submit" value="End Publication" />
                </form>
            </main>

            <Footer />
        </>
    )
}

Vender.layout = "AdminLayout";
export default Vender