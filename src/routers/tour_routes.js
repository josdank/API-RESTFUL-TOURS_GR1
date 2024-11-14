import {Router} from 'express'
import {createTourController, getAllToursController, updateTourController, deleteTourController, searchTourController  } from '../controllers/tour_controller.js';
const router = Router()

// Pública
router.get('/tours', getAllToursController)
router.get('/tours/:id', searchTourController)

// Privada - Admin o Empleado
router.post('/tours', createTourController)
// Privada - Admin o Empleado
router.put('/tours/:id', updateTourController)
// Privada - Admin o Empleado
router.delete('/tours/:id', deleteTourController)



export default router;
