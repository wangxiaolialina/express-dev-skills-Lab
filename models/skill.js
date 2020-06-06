const skills = [{
        id: 1,
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
    getAll
};

function getAll(){
    return skills;
}