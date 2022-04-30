import { ImPlay, ImFacebook2, ImTwitter, ImGithub, ImPinterest} from "react-icons/im";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content">
                <span>Devjobs</span>
                <ul className="list">
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
                <ul className="list">
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Guidelines</a></li>
                    
                </ul>
                <ul className="list">
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Devjobs for iOS</a></li>
                    <li><a href="#">Devjobs for Android</a></li>
                    <li><a href="#">Devjobs for Windows</a></li>
                    <li><a href="#">Devjobs for macOS</a></li>
                    
                </ul>
                <ul className="list">
                    <li><a href="#">Devjobs</a></li>
                    <li><a href="#">On demend</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Managment</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    
                </ul>
            </div>
            <ul className="footer-end">
                <div className="left">
                    <li>© 2021 Devjobs.com, Inc. All rights reserved.</li>
                    <li className="temp">Terms</li>
                    <li className="temp">Privacy</li>
                    <li className="temp">Copyright</li>
                    <li>Cookies</li>
                </div>
                <div className="right">
                    <li><a><ImPlay/></a></li>
                    <li><a><ImFacebook2/></a></li>
                    <li><a><ImTwitter/></a></li>
                    <li><a><ImGithub/></a></li>
                    <li><a><ImPinterest/></a></li>
                </div>
            </ul>
        </div>
     );
}
 
export default Footer;