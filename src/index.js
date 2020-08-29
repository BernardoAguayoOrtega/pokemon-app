//import react
import React from 'react'
//import render method react dom
import { render } from 'react-dom'
//import app component
import { App } from './components/App'

//create root const
const root = document.getElementById('root')

//render react dom
render(
	<App/>,
	root
)
