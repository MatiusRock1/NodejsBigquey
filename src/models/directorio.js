const moongose = require('mongoose');
const Schema = moongose.Schema;

const RegisterShema = new Schema({
    blanca : String,
    CLAVE1 : String,
    CLAVE : String,
    NOMBREOFICIAL : String,
    CENTROREGIONAL : String,
    SUBDIRECCIÓN : String,
    FECHAAPERTURA : String,
    NOEXTERIOR : String,
    NOINTERIOR : String,
    COLONIA : String,
    CP : String,
    DELEGACIONMUNICIPIO : String,
    Referenciasdeubicación : String,
    ESTADO : String,
    Teléfono : String,
    HORARIOSDEATENCION : String,
    DÍASNOLABORALESENQUEOPERA : String,
    DÍASLABORALESQUENOOPERA : String,
    NOMBREDEGERENTE : String,
    CORREO : String,
    TIPODESUCURSAL : String,
    LATITUD : String,
    LONGITUD : String,
    CENTRODECANJE : String,
    CODIGOLOCALIDAD : String,
    CODIGOMUNICIPIO : String,
    CODIGOESTADO : String,
    UBICACIÓN : String,
    TIPOSUCCIB : String,
    IDCAJERO1 : String,
    IDCAJERO2 : String,
    CENTRODECOSTOS : String,
    NOT24 : String,
    NORRHH : String,
    PLAZA : String


});

module.exports = moongose.model('Directorio' , RegisterShema);