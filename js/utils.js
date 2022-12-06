'use strict'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

function formatTime(time) {
    var now = Date.now()
    var diff = now - time
    if (diff < MINUTE) return 'Just now'
    if (diff < 5 * MINUTE) return 'Few minutes ago'
    if (diff < 24 * HOUR) return 'Today'
    if (diff < 48 * HOUR) return 'Yesterday'

    var res = getFormattedTime(time)
    return res
}

// At 2018-09-24  Time: 10:23
function getFormattedTime(time) {
    var newDate = new Date(time)
    
    var year = newDate.getFullYear()
    var month = newDate.getMonth() + 1
    var date = newDate.getDate()
    var hours = newDate.getHours()
    var minutes = newDate.getMinutes()

    var monthToDisplay = (month + '').padStart(2, '0')
    var dateToDisplay = (date + '').padStart(2, '0')
    var hoursToDisplay = (hours + '').padStart(2, '0')
    var minutesToDisplay = (minutes + '').padStart(2, '0')

    return 'At ' + year + '-' + month + '-' + dateToDisplay + '  Time: ' + hours + ':' + minutes
}