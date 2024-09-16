import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectList

  return (
    <div className="course-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-heading-container">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="clock-logo" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="visit-link"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
