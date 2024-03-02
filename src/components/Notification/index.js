// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="container1">
      <div className="container2">
        {children}
        <GrFormClose className="close-icon-style" />
      </div>
    </div>
  )
}

export default Notification
