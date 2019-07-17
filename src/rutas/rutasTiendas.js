
var controller = require('../controladores/tiendaController')

module.exports = (app) => {

    app.route('/tiendas')
        .get(controller.getTiendas);
    
    app.route('/tiendas/:id')
        .get(controller.getTienda);

    app.route('/tiendas')
        .post(controller.addTienda);
    
    app.route('/tiendas/:id')
        .delete(controller.deleteTienda);
    
    app.route('/tiendas/:id')
        .put(controller.updateTienda);
}
