const ENGINE_DB = process.env.ENGINE_DB;
const getFunctions = ({modelo, patron}) => {
    
    if(ENGINE_DB === 'nosql'){
        const data = {
            find: modelo.find(),
            findById: modelo.findById(patron)
        }
        return data;
    } else if(ENGINE_DB === 'mysql'){
        const data = {
            find: modelo.findAll(),
            findById : modelo.findOne({id: patron})
        }
        return data;
    } else{
        return 'No hay nada';
    }
}

module.exports = getFunctions;