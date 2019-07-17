
const promocion = require('../modelos/promocion');

var promocionControllers = {

    getPromociones: (req, res) => {
        promocion.getPromociones((err, data) =>{
            res.status(200).json(data)
        })
    },

    getPromocion: (req, res) => {
        promocion.getPromocion(parseInt(req.params.id), (err, data) =>{
            res.status(200).json(data)
        })
    },

    addPromocion: (req, res) => {

        const datosPromocion = {
            id_promocion: null,
            id_tienda: parseInt(req.body.id_tienda),
            descripcion: req.body.descripcion,
            fecha_inicio: new Date(req.body.fecha_inicio),
            fecha_fin: new Date(req.body.fecha_fin)
        }

        promocion.addPromocion(datosPromocion, (err, data) => {
            if (data && !data.message) {
                res.json({
                    id_promocion: null,
                    id_tienda: datosPromocion.id_tienda,
                    descripcion: datosPromocion.descripcion,
                    fecha_inicio: datosPromocion.fecha_inicio,
                    fecha_fin: datosPromocion.fecha_fin
                })
            } else {
                res.status(500).json({
                    success: false,
                    data: 'Error insertando datos'
                })
            }
        });
    },

    deletePromocion: (req, res) => {
        promocion.deletePromocion(parseInt(req.params.id), (err, data) =>{
            if (data && data.message == 'Deleted'){
                res.json({
                    id: parseInt(req.params.id)
                })
            }
            else if (data && data.message == 'element not exists'){
                res.status(406).json({
                    message: 'Id del elemento no existe'
                })
            } else {
                res.status(500).json({
                    message: 'error'
                })
            }
        })
    },

    updatePromocion: (req, res) => {
        const newDatos = {
            id_promocion: parseInt(req.params.id),
            id_tienda: req.body.id_tienda,
            descripcion: req.body.descripcion,
            fecha_inicio: new Date(req.body.fecha_inicio),
            fecha_fin: new Date(req.body.fecha_fin)
        }

        promocion.updatePromocion(newDatos, (err, data) => {
            if(data && data.message){
                res.json({
                    id_promocion: datosPromocion.id_promocion,
                    id_tienda: datosPromocion.id_tienda,
                    descripcion: datosPromocion.descripcion,
                    fecha_inicio: datosPromocion.fecha_inicio,
                    fecha_fin: datosPromocion.fecha_fin
                })
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Error'
                })
            }
        })
    }
}

module.exports = promocionControllers;