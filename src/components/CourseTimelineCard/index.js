import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, duration, description, tagsList} = courseList

  return (
    <div className="course-container">
      <div className="course-heading-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-logo" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="course-ul-list">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="course-list">
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
