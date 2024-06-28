// // import ApiComponent from "@/components/ApiComponent";

// export default function pageApiPrueba() {
//     return (
//         <>
//             <h1> Prueba de la api</h1>
//         </>
//     );
// }

// import Link from "next/link";
// import DeleteCategoriesComponent from "./DeleteCategoriesComponent";
import ApiComponent from "@/components/ApiComponent";

const getCategories = async () => {
  try {
    const res = await fetch(
      "http://127.0.0.1:8000/senauthenticator/programa/",
      {
        // conectar a la API Posts
        cache: "no-store", // para que no almacene datos en cache
      }
    );

    if (!res.ok) {
      // confirmar la coneccion a la API
      throw new Error("Fallo la Busqueda de Posts");
      console.log("fallo la api"); // mensaje de error
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar posts: ", error);
  }
};
export default async function GetCategoriesComponent() {
  const datos = await getCategories();
  console.log(datos);

  return (
    <>
      {datos.length > 0 ? (
        datos.map((dato) => (
          <div key={dato.id}>
            <h1>{dato.nombre_programa}</h1>
            <h1>{dato.tipo_formacion_programa}</h1>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </>
  );
}