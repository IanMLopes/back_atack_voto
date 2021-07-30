const Institute = require('../models/Institute')

module.exports = {
    async getInstitute (req,res){
        let institute = new Institute()
        let data = await institute.getInstitutes(req.params.seq_institute)
        console.log('Data: ', data)
        res.json(data)
    },
    async getInstitutes (req,res){
        let institute = new Institute()
        let data = await institute.getInstitutes()
        console.log('Data1: ', data)
        res.json(data)
    }    
}