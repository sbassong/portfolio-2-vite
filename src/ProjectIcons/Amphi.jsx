import JavaScript from '../../src/assets/skillsIcons/JavaScript.svg?react';
import ReactJS from '../../src/assets/skillsIcons/React.svg?react';
import CSS3 from '../../src/assets/skillsIcons/CSS3.svg?react';
import MongoDB from '../../src/assets/skillsIcons/MongoDB.svg?react';
import NodeJS from '../../src/assets/skillsIcons/Node.js.svg?react';
import MongooseJS from '../../src/assets/skillsIcons/Mongoose.js.svg?react';
import Express from '../../src/assets/skillsIcons/Express.svg?react';


const Amphi = () => {
	return (
		<div className="tech-container">
			<JavaScript className='tech-item'/>
			<NodeJS className='tech-item'/>
			<CSS3 className='tech-item'/>
			<ReactJS className='tech-item'/>
			<Express className='tech-item'/>
			<MongoDB className='tech-item'/>
			<MongooseJS className='tech-item' />
		</div>
	)
};

export default Amphi;