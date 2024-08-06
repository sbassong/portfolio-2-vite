import JavaScript from '../../src/assets/skillsIcons/JavaScript.svg?react';
import Python from '../../src/assets/skillsIcons/Python.svg?react';
import CSS3 from '../../src/assets/skillsIcons/CSS3.svg?react';
import Vue from '../../src/assets/skillsIcons/Vue.js.svg?react';
import NodeJS from '../../src/assets/skillsIcons/Node.js.svg?react';
import PostgreSQL from '../../src/assets/skillsIcons/PostgresSQL.svg?react';
import Express from '../../src/assets/skillsIcons/Express.svg?react';
import Flask from '../../src/assets/skillsIcons/Flask.svg?react';
import AWS from '../../src/assets/skillsIcons/AWS.svg?react';

const Scienteer = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<Python className='tech-item'/>
			<CSS3 className='tech-item'/>
			<Vue className='tech-item'/>
			<NodeJS className='tech-item'/>
			<Express className='tech-item'/>
			<PostgreSQL className='tech-item'/>
			<Flask className='tech-item'/>
			<AWS className='tech-item'/>
		</div>
	)
};

export default Scienteer;