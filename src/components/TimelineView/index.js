import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> <span className="heading-spam"> CCBP 4.0 </span>
      </h1>
      <Chrono
        mode="VERTICAL"
        theme={{
          primary: 'blue',
          secondary: 'none',
          titleColor: 'blue',
        }}
        items={timelineItemsList}
      >
        {timelineItemsList.map(item =>
          item.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={item.id} courseList={item} />
          ) : (
            <ProjectTimelineCard key={item.id} projectList={item} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
