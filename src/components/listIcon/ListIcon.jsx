import './listIcon.scss';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { listHref } from '../../data';
import PropTypes from 'prop-types';

const ListIcon = ({ classListIcon }) => {
    return (
        <div className={classListIcon}>
            <a target='_blank' href={listHref.github} className=''>
                <FaGithub color='white' />
            </a>
            <a target='_blank' href={listHref.facebook} className=''>
                <FaFacebookSquare color='white' />
            </a>
            <a target='_blank' href={listHref.email} className=''>
                <SiGmail color='white' />
            </a>
            <a target='_blank' href={listHref.linkedin} className=''>
                <FaLinkedin color='white' />
            </a>
            <a target='_blank' href={listHref.instagram} className=''>
                <FaInstagram color='white' />
            </a>
        </div>
    );
};

ListIcon.propTypes = {
    classListIcon: PropTypes.string
}

export default ListIcon;