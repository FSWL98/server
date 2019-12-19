import { Router } from 'express'
import FavoriteController from '../controllers/FavoriteController'
import WeatherController from "../controllers/WeatherController";


const router = Router();

router.get('/favorites', FavoriteController.getAllFavorites);
router.post('/favorites', FavoriteController.addFavorite);
router.delete('/favorites/:id', FavoriteController.deleteFavorite);
router.get('/weather', WeatherController.getWeatherByCityName);
router.get('/weather/coordinates', WeatherController.getWeatherByCoordinates);

export default router;