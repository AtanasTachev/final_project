const { populate } = require('../models/Project');
const Project = require('../models/Project');
const User = require('../models/User');

exports.getAll = function () {
    return Project.find({}).lean();
};

exports.create = async function (projectData) {
    let project = new Project({
            ...projectData
    });
    let user = await User.findByIdAndUpdate (userId, {
        $push: {myProjects: projectId}
    })
    return [project.save(), user];
};

exports.getOne = function (id) {
    return Post.findById(id).lean();
};

exports.updateOne = function (id, 
    { projectData }) {
    return Project.findByIdAndUpdate(id, 
        { ...projectData
        }, { runValidators: true }).lean();
};

exports.deleteOne = function (id) {
    return Project.findByIdAndDelete(id).lean();
};

exports.join = async function (projectId, userId, join) {

    let user = await User.findByIdAndUpdate(userId, {
        $push: { projectsJoined: projectId }
    });
    let join = await Project.findByIdAndUpdate(projectId, {
        $push: { $push: { team: userId } }
    });
    return [project, user];
};
