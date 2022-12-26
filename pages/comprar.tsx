import React, { useState } from 'react'
import Footer from '../components/Footer'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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


    const handleFilters = (type) => (event) => {
        let tempArr = filters;
        tempArr[type] = event.target.value;
    };

    const filterItems = async () => {
        const res = await fetch('http://localhost:8000/apisearchtest', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + 'dsdsd',
            })
        })
        // const vehicles = await res.json()
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
                        <p>Ordenar por:</p>
                        <select name="ordenamiento" id="">
                            <option value="">Más relevante</option>
                            <option value="">Precio más bajo</option>
                            <option value="">Precio más alto</option>
                        </select>
                    </div>
                </section>

                <section className="filter-cars">

                    {/* Filtrar y Vehiculos  */}
                    <section className="filters">
                        {/* Filtrar  */}
                        <div className="filter-title">
                            <img src="../assets/img/icons/simbolo-de-herramienta-llena-de-filtro.png" alt="icono filtrar" width="25" />
                            <p>Filtrar:</p>
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
                                    onChange={handleFilters("condition")}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={'brand_new'}>Brand New</option>
                                    <option value={'used'}>Used</option>
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
                                    onChange={handleFilters("brand")}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Model
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'model',
                                        id: 'model-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={handleFilters("model")}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Year
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
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Price
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'price',
                                        id: 'price-native-drop',
                                        className: 'select-filters'
                                    }}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Kilometres
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'kilometres',
                                        id: 'kilometres-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={handleFilters("kilometres")}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Location
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'all'}
                                    inputProps={{
                                        name: 'location',
                                        id: 'location-native-drop',
                                        className: 'select-filters'
                                    }}
                                    onChange={handleFilters("location")}
                                >
                                    <option value={'all'}>All</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <ButtonBox>
                            <Button size="large" variant="contained" onClick={filterItems}>Apply Filters</Button>
                        </ButtonBox>
                    </section>

                    <section className="cars-list">
                        {/* List Vehicles  */}
                        {vehicles.map((item, i) => {

                            let images = JSON.parse(item.images)
                            console.log(images)

                            return (
                                <>
                                    <a key={i} className="card-car" href="./car.html">
                                        {/* Card Auto  */}
                                        <img src={process.env.NEXT_PUBLIC_IMAGE_HOST+images[0]} alt="imagen auto nissan" />
                                        <div className="info-car">
                                            {/* Vehicle data */}
                                            <div className="car-brand">
                                                <img src="../assets/img/images/comprar-home/nissan-logo.webp" alt="logo nissan" width="30" />
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="car-data">
                                                <p>Año: {item.year}</p>
                                                <p>Kilometros: {item.mileage}</p>
                                                <p>USD 29700{item.price}</p>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            );
                        })}
                    </section>
                </section>

                <section className="pages">
                    {/*  Pages  */}
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">Siguiente</a>
                </section>
            </main>
            <Footer />
        </>
    )
}

comprar.layout = "AdminLayout";
export default comprar