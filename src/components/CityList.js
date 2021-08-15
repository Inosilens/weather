import React, {useEffect} from 'react';
import {getCityList} from "../services/getCityWeather";
import {useDispatch, useSelector} from "react-redux";
import {getListAction, setCurrentCityAction, setLoaderAction} from "../reducer/weatherListReducer";
import {Pagination} from "./pagination";

export const  CityList = () => {
    const cityList = useSelector(({list})=>list.list)
    const loader = useSelector(state=>state.list.loader)
    const currentPage = useSelector(state =>state.pagination.currentPage)


    const dispatch = useDispatch()
    const CITY_PER_PAGE = 5
    const LAST_CITY_INDEX = currentPage * CITY_PER_PAGE
    const FIRST_CITY_INDEX = LAST_CITY_INDEX - CITY_PER_PAGE
    const currentCity = cityList.slice(FIRST_CITY_INDEX,LAST_CITY_INDEX)

    useEffect(()=>{
        dispatch(setLoaderAction(true))
        getCityList().then(r=> {
            dispatch(getListAction(r.list))
            dispatch(setLoaderAction(false))
        })
    },[])



    if(loader){
       return(<div>Loading...</div>)
    }
    else {
        return (
            <div>
            <div className="d-flex flex-row">{
                currentCity.map((city,index)=>

                    <div key={index}>{city.name}</div>



                )

            }

            </div>
                <Pagination/>
            </div>
        );
    }
}
