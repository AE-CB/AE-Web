import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function vender() {
  return (
  <>
  
  <Header/>
   <section className="vender-banner">
     <div className="gradient-div"></div>
     <h1>Vende tu Auto de forma <br/><b>Rápida y Segura</b></h1>
   </section>
    <main className="main-vender">
        <form className="form-vender">
            <section className="brand-section"> {/* Marca, Modelo y Ano */}
                <div>
                    <h2>1. Indica Marca, Modelo y Año del Vehículo</h2>
                    <div className="sign-up-field">
                        <h3>Marca</h3>
                        <input type="text" name="brand" placeholder="¿Cuál es la marca de tu vehículo?" autoComplete="off" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3>Modelo</h3>
                        <input type="text" name="model" placeholder="¿Cuál es el modelo de tu vehículo?" autoComplete="off" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3>Año</h3>
                        <input type="number" name="year" placeholder="¿Cuál es el año de tu vehículo?" min="1960" max="2022" required/>
                    </div>
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-1.webp" alt="imagen auto"/>
            </section>
            <section className="cat-section"> {/* Categoria, Color y Descripcion */}
                <div>
                    <h2>2. Indica Categoría, Color  y de una Descripción del Vehículo</h2>
                    <div className="sign-up-field">
                        <h3>Categoría</h3>
                        <select name="cat" id="">
                            <option value="" selected disabled>Seleccione una Categoría</option>
                            <option value="">Autos y Camionetas</option>
                            <option value="">Motos</option>
                            <option value="">Camiones</option>
                        </select>
                    </div>
                    <div className="sign-up-field">
                        <h3>Color</h3>
                        <input type="text" name="color" placeholder="¿De qué color es tu vehículo?" autoComplete="off" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3>Descripción</h3>
                        <textarea name="description" id="" cols={30} rows={10} placeholder="Escriba una descripción de su vehículo" minLength={25} maxLength={2500} required></textarea>
                    </div>
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-2.webp" alt="imagen auto"/>
            </section>
            <section className="tec-section"> {/* Datos Tecnicos */}
                <div>
                    <h2>3. Datos Técnicos del Vehículo</h2>
                    <div className="sign-up-field">
                        <h3>Kilometros</h3>
                        <input type="number" name="kilometers" placeholder="¿Cuántos kilometros tiene tu vehículo?" min="0" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3>Motor</h3>
                        <input type="text" name="motor" placeholder="¿De qué tamaño es el motor de tu vehículo?" autoComplete="off" required/>
                    </div>
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-3.webp" alt="imagen auto"/>
            </section>
            <section className="pictures-section"> {/* Fotos */}
                <div>
                    <h2>4. Sube Fotos de Calidad del Vehículo</h2>
                    <p>(Minimo 4 fotos, una por lado del vehículo)</p>
                    <div className="upload-image-box">
                        <input type="file" name="images" id="upload-image" accept="image/*" multiple/>
                        <label htmlFor="upload-image">
                            <img src="../assets/img/icons/camara-fotografica.png" alt="Imagen de Camara"/>
                            <p>Agregar Fotos</p>
                        </label>
                    </div>
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-4.webp" alt="imagen auto"/>
            </section>
            <section className="location-section"> {/* Ubicacion */}
                <div>
                    <h2>5. ¿Dónde se Encuentra el Vehículo?</h2>
                    <div className="sign-up-field">
                        <h3>Departamento</h3>
                        <select name="departamento" id="">
                            <option value="default" selected disabled>¿Dónde se encuentra el vehículo?</option>
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
                        <h3>Localidad</h3>
                        <select name="localidad" id="">
                            <option value="" selected disabled>¿En qué localidad esta el vehículo?</option>
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
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-6.webp" alt="imagen auto"/>
            </section>
            <section className="end-section"> {/* Finalizar Publicacion */}
                <div>
                    <h2>6. Finalizar Publicación</h2>
                    <div className="sign-up-field">
                        <h3>Nombre del Propietario</h3>
                        <input type="text" name="owner" placeholder="¿A nombre de quién está el vehículo?" autoComplete="off" required/>
                    </div>
                    <div className="sign-up-field">
                        <h3>Precio</h3>
                        <div className="field-price">
                            <h4>USD</h4>
                            <input type="number" name="price" min="1500" max="1000000" placeholder="¿Por cuánto quieres vender tu vehículo?" required/>
                        </div>
                    </div>
                    <img className="logo-ch-vender" src="../assets/img/logo/carhouse-logo.png" alt="logo CarHouse"/>
                </div>
                <img className="aside-img" src="../assets/img/images/vender/car-aside-5.webp" alt="imagen auto"/>
            </section>
            <input className="btn-publish" type="submit" value="Finalizar Publicación"/>
        </form>
    </main>

    <Footer/>
  
  </>
  )
}

export default vender