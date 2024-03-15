import PropTypes from 'prop-types';
import './skillProgressBar.scss'

const ProgressBar = ({ info, width, translateX }) => {
    return (
        <li className='skills-list-item'>
            <div className='info'>
                <span className='skills-name'>{info.name}</span>
                <span className='percentage'>{info.percent}%</span>
            </div>
            <div className='bar'>
                <div className='progress' data-value={info.percent}  style={{ width: `${width ? width : 0}%`, '--transform': `${translateX}px`}}></div>
            </div>
        </li>
    )
}

const SkillProgressBar = ({ listSkills, listWidths, translateX }) => {
    return (
        <div className='skills'>
            <div className='skills-heading'>
                <p className='skills-desc'>My level of knowledge in some tools</p>
                <h6 className='skills-title title'>My Skills</h6>
            </div>
            <ul className='skills-list'>
                {listSkills && listSkills.map((item) => (
                    <ProgressBar key={item.id} info={item} width={listWidths[item.id - 1]} translateX={translateX}></ProgressBar>
                ))}
            </ul>
        </div>
    );
};

SkillProgressBar.propTypes = {
    listSkills: PropTypes.array,
    listWidths: PropTypes.array,
    translateX: PropTypes.number
}

ProgressBar.propTypes = {
    info: PropTypes.object,
    width: PropTypes.number,
    translateX: PropTypes.number
}
export default SkillProgressBar;