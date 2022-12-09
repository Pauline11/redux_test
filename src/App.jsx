/*
 * @Author: pangyue
 * @Date: 2020-11-29
 * @Description: 
 */
import React, { Component } from 'react'
import Count from './container/counter';
import Person from './container/person';
import Practice from './components/practice';
import Practice2 from './components/practice2';



export default class App extends Component {
	render() {
		return (
			<div>
				{/* <Count/>
				<hr />
				<Person />
				<hr />
				<hr />
				<Practice /> */}
				<Practice2 />
			</div>
		)
	}
}
