
const mysql = require('mysql');

connection = mysql.createConnection({
    host            : process.env.DATABASE_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
});

let modeloPromocion = {};

modeloPromocion.getPromociones = (callback) => {
    if (connection){
        connection.query('SELECT * FROM Promocion ORDER BY id_promocion', 
        (err, rows) => {
            if (err){
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
}

modeloPromocion.getPromocion = (id, callback) => {
    if (connection){
        connection.query('SELECT * FROM Promocion WHERE id_promocion = ?', id, 
        (err, row) => {
            if(err){
                throw err;
            } else {
                callback(null, row);
            }
        })
    }
}

modeloPromocion.addPromocion = (datosPromocion, callback) => {
    if (connection){
        connection.query('INSERT INTO Promocion SET ?', datosPromocion,
            (err, result) => {
                if (err) {
                    callback(err, {message: "error al insertar"});
                } else {
                    callback(null, result)
                }
            }
        );
    }
}

modeloPromocion.deletePromocion = (id, callback) => {
    if (connection){
        let consulta = 'SELECT * FROM Promocion WHERE id_promocion = ?';
        connection.query(consulta, id, 
            (err, row) => {
                if (row){
                    let sql = 'DELETE FROM Promocion where id_promocion = ?';
                    connection.query(sql, id, 
                    (err, result) => {
                        if (err){
                            throw err
                        }else {
                            callback(null, {
                                "message": "Deleted"
                            })
                        }
                    })
                } else {
                    callback(null, {
                        'message': "element not exists"
                    })
                }
            }
        );
    }
}

modeloPromocion.updatePromocion = (newdata, callback) => {
    if (connection) {
        const sql = "UPDATE Promocion SET id_tienda = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ? WHERE id_promocion = ?";
        var data = [newdata.id_tienda, newdata.descripcion, newdata.fecha_inicio, newdata.fecha_fin, newdata.id_promocion]

        connection.query(sql, data, (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {message: 'success', result});
            }
        })
    }
}

module.exports = modeloPromocion;