const moongose = require('mongoose');
const Schema = moongose.Schema;

const RegisterShema = new Schema({
    CveSucursal : String,
    Nombre : String,
    Longitud : String,
    Latitud : String,
    Sucursales : Array,


});

module.exports = moongose.model('Regionale' , RegisterShema);