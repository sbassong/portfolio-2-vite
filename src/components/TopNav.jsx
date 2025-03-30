import { NavLink } from 'react-router-dom';
import TopLeftSideNav from './TopLeftSideNav';
import ProfileMenu from './ProfileMenu';

const TopNav = () => {
	return (
		<div className="top-nav">
			<div className="top-nav-wrap">
				<NavLink className='top-left-nav' to='/'>
					<img src="https://github.com/user-attachments/assets/8d061128-a678-44b8-aaf9-62ce9017d8db" alt="Sam Bassong portfolio's logo"/>
				</NavLink>
				<ProfileMenu />
				<TopLeftSideNav />
				<nav className='top-right-nav'>
					<NavLink to='/' className='no-display' activeclassname="active">Home</NavLink>
					<NavLink to='/projects' className='no-display' activeclassname="active">Projects</NavLink>
					<NavLink to='/stack' className='no-display' activeclassname="active">Stack</NavLink>
					<a className='resume-link' href="https://drive.google.com/file/d/1oYKyaHaM1yW303glGqHOR08yG1AeNK2L/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
				</nav>
			</div>
		</div>
	)
}

export default TopNav;
