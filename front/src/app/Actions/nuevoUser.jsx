"use server";
const registroUser = async (formData) => {
    
    const nombres = formData.get("nombres");
    const apellidos = formData.get("apellidos");
    const genero = formData.get("genero");
    const correoSena = formData.get("correoSena");
    const correo = formData.get("correo");
    const tipoDoc = formData.get("tipoDoc");
    const numDoc = formData.get("numDoc");
    const contraseña = formData.get("contraseña");
    const rolUser = formData.get("rolUser");
    const numFicha = formData.get("numFicha");
  

    // if (nombres || apellidos || genero || correoSena || correo || tipoDoc || numDoc || contraseña || rolUser || numFicha ) return

    const NuevoUser = {
        nombre_usuario: nombres,
        apellidos_usuario: apellidos,
        genero_usuario:genero,
        correo_institucional_usuario:correoSena,
        correo_personal_usuario:correo,
        tipo_documento_usuario:tipoDoc,
        numero_documento_usuario:numDoc,
        contrasenia_usuario:contraseña,
        rol_usuario:rolUser,
        registro_facial_usuario:"/Rostro",
        ficha_usuario:numFicha
     
    };
    
    console.log(NuevoUser);


    const enviarUser = async (NuevoUser) => {
        try {
          const res = await fetch("http://127.0.0.1:8000/senauthenticator/usuario/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(NuevoUser),
            cache: "no-store",
          });
      
          if (!res.ok) {
            throw new Error("Fallo al enviar los datos");
          }
      
          const data = await res.json();
          console.log("Respuesta de la API:", data);
          return data;
        } catch (error) {
          console.error("Error al enviar datos:", error);
          throw error; 
        }
    };

    enviarUser(NuevoUser)
    .then((responseData) => {
        console.log("Datos enviados correctamente:", responseData);
    })
    .catch((error) => {
        console.error("Error al enviar datos:", error);
    });


};

export default registroUser;