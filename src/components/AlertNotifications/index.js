// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const createSuccessNotification = () => (
  <Notification>
    <div className="notification-container">
      <AiFillCheckCircle className="icon-style status-style1 " />
      <div className="notification-content-container">
        <h1 className="status-style  status-style1">Success</h1>
        <p className="description-style">
          You can access all the files in the folder
        </p>
      </div>
    </div>
  </Notification>
)

const createErrorNotification = () => (
  <Notification>
    <div className="notification-container">
      <RiErrorWarningFill className="icon-style status-style2 " />
      <div className="notification-content-container">
        <h1 className="status-style  status-style2">Error</h1>
        <p className="description-style">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </div>
  </Notification>
)

const createWarningNotification = () => (
  <Notification>
    <div className="notification-container">
      <MdWarning className="icon-style status-style3 " />
      <div className="notification-content-container">
        <h1 className="status-style  status-style3">Warning</h1>
        <p className="description-style">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </div>
  </Notification>
)

const createInfoNotification = () => (
  <Notification>
    <div className="notification-container">
      <MdInfo className="icon-style status-style4 " />
      <div className="notification-content-container">
        <h1 className="status-style  status-style4">Info</h1>
        <p className="description-style">
          Anyone on the internet can view these files
        </p>
      </div>
    </div>
  </Notification>
)

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="heading-style">Alert Notifications</h1>
    {createSuccessNotification()}
    {createErrorNotification()}
    {createWarningNotification()}
    {createInfoNotification()}
  </div>
)

export default AlertNotifications
