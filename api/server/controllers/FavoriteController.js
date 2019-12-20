import FavoriteService from '../services/FavoritesService'
import Util from '../utils/Utils'

const util = new Util();
class FavoriteController {
    static async getAllFavorites(req, res) {
        console.log('get all favs');
        try {
            const allFavorites = await FavoriteService.getAllFavorites();
            if(allFavorites.length > 0) {
                util.setSuccess(200, 'Favorites retrieved', allFavorites);
            } else {
                util.setSuccess(200, 'No favorites found');
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
    }
    static async addFavorite (req, res) {
        console.log('add new fav');
        if(!req.body.name) {
            util.setError(400, 'Please provide complete datails');
            return util.send(res);
        }
        const newFavorite = {
            name: req.body.name
        };
        try {
            const createdFavorite = await FavoriteService.addFavorite(newFavorite);
            if (createdFavorite === null)
                util.setSuccess(201, 'this item already exists');
            else
                util.setSuccess(201, 'Favorite added!', createdFavorite);
            return util.send(res);
        } catch (e) {
            util.setError(400, e.message);
            return util.send(res);
        }
    }
    static async deleteFavorite (req, res) {
        console.log('delete fav');
        const {name} = req.params;
        try {
            const toDelete = await FavoriteService.deleteFavorite(name);
            if(toDelete) {
                util.setSuccess(200, 'Favorite deleted');
            } else {
                util.setError(404, `Cannot find favorite with name ${name}`)
            }
        } catch (e) {
            util.setError(400, e);
        }
        return util.send(res);
    }
}

export default FavoriteController;