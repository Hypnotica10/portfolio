import { HeaderSection, ListProject, Section } from '../../components';
import PropTypes from 'prop-types';
import './project.scss';

const Project = ({ handleClickBackToHome }) => {
    return (
        <Section handleClickBackToHome={handleClickBackToHome}>
            <>
                <HeaderSection
                    desc='Showcasing some of my best work'
                    title='Projects'
                ></HeaderSection>
                <div className='project-section'>
                    <ListProject />
                </div>
            </>
        </Section>
    );
};

Project.propTypes = {
    handleClickBackToHome: PropTypes.func
}

export default Project;