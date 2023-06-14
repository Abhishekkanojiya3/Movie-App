import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import Error from './Error'
import './App.css'

const App = () => {
    return ( <
        Fragment >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = '/movie/:id'
        element = { < MovieDetail / > }
        /> <
        Route path = "*"
        element = { < Error / > }
        /> <
        /Routes> <
        /Fragment>
    )
}

export default App