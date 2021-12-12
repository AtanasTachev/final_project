import {baseUrl} from '../constants';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};


export const getOne = async (projectId) => {
    let response = await fetch(`${baseUrl}/projects/${projectId}/details`)
    let project = await response.json();
    return project;

};

export const create = async ({title, contractor, location, startDate, dueDate, imageUrl, description, lead, creator}) => {

    let response = await fetch(`${baseUrl}/projects/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead, creator})
    });
    let result = await response.json();
    return result;
};

export const edit = async (projectId, title, contractor, location, startDate, dueDate, imageUrl, description, lead ) => {

    let response = await fetch(`${baseUrl}/projects/${projectId}/edit`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead})
    });
    let result = await response.json();
    return result;
};

export const deleteProject = async (projectId) => {
    return fetch(`${baseUrl}/projects/${projectId}/delete`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export const joinProject = async (projectId, userId) => {
    return fetch(`${baseUrl}/projects/${projectId}/join`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({projectId, userId})
    }).then(res => res.json());
}

export const leaveProject = async (projectId, userId) => {
    return fetch(`${baseUrl}/projects/${projectId}/leave`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({projectId, userId})
    }).then(res => res.json());
}

