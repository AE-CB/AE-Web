import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const NativeSelectBox = styled(Box)(({ theme }) => ({
    '.MuiInputBase-root': {
        marginBottom: '0 !important'
    },
    '.MuiFormControl-root': {
        marginBottom: '0 !important'
    }
}));

const ButtonBox = styled(Box)(({ theme }) => ({
    '.MuiButtonBase-root': {
        fontSize: 12
    }
}));

const PaginatioStack = styled(Stack)(({ theme }) => ({
    '.MuiPaginationItem-root': {
        fontSize: '12px !important'
    }
}));

const TextFieldBox = styled(Box)(({ theme }) => ({
    '.MuiFormLabel-root': {
        fontSize: 16
    },
    '.MuiInputBase-input': {
        fontSize: 16,
    },
    '.MuiFormControl-root': {
        marginBottom: '0 !important'
    },
    '.MuiInputBase-root': {
        marginBottom: '0 !important'
    }
}));

var years = [];

function generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 30
    var years = []

    for (var i = max; i >= min; i--) {
        years.push(i)
    }
    return years
}

years = generateArrayOfYears();
const yearlen = years.length;

const handlePagination = (event, value) => {

};



export async function getStaticProps() {
    console.log(process.env.NEXT_PUBLIC_API_HOST + '/approved_vehicles');

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/approved_vehicles', {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.API_KEY,
        })
    })

    const vehicles = await res.json()
    console.log(vehicles)

    return {
        props: {
            vehicles,
        },
    }
}

const Vehicles = ({ vehicles }) => {

    const [filters, setFilters] = useState({});
    const [vehicleArr, setVehicleArr] = useState(vehicles);
    const filtersRef = useRef(null);

    const [brand, setBrand] = useState("all");
    const [condition, setCondition] = useState("all");
    const [model, setModel] = useState("");
    const [yearMax, setYearMax] = useState("all");
    const [yearMin, setYearMin] = useState("all");
    const [priceMax, setPriceMax] = useState("");
    const [priceMin, setPriceMin] = useState("");
    const [category, setCategory] = useState("all");
    const [gear, setGear] = useState("all");
    const [fuel, setFuel] = useState("all");
    const [city, setCity] = useState("all");


    const handleFilters = (type) => (event) => {
        let tempArr = filters;
        tempArr[type] = event.target.value;
    };

    const filterItems = async () => {
        let formData = new FormData();
        formData.append('brand', brand);
        formData.append('condition', condition);
        formData.append('model', model);
        formData.append('yearMax', yearMax);
        formData.append('yearMin', yearMin);
        formData.append('priceMax', priceMax);
        formData.append('priceMin', priceMin);
        formData.append('category', category);
        formData.append('gear', gear);
        formData.append('fuel', fuel);
        formData.append('city', city);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles', {
            method: 'POST',
            body: formData,
        })


        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // console.log(vehicles)
    }

    const setSort = async (e) => {
        let formData = new FormData();
        formData.append('brand', brand);
        formData.append('condition', condition);
        formData.append('model', model);
        formData.append('yearMax', yearMax);
        formData.append('yearMin', yearMin);
        formData.append('priceMax', priceMax);
        formData.append('priceMin', priceMin);
        formData.append('category', category);
        formData.append('gear', gear);
        formData.append('fuel', fuel);
        formData.append('city', city);

        formData.append('sortfilter', e.target.value);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles', {
            method: 'POST',
            body: formData,
        })

        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    }

    return (
        <>
            {/* form 1 */}

            <form className="search-form">
                {/* Barra Busqueda  */}
                <input className="search-bar" type="search" placeholder="What are you looking for?" />
                <button className="search-btn"><Image width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/magnifying-glass.png"} alt="icono busqueda" /></button>
            </form>

            <main className="main-comprar">
                <section className="amount-sort-section">
                    {/*  Cantidad de vehiculos y ordenamiento  */}
                    <p className="total-vehicles">{vehicles.length} vehicles have been found</p>
                    <div className="sort-vehicles">
                        {/*  Ordenamiento  */}
                        <Image width={25} height={25} className='sortimg' src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/orderasc.png"} alt="icono ordenamiento" />
                        <p>Sort by:</p>
                        <select name="ordenamiento" id="" onChange={setSort}>
                            <option value="date">Date Added</option>
                            <option value="priceasc">Lowest price</option>
                            <option value="pricedec">highest price</option>
                        </select>
                    </div>
                </section>

                <section className="filter-cars">

                    {/* Filtrar y Vehiculos  */}
                    <section className="filters">
                        {/* Filtrar  */}
                        <div ref={filtersRef} className="filter-title">
                            <Image width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/simbolo-de-herramienta-llena-de-filtro.png"} alt="icono filtrar" />
                            <p>Filters:</p>
                            <a href="#">Filtrar</a>
                        </div>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Condition
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'condition',
                                        id: 'condition-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setCondition(e.target.value)}
                                >
                                    <option value={"all"}> All </option>
                                    <option value={"antique"}>Antique</option>
                                    <option value={"brand_new"}>Brand New</option>
                                    <option value={"registered"}>Registered</option>
                                    <option value={"unregistered"}>Unregistered</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Brand
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'brand',
                                        id: 'brand-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                    <option value={'all'}>All</option>
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
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                {/* <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Model 
                                </InputLabel> */}
                                <TextField id="standard-basic" label="Model" variant="standard" onChange={(e) => setModel(e.target.value)} />
                            </FormControl>
                        </TextFieldBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Year Min
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'year',
                                        id: 'year-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setYearMin(e.target.value)}
                                >
                                    <option value={'all'}>None</option>
                                    {years.map((item, key) => {
                                        return (
                                            <option key={key} value={item}>
                                                {(yearlen === key + 1) ? '< ' + item : item}
                                            </option>
                                        )
                                    })}
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Year Max
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'year',
                                        id: 'year-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setYearMax(e.target.value)}
                                >
                                    <option value={'all'}>None</option>
                                    {years.map((item, key) => {
                                        return (
                                            <option key={key} value={item}>
                                                {(yearlen === key + 1) ? '< ' + item : item}
                                            </option>
                                        )
                                    })}
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <TextField id="standard-basic" type={'number'} onChange={(e) => setPriceMin(e.target.value)} label="Min Price" variant="standard" />
                            </FormControl>
                        </TextFieldBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <TextField id="standard-basic" type={'number'} onChange={(e) => setPriceMax(e.target.value)} label="Max Price" variant="standard" />
                            </FormControl>
                        </TextFieldBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Type
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'type',
                                        id: 'type-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="All">All</option>
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
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Gear
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'type',
                                        id: 'type-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setGear(e.target.value)}
                                >
                                    <option value="all"> All </option>
                                    <option value="Automatic">Auto</option>
                                    <option value="Manual">Manual</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Fuel
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'type',
                                        id: 'type-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setFuel(e.target.value)}
                                >
                                    <option value="All"> All </option>
                                    <option value="petrol">Petrol</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electric">Electric</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="gas">Gas</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    City
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'city',
                                        id: 'city-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="All"> All </option>
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
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <ButtonBox>
                            <Button size="large" variant="contained" onClick={filterItems}>Apply Filters</Button>
                        </ButtonBox>
                    </section>

                    <section className="cars-list car-l-custom">
                        {/* List Vehicles  */}
                        {vehicleArr.map((item, i) => {

                            let images = JSON.parse(item.images)
                            // console.log(images)

                            return (
                                <Link key={i} href={`/vehicles/${item.id}`} sx={{ color: 'black !important' }}>
                                    <div className="card-car">
                                        {/* Card Auto  */}
                                        <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_IMAGE_HOST + images[0].replace(/\\/g, "/")} alt="imagen auto nissan" />
                                        <div className="info-car" data={process.env.NEXT_PUBLIC_IMAGE_HOST + images[0].replace(/\\/g, "/")}>
                                            {/* Vehicle data */}
                                            <div className="car-brand">
                                                {/* <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="30" /> */}
                                                <h3>{item.brand} {item.model}</h3>
                                            </div>
                                            <div className="car-data">
                                                <p>Year: {item.year}</p>
                                                <p>Kilometros: {item.mileage}</p>
                                                <p>USD {item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </section>
                </section>

                <section className="pages">
                    <PaginatioStack spacing={2}>
                        <Pagination count={10} variant="outlined" onChange={handlePagination} shape="rounded" />
                    </PaginatioStack>
                </section>
            </main>
        </>
    )
}

Vehicles.layout = "AdminLayout";
export default Vehicles