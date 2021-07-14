
const initState = {
    lists : []
}
export const rootReducer = (state = initState , action)=>{
    switch(action.type){
        case "ADDITEM":{
          const {id , data } = action.payload;
          return{
              lists:[
                ...state.lists,  
                {
                  id: id,
                  data:data
                 }]
          }
        }
        case "DELITEM":{
           const newList = state.lists.filter((elem)=> elem.id !== action.id);
           return{
               lists : newList
           }
        }
        case "CLEARALL":{
         return {
             lists:[]
         }
        }
        default: return state;
    }  
}