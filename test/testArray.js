const tasks = [
    {id: 1, text:"T1", day:"D1", remainder : false} ,
    {id: 2, text:"T2", day:"D2", remainder : false} ,
    {id: 3, text:"T3", day:"D3", remainder : false}
]
let task =  { text:"T4", day:"D4", remainder : false}
const id = Math.floor(Math.random() * 10000) + 1
console.log('id == ',id)
const newTask = { id, ...task }

console.log('task == ',task)
console.log('newTask == ',newTask)