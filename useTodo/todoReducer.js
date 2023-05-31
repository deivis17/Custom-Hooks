
export const todoReducer = (initialState = [], action = {})=>{

    switch (action.type) {
        case '[TODO]: Add Todo':
            return [...initialState, action.payload];

/*         case '[TODO]: Add New Task':
            return [...allTodos, action.payload]; */
        case '[TODO]: Remove Todo':
            return initialState.filter
            ( todo => (
             todo.id !== action.payload  
            )
             )
        case '[TODO] Toggle Done':
                return initialState.map(todo=>
                    {
                        if(action.payload==todo.id){
                            return{
                                ...todo,
                                done: !todo.done,
                            }
                        }
                        return todo;
                    }
                    
                    );
        default:
            return initialState;
    }


}