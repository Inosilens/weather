const defaultState = {
    loader : false,
    list: [],
}



const GET_LIST = "GET_LIST"
const SET_LOADER = "SET_LOADER"


export const weatherListReducer = (state = defaultState,action)=>{
    switch (action.type){
        case(GET_LIST): return {...state , list : action.list}
        case(SET_LOADER) : return {...state, loader: action.payload}


        default: return state
    }

}

export const getListAction = (list) => ({
    type : GET_LIST,
    list
})

export const setLoaderAction = (payload) => ({
    type : SET_LOADER ,
    payload
})
