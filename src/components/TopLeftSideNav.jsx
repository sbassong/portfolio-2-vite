import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const TopLeftSideNav = () => {

	return (
		<nav className='top-left-side-nav'>
			<a href="https://linkedin.com/in/sambassong/" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
			<a href="https://github.com/sbassong" rel="noreferrer" target="_blank"><GitHubIcon /></a>
			<a href="mailto:sam.bassong@gmail.com?subject=New opportunity!"><EmailIcon /></a>
		</nav>
	)
}

export default TopLeftSideNav;