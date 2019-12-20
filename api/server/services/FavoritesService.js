import database from '../src/models'

class FavoritesService {
    static async getAllFavorites() {
        try {
            return await database.Favorite.findAll();
        } catch (e) {
            throw e;
        }
    }
    static async addFavorite(newFavorite) {
        try {
            if (await database.Favorite.findOne({ where: {name: newFavorite.name}}))
                return null;
            return await database.Favorite.create(newFavorite);
        } catch (e) {
            throw e;
        }
    }
    static async deleteFavorite (cityName) {
        try {
            const toDelete = await database.Favorite.findOne({ where: { name: cityName}});
            if (toDelete) {
                return await database.Favorite.destroy({
                    where: {name: cityName}
                });
            }
            return null;
        } catch (e) {
            throw e;
        }
    }
}
export default FavoritesService;