// @flow
import NotifierSystem from 'react-notification-system'

const notificationDefaults = {
  position: 'tr',
  autoDismiss: 5,
  dismissible: 'both',
  level: 'info',
}

// eslint-disable-next-line
NotifierSystem.prototype.showNotification = function(notification) {
  this.uid += 1

  const preparedNotification = Object.assign({}, notificationDefaults, notification)
  preparedNotification.position = preparedNotification.position.toLowerCase()
  preparedNotification.dismissible = preparedNotification.dismissible.toLowerCase()
  preparedNotification.level = preparedNotification.level.toLowerCase()
  preparedNotification.uid = preparedNotification.uid || this.uid
  preparedNotification.id = preparedNotification.id || this.uid
  preparedNotification.ref = `notification-${preparedNotification.uid}`

  // update notification if already created
  const foundNotification = (notification.id) ?
    this.state.notifications.find(val => val.id === notification.id) :
    null

  if (foundNotification) {
    Object.assign(foundNotification, preparedNotification)
  } else {
    this.state.notifications.push(preparedNotification)
    if (typeof notification.onAdd === 'function') {
      preparedNotification.onAdd(preparedNotification)
    }
  }

  this.setState({
    notifications: this.state.notifications,
  })
}

// eslint-disable-next-line
NotifierSystem.prototype.removeNotificationById = function (id) {
  this.uid += 1

  const foundNotification = this.state.notifications.find(val => val.id === id)
  if (foundNotification) {
    this.removeNotification(foundNotification)
    return true
  }
  return false
}

export default NotifierSystem
