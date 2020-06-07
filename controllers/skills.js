var Skills = require('../models/skill');

module.exports = {
    index,
    new: newSkills,
    show,
    create,
    delete: deleteSkill,
    edit,
    update
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
    })
}

function newSkills(req, res) {
    res.render('skills/new');
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        skillNum: Skills.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    })
}

function create(req, res) {
    Skills.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skills.getOne(req.params.id)
    });
}


function update(req, res) {
    Skills.update(req.params.id, req.body.skill);
    res.redirect('/skills');
  }