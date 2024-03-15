import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { listProject } from '../../data';
import PropTypes from 'prop-types';
import './listProject.scss'

const Project = ({ item }) => {
    return (
        <div className='project-item'>
            <div className='project-image'>
                <a href={item.githubLink} target='_blank' className=''><img src={`../src/assets/project/${item.image}`} alt='' className='image' /></a>
            </div>
            <div className='project-content'>
                <h6 className='project-name'>
                    <a href={item.githubLink} className='' target='_blank'>
                        <span>{item.name}</span>
                        <FiArrowUpRight />
                    </a>
                </h6>
                <p className='project-position'>Your position: {item.position}</p>
                <p className='project-desc'>{item.desc}</p>
                {item.download && (
                    <div className='project-download'>
                        <a href={item.linkDownload} className='' target='_blank'>
                            <FiDownload />
                            <span>{item.download}</span>
                        </a>
                    </div>
                )}
                <div className='project-tech'>
                    {item['techUses'].map((item) => (
                        <span key={item.id}>{item.tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const ListProject = () => {
    return (
        <div className='project-list'>
            {listProject && listProject.map((item) => (
                <Project key={item.id} item={item} />
            ))}
        </div>
    );
};

Project.propTypes = {
    item: PropTypes.object
}

export default ListProject;