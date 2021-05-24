const employee = {name : 'Ivan', address : 'Tampa'}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key] : value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign(obj, {[key] : value})
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    const newEmployee = obj
    delete newEmployee[key]
    return newEmployee
}