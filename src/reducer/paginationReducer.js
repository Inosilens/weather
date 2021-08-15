const defaultState = {

    currentPage : 1
}




const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export const paginationReducer = (state = defaultState,action)=>{
    switch (action.type){

        case(SET_CURRENT_PAGE): return {...state,currentPage: action.page}

        default: return state
    }

}


export const setCurrentPageAction = (page)=> ({
    type : SET_CURRENT_PAGE,
    page
})