import JavaScript from '../../src/assets/skillsIcons/JavaScript.svg?react';
import ReactJS from '../../src/assets/skillsIcons/React.svg?react';
import CSS3 from '../../src/assets/skillsIcons/CSS3.svg?react';
import NodeJS from '../../src/assets/skillsIcons/Node.js.svg?react';
import PostgreSQL from '../../src/assets/skillsIcons/PostgresSQL.svg?react';
import Express from '../../src/assets/skillsIcons/Express.svg?react';
import Sequelize from '../../src/assets/skillsIcons/Sequelize.svg?react';

const Gverse = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<CSS3 className='tech-item'/>
			<NodeJS className='tech-item'/>
			<ReactJS className='tech-item'/>
			<Express className='tech-item'/>
			<PostgreSQL className='tech-item'/>
			<Sequelize className='tech-item'/>
			
		</div>
	)
}

export default Gverse;