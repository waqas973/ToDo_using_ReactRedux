const AddItem = (data)=>{
    return {
        type: "ADDITEM",
        payload : {
            id: new Date().getTime().toString(),
            data:data
        }
    } 
}
const DeleteItem = (id)=>{
    return {
        type: "DELITEM",
        id
    } 
}
const ClearAll = ()=>{
    return {
        type: "CLEARALL",
    } 
}

export {AddItem , DeleteItem ,ClearAll};