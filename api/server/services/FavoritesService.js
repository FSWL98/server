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
    static async deleteFavorite (id) {
        try {
            const toDelete = await database.Favorite.findOne({ where: { id: Number(id)}});
            if (toDelete) {
                return await database.Favorite.destroy({
                    where: {id: Number(id)}
                });
            }
            return null;
        } catch (e) {
            throw e;
        }
    }
}
export default FavoritesService;