

function obtenerUser(){
    return new Promise((resolve, reject) => {
        const user = { id: 1, nombre: "Juan" };
        if (user) {
            resolve(user);
        } else {
            reject("Usuario no encontrado");
        }
    });
}
obtenerUser()
    .then((user) => {
        console.log("Usuario obtenido:", user);
    })
    .catch((error) => {
        console.error("Error al obtener el usuario:", error);
    })      
    .finally(() => {
        console.log("Operación de obtención de usuario finalizada.");
    }); 
