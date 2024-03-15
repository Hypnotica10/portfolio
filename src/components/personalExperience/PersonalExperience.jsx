import { education, jobExperience } from '../../data';
import './personalExperience.scss';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return (
        <h6 className='education-title title'>{title}</h6>
    )
}

const Card = ({ info }) => {
    return (
        <div className='list-card-item'>
            <div className='card'>
                <div className='card-heading'>
                    <span className='title'>{info.title}</span>
                    <span className='time'>{info.time}</span>
                </div>
                <p className='card-desc'>{info.desc}</p>
            </div>
        </div>
    )
}

const ListCard = ({ listItem }) => {
    return (
        <div className='list-card'>
            {listItem && listItem.map((item) => (
                <Card key={item.id} info={item}></Card>
            ))}
        </div>
    )
}

const PersonalExperience = () => {
    return (
        <div className='personal-experience'>
            <div className='experience'>
                <Title title='education' />
                <ListCard listItem={education} />
            </div>
            <div className='experience'>
                <Title title='Job Experience' />
                <ListCard listItem={jobExperience} />
            </div>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string
}

Card.propTypes = {
    info: PropTypes.object
}

ListCard.propTypes = {
    listItem: PropTypes.array
}

export default PersonalExperience;