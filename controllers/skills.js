let Skills = ('../models/skills');

module.exports = {
    index,
    new: newSkills
    show:
}

function index(){
    res.render('skills/index', {
        skills: Skills.getAll()
    })
}

function newSkills(){
    res.render('skills/new');
}

function show(req,res){
    res.render('skills/show',{
    skills: Skills.getOne(req.param.id),
    skillNum: Skills.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
    })
}
