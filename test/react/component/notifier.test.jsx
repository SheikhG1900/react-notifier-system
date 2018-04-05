import React, { Component } from 'react'
import TestUtils from 'react-dom/test-utils'
import NotifierSystem from 'react/component/notifier'

const notificationById = {
  message: 'Notification by Id message',
  level: 'info',
  title: 'Notification by Id Title',
  id: 'myId',
}

const notificationByIdDuplicate = {
  message: 'Notification by Id duplicate message',
  level: 'info',
  title: 'Notification by Id duplicate Title',
  id: 'myId',
}

const notificationByIdOther = {
  message: 'Notification by Id other message',
  level: 'info',
  title: 'Notification by Id other Title',
  id: 'other',
}

const notification = {
  message: 'Notification message',
  level: 'info',
  title: 'Notification Title',
  onAdd: thisNotification => thisNotification,
}

let notifierRef
class ElementWrapper extends Component {
  render() {
    return <NotifierSystem ref={notifier => notifierRef = notifier} allowHTML noAnimation />
  }
}
const node = window.document.createElement('div')
TestUtils.renderIntoDocument(React.createElement(ElementWrapper), node)

beforeEach(() => {
  notifierRef.clearNotifications()
})

test('notification without Id', () => {
  // initial state.
  expect(notifierRef.state.notifications.length).toBe(0)

  // add a notification
  notifierRef.showNotification(notification)
  expect(notifierRef.state.notifications.length).toBe(1)

  // add a notification again
  notifierRef.showNotification(notification)
  expect(notifierRef.state.notifications.length).toBe(2)
})

test('notification by Id', () => {
  // initial state.
  expect(notifierRef.state.notifications.length).toBe(0)

  // add a notification
  notifierRef.showNotification(notificationById)
  expect(notifierRef.state.notifications.length).toBe(1)

  // add same notification multiple times
  notifierRef.showNotification(notificationById)
  notifierRef.showNotification(notificationById)
  expect(notifierRef.state.notifications.length).toBe(1)

  // add other notification of same id
  notifierRef.showNotification(notificationByIdDuplicate)
  expect(notifierRef.state.notifications.length).toBe(1)

  // add other notification having different id
  notifierRef.showNotification(notificationByIdOther)
  expect(notifierRef.state.notifications.length).toBe(2)
})

test('remove notification by Id', () => {
  // initial state.
  expect(notifierRef.state.notifications.length).toBe(0)

  // add a notification
  notifierRef.showNotification(notificationById)
  expect(notifierRef.state.notifications.length).toBe(1)

  // remove notification with wrong id
  let isDeleted = notifierRef.removeNotificationById('wrongId')
  expect(isDeleted).toBe(false)
  expect(notifierRef.state.notifications.length).toBe(1)

  // remove notification with correct id
  isDeleted = notifierRef.removeNotificationById(notificationById.id)
  expect(isDeleted).toBe(true)
  expect(notifierRef.state.notifications.length).toBe(0)
})

