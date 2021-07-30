const  poolPromiseOracleTasy  = require('../../bin/dbconfig')
const oracledb = require('oracledb')

class Institute {
    async getInstitutes(seq_institute=0){
        let conn = await oracledb.getConnection()
        const data = await conn.execute(`SELECT * FROM SAMEL.UNIDADE WHERE NR_SEQUENCIA = :seq_institute or :seq_institute = 0 `,
            { 'seq_institute' :seq_institute },
            { outFormat: oracledb.OBJECT })
        conn.close()
        return data.rows   
    }
}

module.exports = Institute