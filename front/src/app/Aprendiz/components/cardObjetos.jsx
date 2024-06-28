const getData = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character", {
      // conectar a la API Posts
      cache: "no-store", // para que no almacene datos en cache
    });

    if (!res.ok) {
      // confirmar la coneccion a la API
      throw new Error("Fallo la Busqueda de Posts"); // mensaje de error
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar posts: ", error);
  }
};

export default async function Cartas() {
  const data = await getData();
  //console.log(data);
  const datafull = data.results;
  console.log(datafull);
  return (
    <>
      <div>
        <div>
          <div className=" ">
            <div className="">
              <div className=" mx-auto  md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
                <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">
                  Objetos activos
                </h2>

                <div className="flex flex-wrap gap-10  p-5">
                  {datafull?.map((dato) => (
                    <span
                      key={dato.id}
                      className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col sm:w-[45%] lg:w-[30%] text-white"
                    >
                      <div
                        className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <img
                          className="rounded-xl  sm:m-h-64  w-full hover:bg-slate-400  "
                          src={dato.image}
                          alt=""
                        />
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>

                        <a
                          href="#"
                          className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
                        >
                          {/* <TiDelete
                            o
                            className=" text-3xl  hover:text-black text-white"
                          /> */}
                        </a>
                      </div>
                      <div className="font-semibold p-2 space-y-2">
                        <p>Laptop DELL 2024 </p>
                        <div className="text-green-400">Color:<p className="text-yellow-500">{dato.name}</p> </div>
                        <div className="text-green-400">Serie:<p className="text-yellow-500">{dato.species}</p> </div>
                        <div className="text-green-400">Color:<p className="text-yellow-500">{dato.gender}</p> </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex flex-col ">
  <div className="flex container mx-auto flex-col">
    <div className="flex mt-[20vh] flex-col md:ml-[9vw] md:mt-[17vh] md:w-[70%] ">
      <h2 className="md:ml-[20vw] md:mb-[5vh]  text-center text-green-700 text-2xl">
        Objetos activos
      </h2>
      <div className="flex gap-10  p-5">
        <span
          onClick={openModal}
          className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col w-full sm:w-[45%] lg:w-[30%] text-white"
        >
          <div
            className=" flex relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              className="rounded-xl  sm:m-h-64  w-full "
              src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
              alt=""
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>

            <a
              href="#"
              className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"
            >
              <TiDelete o className=" text-3xl  hover:text-black text-white" />
            </a>
          </div>
          <div className="font-semibold p-2 space-y-2">
            <p>Laptop DELL 2024 </p>
            <p className="text-green-400">Color: </p> gris y negro
            <p className="text-green-400">Serial:</p> G8rV3456fazl
            <p className="text-green-400">Fecha:</p> 7/03/2023
          </div>
        </span>
      </div>
    </div>
  </div>
</div>; */
}
