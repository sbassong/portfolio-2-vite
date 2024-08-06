// Languages
import JavaScript from '../../src/assets/skillsIcons/JavaScript.svg?react';
import Python from '../../src/assets/skillsIcons/Python.svg?react';

// Frontend
import ReactJS from '../../src/assets/skillsIcons/React.svg?react';
import Redux from '../../src/assets/skillsIcons/Redux.svg?react';
import Sass from '../../src/assets/skillsIcons/Sass.svg?react';
import HTML5 from '../../src/assets/skillsIcons/HTML5.svg?react';
import CSS3 from '../../src/assets/skillsIcons/CSS3.svg?react';
import MaterialUI from '../../src/assets/skillsIcons/Material-UI.svg?react';
import TailwindCSS from '../../src/assets/skillsIcons/Tailwind-CSS.svg?react';
import Vue from '../../src/assets/skillsIcons/Vue.js.svg?react';
import Figma from '../../src/assets/skillsIcons/Figma.svg?react';

// Backend
import MongoDB from '../../src/assets/skillsIcons/MongoDB.svg?react';
import NodeJS from '../../src/assets/skillsIcons/Node.js.svg?react';
import PostgreSQL from '../../src/assets/skillsIcons/PostgresSQL.svg?react';
import Express from '../../src/assets/skillsIcons/Express.svg?react';
import Flask from '../../src/assets/skillsIcons/Flask.svg?react';
import Pandas from '../../src/assets/skillsIcons/Pandas.svg?react';
import Django from '../../src/assets/skillsIcons/Django.svg?react';

// databases, devops, testing...
import Vercel from '../../src/assets/skillsIcons/Vercel.svg?react';
import AWS from '../../src/assets/skillsIcons/AWS.svg?react';
import Cypress from '../../src/assets/skillsIcons/Cypress.svg?react';
import Jest from '../../src/assets/skillsIcons/Jest.svg?react';
import Heroku from '../../src/assets/skillsIcons/Heroku.svg?react';


const Skills = () => {
	return (
		<div id="skills" className="page">
			<div className='skills-wrap'>

				<h2 className='first-h2'>Frontend</h2>
				<div className="skills-container">
					<div className="skill-box">
						<JavaScript />
						JavaScript
					</div>
					<div className="skill-box">
						<ReactJS />
						React
					</div>
					<div className="skill-box">
						<Redux />
						Redux
					</div>
					<div className="skill-box">
						<Vue />
						Vue
					</div>
					<div className="skill-box">
						<MaterialUI />
						MaterialUI
					</div>
					<div className="skill-box">
						<TailwindCSS />
						Tailwind
					</div>
						<div className="skill-box">
						<HTML5 />
						HTML5
					</div>
					<div className="skill-box">
						<CSS3 />
						CSS3
					</div>
					<div className="skill-box">
						<Sass />
						Sass
					</div>
					<div className="skill-box">
						<Figma />
						Figma
					</div>
				</div>

				<h2>Backend & Databases</h2>
				<div className="skills-container">
					<div className="skill-box">
						<NodeJS />
						NodeJS
					</div>
					<div className="skill-box">
						<Python />
						Python
					</div>
					<div className="skill-box">
						<Express />
						Express
					</div>
					<div className="skill-box">
						<Flask />
						Flask
					</div>
					<div className="skill-box">
						<Django />
						Django
					</div>
					<div className="skill-box">
						<MongoDB />
						MongoDB
					</div>
					<div className="skill-box">
						<PostgreSQL />
						Postgres
					</div>
					<div className="skill-box">
						<Pandas />
						Pandas
					</div>
				</div>

				<h2>Cloud, Testing, DevOps</h2>
				<div className="skills-container">
					<div className="skill-box">
						<AWS />
						AWS
					</div>
					<div className="skill-box">
						<Cypress />
						Cypress
					</div>
					<div className="skill-box">
						<Jest />
						Jest
					</div>
					<div className="skill-box">
						<Heroku />
						Heroku
					</div>
					<div className="skill-box">
						<Vercel />
						Vercel
					</div>
				</div>
			</div>
		</div>
	)
};

export default Skills;