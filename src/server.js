// COnfiguraciones para servidor web
// Requerir Módulos
// ESMODULES
import express from 'express'

import router from './routers/tour_routes.js'


//COMMMONJS
// const express = require ('express')

// INICIALIZACIÓN
const app = express()

// VARIABLES
app.set('port', process.env.port || 3000)

// MIDDLEWARES
app.use(express.json())

// RUTA PRINCIPAL
app.get('/',(req,res)=>{
    res.send("ok")
})

// RUTAS PARA EL TOUR
app.use('/api', router)

// RUTAS PARA EL USER


//RUTAS PARA EL COKING


// Exportar la instancia de app 
export default app