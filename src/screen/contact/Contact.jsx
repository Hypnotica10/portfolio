import { Form, HeaderSection, Section } from '../../components';
import PropTypes from 'prop-types';
import { FaUser, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import './contact.scss';
import { address, email, linkPhone, name, phone } from '../../data';

const Contact = ({ handleClickBackToHome }) => {
    return (
        <Section handleClickBackToHome={handleClickBackToHome}>
            <>
                <HeaderSection
                    desc='Feel free to contact me anytimes'
                    title='Get in Touch'
                ></HeaderSection>
                <div className='contact-section'>
                    <Form />
                    <div className='contact-info'>
                        <h6 className='title'>Contact Info</h6>
                        <p className='desc'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                        <ul className='list-info'>
                            <li>
                                <FaUser/>
                                <span>
                                    <span>Name</span>
                                    <span>{name}</span>
                                </span>
                            </li>
                            <li>
                                <FaLocationDot/>
                                <span>
                                    <span>Location</span>
                                    <span>{address}</span>
                                </span>
                            </li>
                            <li>
                                <FaPhone/>
                                <span>
                                    <span>Call me</span>
                                    <a href={`tel:${linkPhone}`}>{phone}</a>
                                </span>
                            </li>
                            <li>
                                <IoSendSharp/>
                                <span>
                                    <span>Email me</span>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </Section>
    );
};

Contact.propTypes = {
    handleClickBackToHome: PropTypes.func
}

export default Contact;