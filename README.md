# React Notifier System

[![npm version](https://badge.fury.io/js/react-notifier-system.svg)](https://badge.fury.io/js/react-notifier-system) [![Dependency Status](https://david-dm.org/sheikhG1900/react-notifier-system.svg)](https://david-dm.org/sheikhG1900/react-notifier-system) [![devDependency Status](https://david-dm.org/sheikhG1900/react-notifier-system/dev-status.svg)](https://david-dm.org/sheikhG1900/react-notifier-system#info=devDependencies) [![Build Status](https://travis-ci.org/sheikhG1900/react-notifier-system.svg?branch=master)](https://travis-ci.org/sheikhG1900/react-notifier-system) [![Coverage Status](https://coveralls.io/repos/sheikhG1900/react-notifier-system/badge.svg?branch=master&service=github)](https://coveralls.io/github/sheikhG1900/react-notifier-system?branch=master)

> An extension of [react-notification-system](https://github.com/igorprado/react-notification-system) for showing notifications based on Ids, in order to have more control over notifications.

<a href="https://igorprado.github.io/react-notification-system/"><img width="728" src="example/src/images/screenshot.jpg" alt="Screenshot"></a>

## Installing

```
npm install react-notifier-system
```

### Important

For complete documentation, please go to [react-notification-system](https://github.com/igorprado/react-notification-system).

## Using

For optimal appearance, this component **must be rendered on a top level HTML element** in your application to avoid position conflicts.


```js
import * as React from 'react'
import Notifier from 'react-notifier-system'

const App = class extends React.Component<{}> {
  addOrUpdateNotification = () => this.notifier.showNotification({
    message: 'My Notification',
    level: 'info',
    title: 'My Notification Title',
    id: 'uniqueId',
  })

  addNotification = () => this.notifier.showNotification({
    message: 'New Notification',
    level: 'info',
    title: 'New Notification Title',
  })

  notifier: any
  render() {
    return (
      <div>
        <Notifier ref={notifier => this.notifier = notifier} />
        <button onClick={this.addOrUpdateNotification}>Add or update my notification</button>
        <button onClick={this.addNotification}>Add new notification</button>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
```

## Methods

### `showNotification(notification)` 

Add or update a notification object. This displays the notification based on the [object](https://github.com/igorprado/react-notification-system#creating-a-notification) you passed.
It updates the notification if save `id`' found in current notification list, otherwise it adds this notification.

### `removeNotificationById(notificationId)`

Remove the notification by `id`.

## Roadmap

* Redux implementation

