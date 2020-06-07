const skills = [{
        id:1,
        skill: 'css',
        learn: true
    },
    {
        id: 2,
        skill: 'javascript',
        learn: true
    },
    {
        id: 3,
        skill: 'mongoDB',
        learn: false
    }
];

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    deleteOne,
    update,
};

function getAll() {
    return skills
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = skills.length + 1;
    console.log(skill.id);
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function update(id, updatedSkill){
    skill = skills.find(skill => skill.id === parseInt(id));
    skill.skill = updatedSkill;
}
