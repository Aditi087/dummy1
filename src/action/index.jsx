export const addTODO = (data) =>{
    return{
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTODO = () =>{
    return{
        type:"DELETE_TODO"
    }
}