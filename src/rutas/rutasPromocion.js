
var controller = require('../controladores/promocionController')

module.exports = (app) => {

    app.route('/promociones')
        .get(controller.getPromociones);
    
    app.route('/promociones/:id')
        .get(controller.getPromocion);
    
    app.route('/promociones')
        .post(controller.addPromocion);

    app.route('/promociones/:id')
        .delete(controller.deletePromocion);

    app.route('/promociones/:id')
        .put(controller.updatePromocion);
}