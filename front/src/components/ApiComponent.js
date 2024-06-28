const getCategoria = async () => {
  try {
      const res = await fetch("http://127.0.0.1:8000/senauthenticator/contactoEmergencia/", {
          cache: "no-store",
      });

      if (!res.ok) {
          throw new Error("Fallo la busqueda");
      }

      return res.json();
  } catch (error) {
      console.log("Error al cargar los datos". error);
  }
}

export default async function ApiComponent() {

  const data = await ApiComponent();
  console.log(data);

  return (
      <div>
          <h1>Api Component</h1>
          <p>{data}</p>
      </div>
    );
};