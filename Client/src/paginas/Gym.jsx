export default Gym;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Features from "../componentes/Features";
import fotorutinaserv from "../img/fotorutinaserv.jpg";
import fotoejerciciosexpli from "../img/fotoejerciciosexpli.jpg";
import fototiendaserv from "../img/fototiendaserv.jpg";
import fotodietaserv from "../img/fotodietaserv.jpg";
import fotogym from "../img/contact.jpg";
import foto1 from "../img/foto1.webp";

function Gym() {
  return (
    <div className=" bg-black min-vh-100 bodygym">

      <Navbar linkHome={"#"} />

      <div className="container-fluid  bg-dark bg-gradient bg-opacity-10" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
        <div className="container mb-3 p-3">
          <div className="row d-flex flex-wrap flex-lg-wrap row-cols-lg-1 row-cols-xl-2 row-cols-md-1 mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12  mb-4 border-0 mt-5 text-white justify-content-center tetito card bg-transparent ">
              <div className="card-header mb-2 border-0 fw-semibold  " style={{ fontSize: '450%' }}>
                ControlZ
              </div>
              <div className="card-body textobienvenidagimnasio">
                <blockquote className="blockquote ">
                  <p>¡Bienvenido a ControlZ, tu destino digital para transformar tu cuerpo y recuperar el control de tu salud y bienestar! Sumérgete en un mundo fitness donde cada click te acerca a la mejor versión de ti mismo. Desde rutinas de entrenamiento personalizadas hasta consejos de nutrición, en ControlZ, desafiamos tus límites y te guiamos hacia un estilo de vida activo, saludable y enérgico. Rompe con la rutina y reinicia tu camino hacia la forma física con ControlZ, donde cada movimiento es un paso más hacia la grandeza. ¡Es hora de pulsar el botón de reinicio en tu fitness y descubrir el poder de un nuevo tú en ControlZ!</p>
                  <footer className="blockquote-footer mt-5">El equipo de <cite title="Source Title">ControlZ</cite></footer>
                </blockquote>
              </div>
            </div>
            <img src={foto1} className="col-sm-12 col-md-12 col-lg-9 offset-lg-1 col-xl-6 offset-xl-0  rounded float-end" alt="..." />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container text-center">
          <div className="mb-3">
            <div className=" text-center mb-2 mx-auto d-flex align-items-center justify-content-center">
              <h1 className=" container titulobienvenidagym fw-semibold">Servicios</h1>
            </div>
          </div>
          <div className="container mx-auto d-flex align-items-center justify-content-center ">
            <div className="card-group">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4  ">
                <Features imagen={fotorutinaserv} titulo={"Rutina"} descripcion={"LLeva un registro de tus rutinas personales y tu progreso gracias a la ayuda que ControlZ te brinda en el día a día."
                }
                  link={"rutina"}
                />
                <Features
                  imagen={fotoejerciciosexpli}
                  titulo={"Guia ejercicios"}
                  descripcion={
                    "Disfruta de las explicaciones que te ofrecemos sobre los diferentes ejercicios con videos y fotos explicativos."
                  }
                  link={"#"}
                />
                <Features
                  imagen={fotodietaserv}
                  titulo={"Dieta"}
                  descripcion={
                    "Crea, modifica y sigue tu dieta a través de nuestra calculadora de macronutrientes para poder cumplir tus objetivos."
                  }
                  link={"dieta"}
                />{" "}
                <Features
                  imagen={fototiendaserv}
                  titulo={"Tienda"}
                  descripcion={
                    "Consigue y hazte con algunos de nuestros productos de suplementación de la mano de las mejores marcas."
                  }
                  link={"tienda"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="flecha"
        className="mt-5 container-fluid bg-dark bg-gradient bg-opacity-10  contenidoGym"
      >
        <div className="mt-3 mb-4 container contenedortitulogym ">
          <div className="mb-3">
            <div className=" text-center mb-2 mt-4 mx-auto d-flex align-items-center justify-content-center">
              <h1 className=" container mt-4 titulobienvenidagym fw-semibold">
                Comienza el cambio (usuario)
              </h1>
            </div>
          </div>

          <div className=" mt-4 descgym text-secondary mx-auto d-flex align-items-center justify-content-center">
            <p className="mb-4">
              Aquí, no solo te ayudaremos a fortalecer tu cuerpo, sino que
              también fomentaremos la construcción de una mentalidad fuerte y
              resiliente. Creemos que el camino hacia la salud y la forma física
              es único para cada persona, y estamos comprometidos a ofrecerte un
              apoyo personalizado para que logres tus objetivos de la manera que
              mejor se adapte a ti. En nuestro gimnasio, no solo encontrarás una
              variedad de clases y programas de entrenamiento, sino también un
              ambiente inclusivo y amigable. La diversidad de nuestras
              instalaciones y la comunidad que las llena hacen que este sea un
              lugar especial donde todos son bienvenidos, sin importar su nivel
              de condición física o experiencia previa. ¡Bienvenido a nuestro
              gimnasio, donde el cambio positivo comienza hoy!
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-5 mx-auto d-flex align-items-center justify-content-center">
        <div className="mt-5 contenedorgym text-center ">
          <h1 className="textgym">
            CONSTRUYE<span id="wanana">TU LEGADO</span>
          </h1>
          <h1 className="textgym">
            CREA<span id="wanana">TU FUTURO</span>
          </h1>
          <h1 className="textgym mb-5">
            DISFRUTA<span id="wanana">EL CAMINO</span>
          </h1>
        </div>
      </div>

      <div className="  container-fluid bg-dark bg-gradient bg-opacity-10">
        <div className="container mt-5 mb-5">
          <div className="row mt-5">
            <div className="col-6 mt-3">
              <img
                src={fotogym}
                className="img-fluid rounded-start-pill"
                alt="..."
              />
            </div>
            <div className="col-6 mt-3 mx-auto " >
              <div className="card border-secondary bg-dark text-secondary mb-3  rounded-end-circle " style={{height:'37vh'}}>
                <div className="card-header fs-2 fw-semibold mt-4">Contáctanos</div>
                <div className="card-body ">
                  <p className="card-text mt-4 mb-4">
                    En ControlZ, valoramos la comunicación directa y estamos aquí para responder a todas tus preguntas, escuchar tus comentarios y apoyarte en tu viaje hacia un estilo de vida más saludable. No dudes en ponerte en contacto con nosotros a través de los siguientes canales:
                  </p>
                  <button type="button" className="btn btn-outline-info mt-4">Contactar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
