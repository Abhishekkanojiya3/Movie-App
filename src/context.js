import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();


const API_URL = `http://www.omdbapi.com/?apikey=4154f883`;

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: " " });
    const [query, setQuery] = useState('titanic');
    const getMovies = async(url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({
                    show: false,
                    msg: ""
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, 800)
        return () => clearTimeout(timer)
    }, [query]);
    return <AppContext.Provider value = {
        { isLoading, isError, movie, query, setQuery } } > { children } < /AppContext.Provider>;
};
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }