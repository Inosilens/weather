import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageAction} from "../reducer/paginationReducer";

export const  Pagination = () => {
    const currentPage = useSelector(state=>state.pagination.currentPage)

    const dispath = useDispatch()
    const pages = [1,2,3]
    const changePage = (number)=>{
        dispath(setCurrentPageAction(number))
    }
    return (
        <ul>
            {pages.map((number,index)=>
            <li key={index}><a onClick={()=>changePage(number)} href="#">{number}</a></li>)}
        </ul>
    );
}

