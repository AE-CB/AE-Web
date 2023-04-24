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
import { IconButton, TextField } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Price from '../components/Price';
import { setCookie, hasCookie, getCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoupeIcon from '@mui/icons-material/Loupe';

function numberWithCommas(x) {
    if(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        return 0;
    }
}

const NativeSelectBox = styled(Box)(({ theme }) => ({
    '.MuiInputBase-root': {
        marginBottom: '0 !important'
    },
    '.MuiFormControl-root': {
        marginBottom: '0 !important',
        fontSize: '16px'
    },
    '.MuiNativeSelect-select': {
        fontSize: 16
    }
}));

const ButtonBox = styled(Box)(({ theme }) => ({
    '.MuiButtonBase-root': {
        fontSize: 12,
        backgroundColor: '#0D367F',
        width: '100%',
    }
}));

const ButtonBox2 = styled(Box)(({ theme }) => ({
    '.MuiButtonBase-root': {
        fontSize: 12,
        backgroundColor: '#0097D3',
        width: '100%',
    }
}));

const PaginatioStack = styled(Stack)(({ theme }) => ({
    '.MuiPaginationItem-root': {
        fontSize: '12px !important'
    }
}));

const CustomAdmore = styled(IconButton)(({ theme }) => ({
    '.MuiIconButton-root': {
        borderRadius: '12px !important'
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


export async function getServerSideProps() {
    // console.log(process.env.NEXT_PUBLIC_API_HOST + '/approved_vehicles');

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles', {
        method: 'post',
        // headers: new Headers({
        //     'Authorization': 'Bearer ' + process.env.API_KEY,
        // })
    })

    const vehicles = await res.json()
    // console.log(vehicles)

    return {
        props: {
            vehicles,
        },
    }
}

var brands = [
    "Acura", "Alfa-Romeo", "Aprilia", "Ashok-Leyland", "Aston", "Atco", "Audi", "Austin", "Bajaj", "Bentley", "BMW", "Cadillac", "Cal", "CAT", "Ceygra", "Changan", "Chery",
    "Chevrolet", "Chrysler", "Citroen", "Corvette", "Daewoo", "Daido", "Daihatsu", "Datsun", "Demak", "Dfac", "DFSK", "Ducati", "Eicher", "FAW", "Ferrari", "Fiat", "Force", "Ford", "Foton", "Hero", "Hero-Honda", "Higer", "Hillman", "HINO", "Hitachi", "Honda", "Hummer", "Hyundai", "IHI", "Isuzu",
    "Iveco", "JAC", "Jaguar", "JCB", "Jeep", "JiaLing", "JMC", "John-Deere", "Jonway", "KAPLA", "Kawasaki", "Kia",
    "Kinetic", "KMC", "Kobelco", "Komatsu", "KTM", "Kubota", "Lamborghini", "Land-Rover", "Lexus", "Loncin", "Longjia", "Lotus", "Lti", "Mahindra", "Maserati", "Massey-Ferguson", "Mazda", "Mercedes-Benz", "Metrocab", "MG", "Mg-Rover", "Micro", "Mini", "Minnelli",
    "Mitsubishi", "Morgan", "Morris", "New-Holland", "Nissan", "Opel", "Other", "Perodua", "Peugeot",
    "Piaggio", "Porsche", "Powertrac", "Proton", "Range-Rover", "Ranomoto", "Renault", "Reva", "Rolls-Royce", "Saab", "Sakai", "Seat", "Singer", "Skoda", "Smart", "Sonalika", "Subaru", "Suzuki", "Swaraj", "Syuk",
    "TAFE", "Tata", "Tesla", "Toyota", "Triumph", "TVS", "Vauxhall", "Vespa", "Volkswagen", "Volvo", "Wave", "Willys", "Yamaha", "Yanmar", "Yuejin", "Zongshen", "Zotye"
]

const Vehicles = ({ vehicles }) => {

    // const { data: session, status } = useSession()
    // console.log(session);
    // if (!hasCookie('accessToken') && session && session.accessToken) {
    //     setCookie('accessToken', session.accessToken[0]);
    // }

    const token = getCookie('accessToken');
    // console.log(getCookie('accessToken'))


    // console.log(vehicles)

    const [filters, setFilters] = useState({});
    const [vehicleArr, setVehicleArr] = useState(vehicles.data);
    const filtersRef = useRef(null);
    const searchRef = useRef(null);
    const [showMore, setShowMore] = useState(false);
    const [tempModel, setTempModel] = useState('');

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
    const [searchtext, setSearchtext] = useState("");

    const [pagecount, setPagecount] = useState(Math.ceil(vehicles.total / vehicles.per_page));
    const [page, setPage] = useState(1);

    const [sortfilter, setSortfilter] = useState('date');
    const [totalItems, setTotalItems] = useState(vehicles.total);


    const handleFilters = (type) => (event) => {
        let tempArr = filters;
        tempArr[type] = event.target.value;
    };

    const clearFilters = async () => {
        setBrand('all')
        setCondition("all");
        setModel("");
        setYearMax("all");
        setYearMin("all");
        setPriceMax("");
        setPriceMin("");
        setCategory("all");
        setGear("all");
        setFuel("all");
        setCity("all");

        document.getElementById("brand_input").value = "";

        let formData = new FormData();
        formData.append('brand', 'all');
        formData.append('condition', 'all');
        formData.append('model', "");
        formData.append('yearMax', 'all');
        formData.append('yearMin', 'all');
        formData.append('priceMax', "");
        formData.append('priceMin', "");
        formData.append('category', 'all');
        formData.append('gear', 'all');
        formData.append('fuel', 'all');
        formData.append('city', 'all');
        formData.append('sortfilter', sortfilter);
        formData.append('search', searchtext);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles?page=1', {
            method: 'POST',
            body: formData,
        })


        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered.data)
        setTotalItems(vehicleFiltered.total)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setPagecount(Math.ceil(vehicleFiltered.total / vehicleFiltered.per_page))
        setPage(1)
    }

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
        formData.append('sortfilter', sortfilter);
        formData.append('search', searchtext);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles?page=1', {
            method: 'POST',
            body: formData,
        })


        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered.data)
        setTotalItems(vehicleFiltered.total)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setPagecount(Math.ceil(vehicleFiltered.total / vehicleFiltered.per_page))
        setPage(1)
        // console.log(vehicles)
    }

    const setSort = async (e) => {
        await setSortfilter(e.target.value)


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
        formData.append('search', searchtext);


        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles?page=1', {
            method: 'POST',
            body: formData,
        })

        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered.data)
        setTotalItems(vehicleFiltered.total)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setPage(1)
    }



    const changeBrand = (e) => {
        let modeltmp = e.target.value
        let hasBrand = false
        // setModel(modeltmp)
        const wordarr = modeltmp.split(" ");

        const lowercased = wordarr.map(function (item) {
            return item.toLowerCase();
        });

        brands.forEach(item => {
            if (lowercased[0] == item.toLowerCase()) {
                setBrand(item)
                hasBrand = true
            }
            // if (lowercased.includes(item.toLowerCase())) {
            //     setBrand(item)
            // }
        });

        if (wordarr.length > 1) {
            if (hasBrand) {
                setModel(modeltmp.replace(wordarr[0] + ' ', ''))
            }
        } else {
            if (hasBrand) {
                setModel('')
            } else {
                setModel(e.target.value)
            }

        }

    }

    const handleShowMore = () => {
        setShowMore(true)
    }

    const handlePagination = async (event, value) => {
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
        formData.append('sortfilter', sortfilter);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles?page=' + value, {
            method: 'POST',
            body: formData,
        })

        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered.data)
        setTotalItems(vehicleFiltered.total)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setPage(value)
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearchtext(searchRef.current.value)

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
        formData.append('sortfilter', sortfilter);
        formData.append('search', searchRef.current.value);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/filtered_vehicles?page=1', {
            method: 'POST',
            body: formData,
        })


        const vehicleFiltered = await res.json()
        setVehicleArr(vehicleFiltered.data)
        setTotalItems(vehicleFiltered.total)
        filtersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setPagecount(Math.ceil(vehicleFiltered.total / vehicleFiltered.per_page))
        setPage(1)
    }

    return (
        <>
            {/* form 1 */}

            <form className="search-form">
                {/* Barra Busqueda  */}
                <input ref={searchRef} className="search-bar" type="search" placeholder="What are you looking for?" />
                <button className="search-btn" onClick={handleSearch}><Image width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/magnifying-glass.png"} alt="icono busqueda" /></button>
            </form>



            <main className="main-comprar">
                <section className="amount-sort-section">
                    {/*  Cantidad de vehiculos y ordenamiento  */}
                    <p className="total-vehicles">{totalItems} vehicles have been found</p>
                    <div className="sort-vehicles">
                        {/*  Ordenamiento  */}
                        <Image width={25} height={25} className='sortimg' src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/orderasc.png"} alt="icono ordenamiento" />
                        <p>Sort by:</p>
                        <select name="ordenamiento" id="" onChange={setSort}>
                            <option value="date">Date Addded Latest First</option>
                            <option value="date_old">Date Addded Oldest First</option>
                            <option value="priceasc">Lowest price</option>
                            <option value="pricedec">highest price</option>
                        </select>
                    </div>
                </section>

                <section className="filter-cars">

                    {/* Filtrar y Vehiculos  */}
                    <section className="filters custom_filters" ref={filtersRef}>
                        {/* Filtrar  */}
                        <div className="filter-title">
                            <Image width={25} height={25} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST + "/assets/img/icons/simbolo-de-herramienta-llena-de-filtro.png"} alt="icono filtrar" />
                            <p>Filters:</p>
                            <a href="#">Filters</a>
                        </div>

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
                                    value={brand}
                                >
                                    <option value={'all'}>All</option>
                                    {brands.map((item, key) => {
                                        return (
                                            <option key={key} value={item}>
                                                {item}
                                            </option>
                                        )
                                    })}
                                </NativeSelect>
                            </FormControl>
                        </NativeSelectBox>
                        <TextFieldBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                {/* <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Model 
                                </InputLabel> */}
                                <TextField id="brand_input" label="Model" variant="standard" onChange={changeBrand} />
                            </FormControl>
                        </TextFieldBox>
                        <NativeSelectBox sx={{ minWidth: 120, marginBottom: 0 }}>
                            <FormControl fullWidth sx={{ marginBottom: 0 }}>
                                <InputLabel sx={{ fontSize: 16 }} variant="standard" htmlFor="uncontrolled-native">
                                    Manufactured Year Min
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
                                    Manufactured Year Max
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

                        {showMore && <span>
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
                                    </NativeSelect>
                                </FormControl>
                            </NativeSelectBox>

                        </span>}
                        {!showMore && <CustomAdmore onClick={handleShowMore} sx={{ borderRadius: '12px', fontWeight: 'bold', width: '100%', marginBottom: '5px' }}>
                            <LoupeIcon sx={{ fontWeight: 'bold', marginRight: '5px' }} /> More Filters
                        </CustomAdmore>}
                        <ButtonBox sx={{ marginBottom: '5px !important' }}>
                            <Button size="large" variant="contained" onClick={filterItems}>Apply Filters</Button>
                        </ButtonBox>
                        <ButtonBox2>
                            <Button size="large" variant="contained" onClick={clearFilters}>Clear Filters</Button>
                        </ButtonBox2>
                    </section>

                    <section className="cars-list car-l-custom vehiclelist">
                        {/* List Vehicles  */}

                        {!vehicleArr?.length > 0 && <p>No items matching your criteria</p>}

                        {vehicleArr.map((item, i) => {

                            let images = JSON.parse(item.images)
                            // console.log(images)

                            return (
                                <Link key={i} href={`/vehicles/${item.slug}`} sx={{ color: 'black !important' }}>
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
                                                <p>Manufactured Year: {item.year}</p>
                                                <p>Kilometers: {numberWithCommas(item.mileage)} Km</p>
                                                <p><Price type='Rs.' price={item.price}></Price></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        <section className="pages vehicle_pagination">
                            <PaginatioStack spacing={2}>
                                <Pagination page={page} count={pagecount} variant="outlined" onChange={handlePagination} shape="rounded" />
                            </PaginatioStack>
                        </section>

                    </section>


                </section>


            </main>
        </>
    )
}

Vehicles.layout = "AdminLayout";
export default Vehicles