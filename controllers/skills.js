let Skills = ('../models/skills');

module.exports = {
    index,
}

function index(){
    res.render('skills/index', {
        skills: Skills.getAll()
    })
}


