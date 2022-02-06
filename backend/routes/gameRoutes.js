import express from 'express'
const router = express.Router();
//Importar el modelo
import Game from '../models/game';

router.post('/game', async (req, res) => {

    const body = {
        name: req.body.name,
        game: req.body.game,
        state: req.body.state,
        initDate: req.body.initDate,
        fDate: req.body.fDate,
        returnDate: req.body.returnDate,
        debt: 0,
    }

    try{
        const gameDB = await Game.create(body);
        res.status(200).json(gameDB)
    } catch(e){
        return res.status(500).json({
            message: 'Error',
            e
        });
    }
});


//PARA OBTENER TODAS LOS DATOS
router.get('/game', async (req, res) => {
    try {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const gameDB = await Game.find();
        for(var i in gameDB){
            let newDate = new Date()
            let val=1.5
            let dif=gameDB[i].fDate - newDate
            let daysdif = dif/(1000*3600*24)
            gameDB[i].initDate = new Date(gameDB[i].initDate).toLocaleDateString(undefined, options)
            gameDB[i].fDate = new Date(gameDB[i].fDate).toLocaleDateString(undefined, options)
            gameDB[i].returnDate = new Date(gameDB[i].returnDate).toLocaleDateString(undefined, options)
            if(gameDB[i].returnDate<gameDB[i].fDate) {
                gameDB[i].debt=0
            }if(gameDB[i].returnDate==null)
            {
                if(daysdif<0){
                    gameDB[i].debt=val*(daysdif*-1)
                }
            }
            console.log(gameDB[i].debt)
        }
        res.json(gameDB);
    } catch (e) {
        return res.status(500).json({
            message: 'Error al obtener',
            e
        });
    }
});


module.exports = router
