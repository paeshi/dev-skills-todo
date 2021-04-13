const Skill = require('../models/skill')


async function index(req, res) {
    // error handling:
    try {
        //    get all skills from model
        const skills = await Skill.find({uid: req.query.uid}).sort('-createdBy');
        // send json
        res.status(200).json(skills)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'something went wrong'})
    }
}


async function create(req, res) {
    try {
        const skill = await Skill.create(req.body);
        req.query.uid = skill.uid;
        index(req, res)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

async function deleteSkill(req, res) {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        req.query.uid = deletedSkill.uid;
        index(req, res)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

async function update(req, res) {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {new: true}
            );
            req.query.uid = updatedSkill.uid;
            index(req, res);
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})

    }
}

module.exports = {
    index, 
    create,
   delete: deleteSkill,
   update
}