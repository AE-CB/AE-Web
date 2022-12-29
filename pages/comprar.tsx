import React, { useState } from 'react'
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

const comprar = ({ vehicles }) => {

    const [filters, setFilters] = useState({});
    const [vehicleArr, setVehicleArr] = useState(vehicles);

    const [brand, setBrand] = useState("all");
    const [condition, setCondition] = useState("all");


    const handleFilters = (type) => (event) => {
        let tempArr = filters;
        tempArr[type] = event.target.value;
    };

    const filterItems = async () => {
        let formData = new FormData();
        formData.append('brand', brand);
        formData.append('condition', condition);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles', {
            method: 'POST',
            body: formData,
        })


        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered)
        // console.log(vehicles)
    }

    return (
        <>
            {/* form 1 */}

            <form className="search-form">
                {/* Barra Busqueda  */}
                <input className="search-bar" type="search" placeholder="¿Qué auto estas buscando?" />
                <button className="search-btn"><img src="../assets/img/icons/magnifying-glass.png" alt="icono busqueda" width="25" /></button>
            </form>

            <main className="main-comprar">
                <section className="amount-sort-section">
                    {/*  Cantidad de vehiculos y ordenamiento  */}
                    {/* <p className="total-vehicles">Se han encontrado 6789 vehículos</p> */}
                    <p className="total-vehicles">{vehicles.length} vehicles have been found</p>
                    <div className="sort-vehicles">
                        {/*  Ordenamiento  */}
                        <img src="../assets/img/icons/ordenar-por-opcion-de-boton-de-interfaz-de-atributos.png" alt="icono ordenamiento" width="25" />
                        <p>Sort by:</p>
                        <select name="ordenamiento" id="">
                            <option value="">Latest</option>
                            <option value="">Lowest price</option>
                            <option value="">highest price</option>
                        </select>
                    </div>
                </section>

                <section className="filter-cars">

                    {/* Filtrar y Vehiculos  */}
                    <section className="filters">
                        {/* Filtrar  */}
                        <div className="filter-title">
                            <img src="../assets/img/icons/simbolo-de-herramienta-llena-de-filtro.png" alt="icono filtrar" width="25" />
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
                                    <option value={'Nissan'}>Nissan</option>
                                    <option value={'Suzuki'}>Suzuki</option>
                                    <option value={'Volkswagen'}>Volkswagen</option>
                                    <option value={'Fiat'}>Fiat</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                {/* <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Model
                                </InputLabel> */}
                                <TextField id="standard-basic" label="Model" variant="standard" />
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
                                    onChange={handleFilters("year")}
                                >
                                    <option value={'all'}>None</option>
                                    {years.map((item, key) => {
                                        return (
                                            <>
                                                <option key={key} value={item}>
                                                    {(yearlen === key + 1) ? '< ' + item : item}
                                                </option>
                                            </>
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
                                    onChange={handleFilters("year")}
                                >
                                    <option value={'all'}>None</option>
                                    {years.map((item, key) => {
                                        return (
                                            <>
                                                <option key={key} value={item}>
                                                    {(yearlen === key + 1) ? '< ' + item : item}
                                                </option>
                                            </>
                                        )
                                    })}
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <TextField id="standard-basic" type={'number'} label="Min Price" variant="standard" />
                            </FormControl>
                        </TextFieldBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <TextField id="standard-basic" type={'number'} label="Max Price" variant="standard" />
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
                                    onChange={(e) => setBrand(e.target.value)}
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
                                    onChange={(e) => setBrand(e.target.value)}
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
                                    onChange={(e) => setBrand(e.target.value)}
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
                                        name: 'type',
                                        id: 'type-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                    <option value="All"> All </option>
                                    <option value="colarado">Colarado</option>
                                    <option value="texas">Texas</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <ButtonBox>
                            <Button size="large" variant="contained" onClick={filterItems}>Apply Filters</Button>
                        </ButtonBox>
                    </section>

                    <section className="cars-list">
                        {/* List Vehicles  */}
                        {vehicleArr.map((item, i) => {

                            let images = JSON.parse(item.images)
                            console.log(images)

                            return (
                                <>
                                    <a key={i} className="card-car" href="./car.html">
                                        {/* Card Auto  */}
                                        <img src={process.env.NEXT_PUBLIC_IMAGE_HOST + images[0]} alt="imagen auto nissan" />
                                        <div className="info-car">
                                            {/* Vehicle data */}
                                            <div className="car-brand">
                                                <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="30" />
                                                <h3>{item.model}</h3>
                                            </div>
                                            <div className="car-data">
                                                <p>Año: {item.year}</p>
                                                <p>Kilometros: {item.mileage}</p>
                                                <p>USD {item.price}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            );
                        })}
                    </section>
                </section>

                <section className="pages">
                    <PaginatioStack spacing={2}>
                        <Pagination count={10} variant="outlined" onChange={handlePagination} shape="rounded" />
                    </PaginatioStack>
                    {/*  Pages  */}
                    {/* <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">Siguiente</a> */}
                </section>
            </main>
            <Footer />
        </>
    )
}

comprar.layout = "AdminLayout";
export default comprar