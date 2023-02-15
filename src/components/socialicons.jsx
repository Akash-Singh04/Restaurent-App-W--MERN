import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function SocialIcons(){
    return(
        <div className="social_links">
            <ul>
                <li class="socialicon">
                    <a href="https://twitter.com/Kind_Of_Akash"><TwitterIcon /></a>
                </li>
                <li class="socialicon">
                    <a href="https://github.com/Akash-Singh04"><GitHubIcon /></a>
                </li>
                <li class="socialicon">
                    <a href="https://www.instagram.com/kind.of.akash/"><InstagramIcon /></a>
                </li>
                <li class="socialicon">
                    <a href="https://www.linkedin.com/in/akash-singh-a57081253/"><LinkedInIcon /></a>
                </li>
            </ul>
        </div>)
}

export default SocialIcons