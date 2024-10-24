import tourModel from '../models/tour.js'

const getAllToursController = async(req, res) => {
    try{
        const tours = await tourModel.gerAllToursModel()
        res.status(200).json(tours

        )
    }catch(error){
        console.log(error);
    }
} 

export {
    getAllToursController
}