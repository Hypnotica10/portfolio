import { HeaderSection, PersonalExperience, Section, SkillProgressBar } from "../../components";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import './resume.scss';
import { skills } from "../../data";

const Resume = ({ handleClickBackToHome }) => {
    const [translateX, setTranslateX] = useState(20);
    const [listWidths, setListWidths] = useState([]);

    useEffect(() => {
        const skills = document.querySelector('.skills');
        const progress = document.querySelectorAll('.progress');

        const handleScroll = () => {
            if (scrollY > skills.offsetTop - 700) {
                setTranslateX(0);
                progress.forEach((item) => {
                    const data = parseFloat(item.dataset.value);
                    setListWidths(listWidths => [...listWidths, data])
                })
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    return (
        <Section handleClickBackToHome={handleClickBackToHome}>
            <>
                <HeaderSection
                    desc='Check out my Resume'
                    title='Resume'
                ></HeaderSection>
                <div className='resume-section'>
                    <PersonalExperience></PersonalExperience>
                    <SkillProgressBar listSkills={skills} listWidths={listWidths} translateX={translateX}></SkillProgressBar>
                </div>
            </>
        </Section>
    );
};

Resume.propTypes = {
    handleClickBackToHome: PropTypes.func
}

export default Resume;