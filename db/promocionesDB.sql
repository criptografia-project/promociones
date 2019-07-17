
CREATE DATABASE IF NOT EXISTS Promociones;
use Promociones;


/* Tabla de las tiendas que tendran las promociones.*/
CREATE TABLE IF NOT EXISTS Tienda (

    id_tienda INT(10) unsigned NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(150) COLLATE utf8_unicode_ci NOT NULL,
    ubicacion VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    nombre VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY(id_tienda),
    CONSTRAINT tienda_nombre_unique UNIQUE (nombre),
    INDEX(id_tienda)
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE Tienda;

/* Tabla de las promociones que se ofertaran*/
CREATE TABLE IF NOT EXISTS Promocion (

    id_promocion INT(10) unsigned NOT NULL AUTO_INCREMENT,
    id_tienda INT(10) unsigned NOT NULL,
    descripcion VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL,
    PRIMARY KEY(id_promocion),
    FOREIGN KEY(id_tienda)
        REFERENCES Tienda(id_tienda)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE Promocion;

ALTER USER 'mysql'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;

INSERT INTO Tienda (categoria, ubicacion, nombre)
VALUES
    ('Ropa', '1-01', 'Pull and bear'),
    ('Ropa', '2-01', 'Bkul'),
    ('Souvenir', '3-03', 'Gift them'),
    ('Souvenir', '5-05', 'Magical Gifts'),
    ('Entretenimiento', '6-02', 'Casino Royale'),
    ('Entretenimiento', '4-12', 'Millenium Arcade'),
    ('Restaurante', '8-01', 'Mc Donalds'),
    ('Restaurante', '8-02', 'Gusteau'),
    ('Ocio', '1-05', 'Rock bar'),
    ('Ocio', '2-02', 'Electron');

INSERT INTO Promocion (id_tienda,descripcion,fecha_inicio,fecha_fin)
VALUES
    (1, '50% de descuento en toda la tienda (aplican condiciones y restricciones).', '2019-07-03', '2019-07-04'),
    (2,'2x1 en prendas seleccionadas (aplican condiciones y restricciones).', '2019-07-05', '2019-07-05'),
    (3,'Lleva la coleccion exclusiva de figuras representativas del mediterraneo.', '2019-07-06', '2019-07-08'),
    (4,'Lleva los sombreros tipicos de los destinos del crucero para que te ambientes con los destinos del crucero.', '2019-07-01', '2019-07-06'),
    (5,'20% de descuento en la adquisicion de fichas para la entrada a mesa de poker.','2019-07-06', '2019-07-08'),
    (6,'Solo por el dia de hoy, la primera partida la invita la casa en los juegos seleccionados si adquieres el pase de plata o superior.', '2019-07-02', '2019-07-02'),
    (7,'Cajita feliz de cortesia por la compra de un Mac Combo.', '2019-07-01', '2019-07-01'),
    (8,'Ratatouille de pelicula al mejor estilo de Gusteau al 40% de descuento.', '2019-07-03', '2019-07-03'),
    (9,'Nada mejor que acompañar los mejores temas de rock que con una cerveza, 2x1 en cervezas de las marcas seleccionadas', '2019-07-07', '2019-07-07'),
    (10, 'La mejor disco de todo el crucero, 2x1 en entradas por ser el ultimo dia en el crucero','2019-07-06', '2019-07-06');