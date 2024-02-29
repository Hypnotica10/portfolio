import { HeaderSection, ListIcon, Section } from "../../components";
import Avatar from '../../assets/avatar.jpg';
import './about.scss';
import { aboutContentDesc, aboutContentTitle, address, age, email, listHref, name } from "../../data";
import PropTypes from 'prop-types';

const About = ({ handleClickBackToHome }) => {
    return (
            <Section handleClickBackToHome={handleClickBackToHome}>
                <>
                    <HeaderSection
                        desc='Get to know me'
                        title='About Me'
                    ></HeaderSection>
                    <div className='about-section'>
                        <div className='about-image'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className='about-content'>
                            <h6 className='content-subtitle'>Who am i?</h6>
                            <h5 className='content-title'>{aboutContentTitle}</h5>
                            <p className='content-desc'>{aboutContentDesc}</p>
                            <div className='content-info'>
                                <div className='content-info-box'>
                                    <div className='name'>
                                        <span>Name:</span>
                                        <span>{name}</span>
                                    </div>
                                    <div className='email'>
                                        <span>Email:</span>
                                        <a href={listHref.email} className="">{email}</a>
                                    </div>
                                </div>
                                <div className='content-info-box'>
                                    <div className='age'>
                                        <span>Age:</span>
                                        <span>{age}</span>
                                    </div>
                                    <div className='location'>
                                        <span>From:</span>
                                        <span>{address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='content-social'>
                                <a href='' className='button'>Download CV</a>
                                <ListIcon classListIcon='list-icon-about'></ListIcon>
                            </div>
                        </div>
                    </div>
                </>
            </Section>
    );
};

About.propTypes = {
    handleClickBackToHome: PropTypes.func
}

export default About;