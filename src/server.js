// COnfiguraciones para servidor web
// Requerir Módulos
// ESMODULES
import express from 'express'

import router from './routers/tour_routes.js'
import routerTools from './routers/tools_routes.js'
import routerUsers from './routers/users_routes.js'


//COMMMONJS
// const express = require ('express')

// INICIALIZACIÓN
const app = express()

// VARIABLES
app.set('port', process.env.port || 3000)

// MIDDLEWARES
app.use(express.json())

// RUTA INICIO
app.get('/',(req,res)=>{
    res.send('OK')
})

// RUTAS PARA EL TOUR
app.use('/api', router)

// Rutas para tools
app.use('/api',routerTools)

//Ruta para usuarios
app.use('/api',routerUsers)


// Exportar la instancia de app 
export default app