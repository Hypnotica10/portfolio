import { HeaderSection, Section } from "../../components";
import PropTypes from 'prop-types';
import './resume.scss';
import { useEffect } from "react";

const Resume = ({ handleClickBackToHome }) => {

    useEffect(() => {
        const skills = document.querySelector('.skills');
        const progress = document.querySelectorAll('.progress');
        const percentage = document.querySelectorAll('.percentage');
        let bol = false;
        let count;

        const handleScrollSectionSkills = () => {
            if (scrollY > skills.offsetTop - 400 && !bol) {
                for (let i = 0; i < progress.length; i++) {
                    percentage.innerText = 0;
                    count = 0;
                    const data = parseInt(progress[i].dataset.count);

                    progress[i].style.transition = 'width' + (data * 30) + 'ms';
                    progress[i].style.transition = data + '%';

                    const updateCount = () => {
                        if (count < data) {
                            count++;
                            percentage[i].innerText = count + '%';
                            setInterval(updateCount, 50);
                        } else {
                            percentage[i].innerText = data + '%';
                        }
                    }
                    updateCount();

                    bol = true;
                }
            }
        }

        window.addEventListener('scroll', handleScrollSectionSkills)
    }, [])

    useEffect(()=> {
        
    }, [])
    return (
        <Section handleClickBackToHome={handleClickBackToHome}>
            <>
                <HeaderSection
                    desc='Check out my Resume'
                    title='Resume'
                ></HeaderSection>
                <div className='resume-section'>
                    <div className='personal-experience'>
                        <div className='education'>
                            <h6 className='education-title title'>Education</h6>
                            <div className='list-card'>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='experience'>
                            <h6 className='experience-title title'>Job Experience</h6>
                            <div className='list-card'>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                                <div className='list-card-item'>
                                    <div className='card'>
                                        <div className='card-heading'>
                                            <span className='title'>Personal Portfolio April Fools</span>
                                            <span className='time'>University of DVI (1997 - 2001)</span>
                                        </div>
                                        <p className='card-desc'>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='skills'>
                        <div className='skills-heading'>
                            <p className='skills-desc'>My level of knowledge in some tools</p>
                            <h6 className='skills-title title'>My Skills</h6>
                        </div>
                        <ul className='skills-list'>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                            <li className='skills-list-item'>
                                <div className='info'>
                                    <span className='skills-name' data-value='50'>HTML/CSS</span>
                                    <span className='percentage'>50%</span>
                                </div>
                                <div className='bar'>
                                    <div className='progress'></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </Section>
    );
};

Resume.propTypes = {
    handleClickBackToHome: PropTypes.func
}

export default Resume;