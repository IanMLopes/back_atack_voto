const Vote = require('../models/Vote')

module.exports = {
    async inputVote (req,res){
        let vote = new Vote()
        let data = await vote.inputVote(req.body.institute,1)
        res.json(data)
    },
    async getThanks (req, res){
        let vote = new Vote()
        let data = await vote.getThanks()
        res.json(data)
    },
    async getThanksById (req, res){
        let vote = new Vote()
        let data = await vote.getThanks(req.params.id)
        res.json(data)
    }
}