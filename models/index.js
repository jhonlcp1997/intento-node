/* 
*Cada carpeta que se quiera exportar y simplificar
*Siempre debe tener un index (como este)
*Y en el exportar la funcion, elemento, etx, con el mismo nombre de la carpeta
*/
const models = {
    userModel: require('./nosql/users'),
    tracksModel: require('./nosql/tracks'),
    storageModel: require('./nosql/storage'),
}

module.exports = models; //*siempre exportarlo 