import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderHead, b as renderComponent, e as renderSlot } from '../chunks/astro/server_1QMrkt3O.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer style="background-color: #2c4d87; padding: 40px 20px; color: white; text-align: center;"> <div class="container"> <div class="row"> <div class="col-md-4"> <img src="../../public/images/logo.png" alt="Potencia" style="width: 150px; margin-bottom: 20px;"> </div> <div class="col-md-4"> <h5>Contáctanos</h5> <p>Calle 55 #74-126<br>Barranquilla, Colombia</p> </div> <div class="col-md-4"> <p><i class="fas fa-envelope"></i> info@potencia.com.co</p> <p><i class="fas fa-phone"></i> +57 6052516513</p> </div> </div> </div> </footer> `;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/Footer.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <nav class="navegacion"> <div class="contenedor-logo"> <a class="logo" href=""> <img src="../../public/images/potenciaBlanco.png" alt=""></a></div> <div class="navegacion-principal"> <a href="" class="navegacion-a"> Inicio </a> <a href="" class="navegacion-a"> Sobre Nosotros </a> <a href="#casos-exito" class="navegacion-a"> Casos de Exito </a> <a href="#clientes" class="navegacion-a"> Clientes </a> <a href="" class="navegacion-a"> Servicios </a> <a href="" class="navegacion-a"> Nuestro Equipo </a> <a href="" class="navegacion-a"> Contactanos </a> </div> </nav> <nav class="navbar"> <div class="container-fluid"> <a class="navbar-brand logo logo-mobile" href="#"> <img src="../../public/images/potenciaBlanco.png" alt=""></a> <button class="boton-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"> <span class="">&#x2261;</span> </button> <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> <div class="offcanvas-header"> <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Potencia</h5> <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> </div> <div class="offcanvas-body"> <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Inicio</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Sobre Nosotros</a> </li> <li class="nav-item"> <a class="nav-link menu-link" href="#casos-exito">Casos de Exito</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Clientes</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Servicios
</a> <ul class="dropdown-menu"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li> <hr class="dropdown-divider"> </li> <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </li> <li class="nav-item"> <a class="nav-link" href="#">Nuestro Equipo</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Contactanos</a> </li> </ul> </div> </div> </div> </nav> <section class="hero"> <div class="contenedor-hero"> <img src="../../public/images/Las ciudades y su crecimiento son una POTENCIA infinita..png" alt="" class=""> </div> </section> </header>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/Navbar.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>POTENCIA</title><!-- Google Fonts: Open Sans --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="../../public/css/styles.css"><link rel="stylesheet" href="../../public/css/header.css"><link rel="stylesheet" href="../../public/css/clientes.css"><link rel="stylesheet" href="../../public/css/casos_exitos.css"><link rel="stylesheet" href="../../public/css/conectate.css"><link rel="stylesheet" href="../../public/css/mainSection.css"><link rel="stylesheet" href="../../public/css/cardsteam.css">${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/layouts/BaseLayout.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/HeroSection.astro", void 0);

const $$Clientes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="clientes" id="clientes"> <h3>NUESTROS CLIENTES</h3> <div class="row row-cols-1 row-cols-md-2 g-10 clientes-grid"> <div class="col"> <div class="card card-clientes h-100 hover-grow"> <img src="../../public/images_clientes/bloque29.png" class="card-img-top" alt="..."> <div class="card-body flex-grow-1"> <h4>Cordoba</h4> <h3 class="card-title">Gobernacion de Cordoba</h3> <p class="card-text">Entidad administrativa que gobierna el departamento de Córdoba en Colombia, encargada de promover el desarrollo económico y social de la región</p> </div> </div> </div> <div class="col"> <div class="card card-clientes h-100 hover-grow"> <img src="../../public/images_clientes/channels4_profile.jpg" class="card-img-top" alt="..."> <div class="card-body flex-grow-1"> <h4>Monteria</h4> <h3 class="card-title">Alcaldia de Monteria</h3> <p class="card-text">Es el órgano ejecutivo del gobierno municipal de Montería, capital del departamento de Córdoba, responsable de la administración local y la prestación de servicios públicos.</p> </div> </div> </div> <div class="col"> <div class="card card-clientes h-100 hover-grow card-clientes-comodin"> <img src="../../public/images_clientes/logoBid.png" class="card-img-top" alt="..."> <div class="card-body flex-grow-1"> <h4>Bogota</h4> <h3 class="card-title">BID Colombia (Banco Interamericano de Desarrollo)</h3> <p class="card-text">Organismo multilateral que ofrece asesorías y financiamiento para proyectos de desarrollo en Colombia, colaborando con entidades gubernamentales y privadas para fomentar el crecimiento sostenible del país.</p> </div> </div> </div> <div class="col"> <div class="card card-clientes h-100 hover-grow card-clientes-comodin"> <img src="../../public/images_clientes/unnamed.png" class="card-img-top" alt="..."> <div class="card-body flex-grow-1"> <h4>Santa Marta</h4> <h3 class="card-title">Fundacion Tras la Perla</h3> <p class="card-text">Organización sin ánimo de lucro que trabaja en proyectos de desarrollo social y comunitario en Santa Marta, Colombia.</p> </div> </div> </div> </div> <div class="d-grid col-2 mx-auto boton-clientes"> <a href="" class="btn btn-primary boton-ver-mas" role="button">Ver Más</a> </div> </section>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/clientes.astro", void 0);

const $$CasosExito = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="casos-exito" id="casos-exito"> <h3> CASOS DE EXITO </h3> <div class="card-group contenedor-casos-exito"> <div class="card card-casos-exito"> <img src="../../public/images_exitos/malecon_del_rio_noche.jpg" class="card-img-top" alt="..."> <div class="card-body card-body-exitos"> <h4>Urbanismo y Espacio Publico</h4> <h3 class="card-title">Gran Malecon</h3> <p class="">Proyecto de revitalización urbana a lo largo del río Magdalena, incluye un paseo peatonal de 5.5 km, áreas recreativas, culturales y gastronómicas. Ha transformado la relación de la ciudad con el río, convirtiéndose en un ícono turístico y de esparcimiento para los barranquilleros y visitantes.</p> </div> </div> <div class="card card-casos-exito"> <img src="../../public/images_exitos/ecoparque-mallorquin.jpg" class="card-img-top" alt="..."> <div class="card-body card-body-exitos"> <h4>Urbanismo y Espacio Publico</h4> <h3 class="card-title">Ecoparque Cienaga de Mallorquin</h3> <p class="">Proyecto de revitalización urbana a lo largo del río Magdalena, incluye un paseo peatonal de 5.5 km, áreas recreativas, culturales y gastronómicas. Ha transformado la relación de la ciudad con el río, convirtiéndose en un ícono turístico y de esparcimiento para los barranquilleros y visitantes.</p> </div> </div> <div class="card card-casos-exito"> <img src="../../public/images_exitos/TGLS-PUERTADEORO-001.jpg" class="card-img-top" alt="..."> <div class="card-body card-body-exitos"> <h4>Oficina de Estructuracion de Proyectos</h4> <h3 class="card-title">Puerta de Oro, Empresa de Desarrollo Caribe</h3> <p class="">Entidad creada para impulsar el desarrollo económico y social de Barranquilla y la región Caribe. Gestiona grandes proyectos de infraestructura y eventos de talla internacional. Su objetivo es posicionar a Barranquilla como un centro de negocios y turismo en el Caribe.</p> </div> </div> </div> <div class="d-grid col-2 mx-auto boton-exitos"> <a href="" class="btn btn-primary boton-ver-mas" role="button">Nuestros Exitos</a> </div> </section>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/CasosExito.astro", void 0);

const $$Conectate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="conectate"> <div class="contenedor-conectate"> <div class="hstack gap-3"> <div class="p-2"> <h2>CONECTATE CON POTENCIA </h2> </div> <div class="p-2 ms-auto"><button class="boton-conectate"> CONTACTANOS </button> </div> </div> </div> </section>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/conectate.astro", void 0);

const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container my-5 mainsection"> <!-- Texto Principal Mejorado en una Card --> <div class="row section-padding"> <div class="col-12"> <div class="card hover-shadow" style="border: none;"> <div class="card-body"> <p class="text-block">
Potencia Exponencial Consultores es una firma de consultoría estratégica enfocada en el desarrollo y transformación de ciudades, territorios y fundaciones. Nuestro equipo de expertos ofrece servicios integrales, desde la estructuración de equipos de gerencia territorial hasta el diseño de estrategias para el desarrollo de infraestructura, con un enfoque en proyectos de alto impacto.
</p> <p class="text-block">
Nos caracterizamos por nuestra capacidad para implementar metodologías eficientes en la planificación y gestión de proyectos, optimizando recursos y alcanzando objetivos concretos. Acompañamos a nuestros clientes en cada fase del proyecto, asegurando que sus necesidades y expectativas estén alineadas para lograr un impacto positivo y duradero en los territorios donde operamos.
</p> </div> </div> </div> </div> <!-- Números estilizados con línea divisoria --> <div class="row mb-5 position-relative text-center"> <div class="col-lg-6"> <span class="number">+15</span> <p class="label">años</p> <p class="description">de experiencia transformando territorios</p> </div> <div class="divider d-none d-lg-block"></div> <!-- Línea vertical solo visible en pantallas grandes --> <div class="col-lg-6"> <span class="number">+4</span> <p class="label">Millones</p> <p class="description">de personas beneficiadas por el trabajo con los territorios</p> </div> </div> <br> <!-- Misión y Visión con mismo tamaño y espaciado en responsive --> <div class="row equal-height-cards"> <div class="col-md-6 card-margin"> <div class="card hover-shadow"> <div class="card-body"> <h4 class="card-title text-center">MISIÓN</h4> <p class="card-text">
Proporcionar servicios de consultoría integral a gobiernos locales, regionales y organizaciones, aprovechando nuestra experiencia en los sectores público y privado. Nos dedicamos a diseñar e implementar estrategias que fomenten el desarrollo, impulsen la cooperación internacional y optimicen la gestión pública.
</p> </div> </div> </div> <div class="col-md-6 card-margin"> <div class="card hover-shadow"> <div class="card-body"> <h4 class="card-title text-center">VISIÓN</h4> <p class="card-text">
Ser catalizadores del progreso, impulsando a ciudades y territorios a desbloquear su máximo potencial y alcanzar un crecimiento transformador y sostenible. Nuestra aspiración es fomentar el desarrollo integral de cada comunidad, capitalizando sus recursos y oportunidades para liderar el cambio hacia el futuro.
</p> </div> </div> </div> </div> <!-- Nueva sección: Metodología Potencia --> <div class="row methodology-section align-items-center"> <div class="col-md-6 d-flex justify-content-center"> <img src="../../public/images/metodologiaPotencia-removebg-preview.png" alt="Metodología Potencia" class="methodology-image"> </div> <div class="col-md-6 text-center"> <h2 class="methodology-title text-uppercase fw-bold">Enfoque Integral de Gerencia</h2> <p class="methodology-text">
La metodología se enfoca en una gestión holística de proyectos para entidades subnacionales, estructurada en torno a seis elementos clave: ingresos, proyectos, financiación, ejecución, operación y mantenimiento, y comunicación. El cumplimiento efectivo de estos elementos genera confianza, que se posiciona como el eje central del modelo.
</p> <p class="methodology-text">
Además, la metodología promueve una visión estratégica a largo plazo alineada con un "Plan 20 años", favoreciendo una planificación continua y adaptable a diferentes organizaciones y territorios. Su diseño cíclico sugiere un proceso de retroalimentación constante, centrado en asegurar el cumplimiento de los proyectos y objetivos planteados.
</p> </div> </div> </div>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/MainSection.astro", void 0);

const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div style="background-color: #f8f8f8; width: 100%; padding: 50px 0;"> <div class="container my-5 team-section"> <h2 class="text-center mb-5">NUESTRA GENTE</h2> <div class="row justify-content-center"> <!-- Card 1 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/CarlosAcosta.jpg" alt="Carlos Acosta" class=" team-img"> <h5 class="team-name">Carlos Acosta Juliao</h5> <p class="team-title text-center">Director Ejecutivo</p> <p class="team-description">
Ingeniero Electrónico graduado de la Universidad de Columbia, New York, con una destacada trayectoria en gestión pública y desarrollo urbano. Su experiencia abarca desde la administración municipal hasta la dirección de proyectos de gran envergadura...
</p> </div> </div> </div> <!-- Card 2 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/JorgeGarcia.jpg" alt="Jorge García" class="team-img"> <h5 class="team-name">Jorge García Ibagón</h5> <p class="team-title text-center">Director Ejecutivo</p> <p class="team-description">
Ingeniero Industrial con especialización en Marketing Estratégico y MBA, con amplia experiencia en gestión comercial y marketing en diversas industrias, desde el sector automotriz hasta los medios de comunicación...
</p> </div> </div> </div> <!-- Card 3 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/RicardoVives.jpg" alt="Ricardo Vives" class="team-img"> <h5 class="team-name">Ricardo Vives Guerra</h5> <p class="team-title text-center">Socio</p> <p class="team-description">
Arquitecto con maestrías en Diseño y Planificación de Sistemas Urbanos. Destacado profesional en desarrollo inmobiliario y gestión de proyectos urbanos de gran escala...
</p> </div> </div> </div> <!-- Card 4 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/RicardoPlata.jpg" alt="Ricardo Plata" class="team-img"> <h5 class="team-name">Ricardo Plata Sarabia</h5> <p class="team-title text-center">Socio</p> <p class="team-description">
Ingeniero Industrial con maestría en Desarrollo Económico Urbano. Experto en desarrollo económico local y gestión de eventos y espacios de gran envergadura...
</p> </div> </div> </div> <!-- Card 5 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/JuanAlvarado.jpg" alt="Juan Alvarado" class="team-img"> <h5 class="team-name">Juan Alvarado Nivia</h5> <p class="team-title text-cente">Socio</p> <p class="team-description">
Economista con maestría y amplia experiencia en el sector público. Reconocido por su innovación en la gestión pública y su contribución al desarrollo económico...
</p> </div> </div> </div> <!-- Card 6 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="../../public/Fotos Potencia/FOTOS SOCIOS EDITADAS/AlbertoBernal.jpg" alt="Alberto Bernal" class="team-img"> <h5 class="team-name">Alberto Bernal Parada</h5> <p class="team-title text-center">Socio</p> <p class="team-description">
Administrador de Empresas con especialización en Finanzas. Experto en gestión financiera y administrativa en diversos sectores, desde la minería hasta la construcción...
</p> </div> </div> </div> <!-- Card 7 --> <div class="col-lg-4 col-md-6 mb-4"> <div class="card team-card hover-effect"> <div class="card-body text-center"> <img src="https://via.placeholder.com/150" alt="Jairo de Castro" class="team-img"> <h5 class="team-name">Jairo de Castro Peña</h5> <p class="team-title text-center">Socio</p> <p class="team-description">
Administrador de Empresas y especialista en Finanzas. Acumula más de 20 años en cargos gerenciales. Ha sido Gerente General de Triple A, Surtigas y Gases del Pacífico...
</p> </div> </div> </div> <!-- Botón Ver Más --> <div class="col-12 text-center mt-4"> <button class="btn ver-mas">Ver Más</button> </div> </div> </div> </div>`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/components/TeamSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "MainSection", $$MainSection, {})} ${renderComponent($$result2, "TeamSection", $$TeamSection, {})} ${renderComponent($$result2, "CasosExito", $$CasosExito, {})} ${renderComponent($$result2, "Clientes", $$Clientes, {})} ${renderComponent($$result2, "Conectate", $$Conectate, {})} ` })}`;
}, "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/pages/index.astro", void 0);

const $$file = "C:/Users/Juan Felipe/Documents/personal/front/potencia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
