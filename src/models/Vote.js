const  poolPromiseOracleTasy  = require('../../bin/dbconfig')
const oracledb = require('oracledb')


class Vote {
    async inputVote(NR_SEQ_UNIDADE,VL_VOTO){

        try{
            let conn = await oracledb.getConnection()
            const data = await conn.execute(`begin INSERT INTO SAMEL.UNIDADE_VOTO(VL_VOTO, NR_SEQ_UNIDADE) VALUES(:VL_VOTO,:NR_SEQ_UNIDADE); commit; end;`,
                { 'VL_VOTO' : VL_VOTO,
                  'NR_SEQ_UNIDADE': NR_SEQ_UNIDADE},
                { outFormat: oracledb.OBJECT })
            conn.close()
            return data   
        }catch(e){
            return e.message
        }
    }
    
    async getThanks(NR_SEQUENCIA=0){

            let conn = await oracledb.getConnection()
            const data = await conn.execute(`SELECT * FROM SAMEL.UNIDADE_AGRADECIMENTO WHERE NR_SEQUENCIA = :NR_SEQUENCIA OR :NR_SEQUENCIA = 0`,
                { 'NR_SEQUENCIA' : NR_SEQUENCIA},
                { outFormat: oracledb.OBJECT })
            conn.close()
            return data.rows
    }
}

module.exports = Vote