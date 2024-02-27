import './listIcon.scss';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ListIcon = () => {
    return (
        <div className='list-icon'>
            <a target='_blank' href='https://github.com/' className=''>
                <FaGithub color='white' />
            </a>
            <a target='_blank' href='https://www.facebook.com/' className=''>
                <FaFacebookSquare color='white' />
            </a>
            <a target='_blank' href='mailto:abc@gmail.com' className=''>
                <SiGmail color='white' />
            </a>
            <a target='_blank' href='https://www.linkedin.com/' className=''>
                <FaLinkedin color='white' />
            </a>
            <a target='_blank' href='https://www.instagram.com/' className=''>
                <FaInstagram color='white' />
            </a>
        </div>
    );
};

export default ListIcon;