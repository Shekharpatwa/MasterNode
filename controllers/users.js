const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;
exports.getAll = (req,res)=>{
    res.json(users);
};

exports.getUser = (req,res)=>{
    const id = +req.params.id;
    const user = users.find(p=>p.id===id);
    res.json(user);
};

exports.create = (req,res)=>{
    users.push(req.body);
    res.status(201).json(req.body);
};

exports.replace = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.find(p=>p.id===id);
    users.splice(userIndex,1,{...req.body,id:id})
    res.status(200).json();
};

exports.update = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1,{...user,...req.body})
    res.status(200).json(user);
}

exports.delete = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id==id);
    const user = users[userIndex];
    users.splice(userIndex,1);
    res.status(200).json(user);
};