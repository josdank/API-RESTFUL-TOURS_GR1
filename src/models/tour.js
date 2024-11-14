const tourModel = {

    async gerAllToursModel(){
        try{
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            
            return tours
        } catch (error){
            console.log(error)
        }
    }
    
    ,


//Creación de un tour
async createTourModel(newTour){
    // 1. Conexión bdd
    const url ="http://localhost:4000/tours"
    // 2. Enviar data a la bdd
    const peticion = await fetch(url,{
        method:"POST",
        body:JSON.stringify(newTour),
        headers:{"Content-Type":"application/json"}
    })
    // 3. Obtener espuesta a la bdd
    const data = await peticion.json()
    // 4. Mandar respuesta al controlador 
    return data
}


,

// Actualizar la información del Tour
async updateTourModel(tourId,updatedTour ){
     // 1. Conexión bdd
     const url =`http://localhost:4000/tours/${tourId}`
     // 2. Enviar data a la bdd
     const peticion = await fetch(url,{
         method:"PUT",
         body:JSON.stringify(updatedTour),
         headers:{"Content-Type":"application/json"}
     })
     // 3. Obtener espuesta a la bdd
     const data = await peticion.json()
     // 4. Mandar respuesta al controlador 
     return data
 }
 
 
 ,


 // Eliminar el tour
 async deleteTourModel(tourId ){
    // 1. Conexión bdd
    const url =`http://localhost:4000/tours/${tourId}`
    // 2. Enviar data a la bdd
    const peticion = await fetch(url,{
        method:"DELETE",
    })
    // 3. Obtener espuesta a la bdd
    const data = await peticion.json()
    // 4. Mandar respuesta al controlador 
    return data
}


,

//Buscar un tour por id
async searchTourModel(tourId){
    // 1. Conexión bdd
    const url =`http://localhost:4000/tours/${tourId}`
    // 2. Enviar data a la bdd
    const peticion = await fetch(url,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    })
    // 3. Obtener espuesta a la bdd
    const data = await peticion.json()
    // 4. Mandar respuesta al controlador 
    return data
}

}




export default tourModel